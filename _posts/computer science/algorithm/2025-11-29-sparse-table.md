---
layout: post
title: "Sparse Table"
subtitle: "sparse-table"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc 
{:toc}

## Introduction

A **sparse table** is a data structure for static range queries.
It preprocesses the aggregate values of all intervals whose lengths are powers of two.
It does not support efficient updates, but it can answer many static queries very fast.

Sparse table is mainly used for operations which are associative.
If the operation is also idempotent, every range query can be answered in $O(1)$ time.
If the operation is only associative, every range query can still be answered in $O(\log N)$ time.

## Explanation

Let $(M,\ast)$ be a semigroup, i.e. $\ast$ is an associative binary operation on $M$.
Given an array

\\[
A=[a_1,\cdots,a_N],
\\]

where $a_i\in M$, define

\\[
\operatorname{st}[k][i]
=a_i\ast a_{i+1}\ast\cdots\ast a_{i+2^k-1}.
\\]

Thus $\operatorname{st}[k][i]$ is the aggregate value of the interval

\\[
I_{k,i}=[i:i+2^k-1].
\\]

The table is initialized by

\\[
\operatorname{st}[0][i]=a_i.
\\]

For $k\ge 1$, the interval $I_{k,i}$ is the concatenation of two intervals of length $2^{k-1}$:

\\[
I_{k,i}
=I_{k-1,i}\sqcup I_{k-1,i+2^{k-1}}.
\\]

So the recurrence is

\\[
\operatorname{st}[k][i]
=\operatorname{st}[k-1][i]\ast
\operatorname{st}[k-1][i+2^{k-1}].
\\]

Sparse table supports the following operations:

1. **Build**: compute $\operatorname{st}[k][i]$ for all valid $k$ and $i$.
2. **Range query**: given $[l:r]$, compute

\\[
a_l\ast a_{l+1}\ast\cdots\ast a_r.
\\]

If $(M,\ast)$ is also idempotent and commutative, then

\\[
x\ast x=x,\qquad x\ast y=y\ast x.
\\]

For a query interval $[l:r]$, define

\\[
q=\left\lfloor \log_2(r-l+1)\right\rfloor.
\\]

Then the two intervals

\\[
[l:l+2^q-1],
\qquad
[r-2^q+1:r]
\\]

cover $[l:r]$. They may overlap, but idempotence removes the repeated part.
Thus we can answer the query by

\\[
\operatorname{query}(l,r)
=\operatorname{st}[q][l]\ast
\operatorname{st}[q][r-2^q+1].
\\]

If $(M,\ast,e)$ is only a monoid, then overlapping intervals cannot be used in general.
Instead, decompose $[l:r]$ into disjoint dyadic intervals.
Equivalently, write

\\[
r-l+1=\sum_{j\in S}2^j.
\\]

Then process those dyadic intervals from left to right and merge their values.
This gives the general associative query.

## Proof of Correctness

First we prove that the build recurrence computes the correct value for every dyadic interval.

_Proof._
For $k=0$, $\operatorname{st}[0][i]=a_i$, which is the aggregate value of $[i:i]$.
Assume that every value on level $k-1$ is correct.
Then

\\[
\operatorname{st}[k-1][i]
=a_i\ast\cdots\ast a_{i+2^{k-1}-1},
\\]

and

\\[
\operatorname{st}[k-1][i+2^{k-1}]
=a_{i+2^{k-1}}\ast\cdots\ast a_{i+2^k-1}.
\\]

By associativity,

\\[
\operatorname{st}[k-1][i]\ast
\operatorname{st}[k-1][i+2^{k-1}]
=a_i\ast a_{i+1}\ast\cdots\ast a_{i+2^k-1}.
\\]

Thus $\operatorname{st}[k][i]$ is correct.
By induction, every table entry is correct.

---

Now suppose that $\ast$ is idempotent and commutative.
Let

\\[
q=\left\lfloor \log_2(r-l+1)\right\rfloor.
\\]

The intervals

\\[
I_1=[l:l+2^q-1],
\qquad
I_2=[r-2^q+1:r]
\\]

cover $[l:r]$ because $2^q\le r-l+1<2^{q+1}$.
By the first part, $\operatorname{st}[q][l]$ and $\operatorname{st}[q][r-2^q+1]$ are the correct aggregate values of $I_1$ and $I_2$.
Their product contains every element of $[l:r]$ at least once.
Elements in $I_1\cap I_2$ may appear twice, but by idempotence this does not change the result.
Commutativity lets us ignore the order caused by the overlap.
Hence

\\[
\operatorname{st}[q][l]\ast\operatorname{st}[q][r-2^q+1]
=a_l\ast a_{l+1}\ast\cdots\ast a_r.
\\]

So the idempotent range query is correct.

For the general monoid query, the binary decomposition represents $[l:r]$ as a disjoint concatenation of dyadic intervals.
Each dyadic interval value is correct by the first part.
Since the intervals are processed from left to right and $\ast$ is associative, merging these values gives exactly
$a_l\ast\cdots\ast a_r$.
Therefore the general query is also correct.

## Complexity

Suppose that one merge operation takes $O(T)$ time.

\1. **Build**: $O(TN\log N)$

There are $\lceil\log_2 N\rceil+1$ levels.
Each level has at most $N$ valid starting positions.

\2. **Idempotent query**: $O(T)$

The query uses only two precomputed intervals.

\3. **General monoid query**: $O(T\log N)$

The binary decomposition contains at most $\lfloor\log_2 N\rfloor+1$ dyadic intervals.

\4. **Space complexity**: $O(N\log N)$

The table has $O(N\log N)$ entries.

## Code

Let's see the sample code for the idempotent case.
The type `Node` represents the algebraic structure, and `Node::merge` should be associative, commutative, and idempotent.
The input array is 1-indexed.

```cpp
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
};

struct SparseTable {
    int n, K;
    vector<int> lg;
    vector<vector<Node>> st;

    void build(const vector<Node>& a) {
        n = (int)a.size() - 1;
        K = 1;
        while((1 << K) <= n) K++;

        lg.assign(n + 1, 0);
        for(int i=2; i<=n; i++) lg[i] = lg[i >> 1] + 1;

        st.assign(K, vector<Node>(n + 1));
        for(int i=1; i<=n; i++) st[0][i] = a[i];

        for(int k=1; k<K; k++) {
            for(int i=1; i+(1<<k)-1<=n; i++) {
                st[k][i] = Node::merge(st[k-1][i], st[k-1][i+(1<<(k-1))]);
            }
        }
    }

    Node query(int l, int r) {
        int k = lg[r-l+1];
        return Node::merge(st[k][l], st[k][r-(1<<k)+1]);
    }
};
```

If the operation is only a monoid operation, use disjoint intervals.

```cpp
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node identity();
};

struct SparseTable {
    int n, K;
    vector<vector<Node>> st;

    void build(const vector<Node>& a) {
        n = (int)a.size() - 1;
        K = 1;
        while((1 << K) <= n) K++;

        st.assign(K, vector<Node>(n + 1, Node::identity()));
        for(int i=1; i<=n; i++) st[0][i] = a[i];

        for(int k=1; k<K; k++) {
            for(int i=1; i+(1<<k)-1<=n; i++) {
                st[k][i] = Node::merge(st[k-1][i], st[k-1][i+(1<<(k-1))]);
            }
        }
    }

    Node query(int l, int r) {
        Node res = Node::identity();
        for(int k=K-1; k>=0; k--) {
            if(l+(1<<k)-1 <= r) {
                res = Node::merge(res, st[k][l]);
                l += 1 << k;
            }
        }
        return res;
    }
};
```

For example, range minimum query is obtained by defining:

```cpp
struct Node {
    int v;
    static Node merge(const Node& a, const Node& b) {
        return {min(a.v, b.v)};
    }
};
```

## Applications

* Range minimum/maximum query
* Range gcd query
* Static range sum query with $O(\log N)$ queries
* Lowest common ancestor by Euler tour and RMQ
* Binary lifting
