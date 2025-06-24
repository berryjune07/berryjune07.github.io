---
layout: post
title: "Continuity"
subtitle: "cal2.3"
classification: "Calculus 2.3"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Continuity at a Point

Let $a$ be a point that is either an interior point or an endpoint of the domain of a function $f$.
The function $f$ is said to be **continuous at $a$** if

\\[
\lim_{x \to a} f(x) = f(a)
\\]

The function is said to be **right-continuous at $a$ (or continuous from the right)** if

\\[
\lim_{x \to a^+} f(x) = f(a)
\\]

The function is said to be **left-continuous at $a$ (or continuous from the left)** if

\\[
\lim_{x \to a^-} f(x) = f(a)
\\]

We say that $f$ is **continuous on an interval** if it is continuous at every point in that interval.
Specifically, if $f$ is continuous at every point in the open interval $(a, b)$, we say that $f$ is continuous on $(a, b)$.
We need a slightly different definition for the closed interval $[a, b]$.
We say that $f$ is continuous on $[a, b]$ if it is continuous at every point in the open interval $(a, b)$ and also right-continuous at $a$ and left-continuous at $b$.
If a function is not continuous at a point $c$ of its domain, we say that $f$ is **discontinuous at $c$**.

### Continuity Test

A function $f$ is continuous at a point $a$ if and only if the following three conditions are satisfied:

1. $f(a)$ is defined (i.e., $a$ is in the domain of $f$).
2. The limit $\lim_{x \to a} f(x)$ exists.
3. The limit $\lim_{x \to a} f(x)$ is equal to $f(a)$.

## Types of Discontinuities

A function can be discontinuous at a point for several reasons, leading to different types of discontinuities:

- **Removable Discontinuity**: This occurs when the limit exists at a point, but the function is either not defined at that point or is defined to be a different value than the limit.
    * ex) sinc function: $f(x) = \sin x/x$ is discontinuous at $x = 0$
- **Jump Discontinuity**: This occurs when the left-hand limit and right-hand limit at a point exist but are not equal.
    * ex) step function: $f(x) = \lfloor x \rfloor$ is discontinuous at every integer
- **Infinite Discontinuity**: This occurs when the function approaches infinity or negative infinity as it approaches a point.
    * ex) $f(x) = 1/x$ is discontinuous at $x = 0$
- **Oscillating Discontinuity**: This occurs when the function oscillates infinitely as it approaches a point, preventing the limit from existing.
    * ex) $f(x) = \sin(1/x)$ as $x$ approaches 0
- **Essential Discontinuity**: This is a more general term that can refer to any discontinuity that does not fit neatly into the other categories, often involving complex behavior of the function.

## Continuous Functions

We define a **continuous function** as a function that is continuous at every point in its domain.
If a function is discontinuous at even one point, it is not considered continuous.

### Properties of Continuous Functions

If the function $f$ and $g$ are continuous at $a$, then the following properties hold:

1. **Sums**: $f + g$ is continuous at $a$.
2. **Differences**: $f - g$ is continuous at $a$.
3. **Constant Multiples**: $c \cdot f$ is continuous at $a$ for any constant $c$.
4. **Products**: $f \cdot g$ is continuous at $a$.
5. **Quotients**: $f/g$ is continuous at $a$ if $g(a) \neq 0$.
6. **Powers**: $f^n$ is continuous at $a$ for any integer $n$.
7. **Roots**: $\sqrt[n]{f}$ is continuous at $a$ if $f(a) \geq 0$ for even $n$.

These properties are easily verified using the [limit properties](https://berryjune07.github.io/mathematics/a-limit-of-a-function.html#limit-laws).

### Limits of Continuous Functions

If $\lim_{x \to a} f(x) = b$ and $g$ is continuous at $b$, then the limit of the composition is given by:

\\[
\lim_{x \to a} g(f(x)) = g(b) = g\left( \lim_{x \to a} f(x) \right)
\\]

This means that limit operators can be commuted with continuous functions. Let's prove it using the epsilon-delta strategy.

\\[
\begin{align\*}
& \forall \varepsilon>0, \exists \delta_1,\delta_2>0 \quad \text{s.t.} \quad
\begin{cases}
\dps 0<|y-b|<\delta_1 \implies |g(y)-g(b)|<\varepsilon \nl
\dps 0<|x-a|<\delta_2 \implies |f(x)-b|<\delta_1
\end{cases} \nl
& \text{set} \;\; y=f(x) \nl \nl
& 0<|x-a|<\delta_2 \implies |g(f(x)) - g(b)| < \varepsilon \nl
& \therefore \lim_{x \to a} g(f(x)) = g(b) = g\left( \lim_{x \to a} f(x) \right)
\end{align\*}
\\]

### Continuity of Compositions of Functions

If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then the composition $g \circ f$ is continuous at $a$.

\\[
\lim_{x \to a} f(x) = f(a), \;\; \lim_{y \to f(a)} g(y) = g(f(a)) \implies \lim_{x \to a} g(f(x)) = g(f(a))
\\]

## Intermediate Value Theorem

The **Intermediate Value Theorem(IVT)** states that if $f$ is continuous on the closed interval $[a, b]$ and $y_0$ is any value between $f(a)$ and $f(b)$, then there exists at least one point $c$ in the interval $(a, b)$ such that $f(c) = y_0$.
Geometrically, this means that the graph of $f$ must cross the horizontal line $y = y_0$ at least once in the interval $(a, b)$.

Let's state the theorem formally:
If $f:[a,b]\to\mathbb{R}$ is continuous,

\\[
\forall y_0 \in \left( \min \\{f(a),f(b)\\}, \max \\{f(a),f(b)\\} \right),\; \exists c \in (a,b) \quad \text{s.t.} \quad f(c) = y_0
\\]

or can also be stated as:

\\[
\left[\min \\{f(a),f(b)\\}, \max \\{f(a),f(b)\\} \right] \subseteq f([a,b])
\\]

where $f([a,b])$ is also a closed interval. IVT is a powerful tool in calculus, especially for proving the existence of roots of equations and understanding the behavior of continuous functions.
Its proof relies on the completeness property of the real numbers.

<details markdown="1"> <summary> Proof </summary>
WLOG assume $f(a) < f(b)$, then $f(a) < y_0 < f(b)$. For an arbitrary $y_0$, define the set

\\[
E = \Set{ x\in [a,b] \mid f(x) < y_0 }
\\]
Then $E$ is non-empty since $a \in E$ and $E$ is bounded above by $b$. Therefore, by the completeness property of the real numbers, $E$ has a least upper bound $c = \sup E$.
Since $f$ is continuous at $c$, we have $\delta > 0$ which satisfies
\\[
a\le x < a+\delta \implies f(x) < y_0 \nl
b-\delta < x \le b \implies f(x) > y_0
\\]
Therefore, $a<c<b$, and let's prove by contradiction that $f(c) = y_0$.
Assume $f(c) > y_0$, then there exists $\eta>0$ such that
\\[
c-\eta < x < c+\eta \implies f(x) > y_0
\\]
Then $c-\eta$ is an upper bound of $E$, which contradicts the fact that $c$ is the least upper bound of $E$.
If $f(c) < y_0$, then there exists $\eta>0$ such that
\\[
c-\eta < x < c+\eta \implies f(x) < y_0
\\]
Then $c+\eta/2 \in E$, which contradicts the fact that $c$ is the least upper bound of $E$.
Therefore, finally we conclude that $f(c) = y_0$.
</details>

## Continuous Extension

A function $f$ is said to have a **continuous extension** at a point $a$ if there exists a function $g$ such that:
 - $g$ is continuous at $a$,
 - $g(x) = f(x)$ for all $x$ in the domain of $f$.

In other words, $g$ extends $f$ to include the point $a$ while preserving continuity.
 - $g(a) = \lim_{x \to a} f(x)$.

The sinc function is a classic example of a function that has a continuous extension at $x = 0$.
The continuous extension of the sinc function is defined as:
\\[
g(x) = \begin{cases}
\sin x / x &; x \neq 0 \nl
1 &; x = 0
\end{cases}
\\]