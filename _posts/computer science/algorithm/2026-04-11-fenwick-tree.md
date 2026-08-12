---
layout: post
title: "Fenwick Tree"
subtitle: "fenwick-tree"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

A **Fenwick tree**, or **binary indexed tree**, is a data structure for prefix queries and point updates.
It is more compact than a segment tree and is especially convenient when every query is reducible to prefix aggregates.

Let $(G,\ast,e)$ be an abelian group.
Given an array

\\[
A=[a_1,\ldots,a_N],
\\]

Fenwick tree supports:

1. point update: multiply one position by a value;
2. prefix query: compute $a_1\ast\cdots\ast a_i$;
3. range query: compute $a_l\ast\cdots\ast a_r$ using inverses.

For ordinary sums, $\ast$ is addition and the inverse is negation.

## Explanation

For a positive integer $i$, define

\\[
\operatorname{lowbit}(i)=i\&(-i).
\\]

This is the largest power of two dividing $i$.
The Fenwick tree array `bit` is defined by the invariant

\\[
\operatorname{bit}[i]
=a_{i-\operatorname{lowbit}(i)+1}
\ast\cdots\ast a_i.
\\]

Thus `bit[i]` stores the aggregate of the interval

\\[
[i-\operatorname{lowbit}(i)+1:i].
\\]

To compute a prefix query at $i$, take `bit[i]`, then remove the interval it covers by setting

\\[
i\gets i-\operatorname{lowbit}(i).
\\]

Repeating this decomposes $[1:i]$ into disjoint power-of-two suffix intervals.
Merging their stored values gives the prefix aggregate.

To update position $p$, every `bit[i]` whose interval contains $p$ must be updated.
These indices are obtained by

\\[
i\gets i+\operatorname{lowbit}(i)
\\]

starting from $p$.
This walks through the Fenwick intervals that cover $p$.

The visualizer below shows both the prefix decomposition and the update path.

{% include_relative includes/fenwick-tree.html %}

## Proof of Correctness

The definition of `bit[i]` is the main invariant.
For prefix query, the update

\\[
i\gets i-\operatorname{lowbit}(i)
\\]

removes exactly the interval represented by the current `bit[i]`.
These removed intervals are disjoint and their union is $[1:i]$ from the original query.
Thus the merged value is the prefix aggregate.

For point update at $p$, the loop

\\[
i\gets i+\operatorname{lowbit}(i)
\\]

visits exactly the Fenwick nodes whose stored intervals contain $p$.
Updating those nodes and no others preserves the invariant.
Therefore prefix and range queries are correct.

## Complexity

Each step changes at least one binary digit of the index.
Hence both prefix query and point update take

\\[
O(\log N)
\\]

time.
The memory usage is

\\[
O(N).
\\]

If the array is known in advance, the tree can be built by calling update for every position in $O(N\log N)$ time, or by a linear build in $O(N)$ time.

## Code

The following code uses the same abstract style as the segment tree posts.
The type `Node` represents an abelian group.

```cpp
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node inverse(const Node& x);
    static Node identity();
};

template <class Node>
struct Fenwick {
    int n;
    vector<Node> bit;

    Fenwick(int n=0) {
        init(n);
    }

    void init(int n_) {
        n = n_;
        bit.assign(n + 1, Node::identity());
    }

    void update(int idx, const Node& delta) {
        for(int i=idx; i<=n; i+=i&-i) {
            bit[i] = Node::merge(bit[i], delta);
        }
    }

    Node prefix(int idx) const {
        Node res = Node::identity();
        for(int i=idx; i>0; i-=i&-i) {
            res = Node::merge(res, bit[i]);
        }
        return res;
    }

    Node query(int l, int r) const {
        return Node::merge(prefix(r), Node::inverse(prefix(l - 1)));
    }
};
```

For range sums, define:

```cpp
using ll = long long;

struct Node {
    ll v;

    static Node merge(const Node& a, const Node& b) {
        return {a.v + b.v};
    }

    static Node inverse(const Node& x) {
        return {-x.v};
    }

    static Node identity() {
        return {0};
    }
};
```

Fenwick tree can also support range update and point query by applying the difference-array idea.
Range update and range query can be done with two Fenwick trees.

## Applications

* Prefix sums
* Range sums with point updates
* Inversion counting
* Order statistics with binary lifting on frequencies
* Difference-array range updates
