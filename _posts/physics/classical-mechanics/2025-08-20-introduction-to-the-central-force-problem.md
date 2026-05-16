---
layout: post
title: "Introduction to the Central Force Problem"
subtitle: "cm2.1"
classification: "Classical Mechanics 2.1"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Reduction to an Equivalent One-Body Problem

Consider two particles with masses $m_1$ and $m_2$, whose position vectors are $\b{r}_1$ and $\b{r}_2$.
Suppose that their mutual interaction depends only on the relative displacement

\\[
\b{r} = \b{r}_1 - \b{r}_2
\\]

and not on the absolute position of the pair in space.
We introduce the center of mass coordinate

\\[
\b{R} = \frac{m_1 \b{r}_1 + m_2 \b{r}_2}{m_1 + m_2}
\\]

and write

\\[
M = m_1 + m_2, \qquad
\mu = \frac{m_1 m_2}{m_1 + m_2}.
\\]

Here $\mu$ is the **reduced mass**.
Equivalently,

\\[
\frac{1}{\mu} = \frac{1}{m_1} + \frac{1}{m_2}.
\\]

Solving for the original coordinates gives

\\[
\b{r}_1 = \b{R} + \frac{m_2}{M}\b{r}, \qquad
\b{r}_2 = \b{R} - \frac{m_1}{M}\b{r}.
\\]

Substituting these into the kinetic energy,

\\[
T = \frac{1}{2}m_1 \dot{\b{r}}_1^2 + \frac{1}{2}m_2 \dot{\b{r}}_2^2,
\\]

we obtain

\\[
\begin{align\*}
T
&= \frac{1}{2}M\dot{\b{R}}^2 + \frac{1}{2}\mu\dot{\b{r}}^2.
\end{align\*}
\\]

Thus, if the interaction potential is $V(\b{r})$, the Lagrangian is

\\[
L = \frac{1}{2}M\dot{\b{R}}^2 + \frac{1}{2}\mu\dot{\b{r}}^2 - V(\b{r}).
\\]

The coordinate $\b{R}$ is cyclic, so the center of mass moves uniformly.
The remaining part of the motion is exactly the motion of one particle of mass $\mu$ in a fixed potential $V(\b{r})$.
Therefore, the two-body central force problem reduces to an equivalent one-body problem.

## Conservative Central Force

We now assume that the force is conservative and central:

\\[
V(\b{r}) = V(r), \qquad r = \norm{\b{r}}.
\\]

Then the force has the form

\\[
\b{F} = f(r)\hat{\b{r}}
= -\odv{V}{r}\hat{\b{r}}.
\\]

Since the force is parallel to $\b{r}$, the torque about the origin is zero:

\\[
\b{N} = \b{r}\times\b{F} = 0.
\\]

Therefore the angular momentum

\\[
\b{L} = \b{r}\times \b{p}
\\]

is conserved.
The fixed direction of $\b{L}$ implies that the motion lies in the plane perpendicular to $\b{L}$.
If $\b{L}=0$, then $\b{r}$ and $\dot{\b{r}}$ are parallel, and the motion is purely radial.

Thus, except for this radial special case, every central force motion is a plane motion.
We may choose plane polar coordinates $(r,\theta)$ in this plane.
The Lagrangian becomes

\\[
L = \frac{1}{2}\mu(\dot{r}^2+r^2\dot{\theta}^2)-V(r).
\\]

## First Integrals

The coordinate $\theta$ is cyclic, so its conjugate momentum is conserved:

\\[
p_\theta = \pdv{L}{\dot{\theta}}
= \mu r^2\dot{\theta}
= \ell.
\\]

The constant $\ell$ is the magnitude of the angular momentum.
Equivalently,

\\[
r^2\dot{\theta} = \frac{\ell}{\mu}.
\\]

Since the infinitesimal area swept out by the radius vector is

\\[
\dd{A} = \frac{1}{2}r^2\dd{\theta},
\\]

we have

\\[
\odv{A}{t} = \frac{1}{2}r^2\dot{\theta}
= \frac{\ell}{2\mu}.
\\]

Hence the areal velocity is constant.
This is Kepler's second law, but the derivation shows that it is a theorem for every central force, not only for the inverse-square force.

The radial Lagrange equation is

\\[
\mu\ddot{r} - \mu r\dot{\theta}^2 = f(r).
\\]

Using $\ell=\mu r^2\dot{\theta}$, this becomes

\\[
\mu\ddot{r} - \frac{\ell^2}{\mu r^3} = f(r).
\\]

The other first integral is the energy:

\\[
E = \frac{1}{2}\mu(\dot{r}^2+r^2\dot{\theta}^2)+V(r).
\\]

Eliminating $\dot{\theta}$, we get

\\[
E = \frac{1}{2}\mu\dot{r}^2 + \frac{\ell^2}{2\mu r^2}+V(r).
\\]

These two first integrals reduce the problem to quadratures.
For instance,

\\[
\dot{r}^2
= \frac{2}{\mu}\left(E - V(r) - \frac{\ell^2}{2\mu r^2}\right),
\\]

so that

\\[
t-t_0
= \int_{r_0}^{r}
\frac{\dd{s}}
{\sqrt{\dps \frac{2}{\mu}\left(E - V(s) - \frac{\ell^2}{2\mu s^2}\right)}}.
\\]

Once $r(t)$ is obtained, $\theta(t)$ follows from

\\[
\theta-\theta_0
= \int_{t_0}^{t}\frac{\ell}{\mu r(t^\prime)^2}\dd{t^\prime}.
\\]

This is a formal solution.
The central force problem is therefore integrable up to two one-dimensional integrations, although those integrations need not be elementary.

## Equivalent One-Dimensional Problem

The radial equation has the same form as a one-dimensional motion in an effective potential.
Define

\\[
V_{\mathrm{eff}}(r)
= V(r)+\frac{\ell^2}{2\mu r^2}.
\\]

Then the energy equation is

\\[
E = \frac{1}{2}\mu\dot{r}^2 + V_{\mathrm{eff}}(r).
\\]

The second term in $V_{\mathrm{eff}}$ is the centrifugal potential.
It is not a real interaction potential, but it records the obstruction to reaching the origin when $\ell\ne 0$.
The radial force in the equivalent one-dimensional problem is

\\[
-\odv{V_{\mathrm{eff}}}{r}
= f(r)+\frac{\ell^2}{\mu r^3}.
\\]

Thus the motion in $r$ is allowed only where

\\[
E \ge V_{\mathrm{eff}}(r).
\\]

The turning points are the roots of

\\[
E = V_{\mathrm{eff}}(r).
\\]

Between two such turning points the radial coordinate oscillates.
If there is only one finite turning point, the particle may come in from infinity and go out again.

## Circular Orbits

A circular orbit at $r=r_0$ requires $\dot{r}=0$ and $\ddot{r}=0$.
Equivalently, $r_0$ is an extremum of $V_{\mathrm{eff}}$:

\\[
\eval{\odv{V_{\mathrm{eff}}}{r}}_{r=r_0}=0.
\\]

Since

\\[
\odv{V_{\mathrm{eff}}}{r}
= -f(r)-\frac{\ell^2}{\mu r^3},
\\]

the circularity condition is

\\[
f(r_0) = -\frac{\ell^2}{\mu r_0^3}.
\\]

Thus the force must be attractive.
The energy of the circular orbit is

\\[
E = V(r_0)+\frac{\ell^2}{2\mu r_0^2}.
\\]

The circular orbit is stable if $V_{\mathrm{eff}}$ has a local minimum:

\\[
\eval{\odvn{2}{V_{\mathrm{eff}}}{r}}_{r=r_0}>0.
\\]

In terms of the force this condition is

\\[
-f^\prime(r_0)-\frac{3f(r_0)}{r_0}>0.
\\]

For an attractive power-law force $f(r)=-kr^n$, this becomes

\\[
n>-3.
\\]

Hence an inverse-fourth force, for which $n=-4$, cannot have stable circular orbits.

## Classification of Orbits

The qualitative form of the orbit is already visible from $V_{\mathrm{eff}}$.
If the allowed interval in $r$ is finite, the orbit is bounded.
If $r$ can become arbitrarily large, the orbit is unbounded.
If the lower turning point is positive, the particle never reaches the force center.
If the angular momentum vanishes, then the centrifugal term disappears and the motion may pass through the origin, depending on the behavior of $V(r)$.

One should distinguish between bounded and closed orbits.
A bounded orbit only requires $r$ to remain between two finite values.
A closed orbit requires the curve in the plane to retrace itself after a finite time.
For a general central force, the radial motion and the angular motion need not have commensurable periods.
Thus a bounded central orbit may fill an annular region without ever closing.

The equivalent one-dimensional description therefore gives the basic classification without solving the full orbit:

|                condition                 |         meaning         |
|:----------------------------------------:|:-----------------------:|
|         $E<V_{\mathrm{eff}}(r)$          | forbidden radial region |
|         $E=V_{\mathrm{eff}}(r)$          |      turning point      |
|     $V_{\mathrm{eff}}^\prime(r_0)=0$     |     circular orbit      |
| $V_{\mathrm{eff}}^{\prime\prime}(r_0)>0$ |  stable circular orbit  |
{:.centered}

The remaining problem is to determine the actual dependence of $r$ on $\theta$.
This is the orbit equation, which will be derived after the virial theorem.
