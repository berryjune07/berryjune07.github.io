---
layout: post
title: "Lowest Common Ancestor"
subtitle: "lowest-common-ancestor"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

Let $T$ be a rooted tree.
For two vertices $u$ and $v$, their **lowest common ancestor(LCA)** is the deepest vertex which is an ancestor of both vertices.

LCA is used very often in tree problems, because it allows us to convert many path problems into root-path problems.
If $\operatorname{depth}[u]$ denotes the depth of $u$, then the distance between two vertices can be written as

\\[
\operatorname{dist}(u,v)
=\operatorname{depth}[u]+\operatorname{depth}[v]
-2\operatorname{depth}[\operatorname{LCA}(u,v)].
\\]

## Explanation

The standard method for LCA is **binary lifting**.
The data structure supports the following operations on a rooted tree:

1. **Build**: preprocess ancestor information for every vertex.
2. **Lift**: given a vertex $v$ and an integer $d$, find the $d$-th ancestor of $v$.
3. **LCA query**: given two vertices $u$ and $v$, find $\operatorname{LCA}(u,v)$.

Let

\\[
\operatorname{parent}[v]
\\]

be the parent of $v$.
Define

\\[
\operatorname{up}[k][v]
=\text{the }2^k\text{-th ancestor of }v.
\\]

Then

\\[
\operatorname{up}[0][v]=\operatorname{parent}[v],
\qquad
\operatorname{up}[k][v]
=\operatorname{up}[k-1][\operatorname{up}[k-1][v]].
\\]

This is because the $2^k$-th ancestor is obtained by moving up $2^{k-1}$ steps twice.

After computing the table, we can answer $\operatorname{LCA}(u,v)$ as follows.

First, if the two vertices have different depths, lift the deeper vertex by

\\[
\abs{\operatorname{depth}[u]-\operatorname{depth}[v]}
\\]

steps, so that the depths become equal.
If the two vertices are now equal, this vertex is the LCA.

Otherwise, for $k$ from large to small, check whether

\\[
\operatorname{up}[k][u]\neq \operatorname{up}[k][v].
\\]

If so, lift both $u$ and $v$ by $2^k$.
After all such jumps, $u$ and $v$ are different children of the LCA.
Therefore,

\\[
\operatorname{LCA}(u,v)=\operatorname{up}[0][u].
\\]

There is another general formulation using Euler tour and sparse table.
Perform a DFS from the root and record each vertex when the DFS enters it and whenever the DFS returns to it.
Let the resulting Euler tour be

\\[
E=[e_1,e_2,\cdots,e_M].
\\]

For each position $i$, define

\\[
D_i=\operatorname{depth}[e_i].
\\]

Also define $\operatorname{first}[v]$ as the first position where $v$ appears in $E$.
Then $\operatorname{LCA}(u,v)$ is the vertex in the interval

\\[
[\operatorname{first}[u]:\operatorname{first}[v]]
\\]

whose depth is minimum, after swapping the endpoints if necessary.
Thus LCA can be reduced to a range minimum query on the Euler tour depth array.

## Proof of Correctness

We first prove the correctness of the binary lifting table.

_Proof._
For $k=0$, $\operatorname{up}[0][v]$ is defined as the parent of $v$, so it is the $2^0$-th ancestor.
Assume that $\operatorname{up}[k-1][v]$ is the $2^{k-1}$-th ancestor of $v$ for every vertex $v$.
Then

\\[
\operatorname{up}[k-1][\operatorname{up}[k-1][v]]
\\]

is the $2^{k-1}$-th ancestor of the $2^{k-1}$-th ancestor of $v$.
Therefore it is the $2^k$-th ancestor of $v$.
By induction, the table is correct for every $k$.

---

Now consider the query algorithm.
Let $w=\operatorname{LCA}(u,v)$.
Lifting the deeper vertex by the depth difference only moves it along the path to the root.
Since $w$ is an ancestor of both original vertices, this operation does not change the LCA.
After this step, $u$ and $v$ have the same depth.

If $u=v$, then the common vertex is clearly the lowest common ancestor.
Otherwise, suppose $u\neq v$.
When the algorithm checks powers of two from large to small, it moves $u$ and $v$ upward only when their $2^k$-th ancestors are different.
Therefore it never moves either vertex above $w$, because above $w$ the ancestors of both vertices are the same.

At the end, there is no $k$ such that $\operatorname{up}[k][u]\neq \operatorname{up}[k][v]$.
In particular,

\\[
\operatorname{up}[0][u]=\operatorname{up}[0][v].
\\]

Since $u\neq v$, this common parent is an ancestor of both vertices.
Also, the algorithm has moved them as high as possible while keeping them below different branches.
Thus their common parent is exactly the lowest common ancestor.

For the Euler tour formulation, consider the first occurrences of $u$ and $v$ in the Euler tour.
Let $w=\operatorname{LCA}(u,v)$.
Assume without loss of generality that $\operatorname{first}[u]\le \operatorname{first}[v]$.
After the first occurrence of $u$ and before the first occurrence of $v$, DFS must return from $u$ to $w$ and then enter the child subtree of $w$ which contains $v$.
During this part of the Euler tour, DFS never goes above $w$; otherwise $w$ would not be the lowest common ancestor.
Therefore every recorded vertex in the interval has depth at least $\operatorname{depth}[w]$.
Also, $w$ itself is recorded in this interval when DFS returns to it from the side containing $u$ before moving toward the side containing $v$.
Thus the minimum-depth vertex in the interval is exactly $w$.
Hence the Euler tour reduction to RMQ is correct.

## Complexity

Let $N$ be the number of vertices.
Set

\\[
K=\lceil\log_2 N\rceil+1.
\\]

\1. **Preprocessing**: $O(N\log N)$

We compute $K$ ancestors for each vertex.

\2. **Query**: $O(\log N)$

Each query checks at most $K$ jump sizes.

\3. **Space Complexity**: $O(N\log N)$

The table $\operatorname{up}[k][v]$ has $O(N\log N)$ entries.

For the Euler tour method, the Euler tour has length $O(N)$.
Using a sparse table for RMQ also gives $O(N\log N)$ preprocessing, $O(1)$ query time, and $O(N\log N)$ space.

## Code

Let's see the sample code.
The tree is assumed to be 1-indexed, and the root is $1$.

```cpp
const int MAXN = 200000 + 5;
const int LOG = 20;

vector<int> G[MAXN];
int up[LOG][MAXN];
int depth[MAXN];

void dfs(int now, int prev) {
    up[0][now] = prev;
    for(int k=1; k<LOG; k++) {
        up[k][now] = up[k-1][up[k-1][now]];
    }

    for(int next: G[now]) {
        if(next == prev) continue;
        depth[next] = depth[now] + 1;
        dfs(next, now);
    }
}

int lift(int x, int d) {
    for(int k=0; k<LOG; k++) {
        if(d & (1 << k)) x = up[k][x];
    }
    return x;
}

int lca(int u, int v) {
    if(depth[u] < depth[v]) swap(u, v);
    u = lift(u, depth[u] - depth[v]);

    if(u == v) return u;

    for(int k=LOG-1; k>=0; k--) {
        if(up[k][u] != up[k][v]) {
            u = up[k][u];
            v = up[k][v];
        }
    }

    return up[0][u];
}

void build() {
    depth[1] = 0;
    dfs(1, 1);
}
```

If $N$ is not fixed at compile time, set `LOG` dynamically.

```cpp
int LOG = 1;
while((1 << LOG) <= N) LOG++;
```

For the Euler tour formulation, we can store pairs $(\operatorname{depth}[v],v)$ in a sparse table and merge by smaller depth.

```cpp
struct Node {
    int dep, v;
    static Node merge(const Node& a, const Node& b) {
        if(a.dep != b.dep) return (a.dep < b.dep ? a : b);
        return (a.v < b.v ? a : b);
    }
};
```

## Applications

* Distance between two vertices in a tree
* Finding the $k$-th ancestor of a vertex
* Checking whether one vertex is an ancestor of another
* Path queries together with prefix values or heavy-light decomposition
* Reducing tree RMQ problems to array RMQ by Euler tour
