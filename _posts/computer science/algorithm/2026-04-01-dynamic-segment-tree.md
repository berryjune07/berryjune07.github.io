---
layout: post
title: "Dynamic Segment Tree"
subtitle: "dynamic-segment-tree"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

A **dynamic segment tree** is the sparse version of an ordinary [segment tree](/computer-science/segment-tree.html).
It keeps the same interval decomposition, the same monoid invariant, and the same recursive query logic.
The only difference is that nodes are created only when they are first needed.

This is useful when the coordinate domain is very large, for example

\\[
[1:10^9],
\\]

but only a small number of positions are actually updated.
Coordinate compression is often enough for offline problems.
Dynamic segment trees are more useful when coordinates arrive online, or when the structure must support intervals in the original coordinate order without knowing all coordinates in advance.

## Explanation

As in the ordinary segment tree, let $(M,\ast,e)$ be a monoid.
Each node stores a value of type `Node`, representing an element of $M$.
For a node $v$ representing $[l:r]$, the invariant is

\\[
T_v=T_{\operatorname{left}(v)}\ast T_{\operatorname{right}(v)}.
\\]

If a child is not allocated, its value is interpreted as the identity element $e$.
Thus an unallocated subtree means that no update has ever changed that interval from the default identity value.
This is the essential sparse assumption.

The left child of $[l:r]$ represents

\\[
[l:m],
\\]

and the right child represents

\\[
[m+1:r],
\\]

where

\\[
m=\left\lfloor\frac{l+r}{2}\right\rfloor.
\\]

A point assignment works as follows.
Starting from the root interval $[L:R]$, recursively descend to the unique leaf containing the index.
Whenever the required child does not exist, create it.
After changing the leaf value, recompute every copied ancestor with `Node::merge`.

A range query is exactly the ordinary segment tree query.
If the current interval is disjoint from the query interval, return `Node::identity()`.
If it is fully contained, return the stored value.
If a missing child is queried, it also contributes `Node::identity()`.

Therefore dynamic segment tree is not a different algebraic structure.
It is the same segment tree over a large implicit complete binary tree, with identity-valued subtrees omitted.

The interactive demo below uses a sum monoid on the universe $[1:16]$.
Point updates create only the nodes on the necessary root-to-leaf path, while range queries treat every missing child as the identity value $0$.

{% include_relative includes/dynamic-segment-tree.html %}

## Complexity

Let

\\[
U=R-L+1
\\]

be the size of the coordinate universe.
The implicit tree has height

\\[
O(\log U).
\\]

If one merge takes $O(T)$ time, then a point update takes

\\[
O(T\log U)
\\]

time, because it creates and recomputes at most one node on each level.
A range query also takes

\\[
O(T\log U)
\\]

time for the same canonical decomposition reason as an ordinary segment tree.

After $Q$ point updates, the number of allocated nodes is

\\[
O(Q\log U),
\\]

so the memory usage is $O(Q\log U)$ instead of $O(U)$.

## Code

The implementation below is written in the same `Node` style as the ordinary segment tree post.
The coordinate type is `ll`, but the stored value is the abstract monoid type `Node`.

```cpp
using ll = long long;

struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node identity();
};

template <class Node>
struct DynamicSegTree {
    struct Vertex {
        Node val;
        int left, right;

        Vertex() : val(Node::identity()), left(-1), right(-1) {}
    };

    vector<Vertex> tree;
    ll L, R;

    DynamicSegTree(ll L, ll R) : L(L), R(R) {
        tree.push_back(Vertex());
    }

    int new_vertex() {
        tree.push_back(Vertex());
        return (int)tree.size() - 1;
    }

    Node value(int v) const {
        return v == -1 ? Node::identity() : tree[v].val;
    }

    void pull(int v) {
        tree[v].val = Node::merge(value(tree[v].left), value(tree[v].right));
    }

    void set_point(int v, ll l, ll r, ll idx, const Node& val) {
        if(l == r) {
            tree[v].val = val;
            return;
        }

        ll m = (l + r) >> 1;
        if(idx <= m) {
            if(tree[v].left == -1) tree[v].left = new_vertex();
            set_point(tree[v].left, l, m, idx, val);
        } else {
            if(tree[v].right == -1) tree[v].right = new_vertex();
            set_point(tree[v].right, m + 1, r, idx, val);
        }
        pull(v);
    }

    Node query(int v, ll l, ll r, ll ql, ll qr) const {
        if(v == -1 || qr < l || r < ql) return Node::identity();
        if(ql <= l && r <= qr) return tree[v].val;

        ll m = (l + r) >> 1;
        return Node::merge(
            query(tree[v].left, l, m, ql, qr),
            query(tree[v].right, m + 1, r, ql, qr)
        );
    }

    void set_point(ll idx, const Node& val) {
        set_point(0, L, R, idx, val);
    }

    Node query(ll l, ll r) const {
        return query(0, L, R, l, r);
    }
};
```

For example, range maximum query is obtained by defining:

```cpp
struct Node {
    int v;

    static Node merge(const Node& a, const Node& b) {
        return {max(a.v, b.v)};
    }

    static Node identity() {
        return {-INF};
    }
};
```

If lazy propagation is added, the same endomorphism condition from the lazy propagation post is still required.
The only extra implementation detail is that a child must be created before a non-identity lazy value is pushed into it.

## Applications

* Segment tree over a huge coordinate universe
* Online coordinates without compression
* Sparse frequency or maximum tables
* Sweep-line structures with large coordinates
* Dynamic interval data structures with monoid queries
