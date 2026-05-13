---
layout: post
title: "The Viscosity of Suspensions"
subtitle: "fl2.7"
classification: "Fluid Mechanics 2.7"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc 
{:toc}

## Dilute Suspension

Consider a fluid containing many small rigid particles.
If the characteristic length of the observed motion is large compared with the particle radius, the mixture may be
regarded as a homogeneous medium.
Its viscosity is then not the viscosity $\eta_0$ of the pure liquid, but an effective viscosity
$\eta_{\mathrm{eff}}$.

We shall assume that the concentration is small.
Then the disturbance produced by each particle may be calculated as if the other particles were absent, and the total
correction is obtained by multiplying the single-particle result by the number density $n$.
For spherical particles of radius $R$, the volume fraction is

\\[
\phi=\frac{4\pi R^3}{3}n.
\\]

The calculation is local.
Near each particle the undisturbed flow may be replaced by its linear part:

\\[
v_{0i}=\alpha_{ik}x_k,
\\]

where $\alpha_{ik}$ is constant and symmetric.
For an incompressible fluid,

\\[
\alpha_{ii}=0.
\\]

The pressure of this undisturbed linear flow is constant, and we may take this constant to be zero.

## Disturbance by One Sphere

Place one rigid sphere at the origin.
Let

\\[
\b{v}=\b{v}_0+\b{v}_1.
\\]

The disturbance $\b{v}_1$ must vanish at infinity, while the no-slip condition on the sphere is

\\[
\b{v}=0\qquad (r=R).
\\]

Since the Reynolds number based on the particle radius is small, the disturbance satisfies the Stokes equations

\\[
\eta_0\laplacian\b{v}_1-\grad p=0,\qquad
\div\b{v}_1=0.
\\]

The solution can be obtained from the same scalar function used in the Stokes-flow problem for a translating sphere.
In index notation, with

\\[
n_i=\frac{x_i}{r},
\\]

the result is

\\[
v_{1i}
=\frac{5}{2}\left(\frac{R^5}{r^4}-\frac{R^3}{r^2}\right)
\alpha_{kl}n_in_kn_l
-\frac{R^5}{r^4}\alpha_{ik}n_k,
\\]

and the pressure deviation is

\\[
p=-5\eta_0\frac{R^3}{r^3}\alpha_{ik}n_in_k.
\\]

These formulae are to be used only outside the solid sphere.
They vanish at infinity and make the total velocity zero at $r=R$.

## Mean Stress

The effective viscosity is determined by comparing the mean stress with the mean velocity gradient.
Let the average be taken over a large volume $V$:

\\[
\bar{\sigma}\_{ik}=\frac{1}{V}\int_V \sigma_{ik}\,dV.
\\]

For the pure liquid,

\\[
\sigma_{ik}=-p\delta_{ik}
+\eta_0\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right).
\\]

Separate from this expression the stress which would be present in a homogeneous fluid with the same average velocity
gradient. Then

\\[
\bar{\sigma}\_{ik}
=\eta_0\left(\pdv{\bar{v}\_i}{x_k}+\pdv{\bar{v}\_k}{x_i}\right)-\bar{p}\delta_{ik}
+\frac{1}{V}\int_V
\left\\{
\sigma_{ik}
-\eta_0\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right)
+p\delta_{ik}
\right\\}dV.
\\]

The integrand in the last term is zero in the liquid except for the disturbance caused by the solid particles.
In the dilute limit, we evaluate the correction for one sphere and multiply by $n$.
The direct volume integral would require the unknown internal stress inside the rigid particle.
This is avoided by using the equilibrium equation

\\[
\pdv{\sigma_{il}}{x_l}=0.
\\]

Since

\\[
\sigma_{ik}=\pdv{}{x_l}(\sigma_{il}x_k),
\\]

the volume integral can be transformed into a surface integral over a large sphere lying entirely in the liquid.
Only the terms of order $r^{-2}$ in the disturbance are needed.
Using the solution above, the single-particle contribution gives

\\[
n\eta_0 \cdot 20\pi R^3
\left\\{
5\alpha_{lm}\overline{n_i n_k n_l n_m}
-\alpha_{il}\overline{n_kn_l}
\right\\}.
\\]

The directional averages are

\\[
\overline{n_in_k}=\frac{1}{3}\delta_{ik},
\qquad
\overline{n_in_kn_ln_m}
=\frac{1}{15}
\left(
\delta_{ik}\delta_{lm}
+\delta_{il}\delta_{km}
+\delta_{im}\delta_{kl}
\right).
\\]

Since $\alpha_{ll}=0$, the correction reduces to

\\[
5\eta_0\alpha_{ik}\frac{4\pi R^3n}{3}.
\\]

Thus

\\[
\bar{\sigma}\_{ik}
=2\eta_0\alpha\_{ik}
+5\eta_0\alpha\_{ik}\phi.
\\]

On the other hand, by definition of the effective viscosity,

\\[
\bar{\sigma}\_{ik}=2\eta\_{\mathrm{eff}}\alpha\_{ik}.
\\]

Therefore

\\[
\eta_{\mathrm{eff}}=\eta_0\left(1+\frac{5}{2}\phi\right).
\\]

This is Einstein's formula for the viscosity of a dilute suspension of rigid spheres.
The coefficient $5/2$ is called the intrinsic viscosity of a dilute suspension of spheres.

## Non-spherical Particles

For spheroidal particles the same form is retained,

\\[
\eta_{\mathrm{eff}}=\eta_0(1+A\phi),
\\]

but the coefficient $A$ depends on the aspect ratio.
If the semi-axes are $a,b,b$, then

\\[
\phi=\frac{4\pi ab^2}{3}n.
\\]

Landau gives, for several values of $a/b$,

| $a/b$ | $0.1$  | $0.2$  | $0.5$  | $1.0$ | $2$    | $5$    | $10$   |
|-------|--------|--------|--------|-------|--------|--------|--------|
| $A$   | $8.04$ | $4.71$ | $2.85$ | $2.5$ | $2.91$ | $5.81$ | $13.6$ |
{:.centered}

The correction is smallest near the spherical case and increases as the particle becomes either flattened or elongated.
For non-spherical particles, velocity gradients also orient the particles.
Thus the distribution of orientations becomes part of the hydrodynamical problem; the simple scalar correction above is
valid only when the orientational distribution is prescribed or effectively isotropic.

## Range of Validity

Einstein's formula is the first term of a concentration expansion:

\\[
\frac{\eta_{\mathrm{eff}}}{\eta_0}
=1+\frac{5}{2}\phi+O(\phi^2).
\\]

The $O(\phi^2)$ terms come from hydrodynamical interactions between particles and from correlations in their positions.
Hence the formula is valid only for dilute suspensions, on length scales large compared with the particle size, and for
slow enough motion that the Stokes approximation is applicable around each particle.
