---
layout: post
title: "Minimum Spanning Tree"
subtitle: "minimum-spanning-tree"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

A **Minimum Spanning Tree (MST)** of a connected, undirected graph is a spanning tree that has the minimum possible total edge weight.
A spanning tree is a subgraph that includes all the vertices of the original graph and is a tree (i.e., it is connected and has no cycles).
The MST is useful in various applications, such as network design, clustering, and optimization problems.
There are two popular algorithms to find the MST: **Kruskal's Algorithm** and **Prim's Algorithm**.

## Kruskal's Algorithm

Kruskal's Algorithm is a greedy algorithm that finds the MST by adding edges in increasing order of weight, ensuring that no cycles are formed.

1. Sort all edges in non-decreasing order of their weight.
2. Initialize an empty forest (a set of trees).
3. For each edge in the sorted list:
   - If adding the edge does not form a cycle, add it to the forest.
   - Use a disjoint-set data structure to efficiently check for cycles.

### Explanation

The interactive demo below shows Kruskal's algorithm on a fixed weighted graph.
The edges are considered in the following order:

\\[
(C,D,3),(B,D,4),(B,C,5),(A,B,6),(A,D,8),(A,C,10)
\\]

{% include_relative includes/minimum-spanning-tree-kruskal.html %}

Kruskal's algorithm accepts $(C,D,3)$ and $(B,D,4)$ first.
The edge $(B,C,5)$ is skipped because its endpoints are already in the same connected component.
Then $(A,B,6)$ connects the remaining component, so the algorithm obtains an MST of total weight $13$.

### Proof of Correctness

Let $G=(V,E)$ be a connected undirected graph with weight function $w:E\to\mathbb{R}$.
For a set $A\subseteq E$, call $A$ **promising** if there exists an MST $T$ such that $A\subseteq T$.
We first prove the following safe-edge lemma.

Suppose that $A$ is promising, and let $(S,V\setminus S)$ be a cut such that no edge of $A$ crosses the cut.
If $e$ is a minimum-weight edge among all edges crossing the cut, then $A\cup\Set{e}$ is also promising.

_Proof._
Since $A$ is promising, there exists an MST $T$ with $A\subseteq T$.
If $e\in T$, then $T$ already contains $A\cup\Set{e}$.
Assume $e\notin T$.

Adding $e$ to $T$ creates exactly one cycle.
Since $e$ crosses $(S,V\setminus S)$, this cycle must cross the cut an even number of times.
Therefore there exists another edge $f\neq e$ on the cycle which also crosses the cut.
Because no edge of $A$ crosses the cut, we have $f\notin A$.
By the choice of $e$, we have $w(e)\le w(f)$.
Define

\\[
T^\prime = T - \Set{f} + \Set{e}
\\]

Removing $f$ from the cycle and keeping $e$ preserves connectivity and removes the only cycle,
so $T^\prime$ is a spanning tree.
Moreover,

\\[
w(T^\prime)=w(T)-w(f)+w(e)\le w(T)
\\]

Since $T$ is an MST, $T^\prime$ must also be an MST.
Also $A\subseteq T^\prime$ because $f\notin A$, and $e\in T^\prime$.
Thus $A\cup\Set{e}$ is promising.

Now let $A$ be the set of edges accepted by Kruskal's algorithm.
We prove by induction that after every accepted edge:

1. $A$ is acyclic.
2. $A$ is promising.

Initially $A=\emptyset$, so both statements are trivial.

Suppose that the statement is true before adding an edge $e=(u,v)$.
Kruskal's algorithm adds $e$ only when $u$ and $v$ are in different connected components of the forest $(V,A)$.
Therefore adding $e$ cannot create a cycle, so acyclicity is preserved.

Let $S$ be the vertex set of the component containing $u$.
Then $e$ crosses the cut $(S,V\setminus S)$.
No edge of $A$ crosses this cut, because every edge of $A$ lies inside one connected component of $(V,A)$.

It remains to show that $e$ is a minimum-weight edge crossing this cut.
Let $g$ be any edge crossing $(S,V\setminus S)$.
Then the endpoints of $g$ are in different connected components of the current forest.
Since components only merge as the algorithm proceeds, they were also in different components at the time $g$ was considered.
If $w(g)<w(e)$, then $g$ was considered before $e$ and would have been accepted, contradiction.
Thus $w(e)\le w(g)$ for every crossing edge $g$.

By the safe-edge lemma, $A\cup\Set{e}$ is promising.
Hence both induction statements hold after adding $e$.

When the algorithm terminates on a connected graph, $A$ has $\abs{V}-1$ edges.
Since $A$ is acyclic, it is a spanning tree.
Since $A$ is promising, there exists an MST $T$ such that $A\subseteq T$.
But both $A$ and $T$ have exactly $\abs{V}-1$ edges, so $A=T$.
Therefore Kruskal's algorithm returns an MST.

### Complexity

Let $n=\abs{V}$ and $m=\abs{E}$.
Sorting all edges takes

\\[
O(m\log m)
\\]

time.
After sorting, the algorithm processes each edge once.
For each edge, it performs two `find` operations and at most one `union` operation.
Using disjoint-set forest with path compression and union by rank,
each operation takes amortized $O(\alpha(n))$ time, where $\alpha$ is the inverse Ackermann function.
Therefore, the total time after sorting is

\\[
O(m\alpha(n))
\\]

and the total time complexity is

\\[
O(m\log m+m\alpha(n))=O(m\log m)
\\]

Since $m\le n^2$, we also have $\log m=O(\log n)$, so this is often written as $O(m\log n)$.
The space complexity is $O(n+m)$ if the edge list is stored explicitly.

### Code

```cpp
const int MAX;
struct edge{
    int u,v,w;
    bool operator<(const edge&e)const{ return w<e.w; }
};
vector<edge> G;
int par[MAX];

void init(){
    sort(G.begin(),G.end());
    for(int i=1; i<=V; i++) par[i]=i;
}

int Find(int x){
    if(par[x]==x) return x;
    return par[x]=Find(par[x]);
}

void Union(int u,int v){
    u=Find(u), v=Find(v);
    par[v]=u;
}

int Kruskal(){
    init();
    int sum=0;
    for(auto [u,v,w]:G) if(Find(u)!=Find(v)){
        Union(u,v);
        sum += w;
    }
    return sum;
}
```

## Prim's Algorithm

Prim's Algorithm is another greedy algorithm that finds the MST by growing the tree one edge at a time, starting from an arbitrary vertex.

1. Initialize a priority queue (or a min-heap) to store edges.
2. Start from an arbitrary vertex and add all its edges to the priority queue.
3. While the priority queue is not empty:
   - Extract the edge with the minimum weight.
   - If the edge connects to a vertex not already in the tree, add it to the tree and add its edges to the priority queue.

### Explanation

The interactive demo below shows Prim's algorithm on the same graph, starting from $A$.
At every step, the algorithm chooses the minimum-weight edge crossing from the current tree to the outside.

{% include_relative includes/minimum-spanning-tree-prim.html %}

For this graph, it accepts

\\[
(A,B,6),(B,D,4),(C,D,3)
\\]

and again obtains an MST of total weight $13$.

### Proof of Correctness

Let $S$ be the set of vertices already included in Prim's tree, and let $A$ be the set of accepted edges.
We prove by induction that after every iteration:

1. $(S,A)$ is a tree on the vertex set $S$.
2. $A$ is promising.

Initially $S=\Set{s}$ for the starting vertex $s$, and $A=\emptyset$.
Thus $(S,A)$ is a one-vertex tree, and $A$ is promising.

Suppose that the invariant holds before an iteration and $S\neq V$.
Since $G$ is connected, there exists at least one edge crossing the cut $(S,V\setminus S)$.
Prim's algorithm chooses an edge $e=(u,v)$ of minimum weight among all such crossing edges,
where $u\in S$ and $v\notin S$.

No edge of $A$ crosses $(S,V\setminus S)$, because all edges of $A$ have both endpoints in $S$.
Since $A$ is promising, the safe-edge lemma implies that $A\cup\Set{e}$ is promising.
Also, $e$ connects the existing tree to exactly one new vertex.
Therefore

\\[
S^\prime = S\cup\Set{v}, \quad A^\prime = A\cup\Set{e}
\\]

is still connected and acyclic, so $(S^\prime,A^\prime)$ is a tree.
Thus both induction statements are preserved.

The algorithm adds exactly one new vertex in every iteration.
After $\abs{V}-1$ iterations, we have $S=V$ and $\abs{A}=\abs{V}-1$.
By the first invariant, $(V,A)$ is a spanning tree.
By the second invariant, there exists an MST $T$ such that $A\subseteq T$.
Since both $A$ and $T$ have $\abs{V}-1$ edges, we have $A=T$.
Therefore Prim's algorithm returns an MST.

### Complexity

Let $n=\abs{V}$ and $m=\abs{E}$.
Assume that the graph is stored as an adjacency list and the priority queue is a binary heap.
Whenever a vertex is added to the tree, we scan all edges incident to it.
Over the whole algorithm, the total number of scanned adjacency-list entries is $O(m)$.

Each candidate edge inserted into the priority queue is later removed at most once.
Thus the number of heap operations is $O(m)$.
Each heap operation costs $O(\log m)$ time.
Since $m\le n^2$ in a simple graph, we have $\log m=O(\log n)$.
Therefore the total running time is

\\[
O(m\log m)=O(m\log n)
\\]

The space complexity is $O(n+m)$ for the adjacency list, the visited array, and the priority queue.

### Code

```cpp
const int MAX;
struct edge{
    int to,w;
    bool operator<(const edge &e)const{ return w>e.w; }
};
vector<edge> G[MAX];
bool chk[MAX];

int Prim(){
    int sum=0;
    priority_queue<edge,vector<edge>> pq;
    pq.push({1,0});
    while(!pq.empty()){
        auto [now,w] = pq.top();
        pq.pop();
        if(chk[now]) continue;
        chk[now] = true;
        sum += w;
        for(auto [nxt,nw]:G[now]) if(!chk[nxt]) pq.push({nxt,nw});
    }
    return sum;
}
```

## Applications

Minimum Spanning Trees have various applications, including:
- **Network Design**: Designing efficient networks with minimum cost, such as telecommunications or transportation networks.
- **Clustering**: Grouping data points in clustering algorithms, such as hierarchical clustering.
- **Optimization Problems**: Solving problems that require minimizing the total cost of connections, such as in logistics and supply chain management.
