---
layout: post
title: "Impulse and Collision"
subtitle: "eph6"
classification: "Elementary Physics 6"
categories: physics
tags: elementary-physics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Impulse

**Impulse** is defined as the change in momentum of an object when a force is applied over a time interval. Mathematically, impulse $J$ can be expressed as:

\\[
\b{J} = \int_{t_1}^{t_2} \b{F}(t) \, \dd{t}
\\]

Its units are Newton seconds ($\text{N} \cdot \text{s}$) or kilogram meters per second ($\text{kg} \cdot \text{m/s}$), 
which are equivalent to the units of momentum.
This is not a coincidence, as impulse is directly related to the change in momentum of an object.

\\[
\b{J} = \int_{t_1}^{t_2} \odv{\b{p}}{t} \, \dd{t} = \Delta \b{p}
\\]

This relationship is known as the **impulse-momentum theorem**.
Impulse is particularly useful in analyzing situations where forces act over very short time intervals, such as collisions or impacts.
In such cases, the exact nature of the force may be complex or unknown, but the overall effect on the object's momentum can be determined using impulse and the average force during the interaction.

## Center of Mass

The **center of mass** (COM) of a system of particles is the point at which the total mass of the system can be considered to be concentrated for the purpose of analyzing translational motion.
For a discrete system of particles,

\\[
\b{R} = \frac{1}{M} \sum_{i} m_i \b{r}_i
\\]

where $M = \sum_i m_i$ is the total mass of the system, $m_i$ is the mass of the $i$-th particle, and $\b{r}_i$ is its position vector.
For a continuous mass distribution, the center of mass is given by

\\[
\b{R} = \frac{1}{M} \int \b{r} \, \dd{m}
\\]

where $\dd{m} = \rho(\b{r}) \, \dd{V}$, with $\rho(\b{r})$ being the **mass density** at position $\b{r}$ and $\dd{V}$ the volume element.
The SI unit of mass density is kilograms per cubic meter ($\text{kg/m}^3$).
The center of mass is a crucial concept in mechanics, as it simplifies the analysis of motion and dynamics of systems of particles or rigid bodies.
The motion of the COM is governed by the net external force acting on the system, according to Newton's second law.

## Collisions

A **collision** is an event where two or more bodies exert forces on each other in a relatively short time.
Collisions can be classified into two main types based on the conservation of kinetic energy:

1. **Elastic Collisions**: Both momentum and kinetic energy are conserved.
2. **Inelastic Collisions**: Momentum is conserved, but kinetic energy is not. In perfectly inelastic collisions, the colliding bodies stick together after the collision.

We can guess that the velocity of the COM will remain unchanged after the collision, since there are no external forces acting on the system.
Let's analyze a one-dimensional collision between two masses $m_1$ and $m_2$ with initial velocities $v_1$ and $v_2$, respectively.
We can simplify the problem by transforming to the center of mass frame, where the total momentum is zero.

\\[
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} \nl
\tilde{v}\_1 = v_1 - V \nl
\tilde{v}\_2 = v_2 - V
\\]

where $V$ is the velocity of the COM. Let's denote the velocities after the collision with primes.
In the COM frame, the total momentum is zero, so

\\[
m_1 \tilde{v}_1 + m_2 \tilde{v}_2 = 0 \nl
m_1 \tilde{v}^\prime_1 + m_2 \tilde{v}^\prime_2 = 0
\\]

By the analysis [here](mechanics-of-a-system-of-particles.html#mechanics-of-a-system-of-particles),

\\[
K = \frac{1}{2}M V^2 + \sum_{i=1}^2 \frac{1}{2} m_i \tilde{v}_i^2
\\]

The first term is unchanged by the collision, so we only need to consider the second term.
Since the kinetic energy cannot increase by the collision, we have that $\abs{\tilde{v}}$ should decrease.
By the observation, we can introduce a _coefficient of restitution_ $e$ ($0 \leq e \leq 1$) to describe the ratio of relative speeds after and before the collision.

\\[
e = -\frac{\tilde{v}^\prime_1}{\tilde{v}_1} = -\frac{\tilde{v}_2}{\tilde{v}^\prime_2}
\\]

The negative sign arises because the velocities change their direction after the collision.
Using the componendo and dividendo theorem, it can also be expressed as

\\[
e = -\frac{\tilde{v}^\prime_1 - \tilde{v}^\prime_2}{\tilde{v}_1 - \tilde{v}_2} = -\frac{v^\prime_1 - v^\prime_2}{v_1 - v_2}
\\]

Now we have two equations: one from momentum conservation and one from the coefficient of restitution.
We can solve for the final velocities $v^\prime_1$ and $v^\prime_2$ in terms of the initial velocities $v_1$ and $v_2$.

\\[
\begin{align\*}
v^\prime_1 &= \frac{m_1 - e m_2}{m_1 + m_2} v_1 + \frac{(1 + e) m_2}{m_1 + m_2} v_2 \nl
v^\prime_2 &= \frac{(1 + e) m_1}{m_1 + m_2} v_1 + \frac{m_2 - e m_1}{m_1 + m_2} v_2
\end{align\*}
\\]

Also, the kinetic energy after the collision can be expressed as

\\[
K^\prime = \frac{1}{2} M V^2 + e^2 \sum_{i=1}^2 \frac{1}{2} m_i \tilde{v}_i^2
\\]

From this expression, we can see that the kinetic energy after the collision is reduced by a factor of $e^2$ compared to the kinetic energy before the collision in the COM frame.
This reduction in kinetic energy is due to the inelastic nature of the collision, where some of the kinetic energy is converted into other forms of energy, such as heat or deformation.
The change in kinetic energy due to the collision can be expressed as

\\[
\begin{align\*}
\Delta K &= -(1 - e^2) \sum_{i=1}^2 \frac{1}{2} m_i \tilde{v}_i^2 \nl
&= -(1 - e^2) \frac{1}{2} \mu (v_1 - v_2)^2
\end{align\*}
\\]

where $\mu = \frac{m_1 m_2}{m_1 + m_2}$ is the **reduced mass** of the system.
Therefore, we can conclude that $e = 1$ corresponds to a perfectly elastic collision, where no kinetic energy is lost, and $e = 0$ corresponds to a perfectly inelastic collision, where the maximum amount of kinetic energy is lost.
$0 < e < 1$ represents partially inelastic collisions, where some kinetic energy is lost but not all.

## Systems with Varying Mass

In systems where the mass of an object changes over time, such as a rocket expelling fuel, we need to modify our approach to account for the changing mass.
Let's denote the mass of the object as $m$ which can vary with time, and its velocity as $\b{v}$.
The momentum of the object is given by $\b{p} = m \b{v}$.
After a small time interval $\dd{t}$, the mass changes by $\dd{m}$ and the velocity changes by $\dd{\b{v}}$.
The mass ejected (or added) during this time interval has a velocity $\b{u}$ relative to the object.

\\[
\b{p} + \dd{\b{p}} = (m + \dd{m})(\b{v} + \dd{\b{v}}) + (-\dd{m})(\b{v} + \b{u})
\\]

Expanding and simplifying, we get

\\[
\dd{\b{p}} = m \dd{\b{v}} - \b{u} \dd{m} + \dd{m} \dd{\b{v}}
\\]

Neglecting the second-order small term $\dd{m} \dd{\b{v}}$ and dividing by $\dd{t}$, we obtain

\\[
\b{F}_\text{ext} + \b{u} \odv{m}{t} = m \odv{\b{v}}{t}
\\]

### Tsiolkovsky Rocket Equation

The **Tsiolkovsky rocket equation** describes the motion of a rocket as it expels mass (fuel) to generate thrust.
Assuming one-dimensional motion and that the external force $\b{F}_\text{ext}$ is negligible, we have

\\[
-u \odv{m}{t} = m \odv{v}{t}
\\]

where $u$ is the exhaust velocity of the expelled mass relative to the rocket.
The left side is sometimes called the **thrust**.
Rearranging and integrating from the initial mass $m_0$ to the final mass $m$, we get the equation for the rocket's velocity change:

\\[
\Delta v = u \ln \frac{m_0}{m}
\\]

This is called the _Tsiolkovsky rocket equation_.
It shows that the change in velocity of the rocket depends on the exhaust velocity and the ratio of the initial to final mass.