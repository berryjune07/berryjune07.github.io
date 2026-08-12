---
layout: post
title: "Multidimensional Segment Tree"
subtitle: "multidimensional-segment-tree"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

A **multidimensional segment tree** is a segment tree applied recursively over several coordinates.
It is the natural extension of the ordinary segment tree from intervals to rectangles, boxes, and higher-dimensional orthogonal ranges.

For example, in two dimensions, the data structure supports queries over rectangles

\\[
[x_1:x_2]\times[y_1:y_2].
\\]

The algebraic part is unchanged.
Each node stores an element of a monoid $(M,\ast,e)$, and query answers are obtained by merging canonical disjoint regions.

## Explanation

Consider a two-dimensional array

\\[
A_{i,j}\in M
\qquad
(1\le i\le N,\ 1\le j\le M).
\\]

A two-dimensional segment tree may be viewed as:

1. an outer segment tree over the $x$-coordinate;
2. for every outer node, an inner segment tree over the $y$-coordinate.

An outer node $v$ represents an interval $I_v$ of $x$-coordinates.
Its inner tree stores aggregates over rectangles of the form

\\[
I_v\times J,
\\]

where $J$ is an interval of $y$-coordinates.
Thus an inner node represents

\\[
\prod_{i\in I_v,\ j\in J} A_{i,j}.
\\]

The build process is also recursive.
At an outer leaf $x=i$, the inner tree is built from the row

\\[
A_{i,1},A_{i,2},\ldots,A_{i,M}.
\\]

At an outer internal node, the inner tree is obtained by merging the corresponding inner trees of the two children pointwise.

For a point update at $(x,y)$, update the inner tree at the outer leaf $x$.
Then, while returning to the root of the outer tree, recompute the affected inner-tree nodes by merging the two outer children.

For a rectangle query, first decompose the $x$-range into canonical outer nodes.
For each selected outer node, query its inner tree on the $y$-range.
Finally, merge all returned values.

The same idea extends to $d$ dimensions by recursively storing a $(d-1)$-dimensional segment tree inside each node of the first dimension.
The cost grows by a logarithmic factor for each dimension.

The interactive demo below shows this product structure for a $4\times 4$ sum table.
A rectangle query is decomposed into canonical $x$-intervals and canonical $y$-intervals, whose products form the selected rectangles.

{% include_relative includes/multidimensional-segment-tree.html %}

## Complexity

Assume that every dimension has size at most $N$ and one merge takes $O(T)$ time.
For a dense $d$-dimensional segment tree, the memory usage is

\\[
O(N^d).
\\]

A point update and an orthogonal range query both take

\\[
O(T\log^d N)
\\]

time.

For two dimensions with sizes $N$ and $M$, this becomes

\\[
O(T\log N\log M)
\\]

per update or query.

In sparse problems, one often compresses the coordinates inside each outer node.
Then the memory becomes

\\[
O(K\log N)
\\]

for $K$ stored points in the two-dimensional static-coordinate case, because each point appears in $O(\log N)$ outer nodes.

## Code

The following dense two-dimensional segment tree uses the same `Node` abstraction as the ordinary segment tree post.
The array is 1-indexed in both coordinates.

```cpp
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node identity();
};

template <class Node>
struct SegTree2D {
    int n, m;
    vector<vector<Node>> tree;

    SegTree2D() {}

    SegTree2D(const vector<vector<Node>>& a) {
        build(a);
    }

    void init(int n_, int m_) {
        n = n_;
        m = m_;
        tree.assign(4 * n + 5, vector<Node>(4 * m + 5, Node::identity()));
    }

    void build_y(int vx, int lx, int rx, int vy, int ly, int ry,
                 const vector<vector<Node>>& a) {
        if(ly == ry) {
            if(lx == rx) tree[vx][vy] = a[lx][ly];
            else tree[vx][vy] = Node::merge(tree[vx << 1][vy], tree[vx << 1 | 1][vy]);
            return;
        }

        int my = (ly + ry) >> 1;
        build_y(vx, lx, rx, vy << 1, ly, my, a);
        build_y(vx, lx, rx, vy << 1 | 1, my + 1, ry, a);
        tree[vx][vy] = Node::merge(tree[vx][vy << 1], tree[vx][vy << 1 | 1]);
    }

    void build_x(int vx, int lx, int rx, const vector<vector<Node>>& a) {
        if(lx != rx) {
            int mx = (lx + rx) >> 1;
            build_x(vx << 1, lx, mx, a);
            build_x(vx << 1 | 1, mx + 1, rx, a);
        }
        build_y(vx, lx, rx, 1, 1, m, a);
    }

    void build(const vector<vector<Node>>& a) {
        init((int)a.size() - 1, (int)a[1].size() - 1);
        build_x(1, 1, n, a);
    }

    void update_y(int vx, int lx, int rx, int vy, int ly, int ry,
                  int x, int y, const Node& val) {
        if(ly == ry) {
            if(lx == rx) tree[vx][vy] = val;
            else tree[vx][vy] = Node::merge(tree[vx << 1][vy], tree[vx << 1 | 1][vy]);
            return;
        }

        int my = (ly + ry) >> 1;
        if(y <= my) update_y(vx, lx, rx, vy << 1, ly, my, x, y, val);
        else update_y(vx, lx, rx, vy << 1 | 1, my + 1, ry, x, y, val);

        tree[vx][vy] = Node::merge(tree[vx][vy << 1], tree[vx][vy << 1 | 1]);
    }

    void update_x(int vx, int lx, int rx, int x, int y, const Node& val) {
        if(lx != rx) {
            int mx = (lx + rx) >> 1;
            if(x <= mx) update_x(vx << 1, lx, mx, x, y, val);
            else update_x(vx << 1 | 1, mx + 1, rx, x, y, val);
        }
        update_y(vx, lx, rx, 1, 1, m, x, y, val);
    }

    Node query_y(int vx, int vy, int ly, int ry, int ql, int qr) const {
        if(qr < ly || ry < ql) return Node::identity();
        if(ql <= ly && ry <= qr) return tree[vx][vy];

        int my = (ly + ry) >> 1;
        return Node::merge(
            query_y(vx, vy << 1, ly, my, ql, qr),
            query_y(vx, vy << 1 | 1, my + 1, ry, ql, qr)
        );
    }

    Node query_x(int vx, int lx, int rx, int x1, int x2, int y1, int y2) const {
        if(x2 < lx || rx < x1) return Node::identity();
        if(x1 <= lx && rx <= x2) return query_y(vx, 1, 1, m, y1, y2);

        int mx = (lx + rx) >> 1;
        return Node::merge(
            query_x(vx << 1, lx, mx, x1, x2, y1, y2),
            query_x(vx << 1 | 1, mx + 1, rx, x1, x2, y1, y2)
        );
    }

    void update(int x, int y, const Node& val) {
        update_x(1, 1, n, x, y, val);
    }

    Node query(int x1, int x2, int y1, int y2) const {
        return query_x(1, 1, n, x1, x2, y1, y2);
    }
};
```

For sparse static points, the dense inner arrays should not be built.
Instead, collect the $y$-coordinates that appear in each outer node, sort and unique them, and build only those compressed inner trees.
This gives the usual segment-tree-of-vectors implementation.

## Applications

* Rectangle sum/min/max queries
* Dynamic orthogonal range queries
* Offline geometry with coordinate compression
* Two-dimensional sweep-line data structures
* Higher-dimensional range aggregation
