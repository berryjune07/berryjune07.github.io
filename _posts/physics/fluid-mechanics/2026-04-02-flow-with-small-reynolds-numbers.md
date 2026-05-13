---
layout: post
title: "Flow with Small Reynolds Numbers"
subtitle: "fl2.5"
classification: "Fluid Mechanics 2.5"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Stokes Approximation

For steady incompressible flow of a viscous fluid, the Navier--Stokes equation is

\\[
(\b{v}\cdot\grad)\b{v}
=-\frac{1}{\rho}\grad p+\nu\laplacian\b{v},\qquad
\div\b{v}=0.
\\]

Let $u$ and $l$ be the characteristic velocity and length.
Then

\\[
(\b{v}\cdot\grad)\b{v}\sim \frac{u^2}{l},\qquad
\nu\laplacian\b{v}\sim \frac{\nu u}{l^2}.
\\]

The ratio of these terms is the Reynolds number

\\[
\mathrm{Re}=\frac{ul}{\nu}.
\\]

When $\mathrm{Re}\ll 1$, the inertial term may be omitted in the first approximation.
The equation of motion becomes the **Stokes equation**

\\[
\eta\laplacian\b{v}-\grad p=0,\qquad
\div\b{v}=0.
\\]

Taking the divergence gives

\\[
\laplacian p=0,
\\]

and taking the curl gives

\\[
\laplacian(\curl\b{v})=0.
\\]

These equations are linear.
Therefore if all boundary velocities are reversed, the velocity field and all hydrodynamical forces are reversed.
This reversibility is a basic feature of creeping motion and disappears as soon as inertia becomes important.

## Flow Past a Sphere

Consider a sphere of radius $R$ fixed at the origin, with a uniform velocity $\b{u}=u\hat{\b{z}}$ at infinity.
The flow is axisymmetric and has no azimuthal component, so we introduce a Stokes stream function $\psi(r,\theta)$ by

\\[
v_r=\frac{1}{r^2\sin\theta}\pdv{\psi}{\theta},\qquad
v_\theta=-\frac{1}{r\sin\theta}\pdv{\psi}{r},\qquad
v_\phi=0.
\\]

This representation satisfies $\div\b{v}=0$ identically.
The only non-zero component of the vorticity is

\\[
\omega_\phi
=\frac{1}{r}\left(\pdv{(rv_\theta)}{r}-\pdv{v_r}{\theta}\right)
=-\frac{1}{r\sin\theta}E^2\psi,
\\]

where

\\[
E^2\psi
=\pdvn{2}{\psi}{r}
+\frac{\sin\theta}{r^2}\pdv{}{\theta}
\left(\frac{1}{\sin\theta}\pdv{\psi}{\theta}\right).
\\]

Taking the curl of the Stokes equation eliminates the pressure and gives

\\[
\laplacian(\curl\b{v})=0.
\\]

For the present axisymmetric flow this is equivalent to the biharmonic equation

\\[
E^2(E^2\psi)=0.
\\]

The incident uniform flow has stream function

\\[
\psi_\infty=\frac{1}{2}ur^2\sin^2\theta.
\\]

Thus we seek a solution of the form

\\[
\psi=f(r)\sin^2\theta.
\\]

For this form,

\\[
E^2\psi=\left(f^{\prime\prime}-\frac{2f}{r^2}\right)\sin^2\theta,
\\]

and the biharmonic equation reduces to

\\[
\left(\frac{d^2}{dr^2}-\frac{2}{r^2}\right)^2f=0.
\\]

Hence

\\[
f=Ar^4+Br^2+Cr+\frac{D}{r}.
\\]

The term $Ar^4$ must be absent, since the velocity cannot grow faster than the imposed uniform flow at infinity.
The coefficient of the uniform flow is

\\[
B=\frac{u}{2}.
\\]

The no-slip condition on the surface of the sphere is

\\[
v_r(R,\theta)=0,\qquad v_\theta(R,\theta)=0.
\\]

In terms of $f$, this gives

\\[
f(R)=0,\qquad f^\prime(R)=0.
\\]

Therefore

\\[
C=-\frac{3uR}{4},\qquad D=\frac{uR^3}{4}.
\\]

The stream function is consequently

\\[
\psi
=\frac{1}{2}ur^2\sin^2\theta
\left(1-\frac{3R}{2r}+\frac{R^3}{2r^3}\right).
\\]

The velocity components are

\\[
v_r=u\cos\theta\left(1-\frac{3R}{2r}+\frac{R^3}{2r^3}\right),
\qquad
v_\theta=-u\sin\theta\left(1-\frac{3R}{4r}-\frac{R^3}{4r^3}\right).
\\]

The pressure follows from the Stokes equation:

\\[
\grad p=\eta\laplacian\b{v}.
\\]

Using the above solution, one obtains

\\[
p=p_0-\frac{3\eta Ru}{2r^2}\cos\theta.
\\]

At the surface of the sphere,

\\[
\sigma_{rr}^{\prime}=0,\qquad
\sigma_{r\theta}^{\prime}=-\frac{3\eta u}{2R}\sin\theta,
\qquad
p=p_0-\frac{3\eta u}{2R}\cos\theta,
\\]

where $\sigma_{ij}^{\prime}$ denotes the viscous part of the stress tensor.
Projecting the normal and tangential stresses on the direction of $\b{u}$ and integrating over the surface gives

\\[
D=6\pi\eta Ru.
\\]

This is **Stokes' formula** for the drag on a slowly moving sphere.
The force is proportional to the velocity and to the linear size of the body.
This also follows from dimensional analysis of the Stokes equations, since $\rho$ no longer appears in the first
approximation and the only force scale formed from $\eta,u,R$ is $\eta uR$.

## Resistance Tensor

For a slowly moving body of arbitrary fixed shape, the drag need not be parallel to the velocity.
By linearity, however, it must have the form

\\[
D_i=\eta a_{ik}u_k,
\\]

where $a_{ik}$ is a tensor determined only by the shape and size of the body.
This tensor is symmetric.
The symmetry is a particular case of the reciprocal relations for slow dissipative motion.

## Limitation of Stokes' Formula

The Stokes solution is not uniformly valid at arbitrarily large distances, even when the Reynolds number is small.
For the sphere solution, at large $r$ the disturbance is of order

\\[
\abs{\b{v}-\b{u}}\sim \frac{uR}{r}.
\\]

Hence

\\[
(\b{v}\cdot\grad)\b{v}\sim \frac{u^2R}{r^2},
\qquad
\nu\laplacian\b{v}\sim \frac{\nu uR}{r^3}.
\\]

The neglected inertial term is small compared with the retained viscous term only if

\\[
r\ll \frac{\nu}{u}.
\\]

Equivalently, if $\mathrm{Re}=uR/\nu$, then the Stokes solution is valid in the near region

\\[
\frac{r}{R}\ll \frac{1}{\mathrm{Re}}.
\\]

At larger distances, the convective term must be kept in a linearized form.
Replacing $\b{v}\cdot\grad$ by $\b{u}\cdot\grad$ gives Oseen's equation

\\[
(\b{u}\cdot\grad)\b{v}
=-\frac{1}{\rho}\grad p+\nu\laplacian\b{v}.
\\]

For a sphere, this gives the first correction to Stokes' drag:

\\[
D=6\pi\eta Ru\left(1+\frac{3}{8}\frac{uR}{\nu}\right).
\\]

The necessity of this correction shows that the limit $\mathrm{Re}\to0$ is singular.
The first approximation is local near the body; the far field enters through matching.

For an infinite circular cylinder, the difficulty is stronger.
The Stokes equations alone cannot satisfy both the boundary condition on the cylinder and the condition at infinity.
Using Oseen's equation from the beginning gives, for the drag per unit length,

\\[
D=\frac{4\pi\eta u}{\log(3.70\nu/uR)}.
\\]

Thus even the leading expression contains a logarithm of the Reynolds number.
