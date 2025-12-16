---
layout: post
title: "The Mean Value Theorem"
subtitle: "cal3.5"
classification: "Calculus 3.5"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Rolle's Theorem

**Rolle's Theorem** is a Lemma that serves as a foundation for the Mean Value Theorem.
> Let $f$ be a continuous function on the closed interval $[a, b]$ and differentiable on the open interval $(a, b)$.
If $f(a) = f(b)$, then there exists at least one point $c \in (a, b)$ such that $f^\prime(c) = 0$.

### Proof

Being continuous, $f$ has absolute maximum and minimum values on $[a, b]$ by the Extreme Value Theorem.
These can occur only at interior points where $f^\prime$ is zero, or at the endpoints $a$ and $b$.
If either the maximum or minimum occurs at a point $c\in(a,b)$, then we've found the desired point where $f^\prime(c) = 0$.
If both the maximum and minimum occur at the endpoints, then since $f(a) = f(b)$, $f$ becomes constant on $[a, b]$.
Therefore, $f^\prime(c) = 0$ for all $c \in (a, b)$.

## Mean Value Theorem

**Mean Value Theorem(MVT)** states that there exists a point where the tangent line is parallel to the secant line that joins the endpoints of the interval.
> Let $f$ be a continuous function on the closed interval $[a, b]$ and differentiable on the open interval $(a, b)$.
Then there exists at least one point $c \in (a, b)$ such that:

\\[
\frac{f(b) - f(a)}{b - a} = f^\prime(c)
\\]

### Proof

Define the function $g$ as:

\\[
g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a} (x - a)
\\]

Then $g$ is continuous on $[a, b]$ and differentiable on $(a, b)$.
Also, $g(a) = g(b) = 0$.
By Rolle's Theorem, there exists a point $c \in (a, b)$ such that $g^\prime(c) = 0$.
Calculating $g^\prime(x)$ gives:

\\[
g^\prime(x) = f^\prime(x) - \frac{f(b) - f(a)}{b - a}
\\]

Setting $g^\prime(c) = 0$ leads to:

\\[
\frac{f(b) - f(a)}{b - a} = f^\prime(c)
\\]

### Corollary

* If $f^\prime(x)=0$ for all $x \in (a, b)$, then $f$ is constant on $(a, b)$.
* If $f^\prime(x)=g^\prime(x)$ for all $x \in (a, b)$, then $f-g$ is constant on $(a, b)$.