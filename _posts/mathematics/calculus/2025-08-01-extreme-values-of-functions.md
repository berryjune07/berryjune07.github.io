---
layout: post
title: "Extreme Values of Functions"
subtitle: "cal3.4"
classification: "Calculus 3.4"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Extreme Values

Let $f$ be a function with domain $D$. Then $f$ has an **absolute maximum** value on $D$ at a point $c$ if 
$f(x) \le f(c)$ for all $x \in D$. Similarly, $f$ has an **absolute minimum** value on $D$ at a point $c$ if 
$f(x) \ge f(c)$ for all $x \in D$. Maximum and minimum values are collectively referred to as **extreme values**.
Absolute maxima and minima are also called **global** maxima and minima.

## Extreme Value Theorem

The **extreme value theorem(EVT)** states that:

> Let $f$ be a continuous function on a closed interval $I$, then $f$ always has global maximum and minimum values on $I$.

This means that on a closed interval $I$, we can define the notations $\min$ and $\max$ as:

\\[
\min_{t \in I} f(t) \le f(x) \le \max_{t \in I} f(t)
\\]

which holds for all $x \in I$. Also, we can introduce the notation $\argmin$ and $\argmax$ as:

\\[
\argmin_{x \in I} f(x) = \Set{ x \in I \| f(x) = \min_{t \in I} f(t) } \nt
\argmax_{x \in I} f(x) = \Set{ x \in I \| f(x) = \max_{t \in I} f(t) }
\\]

If argmin and argmax are singletons, we rather define them as the unique elements of those sets.
We can define these functions more generally in _real analysis_ using $\sup$ and $\inf$, but omitting them here.
The proof of the EVT also requires knowledge from real analysis, also omitted here.

## Local Extreme Values

A function $f$ has a **local maximum** at a point $c$ within its domain $D$ if
there exists a neighborhood $N \in \mathcal{N}_c \subset D$ such that $f(x) \le f(c)$ for all $x \in N$.
Similarly, a function $f$ has a **local minimum** at a point $c$ within its domain $D$ if
there exists a neighborhood $N \in \mathcal{N}_c \subset D$ such that $f(x) \ge f(c)$ for all $x \in N$.

### The First Derivative Test for Local Extreme Values

> If $f$ has a local maximum or minimum at an internal point $c$ of its domain and $f^\prime(c)$ exists, then $f^\prime(c) = 0$.

To prove that $f^\prime(c) = 0$, we show that $f^\prime(c) \le 0$ and then that $f^\prime(c) \ge 0$.
To begin, suppose that $f$ has a local maximum at $c$ so that $f(x) - f(c) \le 0$ for all $x \in N \in \mathcal{N}_c$ for some neighborhood $N$ of $c$.
Then we have:

\\[
f^\prime(c) = \lim_{x \to c^+} \frac{f(x) - f(c)}{x - c} \le 0 \nt
f^\prime(c) = \lim_{x \to c^-} \frac{f(x) - f(c)}{x - c} \ge 0
\\]

Thus, we conclude that $f^\prime(c) = 0$.
The proof for a local minimum is similar.

## Critical Points

A point $c$ in the domain of a function $f$ is called a **critical point** of $f$ if either $f^\prime(c) = 0$ or $f^\prime(c)$ does not exist.

### Finding Extreme Values on a Closed Interval

1. Find all critical points of $f$ in the closed interval.
2. Evaluate $f$ at each critical point and at the endpoints of the interval.
3. Take the largest and smallest of these values as the absolute maximum and minimum values of $f$ on the interval.