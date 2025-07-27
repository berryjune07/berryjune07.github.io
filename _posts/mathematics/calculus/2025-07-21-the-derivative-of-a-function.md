---
layout: post
title: "The Derivative of a Function"
subtitle: "cal3.1"
classification: "Calculus 3.1"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Derivative of a Function

The derivative of a function $f(x)$ at a point $x_0$ is defined as the slope of the tangent line to the graph of the function at that point. Mathematically, it is given by:

\\[
f\'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
\\]

This limit, if it exists, represents the instantaneous rate of change of the function at the point $x_0$.
If we regard $x_0$ as a variable $x$, we can express the derivative as:

\\[
f\'(x) = \odv{f}{x} = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = \lim_{z \to x} \frac{f(z) - f(x)}{z - x}
\\]

and this is the **derivative** of the function.

### Tangent Line

The tangent line to the graph of the function at the point $(x_0, f(x_0))$ can be expressed as:

\\[
y = f\'(x_0)(x - x_0) + f(x_0)
\\]

if the derivative exists. This line represents the best linear approximation to the function at that point.

### One-Sided Derivatives

If the limit defining the derivative exists only from one side, we can define one-sided derivatives:

- **Right-hand derivative** at $x_0$: $f\'\_+(x_0) = \lim\_{h \to 0^+} \frac{f(x_0 + h) - f(x_0)}{h}$
- **Left-hand derivative** at $x_0$: $f\'\_-(x_0) = \lim\_{h \to 0^-} \frac{f(x_0 + h) - f(x_0)}{h}$

If both one-sided derivatives exist and are equal, the two-sided derivative exists and is equal to that common value.
We say that the function is **differentiable** at on a closed interval $[a, b]$ if it is differentiable at an open interval $(a, b)$,
and the right-hand derivative at $a$ and the left-hand derivative at $b$ exist.

## Differentiability and Continuity

If a function is differentiable at a point $x_0$, it must also be continuous at that point. However, the converse is not true: a function can be continuous at a point but not differentiable there.
It can be proven by a simple limit law.

\\[
\begin{align\*}
\lim_{x\to x_0} f(x) &= \lim_{x \to x_0} f(x)-f(x_0) + f(x_0) \nl
&= f(x_0) + \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) \nl
&= f(x_0) + f\'(x_0) \cdot 0 \nl
&= f(x_0)
\end{align\*}
\\]

## Types of Non-Differentiability

A function may not be differentiable at a point for several reasons:

1. **Discontinuity**: This occurs when the function is not continuous at a point.
2. **Sharp Corners**: This occurs when the left-hand and right-hand derivatives at a point exist but are not equal.
3. **Vertical Tangents**: This occurs when the left-hand and right-hand derivatives at a point both approach infinity or negative infinity.
4. **Cusps**: This occurs when the one-sided derivative at a point approaches infinity from one side and negative infinity from the other side.
5. **Oscillations**: This occurs when the function oscillates infinitely near a point, preventing the limit from existing.

## Differentiation Rules

The derivative of a function can be computed using several rules:

\\[
\begin{align\*}
\bullet \;& \odv{}{x}c = 0 \quad (c \in \mathbb{R}) &
\bullet \;& \odv{}{x}x = 1 \nl
\bullet \;& \odv{}{x}x^n = nx^{n-1} \quad (n \in \mathbb{Z}) &
\bullet \;& \odv{}{x}(cf) = c \odv{}{x}f \quad (c \in \mathbb{R}) \nl
\bullet \;& \odv{}{x}(f + g) = \odv{f}{x} + \odv{g}{x} &
\bullet \;& \odv{}{x}(fg) = \odv{f}{x}g + f\odv{g}{x} \nl
\bullet \;& \odv{}{x}\left(\frac{f}{g}\right) = \frac{\dps \odv{f}{x}g - f\odv{g}{x}}{g^2} \quad (g \neq 0)
\end{align\*}
\\]

These rules allow us to compute the derivatives of many functions without having to rely on the limit definition directly.
We can derive these rules from the limit definition of the derivative and the properties of limits.

## Derivative of Trigonometric Functions

The derivatives of the basic trigonometric functions are as follows:

| $f(x)$        | $\sin x$ | $\cos x$  | $\tan x$   | $\cot x$    | $\sec x$        | $\csc x$         |
|---------------|----------|-----------|------------|-------------|-----------------|------------------|
| $f^\prime(x)$ | $\cos x$ | $-\sin x$ | $\sec^2 x$ | $-\csc^2 x$ | $\sec x \tan x$ | $-\csc x \cot x$ |
{:.centered}

It can be proven by the following limits, trigonometrical identities, and the differentiation rules.

\\[
\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0
\\]

And the limit above is derived from the properties [here](/mathematics/periodic-and-trigonometric-functions.html#trigonometrical-identities).

## Higher-Order Derivatives

The derivative of a function can be differentiated again to obtain the second derivative, and this process can be repeated to obtain higher-order derivatives. The $n$-th derivative of a function $f(x)$ is denoted as:

\\[
f^{(n)}(x) = \odvn{n}{f}{x} := \odv{f^{(n-1)}}{x} \quad \left(f^{(0)}(x) := f(x)\right)
\\]