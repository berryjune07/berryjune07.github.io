---
layout: post
title: "Stability of Flows"
subtitle: "fl3.1"
classification: "Fluid Mechanics 3.1"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc 
{:toc}

## Stability of Steady Flow

For a prescribed steady viscous-flow problem, an exact steady solution of the
Navier-Stokes equation may exist formally for every $\mathrm{Re}$. Such a
solution is physically observed only if it is stable. That is, every
sufficiently small perturbation must decay in time.

Let the steady solution be $\b{v}_0(\b{r})$, $p_0(\b{r})$, and write

\\[
\b{v}=\b{v}_0+\b{v}_1,\qquad
p=p_0+p_1.
\\]

The full equations are

\\[
\pdv{\b{v}}{t}+(\b{v}\cdot\grad)\b{v}
=-\frac{1}{\rho}\grad p+\nu\laplacian\b{v},
\qquad
\div\b{v}=0.
\\]

The unperturbed flow satisfies

\\[
(\b{v}_0\cdot\grad)\b{v}_0
=-\frac{1}{\rho}\grad p_0+\nu\laplacian\b{v}_0,
\qquad
\div\b{v}_0=0.
\\]

Keeping only terms of first order in $\b{v}_1$, we obtain the linearized
equations

\\[
\pdv{\b{v}_1}{t}
+(\b{v}_0\cdot\grad)\b{v}_1
+(\b{v}_1\cdot\grad)\b{v}_0
=-\frac{1}{\rho}\grad p_1+\nu\laplacian\b{v}_1,
\qquad
\div\b{v}_1=0.
\\]

On fixed solid boundaries,

\\[
\b{v}_1=0.
\\]

Since the coefficients in the linearized problem are independent of time, the
perturbations may be decomposed into normal modes

\\[
\b{v}_1(\b{r},t)=\b{f}(\b{r})e^{-i\omega t}.
\\]

The frequency $\omega$ is in general complex. With this convention,

\\[
e^{-i\omega t}=e^{-i\Re( \omega) \,t}
e^{\Im( \omega)\,t}.
\\]

Thus a mode grows if $\Im( \omega)>0$. Stability requires

\\[
\Im( \omega)<0
\\]

for every admissible perturbation mode.

For sufficiently small $\mathrm{Re}$ the steady flow is stable. As
$\mathrm{Re}$ increases, one often reaches a critical value $\mathrm{Re}_{\mathrm{cr}}$
at which the first mode becomes neutral:

\\[
\Im (\omega)=0.
\\]

For $\mathrm{Re}>\mathrm{Re}\_{\mathrm{cr}}$, the corresponding perturbation grows and the original
steady flow can no longer be the observed flow. The number
$\mathrm{Re}\_{\mathrm{cr}}$ is not universal; it depends on the geometry and on the
boundary conditions.

Near the first instability, suppose that the unstable mode has

\\[
\omega=\omega_1+i\gamma_1,
\qquad
\gamma_1>0,\qquad
\gamma_1\ll\omega_1.
\\]

Then initially

\\[
\b{v}_1=A(t)\b{f}(\b{r}),
\qquad
A(t)=A_0e^{\gamma_1t}e^{-i\omega_1t}.
\\]

This linear formula cannot remain valid indefinitely. The amplitude must be
limited by nonlinear terms. Averaging over times long compared with
$2\pi/\omega_1$ but short compared with $1/\gamma_1$, the amplitude equation
has the form

\\[
\odv{|A|^2}{t}
=2\gamma_1|A|^2-\alpha |A|^4+\cdots .
\\]

Here $\alpha$ is the Landau constant. If $\alpha>0$, the perturbation saturates
at

\\[
|A|_{\max}^2=\frac{2\gamma_1}{\alpha}.
\\]

Since

\\[
\gamma_1=C(\mathrm{Re}-\mathrm{Re}\_{\mathrm{cr}})
+O((\mathrm{Re}-\mathrm{Re}_{\mathrm{cr}})^2),
\\]

we get

\\[
|A|\_{\max}\propto \sqrt{\mathrm{Re}-\mathrm{Re}_{\mathrm{cr}}}.
\\]

This is a continuous, or soft, transition. If $\alpha<0$, the fourth-order term
is destabilizing and a stabilizing higher-order term is needed. Writing

\\[
\odv{|A|^2}{t}
=2\gamma_1|A|^2+|\alpha||A|^4-\beta |A|^6,
\qquad
\beta>0,
\\]

and putting $q=\|A\|^2$, the non-zero steady amplitudes satisfy

\\[
\beta q^2-|\alpha|q-2\gamma_1=0.
\\]

Thus

\\[
q
=\frac{|\alpha|}{2\beta}
\pm
\sqrt{\frac{\alpha^2}{4\beta^2}+\frac{2\gamma_1}{\beta}}.
\\]

In this case the transition is subcritical. There may be a range below
$\mathrm{Re}_{\mathrm{cr}}$ where the steady flow is stable to infinitesimal
perturbations but unstable to finite perturbations.

## Energy Estimate

The preceding discussion is spectral. A useful complementary estimate is
obtained by retaining the nonlinear term in the perturbation equation. In
dimensionless variables,

\\[
\pdv{\b{v}_1}{t}
+(\b{v}_0\cdot\grad)\b{v}_1
+(\b{v}_1\cdot\grad)\b{v}_0
+(\b{v}_1\cdot\grad)\b{v}_1
=-\grad p_1+\frac{1}{\mathrm{Re}}\laplacian\b{v}_1.
\\]

Taking the scalar product with $\b{v}_1$, using
$\div\b{v}_0=\div\b{v}_1=0$, and integrating over the fluid region gives

\\[
\dot E_1=T-\frac{D}{\mathrm{Re}},
\\]

where

\\[
E_1=\int\frac{1}{2}v_1^2\,dV,
\\]

\\[
T=-\int v_{1i}v_{1k}\pdv{v_{0i}}{x_k}\,dV,
\qquad
D=\int
\left(\pdv{v_{1i}}{x_k}\right)^2\,dV.
\\]

The surface terms vanish because $\b{v}_1=0$ on fixed walls, or because the
perturbation vanishes at infinity. The functional $D$ is positive, while $T$
may have either sign. If

\\[
\mathrm{Re}<\mathrm{Re}_E,\qquad
\mathrm{Re}_E=\min\frac{D}{T},
\\]

where the minimum is taken over admissible solenoidal perturbations with
$T>0$, then $\dot E_1<0$ for all perturbations. Hence the flow is stable in
the energy sense. This gives a rigorous lower bound for the critical
$\mathrm{Re}$, although the bound is usually much smaller than the observed value.

## Stability of Rotary Flow

Consider the flow between two coaxial cylinders of radii $R_1<R_2$, rotating
with angular velocities $\Omega_1$ and $\Omega_2$. For small viscosity and
large $\mathrm{Re}$, the stability criterion can be obtained by Rayleigh's
displacement argument.

Let

\\[
\mu=r^2\Omega(r)
\\]

be the angular momentum per unit mass, up to a constant factor. If a fluid
element is displaced from $r_0$ to $r>r_0$ while keeping its angular momentum,
the centrifugal force acting on it is determined by $\mu(r_0)$. For the
displacement to be restored, this force must be smaller than the equilibrium
centrifugal force at $r$. Thus the inviscid stability condition is

\\[
\mu\odv{\mu}{r}>0.
\\]

Equivalently,

\\[
\frac{\d}{\d r}(r^2\Omega)^2>0.
\\]

This is Rayleigh's criterion.

For Couette flow between the cylinders,

\\[
\Omega(r)
=\frac{\Omega_2R_2^2-\Omega_1R_1^2}{R_2^2-R_1^2}
+\frac{(\Omega_1-\Omega_2)R_1^2R_2^2}{R_2^2-R_1^2}\frac{1}{r^2}.
\\]

Substitution into Rayleigh's criterion gives

\\[
(\Omega_2R_2^2-\Omega_1R_1^2)\Omega(r)>0.
\\]

If the cylinders rotate in opposite directions, this condition cannot hold
throughout the whole annulus, and the flow is unstable. If they rotate in the
same direction, $\Omega(r)>0$, and the condition becomes

\\[
\Omega_2R_2^2>\Omega_1R_1^2.
\\]

Thus, if the outer cylinder is at rest and the inner cylinder rotates, the
inviscid criterion predicts instability. If the inner cylinder is at rest and
the outer cylinder rotates, the flow is stable.

For finite viscosity the full linearized problem must be used. Since the
unperturbed flow depends only on $r$, perturbations may be written as

\\[
\b{v}_1(r,\phi,z,t)
=e^{i(n\phi+kz-\omega t)}\b{f}(r),
\\]

where $n$ is an integer and $k$ is a continuous axial wave number. For given
$n$ and $k$, the boundary conditions at $r=R_1,R_2$ determine a discrete set
of eigenfrequencies. The first instability is usually axisymmetric
$(n=0)$.

At the threshold, the frequency of the critical Taylor-Couette mode is purely
imaginary and actually vanishes. Hence the first new flow is steady. It
consists of toroidal Taylor vortices arranged periodically along the axis.
The period is

\\[
\frac{2\pi}{k_{\mathrm{cr}}},
\\]

and each period contains two vortices rotating in opposite directions.

For a narrow gap

\\[
h=R_2-R_1\ll R_m=\frac{R_1+R_2}{2},
\\]

and with the outer cylinder at rest, the critical $\mathrm{Re}$ may be
written as

\\[
\mathrm{Re}=\frac{h\Omega_1R_1}{\nu},
\qquad
\mathrm{Re}_{\mathrm{cr}}=41.2\sqrt{\frac{R_m}{h}}.
\\]

Viscosity has a stabilizing effect in this problem. A flow that is unstable in
the inviscid Rayleigh criterion may become stable when viscous diffusion is
included.

The limiting case $h\to0$ gives plane Couette flow, namely flow between two
parallel planes in relative motion. This flow is linearly stable to
infinitesimal perturbations for every $\mathrm{Re}$, although finite
amplitude perturbations can still produce transition at large $\mathrm{Re}$.

## Stability of Flow in a Pipe

For a parallel flow in the $x$ direction, the unperturbed velocity is
independent of $x$. Perturbations may be written as wave packets composed of
normal modes

\\[
\b{v}_1=e^{i(kx-\omega t)}\b{f}(y,z).
\\]

The growth rate is

\\[
\gamma(k)=\Im( \omega(k) ).
\\]

If $\gamma(k)>0$ for a range of wave numbers, the corresponding packet is
amplified. It is also transported downstream with group velocity

\\[
v_g=\odv{\Re( \omega )}{k}.
\\]

This introduces a distinction absent in the simplest bounded problems. An
instability is absolute if the perturbation grows at a fixed spatial point. It
is convected if the perturbation grows while being carried downstream, but
decays at each fixed point after the packet passes.

For a disturbance imposed with real frequency $\omega$ at a fixed point, the
wave number $k$ is generally complex. The neutral stability curve is the curve
in the $(\omega,\mathrm{Re})$ plane for which

\\[
\Im( k(\omega,\mathrm{Re}) )=0.
\\]

It separates perturbations that grow downstream from perturbations that decay
downstream.

For plane Poiseuille flow, between two parallel planes, one may write

\\[
\b{v}_1
=e^{i(k_xx+k_zz-\omega t)}\b{f}(y).
\\]

The first neutral mode is two-dimensional:

\\[
k_z=0.
\\]

This is the content of Squire's theorem in this setting: for a fixed wave
number, the first unstable mode of a parallel shear flow may be taken
two-dimensional. Thus it is enough to study disturbances in the plane of the
base flow.

For plane Poiseuille flow the critical $\mathrm{Re}$ is

\\[
\mathrm{Re}_{\mathrm{cr}}=5772,
\\]

where

\\[
\mathrm{Re}=\frac{U_{\max}h}{2\nu},
\\]

$U_{\max}$ is the maximum velocity and $h$ is the distance between the planes.
The critical wave number is approximately

\\[
k_{\mathrm{cr}}\simeq \frac{2.04}{h}.
\\]

For flow in a circular pipe, the classical linear problem gives no unstable
infinitesimal modes. Axisymmetric perturbations are damped, and no unstable
non-axisymmetric mode is found. Nevertheless, pipe flow undergoes transition
in experiments. The transition is therefore subcritical: sufficiently large
finite perturbations can trigger turbulence even though infinitesimal
perturbations decay.

With

\\[
\mathrm{Re}=\frac{U_{\max}d}{2\nu}=\frac{\overline U d}{\nu},
\\]

where $d$ is the pipe diameter, carefully prepared laminar pipe flow may be
maintained up to very large $\mathrm{Re}$. In ordinary experiments, however, finite
disturbances often trigger turbulence for

\\[
\mathrm{Re}\simeq 1800
\\]

or above. For plane channel flow, finite-amplitude turbulent regions may
appear for $\mathrm{Re}$ of order $1000$. This is a hard transition: the drag changes
discontinuously between the laminar and turbulent states.

## Orr-Sommerfeld Formulation

For a plane parallel base flow

\\[
\b{v}_0=U(y)\b{e}_x,
\\]

a two-dimensional incompressible perturbation can be written with a stream
function

\\[
\psi(y)e^{i(kx-\omega t)}.
\\]

Let

\\[
c=\frac{\omega}{k}.
\\]

The linearized Navier-Stokes equations reduce to the Orr-Sommerfeld equation

\\[
(U-c)(\psi^{\prime\prime}-k^2\psi)-U^{\prime\prime}\psi
=\frac{1}{ik\mathrm{Re}}
(\psi^{\prime\prime\prime\prime}-2k^2\psi^{\prime\prime}+k^4\psi).
\\]

For no-slip walls,

\\[
\psi=0,\qquad \psi^\prime=0.
\\]

In the inviscid limit $\mathrm{Re}\to\infty$, this becomes Rayleigh's equation

\\[
(U-c)(\psi^{\prime\prime}-k^2\psi)-U^{\prime\prime}\psi=0.
\\]

Rayleigh's inflection-point theorem says that inviscid instability of a
smooth parallel shear flow requires an inflection point:

\\[
U^{\prime\prime}(y)=0
\\]

somewhere in the flow. This condition is necessary, not sufficient. It is one
reason why shear layers with inflectional velocity profiles are much more
unstable than plane Couette flow.

## Instability of Tangential Discontinuities

Consider two layers of inviscid incompressible fluid moving tangentially past
one another. The separating surface is a surface of tangential discontinuity.
Let the interface be $z=0$. In a frame where the lower fluid is at rest, take

\\[
\b{U}_1=U\b{e}_x,\qquad
\b{U}_2=0,
\\]

with densities $\rho_1$ and $\rho_2$. We neglect gravity and surface tension
first.

Let the interface displacement be

\\[
\zeta=\zeta_0e^{i(kx-\omega t)}.
\\]

In each fluid, the perturbation pressure satisfies Laplace's equation,

\\[
\laplacian p^\prime=0.
\\]

For the upper fluid $z>0$ the decaying solution is

\\[
p_1^\prime=C_1e^{i(kx-\omega t)}e^{-kz}.
\\]

The linearized Euler equation in the upper fluid is

\\[
\pdv{\b{v}_1^\prime}{t}
+U\pdv{\b{v}_1^\prime}{x}
=-\frac{1}{\rho_1}\grad p_1^\prime.
\\]

Its $z$-component gives, at $z=0$,

\\[
v_{1z}^\prime=\frac{k p_1^\prime}{i\rho_1(kU-\omega)}.
\\]

The kinematic condition at the moving interface is

\\[
\pdv{\zeta}{t}
=v_{1z}^\prime-U\pdv{\zeta}{x}.
\\]

Therefore

\\[
v_{1z}^\prime=i\zeta(kU-\omega),
\\]

and hence

\\[
p_1^\prime=-\frac{\rho_1\zeta}{k}(kU-\omega)^2.
\\]

For the lower fluid $z<0$,

\\[
p_2^\prime=C_2e^{i(kx-\omega t)}e^{kz},
\\]

and the same calculation, now with $U_2=0$, gives

\\[
p_2^\prime=\frac{\rho_2\zeta}{k}\omega^2.
\\]

Continuity of pressure at the interface gives

\\[
\rho_1(kU-\omega)^2=-\rho_2\omega^2.
\\]

Solving for $\omega$,

\\[
\omega
=kU\frac{\rho_1\pm i\sqrt{\rho_1\rho_2}}{\rho_1+\rho_2}.
\\]

There is always a root with positive imaginary part. Therefore an ideal
tangential discontinuity is unstable to infinitesimal perturbations. This is
the Kelvin-Helmholtz instability.

For arbitrary tangential velocities $U_1$ and $U_2$, the same result is

\\[
\omega
=k\frac{\rho_1U_1+\rho_2U_2}{\rho_1+\rho_2}
\pm i k(U_1-U_2)
\frac{\sqrt{\rho_1\rho_2}}{\rho_1+\rho_2},
\\]

where the sign is chosen so that one mode grows. The growth rate is

\\[
\gamma
=k|U_1-U_2|\frac{\sqrt{\rho_1\rho_2}}{\rho_1+\rho_2}.
\\]

The ideal discontinuity has no intrinsic length scale, so the growth rate
increases without bound as $k\to\infty$. This is not physical. In a real fluid
the velocity changes over a finite shear-layer thickness, and viscosity
regularizes the shortest wavelengths.

If gravity and surface tension are included, the dispersion relation becomes

\\[
\omega
=k\frac{\rho_1U_1+\rho_2U_2}{\rho_1+\rho_2}
\pm
\left\[
\frac{gk(\rho_2-\rho_1)+\sigma k^3}{\rho_1+\rho_2}
-\frac{\rho_1\rho_2k^2(U_1-U_2)^2}{(\rho_1+\rho_2)^2}
\right\]^{1/2},
\\]

where the lower fluid has density $\rho_2$ and the upper fluid has density
$\rho_1$. The interface is unstable when the expression under the square root
is negative. Thus gravity and surface tension are stabilizing when

\\[
gk(\rho_2-\rho_1)+\sigma k^3>0,
\\]

while the velocity jump is destabilizing.
