---
layout: post
title: "Bernoulli's Equation"
subtitle: "fl1.5"
classification: "Fluid Mechanics 1.5"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Bernoulli's Equation

Let's recall the [Euler equation](eulers-equation-and-hydrostatics.html#thermodynamic-analysis) for an ideal fluid:

\\[
\pdv{\b{v}}{t} - \b{v} \times (\curl \b{v}) = -\grad \left( w + \frac{1}{2} v^2 \right) + \b{a}
\\]

where $w$ is the specific enthalpy and $\b{a}$ represents body forces per unit mass (e.g., gravity).
For **steady flow**, the time derivative term vanishes. If the body forces are conservative, i.e. $\b{a} = -\grad \Phi$, we can rewrite the equation as:

\\[
\b{v} \times (\curl \b{v}) = \grad \left( w + \frac{1}{2} v^2 + \Phi \right)
\\]

Now let's imagine a fluid particle moving along a particular streamline.
We'll think the velocity direction component of the vector equation above.
The left-hand side becomes zero because the cross product of the velocity vector with itself is zero.
Thus, we have:

\\[
\pdv{}{l} \left( w + \frac{1}{2} v^2 + \Phi \right) = 0
\\]

where $l$ is the variable parameterizing the streamline.
This implies that the quantity inside the parentheses is constant along a streamline:

\\[
w + \frac{1}{2} v^2 + \Phi = \text{const.}
\\]

This is known as **Bernoulli's equation** for ideal fluids.
It states that the sum of the specific enthalpy, kinetic energy per unit mass, and potential energy per unit mass remains constant along a streamline.
We can also write it as:

\\[
\frac{1}{2} v^2 + \varepsilon + \frac{p}{\rho} + \Phi = \text{const.}
\\]

For gravity, $\Phi = gz$ where $z$ is the height above a reference level.