---
layout: post
title: "D'Alembert's Principle and Lagrange's Equations"
subtitle: "cm1.3"
classification: "Classical Mechanics 1.3"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Virtual Displacements and Virtual Work

In a system of particles, a **virtual displacement** is an infinitesimal change in the configuration of the system
that is consistent with the constraints at a given instant in time. It does not correspond to an actual motion of the system but rather represents a hypothetical change in position.
Therefore, to distinguish between actual displacements and virtual displacements, we denote actual displacements by
$\dd{\b{r}}$ and virtual displacements by $\delta \b{r}$.

Suppose the system is in _equilibrium_, so that the net force on each particle is zero.
Then, the total **virtual work** done by the forces during any virtual displacement is zero. This is expressed mathematically as:

\\[
\sum_i \b{F}_i \cdot \delta \b{r}_i = 0
\\]

where $\b{F}_i = 0$ is the net force on particle $i$. Decomposing the forces into applied forces $\b{F}_i^{(a)}$ and constraint forces $\b{f}_i$,

\\[
\b{F}_i = \b{F}_i^{(a)} + \b{f}_i
\\]

the virtual work equation becomes:

\\[
\sum_i \b{F}_i^{(a)} \cdot \delta \b{r}_i + \sum_i \b{f}_i \cdot \delta \b{r}_i = 0
\\]

We now restrict our attention to **ideal constraints**, for which the constraint forces do no virtual work:

\\[
\sum_i \b{f}_i \cdot \delta \b{r}_i = 0
\\]

Thus, the virtual work equation simplifies to:

\\[
\sum_i \b{F}_i^{(a)} \cdot \delta \b{r}_i = 0
\\]

This is the **principle of virtual work** for a system in equilibrium with ideal constraints.

## D'Alembert's Principle

D'Alembert's principle extends the principle of virtual work to dynamics.
We can consider an arbitrary system of particles, not necessarily in equilibrium, as being in equilibrium under the fictitious forces $-\dot{\b{p}}_i$
acting on each particle $i$.
Therefore, we similarly have:

\\[
\sum_i \left( \b{F}_i^{(a)} - \dot{\b{p}}_i \right) \cdot \delta \b{r}_i = 0
\\]

This is **D'Alembert's principle**.

## Lagrange's Equations

The translation from $\b{r}_i$ to generalized coordinates $q_j$ starts with the relation:

\\[
\dd{\b{r}}_i = \sum_k \pdv{\b{r}_i}{q_k} \dd{q}_k + \pdv{\b{r}_i}{t} \dd{t}
\\]

which is just a simple chain rule expansion. We also have:

\\[
\b{v}_i = \sum_k \pdv{\b{r}_i}{q_k} \dot{q}_k + \pdv{\b{r}_i}{t}
\\]

Similarly, the virtual displacement can be connected to the virtual displacement in generalized coordinates:

\\[
\delta \b{r}_i = \sum_j \pdv{\b{r}_i}{q_j} \delta q_j
\\]

Note that the time $t$ is held fixed during a virtual displacement, so there is no $\delta t$ term.
In terms of generalized coordinates, the virtual work of the $\b{F}_i$ becomes:

\\[
\begin{align\*}
\sum_i \b{F}\_i \cdot \delta \b{r}\_i &= \sum_{i,j} \b{F}\_i \cdot \pdv{\b{r}_i}{q_j} \delta q_j \nl
&= \sum_j Q_j \delta q_j
\end{align\*}
\\]

where we define the **generalized force** $Q_j$ as:

\\[
Q_j = \sum_i \b{F}_i \cdot \pdv{\b{r}_i}{q_j}
\\]

Similarly, the virtual work of the $\dot{\b{p}}_i$ becomes:

\\[
\sum_i \dot{\b{p}}\_i \cdot \delta \b{r}\_i = \sum_{i,j} \dot{\b{p}}_i \cdot \pdv{\b{r}_i}{q_j} \delta q_j
\\]

Now by the relations

\\[
\odv{}{t} \left( \pdv{\b{r}_i}{q_j} \right) = \pdv{\b{v}_i}{q_j} \nt
\pdv{\b{v}_i}{\dot{q}_j} = \pdv{\b{r}_i}{q_j}
\\]

which are easily verified, we have:

\\[
\begin{align\*}
\sum_i \dot{\b{p}}\_i \cdot \delta \b{r}\_i
&= \sum_{i,j} \left\[ \odv{}{t} \left( m_i \dot{\b{r}}\_i \cdot \pdv{\b{r}\_i}{q_j} \right) - m_i \dot{\b{r}}\_i \cdot \odv{}{t} \left( \pdv{\b{r}\_i}{q_j} \right) \right\] \delta q_j \nl
&= \sum_{i,j} \left\[ \odv{}{t} \left( m_i \b{v}_i \cdot \pdv{\b{v}_i}{\dot{q}_j} \right) - m_i \b{v}_i \cdot \pdv{\b{v}_i}{q_j} \right\] \delta q_j \nl
&= \sum_j \left\\{ \odv{}{t} \left\[ \pdv{}{ \dot{q}_j } \left( \sum_i \frac{1}{2} m_i v_i^2 \right) \right\] - \pdv{}{ q_j } \left( \sum_i \frac{1}{2} m_i v_i^2 \right) \right\\} \delta q_j
\end{align\*}
\\]

The quantity in parentheses is the **kinetic energy** $T$ of the system:

\\[
\sum_i \dot{\b{p}}_i \cdot \delta \b{r}_i = \sum_j \left\[ \odv{}{t} \left( \pdv{T}{\dot{q}_j} \right) - \pdv{T}{q_j} \right\] \delta q_j
\\]

Substituting these results into D'Alembert's principle, we have:

\\[
\sum_j \left\[ \odv{}{t} \left( \pdv{T}{\dot{q}_j} \right) - \pdv{T}{q_j} - Q_j \right\] \delta q_j = 0
\\]

Since under the holonomic constraints we can always find an independent coordinate system $q_j$ such that the $\delta q_j$ are independent,
the coefficients of each $\delta q_j$ must vanish separately, giving the **Lagrange's equations**:

\\[
\odv{}{t} \left( \pdv{T}{\dot{q_j}} \right) - \pdv{T}{q_j} = Q_j
\\]

These are $n$ differential equations for the $n$ generalized coordinates $q_j$.
When the forces are derivable from a potential $V(\b{r}_1,\ldots,\b{r}_N,t)$, the generalized forces can be expressed as:

\\[
\begin{align\*}
Q_j &= \sum_i \b{F}_i \cdot \pdv{\b{r}_i}{q_j} \nl
&= -\sum_i \pdv{V}{\b{r}_i} \cdot \pdv{\b{r}_i}{q_j} \nl
&= -\pdv{V}{q_j}
\end{align\*}
\\]

As here defined, the potential $V$ does not depend on the generalized velocities $\dot{q}_j$, so the Lagrange's equations become:

\\[
\odv{}{t} \left( \pdv{(T-V)}{\dot{q}_j} \right) - \pdv{(T-V)}{q_j} = 0
\\]

Defining the **Lagrangian** $L$ as

\\[
L = T - V
\\]

we can write the Lagrange's equations in the compact form:

\\[
\odv{}{t} \left( \pdv{L}{\dot{q_j}} \right) - \pdv{L}{q_j} = 0
\\]

These equations are the foundation of Lagrangian mechanics and provide a powerful method for analyzing the dynamics of systems with constraints.
Note that the Lagrangian is not unique;

\\[
L^\prime( \b{q}, \dot{\b{q}}, t ) = L( \b{q}, \dot{\b{q}}, t ) + \odv{F( \b{q}, t )}{t}
\\]

leads to the same equations of motion, where $F$ is any differentiable function of the generalized coordinates and time,
since the added term does not affect the derivatives in Lagrange's equations.

## Velocity-Dependent Potentials

In some cases, the forces acting on a system may depend on the velocities of the particles.
The most common example is the _Lorentz force_ acting on a charged particle in an electromagnetic field.

\\[
\b{F} = q \left( \b{E} + \b{v} \times \b{B} \right)
\\]

Since by the electromagnetism we have:

\\[
\b{E} = -\grad \phi - \pdv{\b{A}}{t} \nl
\b{B} = \curl \b{A}
\\]

Lagrange's equations can still be applied for velocity-dependent potentials if they provide the generalized forces through:

\\[
Q_j = -\pdv{U}{q_j} + \odv{}{t} \left( \pdv{U}{\dot{q}_j} \right)
\\]

where $U(\b{q}, \dot{\b{q}}, t)$ is the velocity-dependent potential.
In this case the Lagrangian is defined as $L = T - U$ as before, and Lagrange's equations retain their form.
For the Lorentz force, the velocity-dependent potential is given by:

\\[
U = q \left( \phi - \b{A} \cdot \b{v} \right)
\\]

We leave the verification of this as an exercise to the reader.

## Rayleigh's Dissipation Function

In some systems, non-conservative forces such as friction or air resistance can be modeled using a dissipation function.
Note that if not all the forces are derivable from a potential, Lagrange's equations can be written as:

\\[
\odv{}{t} \left( \pdv{L}{\dot{q}_j} \right) - \pdv{L}{q_j} = Q_j^{(nc)}
\\]

where $L$ contains only the potential of the conservative forces, and $Q_j^{(nc)}$ are the generalized non-conservative forces.
If we can model the frictional forces as:

\\[
F_{f_i,j} = -k_j v_{i,j}
\\]

where $F_{f_i,j}$ is the $j$-th component of the frictional force on particle $i$, $v_{i,j}$ is the corresponding velocity component, and $k_j$ is a constant, then we can define **Rayleigh's dissipation function** $\mathcal{F}$ as:

\\[
\mathcal{F} = \frac{1}{2} \sum_{i,j} k_j v_{i,j}^2
\\]

From this definition, it follows that:

\\[
F_{f_i,j} = -\pdv{\mathcal{F}}{v_{i,j}}
\\]

or, simply:

\\[
\b{F}\_{f_i} = -\pdv{\mathcal{F}}{\b{v}\_i} = -\grad_{\b{v}_i} \mathcal{F}
\\]

We can also give a physical interpretation of $\mathcal{F}$.
The work done by the system against the frictional force is:

\\[
\begin{align\*}
\dd{W_f} &= -\sum_i \b{F}_{f_i} \cdot \b{v}_i \dd{t} \nl
&= \sum_i \pdv{\mathcal{F}}{\b{v}_i} \cdot \b{v}_i \dd{t} \nl
&= 2 \mathcal{F} \dd{t}
\end{align\*}
\\]

Hence, $2\mathcal{F}$ is the power dissipated by the frictional forces.
The components of the generalized forces due to friction are then:

\\[
\begin{align\*}
Q_j &= \sum_i \b{F}_{f_i} \cdot \pdv{\b{r}_i}{q_j} \nl
&= -\sum_i \pdv{\mathcal{F}}{\b{v}_i} \cdot \pdv{\b{v}_i}{\dot{q}_j} \nl
&= -\pdv{\mathcal{F}}{\dot{q}_j}
\end{align\*}
\\]

Thus, Lagrange's equations with Rayleigh's dissipation function become:

\\[
\odv{}{t} \left( \pdv{L}{\dot{q}_j} \right) - \pdv{L}{q_j} + \pdv{\mathcal{F}}{\dot{q}_j} = 0
\\]

## Simple Applications

By using generalized coordinates, the kinetic energy is written as:

\\[
\begin{align\*}
T &= \frac{1}{2} \sum_i m_i v_i^2 \nl
&= \frac{1}{2} \sum_i m_i \left( \sum_j \pdv{\b{r}\_i}{q_j} \dot{q}\_j + \pdv{\b{r}\_i}{t} \right)^2 \nl
&= M_0 + \sum_j M_j \dot{q}\_j + \frac{1}{2} \sum_{j,k} M_{jk} \dot{q}_j \dot{q}_k
\end{align\*}
\\]

where

\\[
\begin{align\*}
M_0 &= \frac{1}{2} \sum_i m_i \left( \pdv{\b{r}\_i}{t} \right)^2 \nt
M_j &= \sum_i m_i \pdv{\b{r}\_i}{t} \cdot \pdv{\b{r}\_i}{q_j} \nt
M_{jk} &= \sum_i m_i \pdv{\b{r}_i}{q_j} \cdot \pdv{\b{r}_i}{q_k}
\end{align\*}
\\]

The coefficients $M_{jk}$ form a symmetric matrix called the **mass matrix** of the system.
If the transformation equations do not depend explicitly on time, as may as occur when the constraints are scleronomic,
then $M_0$ and $M_j$ vanish, and the kinetic energy is a homogeneous quadratic function of the generalized velocities:

\\[
T = \frac{1}{2} \dot{\b{q}}^\top \b{M} \dot{\b{q}}
\\]

### Single Particle in Plane Polar Coordinates

Consider a single particle of mass $m$ moving in a plane under the force $\b{F}$.
We have two generalized coordinates, the polar coordinates $r$ and $\theta$.
The infinitesimal displacement is:

\\[
\dd{\b{r}} = \hat{\b{r}} \dd{r} + r \hat{\b{\theta}} \dd{\theta}
\\]

The kinetic energy is:

\\[
T = \frac{1}{2} m \left( \dot{r}^2 + r^2 \dot{\theta}^2 \right)
\\]

The generalized forces are:

\\[
\begin{align\*}
Q_r &= \b{F} \cdot \pdv{\b{r}}{r} = \b{F} \cdot \hat{\b{r}} = F_r \nt
Q_\theta &= \b{F} \cdot \pdv{\b{r}}{\theta} = \b{F} \cdot r \hat{\b{\theta}} = r F_\theta
\end{align\*}
\\]

Thus, Lagrange's equations become:

\\[
\begin{align\*}
m \ddot{r} - m r \dot{\theta}^2 &= F_r \nt
\odv{}{t} \left( m r^2 \dot{\theta} \right) &= r F_\theta
\end{align\*}
\\]

The first equation is the radial equation of motion, and the second is the angular equation of motion.
The second term of the first equation is the centripetal force, and the second equation is exactly the relationship between torque and angular momentum.