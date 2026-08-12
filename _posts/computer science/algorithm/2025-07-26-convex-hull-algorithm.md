---
layout: post
title: "Convex Hull Algorithm"
subtitle: "convex-hull-algorithm"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

Let $P$ be a finite set of points in $\mathbb{R}^2$.
The **convex hull** of $P$ is the smallest convex set containing $P$.

\\[
\operatorname{conv}(P)
= \bigcap \Set{ C \subseteq \mathbb{R}^2 \| P \subseteq C,\ C \text{ is convex} }.
\\]

For finite $P$, the convex hull is a convex polygon whose vertices are points of $P$.
The computational problem is to output these vertices in cyclic order.
We use the orientation function

\\[
\begin{align\*}
\operatorname{ccw}(\b{p}, \b{q}, \b{r})
&= \left\[ \overrightarrow{\b{pq}} \times \overrightarrow{\b{pr}} \right\]_z \nl
&= (q_x - p_x)(r_y - p_y) - (q_y - p_y)(r_x - p_x).
\end{align\*}
\\]

Then $\operatorname{ccw}(\b{p},\b{q},\b{r})>0$ means that the three points make a left turn,
$\operatorname{ccw}(\b{p},\b{q},\b{r})<0$ means that they make a right turn,
and $\operatorname{ccw}(\b{p},\b{q},\b{r})=0$ means that they are collinear.

We describe two standard algorithms:

1. **Graham Scan**
2. **Monotone Chain Algorithm**

Both algorithms sort the points and then maintain a stack whose consecutive triples must make valid turns.

## Graham Scan

Graham Scan constructs the convex hull by sorting points by polar angle around a pivot.

### Explanation

Choose the pivot $\b{o}$ as the point with minimum $y$-coordinate, breaking ties by minimum $x$-coordinate.
Sort all other points by the polar angle of the vector $\b{p}-\b{o}$.
If two points have the same polar angle, keep the nearer point first.

Let the sorted sequence be

\\[
\b{o},\b{p}_1,\b{p}_2,\ldots,\b{p}_{N-1}.
\\]

Process this sequence from left to right with a stack $S$.
When inserting a point $\b{p}$, repeatedly remove the last point of $S$ while the last two points and $\b{p}$ do not make a left turn:

\\[
\operatorname{ccw}(S_{k-1},S_k,\b{p}) \le 0.
\\]

After the invalid suffix is removed, push $\b{p}$.
At the end, the stack is the convex hull in counterclockwise order.
If all boundary collinear points should be kept, the comparison should be changed carefully according to the desired collinear ordering.

The visualizer below shows the polar-angle order and the stack changes of Graham Scan.

{% include_relative includes/convex-hull-graham.html %}

### Proof of Correctness

_Proof._
The polar-angle ordering around $\b{o}$ is the cyclic order in which a ray from $\b{o}$ meets possible hull vertices.
Thus any counterclockwise convex polygon containing $P$ and starting from $\b{o}$ must visit its remaining vertices in this order.

During the scan, the stack always consists of points in increasing polar-angle order.
Whenever

\\[
\operatorname{ccw}(S_{k-1},S_k,\b{p})\le0,
\\]

the point $S_k$ cannot be a convex hull vertex of the processed points.
Indeed, the segment from $S_{k-1}$ to $\b{p}$ lies outside or on the same supporting direction as $S_k$,
so keeping $S_k$ would create a right turn or a redundant collinear point.
Removing it does not remove any extreme point.

When the while loop stops, every consecutive triple in the stack makes a left turn.
Therefore the stack is a convex chain containing all processed extreme points in their angular order.
By induction over the sorted sequence, after all points are processed the stack is exactly the boundary of $\operatorname{conv}(P)$.

### Complexity

Sorting by polar angle takes $O(N\log N)$ time.
Each point is pushed once and popped at most once.
Thus the scan takes $O(N)$ time, and the total time complexity is

\\[
O(N\log N).
\\]

The memory usage is $O(N)$.

### Code

```cpp
using ll = long long;

struct Point {
    ll x, y;

    bool operator<(const Point& other) const {
        if(y != other.y) return y < other.y;
        return x < other.x;
    }

    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

__int128 ccw(const Point& a, const Point& b, const Point& c) {
    return (__int128)(b.x - a.x) * (c.y - a.y)
         - (__int128)(b.y - a.y) * (c.x - a.x);
}

__int128 dist2(const Point& a, const Point& b) {
    ll dx = a.x - b.x;
    ll dy = a.y - b.y;
    return dx * dx + dy * dy;
}

vector<Point> graham_scan(vector<Point> p) {
    sort(p.begin(), p.end());
    p.erase(unique(p.begin(), p.end()), p.end());
    int n = (int)p.size();
    if(n <= 1) return p;

    Point o = p[0];
    sort(p.begin() + 1, p.end(), [&](const Point& a, const Point& b) {
        __int128 c = ccw(o, a, b);
        if(c != 0) return c > 0;
        return dist2(o, a) < dist2(o, b);
    });

    vector<Point> hull;
    for(const Point& pt : p) {
        while(hull.size() >= 2 &&
              ccw(hull[hull.size() - 2], hull.back(), pt) <= 0) {
            hull.pop_back();
        }
        hull.push_back(pt);
    }
    return hull;
}
```

## Monotone Chain Algorithm

The monotone chain algorithm constructs the lower hull and upper hull separately.
It is often simpler to implement than Graham Scan because it only needs lexicographic sorting.

### Explanation

Sort the points lexicographically by $(x,y)$, and remove duplicate points.
Let the sorted sequence be

\\[
\b{p}_1,\b{p}_2,\ldots,\b{p}_N.
\\]

The lower hull is the boundary chain from $\b{p}_1$ to $\b{p}_N$.
The upper hull is the boundary chain from $\b{p}_N$ to $\b{p}_1$.
Both are $x$-monotone.

To construct the lower hull, process the sorted points from left to right and maintain a stack $S$.
When inserting $\b{p}$, repeatedly remove the last point while

\\[
\operatorname{ccw}(S_{k-1},S_k,\b{p})\le0.
\\]

Then push $\b{p}$.
The upper hull is constructed in the same way after reversing the sorted order.
Finally, concatenate the lower and upper chains, omitting the duplicated endpoints.

The visualizer below shows the lower hull and upper hull construction separately.

{% include_relative includes/convex-hull-monotone-chain.html %}

### Proof of Correctness

_Proof._
We prove the lower hull part.
After processing the first $i$ sorted points, let $S$ be the maintained stack.
We claim that $S$ is exactly the lower hull of

\\[
P_i=\Set{\b{p}_1,\ldots,\b{p}_i}.
\\]

For $i=1$, the claim is immediate.
Assume that the claim holds before inserting $\b{p}_i$.
If the last two points of $S$ are $\b{a},\b{b}$ and

\\[
\operatorname{ccw}(\b{a},\b{b},\b{p}_i)\le0,
\\]

then $\b{b}$ cannot be a vertex of the lower hull of $P_i$.
The segment $\overline{\b{a}\b{p}_i}$ lies on or below $\b{b}$, so $\b{b}$ is either inside the convex hull or is a collinear non-extreme point.
Thus removing $\b{b}$ preserves the lower hull.

When the loop stops, every consecutive triple in $S$ makes a left turn.
The resulting chain is convex, lies below all processed points, and has the leftmost and rightmost processed points as endpoints.
Therefore it is the lower hull of $P_i$.
By induction, the lower hull is correct.

The upper hull follows by the same argument on the reversed order.
The convex hull boundary is exactly the lower hull and upper hull joined at their endpoints.

### Complexity

Sorting the points takes $O(N\log N)$ time.
Each point is pushed to and popped from each stack at most once, so the two scans take $O(N)$ time.
Thus the total time complexity is

\\[
O(N\log N).
\\]

The memory usage is $O(N)$.

### Code

The following implementation removes collinear non-vertex points on the boundary.
The returned polygon has no repeated first point at the end.

```cpp
vector<Point> monotone_chain(vector<Point> p) {
    sort(p.begin(), p.end(), [](const Point& a, const Point& b) {
        if(a.x != b.x) return a.x < b.x;
        return a.y < b.y;
    });
    p.erase(unique(p.begin(), p.end()), p.end());

    int n = (int)p.size();
    if(n <= 1) return p;

    vector<Point> lower, upper;

    for(const Point& pt : p) {
        while(lower.size() >= 2 &&
              ccw(lower[lower.size() - 2], lower.back(), pt) <= 0) {
            lower.pop_back();
        }
        lower.push_back(pt);
    }

    for(int i=n-1; i>=0; i--) {
        const Point& pt = p[i];
        while(upper.size() >= 2 &&
              ccw(upper[upper.size() - 2], upper.back(), pt) <= 0) {
            upper.pop_back();
        }
        upper.push_back(pt);
    }

    lower.pop_back();
    upper.pop_back();
    lower.insert(lower.end(), upper.begin(), upper.end());
    return lower;
}
```

If collinear boundary points should also be included, change both conditions

```cpp
ccw(a, b, c) <= 0
```

to

```cpp
ccw(a, b, c) < 0
```

after deciding how duplicate collinear points should be ordered.

## Applications

* Rotating calipers
* Diameter of a point set
* Minimum width of a point set
* Point-in-convex-polygon queries
* Minkowski sum of convex polygons
* Collision detection for convex shapes
