---
layout: post
title: "Lazy Propagation"
subtitle: "lazy-propagation"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction
**Lazy propagation** is a technique used to delay the updates in [segment trees](/computer-science/segment-tree.html).
It is used to optimize the time complexity of range updates in segment trees.

## Explanation
Segment tree with lazy propagation is a data structure for a monoid $(M, \ast)$
and a monoid $(F,\circ)$ of endomorphisms of $M$.
This means that every $f\in F$ satisfies:

\\[
f(x\ast y)=f(x)\ast f(y)
\\]

and the composition of two updates is again an update in $F$.
The identity element of $F$ is the identity function $\mathrm{id}_M$.
For example, in the common range-sum / range-addition case, it is better to store both sum and length:

\\[
M=\Set{(s,n)} ,\quad
(s_1,n_1)\ast(s_2,n_2)=(s_1+s_2,n_1+n_2)
\\]

Adding $c$ to every element in an interval is represented by

\\[
f_c(s,n)=(s+cn,n)
\\]

Then $f_c$ is an endomorphism of $M$, and $f_c\circ f_d=f_{c+d}$.
This is why range addition can be stored as a single lazy value.

Consider an array $A=[a_1,\cdots,a_N]$ of size $N$.
Segment tree with lazy propagation can carry out two types of queries in $O(\log N)$ time complexity:
1. **Range query**: Given a range $[l,r]$, find the result of applying the operation $\ast$ to all elements in the range. In other words, calculate $a_l \ast a_{l+1} \ast \cdots \ast a_r$.
2. **Range update**: Given a range $[l,r]$ and a function $f\in F$, update all elements in the range by applying the function $f$ to them:
    $[\cdots,a_l,\cdots,a_r,\cdots] \to [\cdots, f(a_l), \cdots, f(a_r),\cdots]$

The idea is to store the updates in the nodes of the segment tree and apply them only when needed.
These extra stored values are called **lazy values**, and the delayed updates are called **lazy updates**.

Let a node $v$ represent an interval $I_v$.
We store two values at $v$:

- $T_v\in M$: the aggregate value of the interval $I_v$ after all updates so far.
- $L_v\in F$: the update which has already been applied to $T_v$, but has not yet been propagated to the children of $v$.

Initially, $L_v=\mathrm{id}_M$ for every node $v$.
For an internal node $v$, the invariant is:

\\[
T_v=L_v(T_{2v}\ast T_{2v+1})
\\]

Here $2v$ and $2v+1$ are the left and right children of $v$.
If $L_v=\mathrm{id}\_M$, then this reduces to the ordinary segment tree equation
$T_v=T\_{2v}\ast T_{2v+1}$.

Now suppose that we want to apply $f\in F$ to the whole interval $I_v$.
We can update the node without visiting descendants:

\\[
T_v\gets f(T_v),\quad
L_v\gets f\circ L_v
\\]

The order means that the old delayed update $L_v$ is applied first, and the new update $f$ is applied afterward.
This is the essential idea of lazy propagation.
The value $T_v$ remains correct for the whole interval $I_v$,
but the children have not yet received the update $f$.

When we need to descend from $v$ to its children, we **push** the lazy value:

\\[
\begin{align\*}
T_{2v} &\gets L_v(T_{2v}), &
L_{2v} &\gets L_v\circ L_{2v}, \nl
T_{2v+1} &\gets L_v(T_{2v+1}), &
L_{2v+1} &\gets L_v\circ L_{2v+1}, \nl
& L_v &\gets \mathrm{id}_M
\end{align\*}
\\]

This preserves the invariant because $L_v$ is an endomorphism:

\\[
L_v(T_{2v}\ast T_{2v+1})=L_v(T_{2v})\ast L_v(T_{2v+1})
\\]

Therefore, after pushing, the parent can again be viewed as the merge of its two children.
For a partial range update or a partial range query, we first push the lazy value of the current node,
then recurse into the children.
After updating children, we recompute:

\\[
T_v=T_{2v}\ast T_{2v+1}
\\]

The interactive demo below is a range-sum segment tree with lazy range-addition updates.
Each node is written in the form of node index, represented interval, stored sum, and stored lazy value.
Range updates highlight the fully covered nodes where lazy values are stored, and range queries highlight the canonical cover.

{% include_relative includes/lazy-propagation.html %}

## Complexity

This section is very similar to [here](/computer-science/segment-tree.html#complexity), so
we will explain qualitatively.
Suppose that merging two tree nodes, composing two lazy nodes, and applying a lazy node to a tree node each take $O(T)$ time.
In the range-sum / range-addition example, $T=O(1)$.
Assume that the tree is a complete binary tree of height

\\[
H=\lceil\log_2 N\rceil
\\]

\1. **Build**: $O(TN)$

The build process is the same as an ordinary segment tree.
It visits every tree node once and merges the children of every internal node.
Since the number of nodes is $O(N)$, the build time is $O(TN)$.

\2. **Push**: $O(T)$

Pushing a lazy value from one node to its two children requires:

- applying the lazy value to two child nodes;
- composing two child lazy values;
- resetting the current lazy value to $\mathrm{id}_M$.

Thus one push operation takes $O(T)$ time.

\3. **Range update**: $O(T\log N)$

Let the update range be $[l:r]$.
During the recursive update, a node is terminal if its interval is either disjoint from $[l:r]$
or completely contained in $[l:r]$.
Only nonterminal nodes are expanded into children.

Among the nodes reached by the recursion, at any fixed depth of the tree, there are at most two nonterminal nodes:
one can contain the left boundary $l$, and one can contain the right boundary $r$.
All other reached intersecting nodes at that depth are fully contained in $[l:r]$ and stop immediately.
Hence the recursive search visits only $O(1)$ nodes per depth, and there are $O(\log N)$ depths.

At each visited node, we perform only a constant number of merge, composition, apply, or push operations.
Therefore the range update time is $O(T\log N)$.

\4. **Range query**: $O(T\log N)$

The same boundary argument applies to a range query.
If a node interval is fully contained in the query range, we return $T_v$ immediately.
This is correct even when $L_v\neq\mathrm{id}_M$, because $T_v$ already contains the delayed update.
If the query only partially intersects $I_v$, we push before descending, so the children become correct.

Thus, a range query also visits $O(\log N)$ nodes and takes $O(T\log N)$ time.

## Code
Let's see the sample code.

```cpp
struct Lazy;
struct Node {
    ...
    static Node merge(const Node& a, const Node& b);
    static Node identity();
    Node& apply_lazy(const Lazy& lz){
        ...
        return *this;
    }
};

struct Lazy {
    ...
    static Lazy merge(const Lazy& a, const Lazy& b);
    static Lazy identity();
    bool is_identity() const;
    void merge(const Lazy& lz){
        *this = merge(*this, lz);
    }
};

template <class Node, class Lazy>
struct SegTree {
    int n;
    vector<Node> tree;
    vector<Lazy> lazy;

    SegTree() : n(0) {}
    SegTree(int n) { init(n); }

    void init(int _n) {
        n = _n;
        int tree_size = 1 << ((int)ceil(log2(n)) + 1);
        tree.assign(tree_size, Node::identity());
        lazy.assign(tree_size, Lazy::identity());
    }
    
    Node build(int nd, int l, int r, const vector<Node>& a) {
        if (l == r) return tree[nd] = a[l];
        int m = (l + r) >> 1;
        return tree[nd] = Node::merge(build(nd << 1, l, m, a), build(nd << 1 | 1, m + 1, r, a));
    }
    
    void apply(int nd, const Lazy& lz) {
        lazy[nd].merge(lz);
        tree[nd].apply_lazy(lz);
    }
    
    void propagate(int nd, int l, int r) {
        if (lazy[nd].is_identity()) return;
        if (l != r) {
            apply(nd << 1, lazy[nd]);
            apply(nd << 1 | 1, lazy[nd]);
        }
        lazy[nd] = Lazy::identity();
    }

    Node update(int nd, int l, int r, int ql, int qr, const Lazy& lz) {
        if (qr < l || r < ql) return tree[nd];
        if (ql <= l && r <= qr) {
            apply(nd, lz);
            return tree[nd];
        }
        propagate(nd, l, r);
        int m = (l + r) >> 1;
        return tree[nd] = Node::merge(update(nd << 1, l, m, ql, qr, lz), update(nd << 1 | 1, m + 1, r, ql, qr, lz));
    }

    Node query(int nd, int l, int r, int ql, int qr) {
        if (qr < l || r < ql) return Node::identity();
        if (ql <= l && r <= qr) return tree[nd];
        propagate(nd, l, r);
        int m = (l + r) >> 1;
        return Node::merge(query(nd << 1, l, m, ql, qr), query(nd << 1 | 1, m + 1, r, ql, qr));
    }
    
    //wrappers
    void build(const vector<Node>& a) {
        init((int)a.size() - 1); // 1-indexed
        build(1, 1, n, a);
    }

    void update(int l, int r, const Lazy& lz) {
        update(1, 1, n, l, r, lz);
    }

    Node query(int l, int r) {
        return query(1, 1, n, l, r);
    }
};
```

Let's think of an example of calculating the sum of elements in a range and updating the elements in a range by adding a constant value.
Then, the code will be as follows:

```cpp
struct Node{
    int sum, len;
    Node(int sum=0, int len=1): sum(sum), len(len) {}
    static Node merge(const Node& a, const Node& b) {
        return Node(a.sum + b.sum, a.len + b.len);
    }
    static Node identity() {
        return Node(0, 0);
    }
    Node& apply_lazy(const Lazy& lz) {
        sum += lz.add * len;
        return *this;
    }
};

struct Lazy {
    int add;
    Lazy(int add=0): add(add) {}
    static Lazy merge(const Lazy& a, const Lazy& b) {
        return Lazy(a.add + b.add);
    }
    static Lazy identity() {
        return Lazy(0);
    }
    bool is_identity() const {
        return add == 0;
    }
    ...
};
```