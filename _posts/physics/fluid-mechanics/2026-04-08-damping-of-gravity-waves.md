---
layout: post
title: "Damping of Gravity Waves"
subtitle: "fl2.10"
classification: "Fluid Mechanics 2.10"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Surface Layer

Consider gravity waves on the free surface of a viscous incompressible fluid.
Let $k$ be the wave number, $\lambda=2\pi/k$ the wavelength, and $\omega$ the
frequency. We assume that the amplitude is small and that

\\[
\frac{\nu}{\lambda^2}\ll\omega.
\\]

Equivalently, the viscous diffusion length during one period is much smaller
than the wavelength:

\\[
\delta=\sqrt{\frac{2\nu}{\omega}}\ll\lambda.
\\]

Thus the main motion is the potential motion of an ideal fluid. Viscosity only
produces a thin rotational layer near the free surface, together with a slow
decay of the wave amplitude.

There is an important difference from a solid boundary. At a solid wall,
viscosity must change the tangential velocity from its ideal value to zero,
which produces large velocity gradients. At a free surface, there is no no-slip
condition. The viscous correction is only needed to make the tangential stress
vanish. Therefore the leading dissipation may be computed directly from the
ideal potential flow in the bulk.

## Energy Dissipation

For an incompressible viscous fluid, the rate of viscous loss of mechanical
energy is

\\[
\dot E_{\mathrm{mech}}
=-\frac{\mu}{2}
\int
\left(
\pdv{v_i}{x_k}+\pdv{v_k}{x_i}
\right)^2\,dV.
\\]

In the leading approximation the flow is potential:

\\[
\b{v}=\grad\phi.
\\]

Hence

\\[
\pdv{v_i}{x_k}=\pdvs{\phi}{x_i}{x_k},
\\]

and the dissipation becomes

\\[
\dot E_{\mathrm{mech}}
=-2\mu
\int
\left(
\pdvs{\phi}{x_i}{x_k}
\right)^2\,dV.
\\]

For a deep-water wave propagating in the $x$ direction, with the undisturbed
surface at $z=0$ and the fluid occupying $z<0$, the velocity potential has the
form

\\[
\phi=\phi_0e^{kz}\cos(kx-\omega t+\alpha).
\\]

It satisfies

\\[
\laplacian\phi=0,\qquad z<0,
\\]

and decays as $z\to-\infty$. Since each second derivative gives a factor of
order $k^2$, a direct calculation gives

\\[
\overline{\dot E}_{\mathrm{mech}}
=-8\mu k^4\int\overline{\phi^2}\,dV.
\\]

The mean kinetic and potential energies of a small gravity wave are equal.
Therefore the mean total mechanical energy may be written as twice the mean
kinetic energy:

\\[
\overline{E}_{\mathrm{mech}}
=\rho\int\overline{v^2}\,dV
=\rho\int\overline{
\left(\pdv{\phi}{x_i}\right)^2
}\,dV.
\\]

For the above potential,

\\[
\int\overline{
\left(\pdv{\phi}{x_i}\right)^2
}\,dV
=2k^2\int\overline{\phi^2}\,dV.
\\]

Thus

\\[
\overline{E}_{\mathrm{mech}}
=2\rho k^2\int\overline{\phi^2}\,dV.
\\]

## Damping Coefficient

Let the wave amplitude be proportional to $e^{-\gamma t}$. Then the energy,
being quadratic in the amplitude, is proportional to $e^{-2\gamma t}$. Hence

\\[
2\gamma
=-\frac{\overline{\dot E}\_{\mathrm{mech}}}
{\overline{E}_{\mathrm{mech}}}.
\\]

Using the expressions above,

\\[
2\gamma
=\frac{8\mu k^4}{2\rho k^2}
=4\nu k^2.
\\]

Therefore

\\[
\gamma=2\nu k^2.
\\]

For deep-water gravity waves,

\\[
\omega^2=gk.
\\]

Thus the damping coefficient may also be written as

\\[
\gamma=2\nu\frac{\omega^4}{g^2}.
\\]

The result is small under the assumption $\nu k^2\ll\omega$. It is therefore a
correction to the inviscid wave motion, not a change of the leading dispersion
relation.

## Arbitrary Viscosity

When the viscosity is not small, one must solve the linearized equations
directly. For a two-dimensional disturbance proportional to
$e^{ikx-i\omega t}$, the equations are

\\[
\begin{aligned}
\pdv{v_x}{t}
&=-\frac{1}{\rho}\pdv{p}{x}
+\nu\left(\pdvn{2}{v_x}{x}+\pdvn{2}{v_x}{z}\right), \nl
\pdv{v_z}{t}
&=-\frac{1}{\rho}\pdv{p}{z}
+\nu\left(\pdvn{2}{v_z}{x}+\pdvn{2}{v_z}{z}\right)-g, \nl
\pdv{v_x}{x}+\pdv{v_z}{z}&=0.
\end{aligned}
\\]

At the free surface the tangential and normal stresses vanish, to first order
in the wave amplitude:

\\[
\sigma_{xz}
=\mu\left(\pdv{v_x}{z}+\pdv{v_z}{x}\right)=0,
\\]

\\[
\sigma_{zz}
=-p+2\mu\pdv{v_z}{z}=0.
\\]

Solving the linear system with decay as $z\to-\infty$ gives the dispersion
relation

\\[
\left(2-\frac{i\omega}{\nu k^2}\right)^2
+\frac{g}{\nu^2k^3}
=4\sqrt{1-\frac{i\omega}{\nu k^2}}.
\\]

In the weak-viscosity limit this gives

\\[
\omega=\pm\sqrt{gk}-2i\nu k^2.
\\]

Thus the imaginary part reproduces the damping coefficient found from the
energy method. In the opposite limit,

\\[
\nu k^2\gg\sqrt{gk},
\\]

the motion is no longer an oscillatory wave with slow damping. The disturbance
decays aperiodically. The slowest decay has the order

\\[
\omega\simeq -\,i\frac{g}{2\nu k}.
\\]
