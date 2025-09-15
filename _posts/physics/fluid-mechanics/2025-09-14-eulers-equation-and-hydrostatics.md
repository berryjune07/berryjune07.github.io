---
layout: post
title: "Euler's Equation and Hydrostatics"
subtitle: "fl1.3"
classification: "Fluid Mechanics 1.3"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Euler's Equation

In fluid dynamics, Euler's equation describes the motion of an ideal fluid.
We'll use the equations derived in the [previous section](ideal-fluids-and-the-equation-of-continuity.html) to arrive at Euler's equation.

First, from the continuity equation for mass, we have:

\\[
\mdv{\rho} = -\rho \div \b{v}
\\]

Next, we consider the momentum equation for an ideal fluid.

\\[
\rho \mdv{\b{v}} = -\grad p + \b{f}
\\]

Here, $\b{f}$ represents the body force per unit volume acting on the fluid, such as gravity.
Dividing through by $\rho$, we get:

\\[
\mdv{\b{v}} = -\frac{\grad p}{\rho} + \b{a}
\\]

where $\b{a} = \frac{\b{f}}{\rho}$ is the acceleration due to body forces.
Finally, let's bring the energy equation into the picture.

\\[
\rho \mdv{} \left( \frac{1}{2} v^2 + \varepsilon \right) = - \div (p \b{v}) + \b{v} \cdot \b{f}
\\]

Substituting the material derivative of velocity from the momentum equation, we have:

\\[
\mdv{\varepsilon} = -\frac{p}{\rho} \div \b{v}
\\]

We can observe that the change in internal energy per unit mass is irrelevant to the external forces acting on the fluid.
Summarizing, we have the following set of equations for an ideal fluid:

\\[
\begin{align\*}
\mdv{\rho} &= -\rho \div \b{v} \nl
\mdv{\b{v}} &= -\frac{\grad p}{\rho} + \b{a} \nl
\mdv{\varepsilon} &= -\frac{p}{\rho} \div \b{v}
\end{align\*}
\\]

These equations are known as **Euler's equations** for an ideal fluid.

### Thermodynamic Analysis

Let's think of the familiar thermodynamic relation:

\\[
\dd{w} = T \dd{s} + \frac{1}{\rho} \dd{p}
\\]

Since an ideal fluid is adiabatic, we have $\dd{s} = 0$.
Thus, we can write:

\\[
\grad w = \frac{1}{\rho} \grad p
\\]

Substituting this into the momentum equation, we get:

\\[
\pdv{\b{v}}{t} + (\b{v} \cdot \grad) \b{v} = -\grad w + \b{a}
\\]

Using a well-known formula from vector calculus:

\\[
\frac{1}{2} \grad v^2 = \b{v} \times (\curl \b{v}) + (\b{v} \cdot \grad) \b{v}
\\]

we can rewrite the momentum equation as:

\\[
\pdv{\b{v}}{t} - \b{v} \times (\curl \b{v}) = -\grad \left( w + \frac{1}{2} v^2 \right) + \b{a}
\\]

This form of Euler's equation is particularly useful for analyzing fluid flow in various scenarios.
If we take the curl of both sides, we obtain:

\\[
\pdv{}{t} (\curl \b{v}) = \curl \[ \b{v} \times (\curl \b{v}) \] + \curl \b{a}
\\]

if $\b{a}$ is a conservative force field, the last term vanishes.

## Hydrostatics

For a fluid at rest in a uniform gravitational field, we have $\b{v} = 0$ and $\b{a} = -g \hat{\b{z}}$.
Substituting these into the momentum equation, we get:

\\[
\grad p = -\rho g \hat{\b{z}}
\\]

It then follows that the density is also a function of $z$ only.

\\[
\rho = -\frac{1}{g} \odv{p}{z}
\\]

### Constant Density

Let's assume that the fluid density $\rho$ is constant throughout the fluid.
Then from the condition $p = p_0$ at $z = h$, we have:

\\[
p = p_0 + \rho g (h - z)
\\]

### Varying Density

However, for large masses of fluid, the density may vary with depth due to compressibility effects.
If the fluid is close to thermodynamically perfect gas, we can use the ideal gas law:

\\[
\odv{p}{z} = -\frac{gM}{R T} p
\\]

where $R$ is the specific gas constant and $T$ is the temperature.
Assuming $T$ is constant with depth, we can integrate this equation to find:

\\[
p = p_0 \exp \left\[ -\frac{gM}{R T} z \right\]
\\]

where $p_0$ is the pressure at $z = 0$.
If the temperature varies with depth, we can still integrate the equation if we know the temperature profile $T(z)$.
The most important example is the linear temperature profile such as the troposphere.

\\[
T(z) = T_0 - L z
\\]

Here, $T_0$ is the temperature at $z = 0$ and $L$ is the lapse rate.
Integrating the pressure gradient equation with this temperature profile, we find:

\\[
p = p_0 \left( 1 - \frac{L z}{T_0} \right)^{gM/RL}
\\]

### Astronomical Case

Finally, let's consider the case of a spherically symmetric gravitational field, such as a star.
Let $\Phi$ be the gravitational potential, which satisfies Poisson's equation:

\\[
\laplacian \Phi = 4 \pi G \rho
\\]

Then, the hydrostatic equilibrium condition becomes:

\\[
\grad p = -\rho \grad \Phi
\\]

Dividing through by $\rho$ and taking the divergence of both sides, we obtain:

\\[
\div \left( \frac{1}{\rho} \grad p \right) = -4 \pi G \rho
\\]

If the body is not rotating, we can assume spherical symmetry.
Then, the equation simplifies to:

\\[
\frac{1}{r^2} \odv{}{r} \left( \frac{r^2}{\rho} \odv{p}{r} \right) = -4 \pi G \rho
\\]

This equation is fundamental in astrophysics for modeling the structure of stars and planets.

## Condition that Convection be Absent

