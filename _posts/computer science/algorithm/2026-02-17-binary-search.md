---
layout: post
title: "Binary Search"
subtitle: "binary-search"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc 
{:toc}

## Introduction

**Binary search** is an algorithm for finding a value or a boundary in an ordered search space.
The essential condition is monotonicity.
For a predicate

\\[
P:D\to\{\operatorname{false},\operatorname{true}\},
\\]

on a totally ordered domain $D$, binary search applies when the truth values have one of the forms

\\[
F,F,\ldots,F,T,T,\ldots,T
\\]

or

\\[
T,T,\ldots,T,F,F,\ldots,F.
\\]

There are two common kinds of binary search:

1. binary search on arrays;
2. binary search on real-valued answers.

The first one searches inside a sorted sequence.
The second one searches for the boundary of a feasible region.

## Explanation

**Binary search on arrays.**
Let

\\[
A=[a_0,a_1,\ldots,a_{N-1}]
\\]

be sorted in nondecreasing order.
The most direct operation is searching for an exact value $x$.
Maintain an inclusive interval $[l:r]$ of possible positions.
At each step, set

\\[
m=\left\lfloor\frac{l+r}{2}\right\rfloor.
\\]

If $a_m=x$, the value is found.
If $a_m<x$, then every index $\le m$ can be discarded.
If $a_m>x$, then every index $\ge m$ can be discarded.
This gives the ordinary exact-value binary search.

However, in many cases we want a boundary rather than just existence.
For lower bound, define

\\[
P(i)\iff a_i\ge x.
\\]

Since $A$ is sorted, $P$ is monotone:

\\[
F,F,\ldots,F,T,T,\ldots,T.
\\]

The first true index is the first position whose value is at least $x$.
This is `lower_bound`.
For upper bound, define

\\[
Q(i)\iff a_i>x.
\\]

The first true index of $Q$ is the first position whose value is greater than $x$.
This is `upper_bound`.

For boundary search, it is convenient to use sentinels:

\\[
l=-1,\qquad r=N.
\\]

The invariant is

\\[
P(l)=F,\qquad P(r)=T,
\\]

where $P(-1)=F$ and $P(N)=T$ are formal sentinel values.
If $P(m)=T$, set $r=m$.
If $P(m)=F$, set $l=m$.
When $r-l=1$, $r$ is the first true index.

The exact search code and the boundary search code are slightly different.
Exact search stops immediately when equality is found.
Boundary search does not stop at equality; it keeps shrinking the interval to find the first possible position.

**Binary search on real-valued answers.**
Now suppose that the answer is a real number $x$.
We cannot usually test equality with the exact answer.
Instead, define a monotone feasibility predicate

\\[
\operatorname{ok}(x).
\\]

For a minimization problem, the usual form is

\\[
\operatorname{ok}(x)=
\begin{cases}
F & \text{if } x \text{ is too small}, \\\\
T & \text{if } x \text{ is feasible}.
\end{cases}
\\]

Then binary search finds the smallest feasible value up to an error bound.
Maintain $L$ and $R$ such that

\\[
\operatorname{ok}(L)=F,\qquad \operatorname{ok}(R)=T.
\\]

At each step, set

\\[
M=\frac{L+R}{2}.
\\]

If $\operatorname{ok}(M)$ is true, set $R=M$.
Otherwise set $L=M$.
The process stops when

\\[
R-L\le\varepsilon.
\\]

For maximization, the predicate is often true first and false later.
Then one may either reverse the predicate or maintain the opposite invariant.

The visualizer below shows both array boundary search and real-valued answer search.

{% include_relative includes/binary-search.html %}

## Proof of Correctness

First we prove the boundary-search form.

_Proof._
Initially, $l=-1$ and $r=N$.
By the sentinel convention,

\\[
P(l)=F,\qquad P(r)=T.
\\]

Assume that this invariant holds before an iteration.
Let

\\[
m=\left\lfloor\frac{l+r}{2}\right\rfloor.
\\]

If $P(m)=T$, then the first true position cannot be larger than $m$, so setting $r=m$ preserves the invariant.
If $P(m)=F$, then the first true position must be larger than $m$, so setting $l=m$ preserves the invariant.

The interval length $r-l$ strictly decreases.
Thus the algorithm terminates.
When $r-l=1$, there is no unknown index between the last false index and the first true index.
Therefore $r$ is the first true index.

---

For exact search in a sorted array, if $a_m=x$, the algorithm returns a correct index.
If $a_m<x$, sortedness implies that all indices $\le m$ have value less than $x$, so discarding them is valid.
If $a_m>x$, sortedness implies that all indices $\ge m$ have value greater than $x$, so discarding them is valid.
If the interval becomes empty, no possible position remains, so $x$ is not in the array.

---

For real-valued answer search, the same invariant proof applies.
The algorithm keeps an interval $[L:R]$ containing the boundary between infeasible and feasible values.
After $k$ iterations, the length is $(R-L)/2^k$.
Thus the returned endpoint is within the prescribed error once the interval length is at most $\varepsilon$.

## Complexity

For an array of size $N$, exact search and boundary search both take

\\[
O(\log N)
\\]

comparisons.

If one feasibility check takes $O(T)$ time and the integer answer range has length $R-L+1$, binary search on the answer takes

\\[
O(T\log(R-L+1)).
\\]

For real-valued search, after $k$ iterations the interval length is

\\[
\frac{R-L}{2^k}.
\\]

To make this at most $\varepsilon$, it is enough to take

\\[
k=\left\lceil \log_2\frac{R-L}{\varepsilon}\right\rceil
\\]

iterations.
The memory usage is $O(1)$.

## Code

Exact search returns any index whose value is $x$, or $-1$ if no such index exists.

```cpp
template <class T>
int binary_search_exact(const vector<T>& a, const T& x) {
    int l = 0, r = (int)a.size() - 1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == x) return m;
        if(a[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}
```

Boundary search returns the first index satisfying the predicate.
It may return $N$.

```cpp
template <class F>
int first_true(int n, F pred) {
    int l = -1, r = n;
    while(r - l > 1) {
        int m = l + (r - l) / 2;
        if(pred(m)) r = m;
        else l = m;
    }
    return r;
}

template <class T>
int lower_bound_index(const vector<T>& a, const T& x) {
    return first_true((int)a.size(), [&](int i) {
        return a[i] >= x;
    });
}

template <class T>
int upper_bound_index(const vector<T>& a, const T& x) {
    return first_true((int)a.size(), [&](int i) {
        return a[i] > x;
    });
}
```

The dual form finds the last true index.
It may return $-1$.

```cpp
template <class F>
int last_true(int n, F pred) {
    int l = -1, r = n;
    while(r - l > 1) {
        int m = l + (r - l) / 2;
        if(pred(m)) l = m;
        else r = m;
    }
    return l;
}
```

For real-valued answer search, use an error bound or a fixed number of iterations.

```cpp
template <class F>
double min_feasible_real(double lo, double hi, F ok, double eps = 1e-9) {
    while(hi - lo > eps) {
        double mid = (lo + hi) / 2.0;
        if(ok(mid)) hi = mid;
        else lo = mid;
    }
    return hi;
}
```

For integer answer search, the same sentinel form can be used.
Here `ok(lo)` should be false and `ok(hi)` should be true.

```cpp
using ll = long long;

template <class F>
ll min_feasible(ll lo, ll hi, F ok) {
    while(hi - lo > 1) {
        ll mid = lo + (hi - lo) / 2;
        if(ok(mid)) hi = mid;
        else lo = mid;
    }
    return hi;
}
```

## Applications

* Finding an exact value in a sorted sequence
* Finding lower and upper bounds
* Counting values in a sorted interval
* Finding the first time an event occurs
* Finding the minimum feasible answer
* Searching over real values with precision $\varepsilon$
