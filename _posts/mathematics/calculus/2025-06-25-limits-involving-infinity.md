---
layout: post
title: "Limits Involving Infinity"
subtitle: "cal2.4"
classification: "Calculus 2.4"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Limits by approaching infinity

We say that $f(x)$ has the limit $L$ as $x$ approaches infinity and write

\\[
\lim_{x \to \infty} f(x) = L
\\]

if, for every number $\epsilon > 0$, there exists a number $M$ such that

\\[
x > M \implies |f(x) - L| < \epsilon
\\]

Similarly, we say that $f(x)$ has the limit $L$ as $x$ approaches negative infinity and write

\\[
\lim_{x \to -\infty} f(x) = L
\\]

if, for every number $\epsilon > 0$, there exists a number $N$ such that
\\[
x < N \implies |f(x) - L| < \epsilon
\\]

### Limit Laws

All the limit laws [here](/mathematics/a-limit-of-a-function.html#limit-laws)
are true when $\lim_{x\to a}$ replaced to $\lim_{x\to\pm\infty}$.

### Horizontal Asymptotes

A graph of a function $y=f(x)$ has a **horizontal asymptote** at $y = b$ if either

\\[
\lim_{x \to \infty} f(x) = b \quad \text{or} \quad \lim_{x \to -\infty} f(x) = b
\\]

### Oblique Asymptotes

If the degree of the numerator of a rational function is 1 greater than the degree of the denominator, then the graph has an _oblique asymptote_.
The oblique asymptote can be found by performing polynomial long division on the rational function.

## Infinite Limits

We say that $f(x)$ approaches infinity as $x$ approaches $a$ and write

\\[
\lim_{x \to a} f(x) = \infty
\\]

if, for every number $M$, there exists a number $\delta > 0$ such that

\\[
0 < |x - a| < \delta \implies f(x) > M
\\]

Similarly, we say that $f(x)$ approaches negative infinity as $x$ approaches $a$ and write

\\[
\lim_{x \to a} f(x) = -\infty
\\]

if, for every number $N$, there exists a number $\delta > 0$ such that

\\[
0 < |x - a| < \delta \implies f(x) < N
\\]

### Vertical Asymptotes

A graph of a function $y=f(x)$ has a **vertical asymptote** at $x = a$ if either

\\[
\lim_{x \to a^+} f(x) = \pm\infty \quad \text{or} \quad \lim_{x \to a^-} f(x) = \pm\infty
\\]

### Infinite Limits at Infinity and Negative Infinity

We say that $f(x)$ approaches infinity as $x$ approaches infinity and write

\\[
\lim_{x \to \infty} f(x) = \infty
\\]

if, for every number $M$, there exists a number $N$ such that

\\[
x > N \implies f(x) > M
\\]

Similarly, we say that $f(x)$ approaches negative infinity as $x$ approaches infinity and write

\\[
\lim_{x \to \infty} f(x) = -\infty
\\]

if, for every number $M$, there exists a number $N$ such that

\\[
x > N \implies f(x) < N
\\]

We say that $f(x)$ approaches infinity as $x$ approaches negative infinity and write

\\[
\lim_{x \to -\infty} f(x) = \infty
\\]

if, for every number $M$, there exists a number $N$ such that
\\[
x < N \implies f(x) > M
\\]

Similarly, we say that $f(x)$ approaches negative infinity as $x$ approaches negative infinity and write

\\[
\lim_{x \to -\infty} f(x) = -\infty
\\]

if, for every number $M$, there exists a number $N$ such that
\\[
x < N \implies f(x) < M
\\]

### Dominant Term

When evaluating limits at infinity, we can often simplify the function by focusing on the dominant term.
The dominant term is the term in the function that grows the fastest as $x$ approaches some value or infinity.
For example, consider the following function:

\\[
f(x) = \frac{x^2-3}{2x-4} = \frac{x}{2} + 1 + \frac{1}{2x-4}
\\]

This tells us:

\\[
\begin{align\*}
f(x) &\approx \frac{x}{2} + 1 \quad ; x \to \pm\infty \nl
f(x) &\approx \frac{1}{2x-4} \quad ; x \to 2
\end{align\*}
\\]