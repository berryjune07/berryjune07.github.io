---
layout: post
title: "Linearization and Differentials"
subtitle: "cal3.2"
classification: "Calculus 3.2"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Linearization

If $f$ is a function that is differentiable at $x = a$, then the **linearization** of $f$ at $a$ is given by:

\\[
L(x) = f(a) + f\'(a)(x - a)
\\]

This linear function $L(x)$ approximates the value of $f(x)$ near $x = a$. The point $x = a$ is called the _center_ of the approximation.

## Differentials

The **differential** of a function $y=f(x)$ at a point $x$ is defined as:

\\[
\dd{y} = f\'(x) \, \dd{x}
\\]

Here, $\dd{y}$ represents the change in $y$ corresponding to a small change $\dd{x}$ in $x$. The differential $\dd{y}$ can be thought of as the linear approximation of the change in $y$ when $x$ changes by a small amount.

### Estimating Changes

To estimate the change in $y$ when $x$ changes from $a$ to $a + \Delta x$, we can use the differential:

\\[
\Delta y = f(a+\Delta x) -f(a) \approx \dd{y} = f\'(a) \, \Delta x
\\]

This approximation is valid when $\Delta x$ is small, allowing us to use the linearization of $f$ at $a$.

### Error in Differential Approximation

Supposing that $\dd{x} = \Delta x$, the approximation error is calculated as:

\\[
\begin{align\*}
\text{Error} &= \Delta y - \dd{y} \nl
&= f(a + \Delta x) - f(a) - f\'(a) \, \dd{x} \nl
&= \left( \frac{f(a + \Delta x) - f(a)}{\Delta x} - f\'(a) \right) \Delta x \nl
&= \varepsilon \Delta x
\end{align\*}
\\]

where $\varepsilon$ is the error term, which approaches zero as $\Delta x$ approaches zero.

\\[
\lim_{\Delta x \to 0} \varepsilon = f\'(a) - f\'(a) = 0
\\]

Thus, the error in the differential approximation becomes negligible as $\Delta x$ becomes very small.
In summary,

\\[
\Delta y = f\'(a) \, \Delta x + \varepsilon \Delta x
\\]