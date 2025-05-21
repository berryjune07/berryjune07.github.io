---
layout: post
title: "One-Sided Limits"
subtitle: "cal2.2"
classification: "Calculus 2.2"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## One-Sided Limits

A **one-sided limit** is a limit that only considers the behavior of a function as it approaches a specific point from one side (either the left or the right).
There are two types of one-sided limits:
- **Left-Hand Limit**: The limit of a function as the input approaches a certain value from the left side(values less than the point).
- **Right-Hand Limit**: The limit of a function as the input approaches a certain value from the right side(values greater than the point).

They are defined precisely as follows: Let $f$ be a function defined on an open interval $I$ containing $a$ (except possibly at $a$ itself).
If for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that <br>
$a < x < a + \delta \implies |f(x) - L| < \epsilon$, then we write it as
\\[
\lim_{x \to a^+} f(x) \quad \text{or} \quad \lim_{x \downarrow a} f(x) \quad \text{or} \quad \lim_{x \searrow a} f(x) = L
\\]
or $a - \delta < x < a \implies |f(x) - L| < \epsilon$, then we write it as
\\[
\lim_{x \to a^-} f(x) \quad \text{or} \quad \lim_{x \uparrow a} f(x) \quad \text{or} \quad \lim_{x \nearrow a} f(x) = L
\\]

## Relationship Between One-Sided Limits and General Limits

Trivially, if the left-hand limit and right-hand limit of a function at a point are equal, then the general limit exists and is equal to that common value.
\\[
\lim_{x \to a} f(x) = L \quad \text{if and only if} \quad \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
\\]
This means that if the function approaches the same value from both sides as $x$ approaches $a$, then the limit exists and is equal to that value.
Conversely, if even one of the one-sided limits does not exist or is not equal to the other, then the general limit does not exist.