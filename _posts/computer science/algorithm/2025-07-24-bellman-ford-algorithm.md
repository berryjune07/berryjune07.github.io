---
layout: post
title: "Bellman-Ford Algorithm"
subtitle: "bellman-ford-algorithm"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

The **Bellman--Ford algorithm** is a dynamic programming algorithm used to find the shortest paths from a single source vertex to all other vertices in a weighted graph.
It can handle graphs with negative edge weights, making it more versatile than Dijkstra's algorithm, which cannot handle negative weights.
Although it is slower than Dijkstra's algorithm, it can also detect negative weight cycles, which Dijkstra's algorithm cannot do.

## Explanation

The Bellman--Ford algorithm works by iteratively relaxing the edges of the graph.
The relaxation process updates the shortest path estimate for each vertex based on the current known shortest paths.

1. Initialize the distance to the source vertex to 0 and all other vertices to infinity.
2. Iterate through all edges and update the distance to the destination vertex if a shorter path is found.
3. Repeat the relaxation process for $V - 1$ iterations, where $V$ is the number of vertices in the graph.
4. After $V - 1$ iterations, check for negative weight cycles by iterating through all edges again. If any distance can still be updated, a negative weight cycle exists. If no updates are possible, the algorithm terminates successfully.

The interactive demo below uses the edge order

\\[
\begin{gathered}
(A,E,8),(A,B,-6),(A,D,9),(B,C,-2),(C,D,5),\nl
(D,C,-4),(A,C,3),(C,E,-7),(E,C,-13).
\end{gathered}
\\]

Each step performs one full pass over all edges.

{% include_relative includes/bellman-ford.html %}

Here $V=5$, so the algorithm performs $V-1=4$ full relaxation passes.
Even after these passes, the edge $(C,D,5)$ can still be relaxed.
Thus a negative cycle is reachable from $A$.
Indeed, the cycle

\\[
C\to E\to C
\\]

has total weight $-7+(-13)=-20$.

## Proof of Correctness

Let $\delta_k(v)$ be the minimum weight of a path from the source $s$ to $v$ among all paths using at most $k$ edges.
If no such path exists, let $\delta_k(v)=\infty$.
After the $k$-th full relaxation pass, the Bellman--Ford distance satisfies

\\[
d[v]\le \delta_k(v)
\\]

for every vertex $v$.
In fact, if there is no reachable negative cycle, equality holds for shortest paths with at most $k$ edges.

_Proof._
For $k=0$, only the source is reachable with zero edges, and the initialization gives

\\[
d[s]=0,\qquad d[v]=\infty\quad (v\ne s).
\\]

Assume the statement after $k-1$ passes.
Let a shortest path with at most $k$ edges to $v$ end with the edge $u\to v$.
Then the prefix path to $u$ has at most $k-1$ edges.
By the induction hypothesis, after $k-1$ passes the value $d[u]$ is at most the weight of this prefix.
During the next full pass, relaxing $u\to v$ gives

\\[
d[v]\le d[u]+w(u,v)\le \delta_k(v).
\\]

Since every relaxation only assigns the weight of an actual source-to-vertex walk, the distances cannot become smaller than the best such walk with the allowed number of edges unless a negative cycle permits indefinitely decreasing walks.
Thus after $k$ passes, the distances represent the best paths using at most $k$ edges.

If there is no reachable negative cycle, every shortest path can be chosen simple.
A simple path in a graph with $V$ vertices uses at most $V-1$ edges.
Therefore after $V-1$ passes, all shortest distances have been found.

Finally, suppose a relaxation is still possible on the $V$-th pass.
Then there exists a source-to-vertex walk of smaller weight using at least $V$ edges.
Such a walk repeats a vertex and therefore contains a cycle.
Removing a nonnegative cycle cannot improve the walk, so the repeated part must contain a negative cycle reachable from the source.
Conversely, if a reachable negative cycle exists and can reach some vertex, distances along walks going around the cycle keep decreasing, so some relaxation remains possible.

## Complexity

The time complexity of the Bellman--Ford algorithm is $O(VE)$, where $V$ is the number of vertices and $E$ is the number of edges in the graph.
The space complexity is $O(V)$, as it requires storage for the distance estimates and predecessor information for each vertex.

## Code

Let's see the sample code.

```cpp
const int MAX;
const int INF;
struct edge{
    int u,v,w;
};
vector<edge> G;
int dis[MAX];
int V,E;

void init(){
    for(int i=1; i<=V; i++) dis[i] = INF;
}

bool BellmanFord(int K){
    dis[K] = 0;
    for(int i=1; i<=V; i++) for(auto [u,v,w]:G)
        if(dis[u]!=INF and dis[u]+w<dis[v]){
            dis[v] = dis[u]+w;
            if(i==V) return false;
        }
    return true;
}
```

## Applications

The Bellman--Ford algorithm is widely used in various applications, including:
- **Network routing protocols**: It is used in protocols like RIP (Routing Information Protocol) to find the shortest paths in networks.
- **Graph analysis**: It is used to analyze graphs with negative edge weights and detect negative weight cycles.
