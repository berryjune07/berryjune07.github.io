---
layout: post
title: "The Laminar Wake"
subtitle: "fl2.6"
classification: "Fluid Mechanics 2.6"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Momentum Deficit

Consider a steady flow of a viscous fluid past a solid body.
Let the velocity of the incident current be

\\[
\b{U}=U\hat{\b{x}},
\\]

and write the actual velocity as

\\[
\b{U}+\b{v},
\\]

where $\b{v}$ is the disturbance velocity and $\b{v}\to 0$ at infinity.
Far behind the body, $\b{v}$ is appreciable only in a narrow region near the $x$-axis.
This region is called the **laminar wake**.

The wake contains vorticity produced at the surface of the body.
Outside the wake the flow may be regarded as potential, since the streamlines there have not passed close to the body.
Thus the far field is potential flow except in the wake.

The momentum flux density tensor is

\\[
\Pi_{ik}=p\delta_{ik}+\rho(U_i+v_i)(U_k+v_k).
\\]

Write

\\[
p=p_0+p^\prime,
\\]

where $p_0$ is the pressure at infinity.
On a large closed surface surrounding the body, the constant term $p_0\delta_{ik}$ gives no net contribution.
Also the term linear in the mass flux vanishes by conservation of mass.
Since $\b{v}$ is small far from the body, the quadratic term $\rho v_i v_k$ may be neglected.
Thus the relevant momentum flux is

\\[
p^\prime\delta_{ik}+\rho U_i v_k.
\\]

Take two infinite planes $x=x_2$ far in front of the body and $x=x_1$ far behind it.
The contribution from the lateral surface at infinity vanishes.
Hence the force on the body is the difference between the momentum flux entering through the forward plane and that
leaving through the backward plane.
For the drag component,

\\[
F_x
=\left(\iint_{x=x_2}-\iint_{x=x_1}\right)
(p^\prime+\rho Uv_x)\,dy\,dz.
\\]

Outside the wake the flow is potential, and Bernoulli's equation gives, to first order in $\b{v}$,

\\[
p+\frac{1}{2}\rho(\b{U}+\b{v})^2
=p_0+\frac{1}{2}\rho U^2,
\\]

so that

\\[
p^\prime=-\rho Uv_x.
\\]

Therefore the integrand vanishes outside the wake.
The forward plane does not intersect the wake, and on the backward plane the pressure term is of smaller order than
$\rho Uv_x$ inside the wake.
Thus

\\[
F_x=-\rho U\iint_{\mathrm{wake}} v_x\,dy\,dz.
\\]

Here $v_x<0$ in the wake, since the fluid moves more slowly than it would in the absence of the body.
The integral is the deficit of discharge through the wake.

The transverse components give the lift:

\\[
F_y=-\rho U\iint_{\mathrm{wake}} v_y\,dy\,dz,\qquad
F_z=-\rho U\iint_{\mathrm{wake}} v_z\,dy\,dz.
\\]

If the body has an axis of symmetry parallel to the incident flow, then the wake has the same symmetry and the lift is
zero.

## Width of the Wake

Let $Y$ be the order of magnitude of the transverse width of the wake at distance $x$ behind the body.
Inside the wake, transverse derivatives are much larger than longitudinal derivatives:

\\[
\pdvn{2}{\b{v}}{y},\ \pdvn{2}{\b{v}}{z}
\gg
\pdvn{2}{\b{v}}{x}.
\\]

The two important terms in the Navier--Stokes equation have orders

\\[
(\b{v}\cdot\grad)\b{v}\sim U\pdv{\b{v}}{x}\sim \frac{Uv}{x},
\qquad
\nu\laplacian\b{v}\sim \nu\frac{v}{Y^2}.
\\]

Equating these two orders gives

\\[
Y\sim \sqrt{\frac{\nu x}{U}}.
\\]

Thus the laminar wake broadens only as the square root of the distance from the body.
This is small compared with $x$ when $Ux/\nu\gg 1$, which is precisely the far-wake condition.

Using the drag formula,

\\[
F_x\sim \rho U vY^2,
\\]

we also obtain the order of the velocity deficit:

\\[
v\sim \frac{F_x}{\rho\nu x}.
\\]

## Flow Inside the Wake

Far from the body we use Oseen's approximation.
In the steady equation

\\[
(\b{v}\cdot\grad)\b{v}
=-\grad\left(\frac{p}{\rho}\right)+\nu\laplacian\b{v},
\\]

replace the convective derivative by $U\partial/\partial x$ and neglect the longitudinal part of the Laplacian in
comparison with the transverse part.
Then

\\[
U\pdv{\b{v}}{x}
=-\grad\left(\frac{p}{\rho}\right)
+\nu\left(\pdvn{2}{\b{v}}{y}+\pdvn{2}{\b{v}}{z}\right).
\\]

First omit the pressure-gradient part.
Then each component satisfies

\\[
U\pdv{v}{x}
=\nu\left(\pdvn{2}{v}{y}+\pdvn{2}{v}{z}\right).
\\]

This is the two-dimensional heat equation with $x/U$ in place of time and $\nu$ in place of thermal diffusivity.
The solution which becomes concentrated at the origin as $x\to0$ and whose integral gives the drag is

\\[
v_x
=-\frac{F_x}{4\pi\rho\nu x}
\exp\left[-\frac{U(y^2+z^2)}{4\nu x}\right].
\\]

The coefficient is fixed by

\\[
F_x=-\rho U\iint v_x\,dy\,dz.
\\]

In spherical coordinates with the polar axis along the $x$-axis, the wake corresponds to $\theta\ll1$ and
$y^2+z^2\simeq r^2\theta^2$, $x\simeq r$.
Thus

\\[
v_x
=-\frac{F_x}{4\pi\rho\nu r}
\exp\left[-\frac{Ur\theta^2}{4\nu}\right].
\\]

For the transverse flow, take the lift to be in the $y$-direction, so $F_z=0$.
The pressure-gradient part may be represented by a potential $\Phi$.
Then

\\[
v_y
=-\frac{F_y}{4\pi\rho\nu x}
\exp\left[-\frac{U(y^2+z^2)}{4\nu x}\right]
+\pdv{\Phi}{y},
\qquad
v_z=\pdv{\Phi}{z}.
\\]

The continuity equation gives, neglecting the longitudinal derivative,

\\[
\pdv{v_y}{y}+\pdv{v_z}{z}=0.
\\]

Using the heat equation for the first term of $v_y$, this yields

\\[
\pdv{\Phi}{x}
=-\frac{\nu}{U}\pdv{}{y}
\left(
-\frac{F_y}{4\pi\rho\nu x}
\exp\left[-\frac{U(y^2+z^2)}{4\nu x}\right]
\right).
\\]

After integration in $x$, choosing the constant so that $\Phi$ is finite on the axis, we get

\\[
\Phi
=-\frac{F_y}{2\pi\rho U}
\frac{y}{y^2+z^2}
\left\\{
\exp\left\[-\frac{U(y^2+z^2)}{4\nu x}\right\]-1
\right\\}.
\\]

Equivalently, in spherical coordinates,

\\[
\Phi
=-\frac{F_y}{2\pi\rho U}
\frac{\cos\phi}{r\theta}
\left\\{
\exp\left\[-\frac{Ur\theta^2}{4\nu}\right\]-1
\right\\}.
\\]

If there is no lift, the wake is axially symmetric and $\Phi=0$.

## Flow Outside the Wake

Outside the wake the flow is potential:

\\[
\b{v}=\grad\Phi,\qquad \laplacian\Phi=0.
\\]

We need only the terms which decrease least rapidly at large distances.
Write

\\[
\Phi=\frac{a}{r}+\frac{\cos\phi}{r}f(\theta),
\\]

where the first term is associated with the drag and the second with the lift.
Substitution into Laplace's equation gives

\\[
\odv{}{\theta}\left(\sin\theta\odv{f}{\theta}\right)
-\frac{f}{\sin\theta}=0.
\\]

The solution finite as $\theta\to\pi$ is

\\[
f=b\cot\frac{\theta}{2}.
\\]

The constant $b$ is found by matching with the inside-wake potential in the overlap region

\\[
\sqrt{\frac{\nu}{Ur}}\ll \theta\ll 1.
\\]

Since

\\[
\cot\frac{\theta}{2}\sim \frac{2}{\theta},
\\]

comparison with the inside expression gives

\\[
b=\frac{F_y}{4\pi\rho U}.
\\]

The constant $a$ is determined from conservation of mass through a large sphere.
The inflow deficit through the part cut out by the wake is

\\[
-\iint_{\mathrm{wake}} v_x\,dy\,dz=\frac{F_x}{\rho U}.
\\]

The same amount must leave through the rest of the large sphere, and hence

\\[
\oint \b{v}\cdot d\b{f}
=\oint \grad\Phi\cdot d\b{f}
=-4\pi a
=\frac{F_x}{\rho U}.
\\]

Therefore

\\[
a=-\frac{F_x}{4\pi\rho U}.
\\]

The potential outside the wake is finally

\\[
\Phi
=\frac{1}{4\pi\rho Ur}
\left(
-F_x+F_y\cos\phi\cot\frac{\theta}{2}
\right).
\\]

It decreases as $1/r$, while the velocity outside the wake decreases as $1/r^2$.
When the lift is zero, the far field outside the wake is axially symmetric.
