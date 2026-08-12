---
layout: post
title: "Persistent Segment Tree"
subtitle: "persistent-segment-tree"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

A **persistent segment tree** is the versioned form of a segment tree.
It preserves old roots after updates, so queries can be made on any previous version.

The structure is still a segment tree over a monoid $(M,\ast,e)$.
Persistence changes the memory model, not the algebra:

- ordinary segment tree updates nodes destructively;
- persistent segment tree copies the nodes on the updated root-to-leaf path;
- untouched subtrees are shared by different versions.

This technique is called **path copying**.

## Explanation

Let `root[t]` be the root of version $t$.
Each root represents a complete segment tree for an array

\\[
A^{(t)}=[a^{(t)}_1,\ldots,a^{(t)}_N].
\\]

For every node $v$ representing an interval $I_v$, the stored value satisfies the ordinary segment tree invariant

\\[
T_v=\prod_{i\in I_v} a_i
\\]

with respect to the monoid operation $\ast$.

To create a new version by changing position $i$, we do not modify the old root.
Instead, we copy the root, copy the child on the path to $i$, and continue until the leaf.
At the leaf, the new value is stored.
On the way back, every copied internal node is recomputed from its two children.
The sibling subtrees not on the update path are shared with the old version.

Thus old versions remain valid because none of their nodes are modified.
The new version is valid because its copied path has been recomputed exactly as in an ordinary segment tree.

The visualizer below shows path copying.
It uses symbolic node values because the essential idea is structural: which nodes are copied and which subtrees are shared.

{% include_relative includes/persistent-segment-tree.html %}

## Complexity

Let $N$ be the array size and let one merge operation take $O(T)$ time.
A point update copies one node per level, so it takes

\\[
O(T\log N)
\\]

time and creates $O(\log N)$ new nodes.
A range query on any version is an ordinary segment tree query from the chosen root, so it takes

\\[
O(T\log N)
\\]

time.

After building the initial tree and applying $Q$ updates, the total memory usage is

\\[
O(N+Q\log N).
\\]

## Code

The implementation below is generic in the same `Node` sense as the ordinary segment tree.
Each update returns the root index of the new version.

```cpp
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node identity();
};

template <class Node>
struct PersistentSegTree {
    struct Vertex {
        Node val;
        int left, right;

        Vertex() : val(Node::identity()), left(-1), right(-1) {}
    };

    int n;
    vector<Vertex> tree;
    vector<int> root;

    PersistentSegTree(const vector<Node>& a) {
        n = (int)a.size() - 1;
        root.push_back(build(1, n, a));
    }

    int new_vertex() {
        tree.push_back(Vertex());
        return (int)tree.size() - 1;
    }

    int clone(int v) {
        tree.push_back(tree[v]);
        return (int)tree.size() - 1;
    }

    int build(int l, int r, const vector<Node>& a) {
        int v = new_vertex();
        if(l == r) {
            tree[v].val = a[l];
            return v;
        }

        int m = (l + r) >> 1;
        tree[v].left = build(l, m, a);
        tree[v].right = build(m + 1, r, a);
        tree[v].val = Node::merge(tree[tree[v].left].val, tree[tree[v].right].val);
        return v;
    }

    int set_point(int v, int l, int r, int idx, const Node& val) {
        int nv = clone(v);
        if(l == r) {
            tree[nv].val = val;
            return nv;
        }

        int m = (l + r) >> 1;
        if(idx <= m) {
            tree[nv].left = set_point(tree[v].left, l, m, idx, val);
        } else {
            tree[nv].right = set_point(tree[v].right, m + 1, r, idx, val);
        }

        tree[nv].val = Node::merge(tree[tree[nv].left].val, tree[tree[nv].right].val);
        return nv;
    }

    Node query(int v, int l, int r, int ql, int qr) const {
        if(qr < l || r < ql) return Node::identity();
        if(ql <= l && r <= qr) return tree[v].val;

        int m = (l + r) >> 1;
        return Node::merge(
            query(tree[v].left, l, m, ql, qr),
            query(tree[v].right, m + 1, r, ql, qr)
        );
    }

    int set_point(int version, int idx, const Node& val) {
        int nr = set_point(root[version], 1, n, idx, val);
        root.push_back(nr);
        return (int)root.size() - 1;
    }

    Node query(int version, int l, int r) const {
        return query(root[version], 1, n, l, r);
    }
};
```

A common special case is a persistent frequency segment tree.
After coordinate compression, `root[i]` stores the frequency table of the prefix $[1:i]$.
Then the frequency table of a subarray $[l:r]$ is represented by the difference between `root[r]` and `root[l-1]`.
This gives range $k$-th order statistics in $O(\log N)$ time.

## Applications

* Queries on previous versions of an array
* Offline range $k$-th smallest queries
* Prefix frequency differences
* Functional segment trees
* Versioned dynamic programming states
