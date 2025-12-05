---
layout: post
title: "Kelvin's Circulation Theorem"
subtitle: "fl1.6"
classification: "Fluid Mechanics 1.6"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Vorticity and Circulation

In fluid dynamics, **vorticity** is a measure of the local rotation of fluid elements. It is defined mathematically as the curl of the velocity field:

\\[
\bs{\omega} = \curl \b{v}
\\]

Circulation, on the other hand, is a measure of the total "twisting" or "rotational" motion of the fluid around a closed loop. It is defined as the line integral of the velocity field around a closed curve $C$:

\\[
\Gamma = \oint_C \b{v} \cdot \dd{\b{l}}
\\]

By the Stokes' theorem, circulation can also be related to vorticity through the surface integral of vorticity over a surface $S$ bounded by the curve $C$:

\\[
\Gamma = \iint_S \bs{\omega} \cdot \dd{\b{S}}
\\]

## Kelvin's Circulation Theorem

In fluid mechanics, **Kelvin's circulation** theorem states:
> In a barotropic, ideal fluid with conservative body forces, the circulation around a closed curve (which encloses the same fluid elements) moving with the fluid remains constant with time.

Mathematically, this can be expressed as:

\\[
\mdv{\Gamma} = 0
\\]

### Proof

\\[
\mdv{\Gamma} = \oint_C \mdv{\b{v}} \cdot \dd{\b{l}} + \oint_C \b{v} \cdot \mdv{\dd{\b{l}}}
\\]

From the Euler equation for an ideal fluid:

\\[
\mdv{\b{v}} = -\frac{1}{\rho} \grad p + \grad \Phi
\\]

Substituting this,

\\[
\begin{align\*}
\oint_C \mdv{\b{v}} \cdot \dd{\b{l}} &= \oint_C \left( -\frac{1}{\rho} \grad p + \grad \Phi \right) \cdot \dd{\b{l}} \nl
&= \iint_S \curl \left( -\frac{1}{\rho} \grad p + \grad \Phi \right) \cdot \dd{\b{S}} \nl
&= \iint_S \frac{1}{\rho^2} (\grad \rho \times \grad p) \cdot \dd{\b{S}}
\end{align\*}
\\]

since $\curl(\grad f) = 0$ for any scalar function $f$.
For a barotropic fluid, $p = p(\rho)$, so $\grad p=\pdv{p}{\rho}\grad \rho$, and thus $\grad \rho \times \grad p = 0$.
Therefore, the first term vanishes:

\\[
\oint_C \mdv{\b{v}} \cdot \dd{\b{l}} = 0
\\]

Now, consider the second term. Let's parametrize the curve $C$ by a parameter $a$ such that $\b{l} = \b{l}(a, t)$, where $a$ is constant for a given fluid element.
Then,

\\[
\dd{\b{l}(a,t)} = \b{l}(a + \dd{a}, t) - \b{l}(a, t) = \pdv{\b{l}(a,t)}{a} \dd{a}
\\]

Taking the material derivative,

\\[
\begin{align\*}
\mdv{\dd{\b{l}}} &= \pdv{\b{v}(\b{l}(a,t), t)}{a} \dd{a} = \pdv{\b{v}}{\b{l}} \cdot \pdv{\b{l}}{a} \dd{a} \nl
&= (\dd{\b{l}} \cdot \grad) \b{v}
\end{align\*}
\\]

Thus, the second term becomes:

\\[
\begin{align\*}
\oint_C \b{v} \cdot \mdv{\dd{\b{l}}} &= \oint_C \b{v} \cdot (\dd{\b{l}} \cdot \grad) \b{v} \nl
&= \frac{1}{2} \oint_C \grad(v^2) \cdot \dd{\b{l}} \nl
&= 0
\end{align\*}
\\]

by the gradient theorem. Since both terms vanish, we have:

\\[
\mdv{\Gamma} = 0
\\]

It, of course, holds for ideal fluids; because the barotropic condition is more general than the isentropic (adiabatic) condition.
The conservation of circulation can be intuitively interpreted as meaning that the vorticity moves with the fluid elements.