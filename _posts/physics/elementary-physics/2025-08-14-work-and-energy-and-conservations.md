---
layout: post
title: "Work and Energy & Conservations"
subtitle: "eph5"
classification: "Elementary Physics 5"
categories: physics
tags: elementary-physics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Work

**Work** is defined as the product of the force applied to an object and the distance over which that force is applied, in the direction of the force.
The formula for work is given by:

\\[
W_{12} = \int_{\b{r}_1}^{\b{r}_2} \b{F} \cdot \dd{\b{s}}
\\]

It is often denoted as $W$, and its SI unit is the **joule** ($\mathrm{J=N \cdot m= kg \cdot m^2 / s^2}$).

### Power

**Power** is the rate at which work is done or energy is transferred.
It is defined as:

\\[
P = \odv{W}{t}
\\]

Alternatively, power can also be expressed in terms of force and velocity:

\\[
\begin{align\*}
P &= \odv{W}{t} \nl
&= \odv{}{t} \int \b{F} \cdot \odv{\b{s}}{t} \dd{t} \nl
&= \b{F} \cdot \b{v}
\end{align\*}
\\]

It is often denoted as $P$, and its SI unit is the **watt** ($\mathrm{W=J/s= kg \cdot m^2 / s^3}$).

## Kinetic Energy

By the Newton's second law,

\\[
\begin{align\*}
W_{12} &= \int\_{\b{r}\_1}^{\b{r}\_2} \b{F} \cdot \dd{\b{s}} \nl
&= \int\_{\b{r}\_1}^{\b{r}\_2} m \dot{\b{v}} \cdot \odv{\b{s}}{t} \dd{t} \nl
&= \int\_{t_1}^{t_2} m \dot{\b{v}} \cdot \dd{\b{v}} \nl
&= \int\_{\b{v}\_1}^{\b{v}\_2} m \dd{ \left( \frac{1}{2} \abs{\b{v}}^2 \right) } \nl
&= \frac{1}{2} m (v_2^2 - v_1^2)
\end{align\*}
\\]

The **kinetic energy** of an object is defined as:

\\[
K = \frac{1}{2} m v^2
\\]

Then we get:

\\[
W = \Delta K
\\]

This is known as the **work-energy theorem**.
We can conclude that energy is something that can be converted into work,
and work is the transfer of energy.

## Conservative Forces

A force is said to be **conservative** if the work done by the force on an object moving from one point to another is independent of the path taken.
For conservative forces, the work done is only dependent on the initial and final positions of the object.
In other words,

\\[
\oint \b{F}_C \cdot \dd{\b{s}} = 0
\\]

By the mathematical analysis of the property, a conservative force can be expressed as the negative gradient of some scalar function $U$:

\\[
\b{F}_C = -\grad U
\\]

and $U$ is called the **potential energy** by the conservative force.

### Potential Energy

The **potential energy** associated with a conservative force is defined as the work done by the force when moving an object from a reference point to a specific point in space.
The potential energy is given by:

\\[
U(\b{r}) = -\int_{\b{r}_0}^{\b{r}} \b{F}_C \cdot \dd{\b{s}}
\\]

where $\b{r}_0$ is the reference point and can be chosen arbitrarily.
The work done by the conservative force is then:

\\[
W = -\Delta U
\\]

We have some common examples of conservative forces and their associated potential energies:
- The gravitational force $\;\b{F} = -m g \hat{\b{z}} \;$ has the potential energy $\;U = m g z$.
- The elastic force of a spring $\;\b{F} = -k \b{x} \;$ has the potential energy $\;U = \frac{1}{2} k x^2$.

Equilibrium points can be found by setting the gradient of the potential energy to zero:

\\[
\grad U = 0
\\]

The nature of the equilibrium point can be determined by examining the second derivative (or Hessian matrix in multiple dimensions) of the potential energy.
If the point is a local minimum, it is a _stable equilibrium_; if it is a local maximum, it is an _unstable equilibrium_.
If it is a saddle point, it is called an _astable equilibrium_.

### Mechanical Energy

The **mechanical energy** of a system is the sum of its kinetic energy and potential energy:

\\[
E = K + U
\\]

## Conservation Theorems

### Linear Momentum Conservation

The **linear momentum** of an object is conserved if the net external force acting on the object is zero.

\\[
\dot{\b{p}} = \b{F}_{\text{net}}
\\]

This theorem can be analogized to the conservation of the linear momentum of a system of particles,
which is trivial by the Newton's third law.

### Mechanical Energy Conservation

The **mechanical energy** of a system is conserved if the only forces acting on the system are conservative forces.
In this case, the total mechanical energy remains constant:

\\[
W = \Delta K = -\Delta U \implies \Delta (K + U) = \Delta E = 0
\\]