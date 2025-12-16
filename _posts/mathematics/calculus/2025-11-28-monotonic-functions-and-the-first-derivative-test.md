---
layout: post
title: "Monotonic Functions and the First Derivative Test"
subtitle: "cal3.6"
classification: "Calculus 3.6"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Monotonicity and the First Derivative

As another corollary to the Mean Value Theorem, we can show that the functions with positive derivatives are increasing and those with negative derivatives are decreasing.
Formally, suppose $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$.

* If $f^\prime(x) > 0$ for all $x \in (a, b)$, then $f$ is increasing on $[a, b]$.
* If $f^\prime(x) < 0$ for all $x \in (a, b)$, then $f$ is decreasing on $[a, b]$.

### Proof

Let $x_1, x_2 \in [a,b]$ be two distinct points with $x_1 < x_2$.
The Mean Value Theorem implies that:

\\[
f(x_2) - f(x_1) = f^\prime(c) (x_2 - x_1)
\\]

for some $c \in (x_1, x_2)$. By the sign of $f^\prime$, we can conclude the statement.

## First Derivative Test for Local Extrema

Suppose that $c$ is a critical point of a continuous function $f$, and $f$ is differentiable at every point in some neighborhood of $c$ except possibly at $c$.
Moving across this interval from left to right,

1. if $f^\prime$ changes negative to positive at $c$, then $f$ has a local minimum at $c$;
2. if $f^\prime$ changes positive to negative at $c$, then $f$ has a local maximum at $c$.
3. if $f^\prime$ does not change sign at $c$, then $f$ has no local extremum at $c$.

### Proof

Let $a,b$ be two points in the neighborhood of $c$ such that $a < c < b$.
For the first case, we have $f^\prime(x_1)<0$ for all $x_1 \in (a,c)$ and $f^\prime(x_2) > 0$ for all $x_2 \in (c,b)$.
Therefore, $f$ is decreasing on $[a,c]$ and increasing on $[c,b]$, implying that $f(c)\le f(x)$ for all $x \in [a,b]$,
which means that $f$ has a local minimum at $c$. We can do similarly for the other two cases.