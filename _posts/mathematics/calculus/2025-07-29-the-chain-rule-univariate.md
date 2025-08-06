---
layout: post
title: "The Chain Rule (univariate)"
subtitle: "cal3.3"
classification: "Calculus 3.3"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## The Chain Rule

The **chain rule** is a fundamental theorem in calculus that allows us to differentiate composite functions.
If $f$ and $g$ are functions such that $f$ is differentiable at $g(x)$ and $g$ is differentiable at $x$, then the derivative of the composite function $f(g(x))$ is given by:

\\[
(f \circ g)\'(x) = f\'(g(x)) \cdot g\'(x)
\\]

Denoting $y=g(x), z=f(y)$, we can express the chain rule as:

\\[
\odv{z}{x} = \odv{z}{y} \odv{y}{x}
\\]

This means that the change in $z$ with respect to $x$ is the product of the change in $z$ with respect to $y$ and the change in $y$ with respect to $x$.
This is particularly useful when dealing with functions that are composed of multiple layers, allowing us to break down the differentiation process into manageable parts.
Applying the chain rule multiple times allows us to differentiate functions with more than one layer of composition.

### Proof

To prove the chain rule, we will use the linearization of the function.
Read [here](mathematics/linearization-and-differentials.html#error-in-differential-approximation) for more details.
Denoting the $y_0 = g(x_0)$,

\\[
\Delta y = (g\'(x_0) + \varepsilon_1) \Delta x \nl\nl
\Delta z = (f\'(y_0) + \varepsilon_2) \Delta y
\\]

Substituting $\Delta y$ into the equation for $\Delta z$ gives:

\\[
\Delta z = (f\'(y_0) + \varepsilon_2) (g\'(x_0) + \varepsilon_1) \Delta x
\\]

Taking the limit as $\Delta x \to 0$, we have:

\\[
\lim_{\Delta x \to 0} \varepsilon_1 = 0, \quad \lim_{\Delta x \to 0} \Delta y = 0, \quad \lim_{\Delta y \to 0} \varepsilon_2 = 0
\\]

Thus, we can write:

\\[
\odv{z}{x}\bigg\|\_{x=x_0} = \lim\_{\Delta x \to 0} \frac{\Delta z}{\Delta x} = f\'(y_0) g\'(x_0) = \odv{z}{y}\bigg\|\_{y=y_0} \odv{y}{x} \bigg\|\_{x=x_0}
\\]