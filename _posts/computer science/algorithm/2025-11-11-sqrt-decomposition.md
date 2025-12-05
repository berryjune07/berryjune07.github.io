---
layout: post
title: "Sqrt Decomposition"
subtitle: "sqrt-decomposition"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

**Sqrt decomposition** (also called **block decomposition**) is a technique for answering range queries and processing updates on arrays in about $O(\sqrt{N})$ time per operation. The idea is to split the array into blocks of length $B \approx \sqrt{N}$, maintain an aggregate for each block, and only scan the boundary elements explicitly.

This pattern is a light-weight alternative to segment trees or Fenwick trees when:
- The operation is associative (sum, min, max, gcd, xor, etc.).
- Updates are simple (often point updates, sometimes uniform range updates).
- Memory overhead and implementation complexity need to stay low.

## Block Decomposition

Consider an array $A = [a_1, a_2, \dots, a_N]$ (1-indexed). Pick

\[
B = \left\lceil \sqrt{N} \right\rceil , \quad \text{num\_blocks} = \left\lceil \frac{N}{B} \right\rceil .
\]

Define the block of index $i$ as

\[
\text{blk}(i) = \left\lfloor \frac{i-1}{B} \right\rfloor \quad (1 \le i \le N),
\]

so block $k$ covers indices

\[
I_k = [kB+1,\, \min\{(k+1)B,\, N\}] , \quad 0 \le k < \text{num\_blocks} .
\]

For each block, store an aggregate such as the sum or minimum:

\[
\text{agg}[k] = a_{kB+1} \ast a_{kB+2} \ast \cdots \ast a_{\min\{(k+1)B, N\}}
\]

where $\ast$ is the associative operation with identity element $e$. The array of block aggregates has size $O(\sqrt{N})$.

```text
Index:  1  2  3  4 | 5  6  7  8 | 9 10
Value:  5  2  7  1 | 6  3  4  8 | 9  0
Block: [0-------3] | [4-------7] | [8--9]
```

## Build

Building the structure is linear. For each position $i$, add $a_i$ to its block aggregate:

```text
for i in 1..N:
    agg[blk(i)] <- agg[blk(i)] ⊛ a_i
```

Here ⊛ is the same as $\ast$, but the notation emphasizes "update the stored aggregate". Total time is $O(N)$.

## Range Query

Given a query range $[l,r]$:
1. Let $b_l = \text{blk}(l)$ and $b_r = \text{blk}(r)$.
2. If $b_l = b_r$, the whole range lies inside one block; scan $a_l,\dots,a_r$ directly.
3. Otherwise:
   - Scan the suffix of the left block $[l, (b_l+1)B]$.
   - Use precomputed block aggregates for every full block strictly between $b_l$ and $b_r$.
   - Scan the prefix of the right block $[b_r B + 1, r]$.

The boundary scans visit at most $2B$ elements. The middle section touches at most $\text{num\_blocks} - 2 \le \lceil N/B \rceil$ blocks. With $B = \Theta(\sqrt{N})$, the total is $O(\sqrt{N})$ operations.

### Example (Range Sum)

For the array above with $B = 4$, querying $[3,9]$ proceeds as:
- Left boundary: iterate indices $3,4$.
- Full blocks: add aggregate of block 1 (indices $5..8$).
- Right boundary: iterate index $9$.

Only $2B = 8$ boundary elements are examined in the worst case, plus at most one full block here.

## Updates

### Point Update

To set $a_i \leftarrow v$:

1. Let $k = \text{blk}(i)$.
2. Update the block aggregate by removing the old value and inserting the new one. For sums, `agg[k] += v - a[i]`; for min/max, recompute that block in $O(B)$ if the updated element was responsible for the previous aggregate.
3. Write `a[i] = v`.

This costs $O(1)$ for additive aggregates and $O(B)$ for aggregates that need a small rebuild.

### Uniform Range Update

If an operation distributes nicely over $\ast$ (e.g., adding a constant to every element for range-sum queries), keep a lazy tag per block:

- Store `lazy[k]` meaning "pending operation for every element of block $k$".
- Push the tag to elements when scanning a boundary block.
- Update `agg[k]` directly using block length without touching individual entries.

This mirrors the lazy idea from segment trees but stays block-scoped.

## Complexity Analysis

Assume the per-element operation costs $O(T)$ (usually $T=1$).

- **Build:** $O(TN)$ — visit each element once.
- **Range query:** Two partial blocks ($\le 2B$ elements) plus up to $\lceil N/B \rceil$ full blocks. Choosing $B = \lceil \sqrt{N} \rceil$ gives

\[
O\bigl(T(2B + N/B)\bigr) = O\bigl(T \sqrt{N}\bigr).
\]

- **Point update:** $O(T)$ for additive aggregates; $O(TB)$ if a block rebuild is required.
- **Memory:** $O(N + N/B) = O(N + \sqrt{N})$ for the array and block aggregates (plus optional lazy tags).

Compared with segment trees:
- Sqrt decomposition has higher query complexity ($\Theta(\sqrt{N})$ vs. $\Theta(\log N)$) but simpler code and smaller constants.
- It excels when $N$ is moderate (e.g., up to $10^5$) and operations are straightforward.

## Reference Implementation (Range Sum)

```cpp
struct SqrtDecomp {
    int n, B, num_blocks;
    vector<long long> a, agg;  // agg[k] is the sum of block k

    explicit SqrtDecomp(const vector<long long>& init) {
        n = (int)init.size();
        B = (int)ceil(sqrt((double)n));
        num_blocks = (n + B - 1) / B;
        a = init;
        agg.assign(num_blocks, 0);
        for (int i = 0; i < n; ++i) agg[i / B] += a[i];
    }

    void point_update(int idx, long long val) {
        int k = idx / B;
        agg[k] += val - a[idx];
        a[idx] = val;
    }

    long long range_sum(int l, int r) const {  // inclusive indices, 0-based
        long long res = 0;
        int bl = l / B, br = r / B;
        if (bl == br) {
            for (int i = l; i <= r; ++i) res += a[i];
            return res;
        }
        int lend = (bl + 1) * B - 1;
        for (int i = l; i <= lend; ++i) res += a[i];
        for (int b = bl + 1; b < br; ++b) res += agg[b];
        for (int i = br * B; i <= r; ++i) res += a[i];
        return res;
    }
};
```

## Tips and Pitfalls

- Pick $B$ with a ceiling so the last block never underflows; the exact constant (e.g., $B = \sqrt{N} + 1$) rarely matters.
- For min/max aggregates, an updated element might invalidate the block value; rebuild that block instead of trying to "undo" the old value.
- When mixing range updates and queries, prefer block-level lazy tags to avoid scanning entire blocks for each update.
- If the operation is not associative (e.g., subtraction), sqrt decomposition will not work reliably.

Sqrt decomposition sits between prefix sums and tree-based structures: it keeps code concise while still cutting query time from $O(N)$ to roughly $O(\sqrt{N})$.
