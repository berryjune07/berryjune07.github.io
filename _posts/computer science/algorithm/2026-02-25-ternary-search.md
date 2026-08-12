---
layout: post
title: "Ternary Search"
subtitle: "ternary-search"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

**Ternary search** is an algorithm for optimizing a unimodal function.
Let $D$ be an ordered domain and let

\\[
f:D\to \mathbb{R}.
\\]

For a maximum problem, $f$ is unimodal if there exists a point $p$ such that $f$ is nondecreasing before $p$ and nonincreasing after $p$.
Equivalently, the values have only one peak region.
For a minimum problem, the inequalities are reversed.

Ternary search applies to this shape.
It does not use monotonicity of a predicate, as in binary search.
Instead, it uses the fact that one side of the search interval cannot contain the optimum after comparing two interior points.

## Explanation

Suppose first that $f$ is unimodal and we want to maximize it on an interval $[l:r]$.
Choose two points

\\[
m_1=l+\frac{r-l}{3},\qquad
m_2=r-\frac{r-l}{3}.
\\]

Then $l<m_1<m_2<r$.
Compare $f(m_1)$ and $f(m_2)$.

If

\\[
f(m_1)<f(m_2),
\\]

then the maximum cannot lie in $[l:m_1]$.
Indeed, the function is still increasing somewhere between $m_1$ and $m_2$, so the peak must be to the right of $m_1$.
Thus we set $l=m_1$.

If

\\[
f(m_1)>f(m_2),
\\]

then the maximum cannot lie in $[m_2:r]$.
Thus we set $r=m_2$.
If the two values are equal, both outer thirds may be discarded in the strict continuous case, or one may use either update conservatively.

For a minimum problem, the comparison direction is reversed.
Equivalently, one may maximize $-f$.

On real-valued domains, the process is repeated until the interval length is at most a prescribed error:

\\[
r-l\le \varepsilon.
\\]

On integer domains, direct division into thirds may leave only a few candidates near the end.
Therefore the usual implementation shrinks the interval while

\\[
r-l>3,
\\]

and then checks every remaining integer point by brute force.
This final scan is necessary because integer rounding can otherwise skip the exact optimum.

The visualizer below shows both forms.
In the continuous mode, the curve is a unimodal quadratic.
In the discrete mode, the bars form a unimodal sequence.

{% include_relative includes/ternary-search.html %}

## Proof of Correctness

We prove the maximum version.
The minimum version follows by applying the same argument to $-f$.

_Proof._
Assume that the current interval $[l:r]$ contains at least one maximizer.
Let $m_1$ and $m_2$ be the two trisection points with $m_1<m_2$.

If $f(m_1)<f(m_2)$, then no point in $[l:m_1]$ can be the last possible maximizer.
If a maximizer were in $[l:m_1]$, then by unimodality the function would be nonincreasing on $[m_1:m_2]$, which would imply

\\[
f(m_1)\ge f(m_2),
\\]

contradicting $f(m_1)<f(m_2)$.
Hence some maximizer remains in $[m_1:r]$, and replacing $l$ by $m_1$ preserves the invariant.

Similarly, if $f(m_1)>f(m_2)$, then a maximizer remains in $[l:m_2]$, so replacing $r$ by $m_2$ preserves the invariant.
If $f(m_1)=f(m_2)$, the peak lies between the two points or the peak region contains them, so discarding the two outer thirds is valid for the continuous strict form.

Thus every iteration preserves the invariant that the search interval contains a maximizer.
For real-valued search, the interval length tends to zero, so the returned point is within the required precision.
For integer search, the loop stops with a constant number of candidates, and the final brute-force scan selects the best among all remaining possible maximizers.
Therefore the algorithm returns an optimum.

## Complexity

For a real interval of initial length $L=r-l$, each iteration keeps at most

\\[
\frac{2}{3}
\\]

of the previous interval.
After $k$ iterations, the interval length is at most

\\[
L\left(\frac{2}{3}\right)^k.
\\]

To make this at most $\varepsilon$, it is enough to take

\\[
k=O\left(\log\frac{L}{\varepsilon}\right)
\\]

iterations.
If evaluating $f$ takes $O(T)$ time, the total time is

\\[
O\left(T\log\frac{L}{\varepsilon}\right).
\\]

For an integer interval of size $N$, the complexity is

\\[
O(T\log N).
\\]

The additional memory usage is $O(1)$.

## Code

The following function finds an approximate maximizer of a real-valued unimodal function.
For a minimizer, reverse the comparison or pass $-f$.

```cpp
template <class F>
double ternary_search_real(double l, double r, F f, int iterations = 200) {
    for(int it=0; it<iterations; it++) {
        double m1 = l + (r - l) / 3.0;
        double m2 = r - (r - l) / 3.0;

        if(f(m1) < f(m2)) l = m1;
        else r = m2;
    }
    return (l + r) / 2.0;
}
```

For integer domains, scan the remaining short interval explicitly.

```cpp
using ll = long long;

template <class F>
ll ternary_search_integer(ll l, ll r, F f) {
    while(r - l > 3) {
        ll m1 = l + (r - l) / 3;
        ll m2 = r - (r - l) / 3;

        if(f(m1) < f(m2)) l = m1;
        else r = m2;
    }

    ll best = l;
    for(ll x=l+1; x<=r; x++) {
        if(f(best) < f(x)) best = x;
    }
    return best;
}
```

If only the optimum value is needed, return `f(best)` or `f((l + r) / 2.0)` instead of the argument.

## Applications

* Optimizing a unimodal function
* Finding the closest point on a line under a convex distance function
* Optimizing geometry expressions with one variable
* Searching over a convex or concave DP transition when the shape is known
* Solving continuous optimization problems with one-dimensional unimodality
