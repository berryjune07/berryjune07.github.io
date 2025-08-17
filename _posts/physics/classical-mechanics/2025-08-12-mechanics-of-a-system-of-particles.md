---
layout: post
title: "Mechanics of a System of Particles"
subtitle: "cm1.1"
classification: "Classical Mechanics 1.1"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Mechanics of a Particle

Let $\b{r}$ be the position vector of a particle, then the velocity $\b{v}$ and acceleration $\b{a}$ are given by

\\[
\begin{align\*}
\b{v} &= \odv{\b{r}}{t} \nl
\b{a} &= \odv{\b{v}}{t} = \odvn{2}{ \b{r} }{t}
\end{align\*}
\\]

The linear momentum $\b{p}$ of a particle with mass $m$ is defined as

\\[
\b{p} = m\b{v}
\\]

The mechanics of the particle is contained in _Newton's second law of motion_,
which states that there exists frames of reference in which the motion of a particle is described by

\\[
\b{F} = \odv{\b{p}}{t}
\\]

where $\b{F}$ is the net force acting on the particle.
Such a frame of reference is called an _inertial_ or _Galilean system_.
If the mass $m$ is constant, we can also write this as

\\[
\b{F} = m\odv{\b{v}}{t} = m\b{a}
\\]

Many of the important conclusions of mechanics can be expressed in the form of conservation theorems,
and the first is the _conservation of linear momentum of a particle_:
> If $\b{F} = 0$, then $\b{p}$ is conserved.

The angular momentum $\b{L}$ of a particle with respect to a point $\b{O}$ is defined as

\\[
\b{L} = \b{r} \times \b{p}
\\]

where $\b{r}$ is the position vector of the particle with respect to the point $\b{O}$.
The moment of force or torque $\b{N}$ with respect to the point $\b{O}$ is defined as

\\[
\b{N} = \b{r} \times \b{F}
\\]

We can also express the angular momentum in terms of the torque:

\\[
\begin{align\*}
\odv{\b{L}}{t} &= \odv{}{t} (\b{r} \times \b{p}) \nl
&= \b{v} \times m\b{v} + \b{r} \times \b{F} \nl
&= \b{N}
\end{align\*}
\\]

And we similarly have the _conservation of angular momentum of a particle_:
> If $\b{N} = 0$, then $\b{L}$ is conserved.

Next, the work done by a force $\b{F}$ on a particle is defined as

\\[
W_{12} = \int_1^2 \b{F} \cdot \dd{\b{s}}
\\]

If the mass $m$ is constant, we can also write this as

\\[
\begin{align\*}
W_{12} &= \int_1^2 m\odv{\b{v}}{t} \cdot \odv{\b{r}}{t} \dd{t} \nl
&= m\int_1^2 \odv{}{t} \left( \frac{v^2}{2} \right) \dd{t} \nl
&= \frac{m}{2} \left( v_2^2 - v_1^2 \right)
\end{align\*}
\\]

Thus we define the _kinetic energy_ $T$ of a particle as

\\[
T = \frac{1}{2}mv^2
\\]

and get the _work-energy theorem_:

\\[
W = \Delta T
\\]

Let's talk about the _conservative forces_.
A force $\b{F}$ is called conservative if the work done by the force from a fixed point to another fixed point is independent of the path taken.
This is equivalent with:

\\[
\oint \b{F} \cdot \dd{\b{s}} = 0
\\]

And by the Stokes theorem, this is equivalent with $\curl \b{F} = 0$.
Thus, by the Poincaré lemma, we can write the force as the gradient of a scalar function $U$:

\\[
\b{F} = -\grad U
\\]

The function $U(\b{r})$ is called the _potential energy_ of the force, and can be
calculated by setting the potential energy at a fixed point to zero:

\\[
U(\b{r}) = -\int_{\b{r}_0}^{\b{r}} \b{F} \cdot \dd{\b{s}}
\\]

By the gradient theorem, we can write the work done by a conservative force as

\\[
W = -\Delta U
\\]

Therefore, we can also write the work-energy theorem as

\\[
\Delta (T + U) = 0
\\]

This means that the sum of the kinetic energy and potential energy is conserved, and we call this the _total mechanical energy_.
However, if a force is conservative but depends explicitly on time, then the total mechanical energy is not conserved;
physically, displacement(path integral) is nonzero only when time flows.

## Mechanics of a System of Particles

In generalizing the mechanics of a particle to a system of particles,
we must distinguish between the _external forces_ acting on the system and the _internal forces_ acting between the particles of the system.
The equation of motion for the $i$-th particle is given by:

\\[
\dot{\b{p}}\_i = \b{F}\_i^\text{ext} + \sum_{j \neq i} \b{F}\_{ij}
\\]

where $\b{F}\_i^\text{ext}$ is the external force acting on the $i$-th particle,
and $\b{F}\_{ij}$ is the internal force acting on the $i$-th particle due to the $j$-th particle.
Summing over all particles, we get the equation of motion for the system:

\\[
\odvn{2}{}{t} \sum\_i m\_i \b{r}\_i = \sum\_i \b{F}\_i^\text{ext} + \sum\_{i\neq j} \b{F}\_{ij}
\\]

By the _Newton's third law of motion_, the internal forces satisfy $\b{F}\_{ij} = -\b{F}\_{ji}$, and thus the sum of the internal forces is zero.
Writing the total mass of the system as $M = \sum_i m_i$ and the _center of mass_ $\b{R}$ as

\\[
\b{R} = \frac{1}{M} \sum_i m_i \b{r}_i
\\]

we can rewrite the equation of motion for the system as

\\[
M \odvn{2}{}{t} \b{R} = \sum_i \b{F}_i^\text{ext} = \b{F}^\text{ext}
\\]

This means that the center of mass of the system behaves like a single particle with mass $M$ under the influence of the external forces.
The total linear momentum of the system is given by

\\[
\b{P} = \sum_i m_i \odv{\b{r}_i}{t} = M \b{V}
\\]

where $\b{V} = \odv{\b{R}}{t}$ is the velocity of the center of mass.
And we have the _conservation of linear momentum of a system of particles_:
> If $\b{F}^\text{ext} = 0$, then $\b{P}$ is conserved.

The total angular momentum of the system with respect to a point $\b{O}$ is given by

\\[
\b{L} = \sum_i \b{r}_i \times \b{p}_i
\\]

Let's define $\b{r}_{ij} = \b{r}_i - \b{r}_j$ as the position vector of the $i$-th particle with respect to the $j$-th particle.

\\[
\begin{align\*}
\odv{\b{L}}{t} &= \sum_i \odv{}{t} (\b{r}\_i \times m_i \odv{\b{r}\_i}{t}) \nl
&= \sum_i \b{r}\_i \times \b{F}\_i^\text{ext} + \sum_{i\neq j} \b{r}\_i \times \b{F}\_{ij} \nl
&= \sum_i \b{r}\_i \times \b{F}\_i^\text{ext} + \sum_{i < j} \b{r}\_{ij} \times \b{F}\_{ij}
\end{align\*}
\\]

If the internal forces between the particles, in addition to being equal and opposite,
also lie along the line joining the particles -- a condition known as the _strong form of Newton's third law_ -- then the second term vanishes.
In this case, we can write the angular momentum of the system as

\\[
\odv{\b{L}}{t} = \sum_i \b{r}_i \times \b{F}_i^\text{ext} = \b{N}^\text{ext}
\\]

And we have the _conservation of angular momentum of a system of particles_:
> If $\b{N}^\text{ext} = 0$, then $\b{L}$ is conserved.

Let's see the system from the point of view of the center of mass.
Let's define

\\[
\b{r}^\prime_i = \b{r}_i - \b{R} \nl
\b{v}^\prime_i = \b{v}_i - \b{V}
\\]

Then we have a good property:

\\[
\sum_i m_i \b{r}^\prime_i = 0 \nl
\sum_i m_i \b{v}^\prime_i = 0
\\]

This means that the center of mass is at the origin in this new coordinate system.
Using this, we can rewrite the angular momentum of the system as

\\[
\begin{align\*}
\b{L} &= \sum_i \left( \b{r}^\prime_i + \b{R} \right) \times m_i \left( \b{v}^\prime_i + \b{V} \right) \nl
&= \b{R} \times M\b{V} + \sum_i \b{r}^\prime_i \times m_i \b{v}^\prime_i
\end{align\*}
\\]

By writing $\b{p}^\prime_i = m_i \b{v}^\prime_i$,

\\[
\b{L} = \b{R} \times \b{P} + \sum_i \b{r}^\prime_i \times \b{p}^\prime_i
\\]

This means that the angular momentum of the system can be decomposed into two parts:
1. The angular momentum of the center of mass
2. The angular momentum of the particles with respect to the center of mass

This emphasizes that $\b{L}$ depends on the choice of the point $\b{O}$, only through $\b{R}$.
Only if $b{R}$ is rest with respect to $\b{O}$, $\b{L}$ will be independent of the point of reference.

The total kinetic energy of the system is given by

\\[
\begin{align\*}
T &= \sum_i T_i = \sum_i \frac{1}{2} m_i \left\vert \b{v}_i^\prime + \b{V} \right\vert^2 \nl
&= \sum_i \frac{1}{2} m_i \left( v_i^{\prime 2} + 2\b{v}_i^\prime \cdot \b{V} + V^2 \right) \nl
&= \frac{1}{2} M V^2 + \sum_i \frac{1}{2} m_i v_i^{\prime 2}
\end{align\*}
\\]

This means that the total kinetic energy of the system can also be decomposed into two parts:
1. The kinetic energy of the center of mass
2. The kinetic energy of the particles with respect to the center of mass

Now let's seek for the work done by the forces acting on the system.
Assume that every force acting on the system is conservative, then

\\[
\begin{align\*}
W_{12} &= \sum_i \int_1^2 \b{F}\_i^\text{ext} \cdot \dd{\b{s}}_i + \sum\_{i \neq j} \int_1^2 \b{F}\_{ij} \cdot \dd{\b{s}}\_i \nl
&= -\sum_i \int_1^2 \grad_i U_i \cdot \dd{\b{s}}\_i - \sum\_{i \neq j} \int_1^2 \grad_i U\_{ij} \cdot \dd{\b{s}}\_i
\end{align\*}
\\]

where $U_i$ is the potential energy of the external force acting on the $i$-th particle,
and $U_{ij}$ is the potential energy of the internal force acting between the $i$-th and $j$-th particles.
$\grad_i$ means that we take the gradient with respect to the coordinates of the $i$-th particle.
By the Newton's third law, we have $\grad_i U_{ij} = -\grad_j U_{ji}$,

\\[
\begin{align\*}
W_{12} &= -\sum_i \Delta U_i - \sum_{i < j} \int_1^2 \left( \grad_i U_{ij} \cdot \dd{\b{s}}\_i + \grad_j U_{ji} \cdot \dd{\b{s}}\_j \right) \nl
&= -\sum_i \Delta U_i - \sum\_{i < j} \int_1^2 \grad_i U\_{ij} \cdot \left( \dd{\b{s}}\_i - \dd{\b{s}}\_j \right) \nl
&= -\sum_i \Delta U_i - \sum\_{i < j} \int_1^2 \grad_{ij} U\_{ij} \cdot \dd{\b{s}}\_{ij} \nl
&= -\sum_i \Delta U_i - \sum\_{i < j} \Delta U_{ij}
\end{align\*}
\\]

This means that we can write the whole potential energy of the system as

\\[
U = \sum_i U_i + \sum_{i < j} U_{ij}
\\]

We often set $U_{ij}=U_{ji}$, so that the potential energy is symmetric with respect to the particles.

\\[
U = \sum_i U_i + \frac{1}{2} \sum_{i \neq j} U_{ij}
\\]

Thus, we can write the work done by the forces acting on the system as

\\[
W = -\Delta U
\\]

And also get the _conservation of total mechanical energy_:

\\[
\Delta (T + U) = 0
\\]

Let's look for the internal potential energy more closely.
If it depends only on the distance between the particles, i.e. $U_{ij} = U_{ij}(r_{ij})$,
then we can write the force as

\\[
\b{F}\_{ij} = -\grad\_i U\_{ij}(r\_{ij}) = -\pdv{U\_{ij}}{r\_{ij}} \grad\_i r\_{ij} = -\pdv{U\_{ij}}{r\_{ij}} \frac{\b{r}\_{ij}}{r\_{ij}}
\\]

This means that the internal forces are central forces, and they satisfy the strong form of Newton's third law.
Internal potential is generally not zero, and it may vary as the system changes with time.
However, for rigid bodies, in other words for constant $r\_{ij}$,
$\dd{\b{s}}\_{ij}$ can only be perpendicular to $\b{r}\_{ij}$, and so for central forces, it is perpendicular to $\b{F}\_{ij}$,
which means that the work done by the internal forces is zero, resulting in the constant internal potential energy.
Thus, we can completely disregard the internal potential energy of a rigid body system.
> $U = \sum_i U_i$ for a rigid body system.