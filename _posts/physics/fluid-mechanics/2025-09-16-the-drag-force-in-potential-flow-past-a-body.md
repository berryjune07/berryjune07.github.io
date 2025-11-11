---
layout: post
title: "The Drag Force in Potential Flow Past a Body"
subtitle: "fl1.8"
classification: "Fluid Mechanics 1.8"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

Let's consider the problem of irrotational, incompressible and ideal fluid flow past a stationary body.
By shifting to a reference where body is moving with a constant velocity through a fluid at rest at infinity, we can analyze the flow characteristics around the body.
In this scenario, we denote the velocity of the body as $\b{u}$ and the fluid velocity as $\b{v}$.

## Governing Equations

As we know, the velocity potential $\phi$ satisfies Laplace's equation in the fluid domain:

\\[
\laplacian \phi = 0
\\]

Taking the origin somewhere inside the moving body, the general form of the potential at great distances from the body is given by:

\\[
\phi = - \frac{a}{r} + \b{A} \cdot \frac{\b{r}}{r^3} + O\left( \frac{1}{r^3} \right)
\\]

However, since the fluid is incompressible so that $\div \b{v} = 0$, we have $a = 0$.
Thus, by approximating the potential at large distances, we have the velocity field as:

\\[
\b{v} = \grad \phi = \frac{3(\b{A} \cdot \hat{\b{r}}) \hat{\b{r}} - \b{A}}{r^3}
\\]

## Drag Force and Lift force

To find the total force $\b{F}$ exerted by the fluid on the body,
we first calculate the total energy $E$ of the entire fluid.
Denote $V_0$ as the volume occupied by the body and $S_0$ as its surface.
Let $V$ be the volume of the large sphere enclosing both the body and the fluid, and $S$ be its surface.

\\[
\begin{align\*}
E &= \frac{1}{2} \rho \int v^2 \, \dd{V} \nl
&= \frac{1}{2} \rho \left\[ \int u^2 \, \dd{V} + \int (\b{v} + \b{u})\cdot(\b{v} - \b{u}) \, \dd{V} \right\] \nl
&= \frac{1}{2} \rho u^2 (V - V_0) + \frac{1}{2} \rho \int \div \[ (\phi + \b{u} \cdot \b{r})(\b{v} - \b{u}) \] \, \dd{V} \nl
&= \frac{1}{2} \rho u^2 (V - V_0) + \frac{1}{2} \rho \oint_{S_0+S} (\phi + \b{u} \cdot \b{r})(\b{v} - \b{u}) \cdot \dd{A}
\end{align\*}
\\]

On the surface of body, we have the boundary condition $(\b{v}-\b{u}) \cdot \dd{A} = 0$.

\\[
\begin{align\*}
E &= \frac{1}{2} \rho u^2 (V - V_0) + \frac{1}{2} \rho \oint_{S} \left( -\frac{\b{A} \cdot \hat{\b{r}}}{r^2} + \b{u} \cdot \b{r} \right) \left( \frac{3(\b{A} \cdot \hat{\b{r}}) \hat{\b{r}} - \b{A}}{r^3} - \b{u} \right) \cdot \hat{\b{r}} R^2 \, \dd{\Omega} \nl
&= \frac{1}{2} \rho u^2 (V - V_0) + \frac{1}{2} \rho \int \left( -\b{A} \cdot \hat{\b{r}} + \b{u} \cdot \hat{\b{r}} R^3 \right) \left( \frac{2(\b{A} \cdot \hat{\b{r}})}{R^3} - \b{u} \cdot \hat{\b{r}} \right) \, \dd{\Omega} \nl
&= \frac{1}{2} \rho u^2 \left( \frac{4}{3} \pi R^3 - V_0 \right) + \frac{1}{2} \rho \int \left\[ 3(\b{A} \cdot \hat{\b{r}})(\b{u} \cdot \hat{\b{r}}) - (\b{u} \cdot \hat{\b{r}})^2 R^3 - \frac{2(\b{A} \cdot \hat{\b{r}})^2}{R^3} \right\] \, \dd{\Omega}
\end{align\*}
\\]

Neglecting the terms that vanish as $R \to \infty$, we have:

\\[
\begin{align\*}
E &= \frac{1}{2} \rho u^2 \left( \frac{4}{3} \pi R^3 - V_0 \right) + \frac{1}{2} \rho \left( \b{A} \cdot \b{u} - u^2 R^3 \right) 4 \pi \nl
&= \frac{1}{2} \rho \left( 4 \pi \b{A} \cdot \b{u} - V_0 u^2 \right)
\end{align\*}
\\]

The exact calculation of the vector $\b{A}$ depends on the shape of the body,
but we call still observe that the general nature of the dependence of $\b{A}$ on $\b{u}$ is linear,
since the boundary condition on the body surface is linear in $\b{u}$ and the governing equation is linear as well.

\\[
\b{A} = \b{C} \cdot \b{u}
\\]

for some constant tensor $\b{C}$ that depends on the shape of the body.
Thus, we have the energy expressed as:

\\[
E = \frac{1}{2} \b{u}^\top \b{m} \b{u}
\\]

where the symmetric tensor $\b{m}$, which is called the induced mass tensor, is given by:

\\[
\b{m} = 4 \pi \rho \b{C} - \rho V_0 \b{I}
\\]

It follows from this that the total momentum $\b{P}$ of the fluid is given by:

\\[
\begin{align\*}
\b{P} &= \pdv{E}{\b{u}} = \b{m} \cdot \b{u} \nl
&= 4\pi \rho \b{A} - \rho V_0 \b{u}
\end{align\*}
\\]

The force $\b{F}$ exerted by the fluid on the body is given by the time rate of change of the total momentum of the fluid:

\\[
\b{F} = - \odv{\b{P}}{t}
\\]

The component of the force in the direction of motion of the body is called the **drag force**,
and the component perpendicular to the direction of motion is called the **lift force**.
However, it must be emphasized that if the fluid has a free surface,
a body moving through the fluid will create waves on the free surface,
and the generation of these waves will result in a drag force on the body.
This form of drag is known as **wave drag**, and it is not accounted for in the potential flow theory discussed here.

### D'Alembert's Paradox

If it were possible to have potential flow past a body moving uniformly through in an ideal fluid,
we should have $\b{P} = \text{const.}$ and hence $\b{F} = 0$.
This means that there would be no drag force acting on the body.
This result is known as **D'Alembert's paradox**.
This is only available in ideal fluids: in ideal fluids by definition there is no dissipation of energy,
and hence no mechanism for the fluid to exert a drag force on the body.
In real fluids, viscosity leads to the formation of boundary layers on the surface of the body,
and the separation of these boundary layers results in the generation of vortices in the wake of the body.
The presence of these vortices leads to a pressure difference between the front and back of the body,
resulting in a non-zero drag force.

### Oscillating Bodies

Suppose that the body is oscillating under an external force $\b{f}$.
We than have:

\\[
M \odv{u}{t} = - \odv{P}{t} + \b{f}
\\]

where $M$ is the mass of the body. It can be alson written as:

\\[
\left( M \b{I} + \b{m} \right) \cdot \odv{\b{u}}{t} = \b{f}
\\]

Now let $\b{v}$ be what the fluid velocity at the position of the body would be if the body were absent;
i.e. unperturbed fluid velocity.
The force $\b{f}$ required to produce the motion of the body is then given by:

\\[
\b{f} = \rho V_0 \odv{\b{v}}{t} - \b{m} \cdot \odv{}{t} (\b{u} - \b{v})
\\]

where the first term on the right-hand side represents the force required to accelerate the fluid that would occupy the volume of the body if it were absent,
and the second term represents the additional force required to overcome the inertia of the fluid induced by the motion of the body relative to the fluid.
Using $\b{f}= M \odv{\b{u}}{t}$, by integrating the equation we obtain:

\\[
\left( M \b{I} + \b{m} \right) \cdot \b{u} = (\b{m} + \rho V_0 \b{I}) \cdot \b{v}
\\]

The constant of integration is zero because when $\b{u} = 0$, we must have $\b{v} = 0$ as well.