---
layout: post
title: "Oscillatory Motion in a Viscous Fluid"
subtitle: "fl2.9"
classification: "Fluid Mechanics 2.9"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Oscillating Plane

Consider a plane solid surface $x=0$ bounding a viscous fluid in $x>0$.
Suppose that the surface oscillates parallel to itself, in the $y$ direction,
with velocity

\\[
u(t)=\Re\left( \{u_0e^{-i\omega t}\} \right).
\\]

If the pressure is uniform and the motion depends only on $x$ and $t$, then
the Navier-Stokes equation is reduced to

\\[
\pdv{v_y}{t}=\nu\pdvn{2}{v_y}{x}.
\\]

Writing

\\[
v_y=\Re \left( \{u_0e^{i(kx-\omega t)}\} \right),
\\]

we have

\\[
i\omega=\nu k^2.
\\]

The solution which decays as $x\to\infty$ is obtained from

\\[
k=\frac{1+i}{\delta},\qquad
\delta=\sqrt{\frac{2\nu}{\omega}}.
\\]

Thus, for real $u_0$,

\\[
v_y(x,t)=u_0e^{-x/\delta}\cos\left(\omega t-\frac{x}{\delta}\right).
\\]

The quantity $\delta$ is the penetration depth of the oscillatory motion. The
velocity amplitude decreases exponentially, and the phase is delayed by
$x/\delta$.

The shear stress is

\\[
\sigma_{xy}=\mu\pdv{v_y}{x}.
\\]

In complex notation, at the wall,

\\[
\sigma_{xy}(0,t)=\Re \left\\{
\sqrt{\frac{\omega\mu\rho}{2}}(i-1)u_0e^{-i\omega t}
\right\\}.
\\]

Equivalently, the force exerted by the fluid on unit area of the wall is

\\[
f_y=-u_0\sqrt{\omega\mu\rho}\cos\left(\omega t+\frac{\pi}{4}\right).
\\]

Hence the mean rate of dissipation per unit area is

\\[
\overline{\dot E}
=\frac{1}{2}u_0^2\sqrt{\frac{\omega\mu\rho}{2}}.
\\]

More generally, if the wall velocity $u(t)$ is not sinusoidal, the tangential
force per unit area is

\\[
f_y(t)
=-\sqrt{\frac{\mu\rho}{\pi}}
\int_{-\infty}^t
\frac{\dot u(t^\prime)}{\sqrt{t-t^\prime}}\,dt^\prime.
\\]

This formula shows explicitly that the force is not determined by the
instantaneous velocity alone. It depends on the previous motion of the wall.

## Oscillating Body

For small oscillations of a body, the convective term in the Navier-Stokes
equation may be omitted. Then

\\[
\pdv{\b{v}}{t}
=-\frac{1}{\rho}\grad p+\nu\laplacian\b{v},
\qquad
\div\b{v}=0.
\\]

Taking the curl gives

\\[
\pdv{}{t}\curl\b{v}
=\nu\laplacian\curl\b{v}.
\\]

Thus the vorticity satisfies a diffusion equation. During one period it
diffuses through a distance of order

\\[
\delta=\sqrt{\frac{2\nu}{\omega}}.
\\]

If the characteristic length $l$ of the body satisfies

\\[
l^2\omega\ll\nu,
\\]

then $\delta\gg l$, and the viscous diffusion is effectively instantaneous on
the scale of the body. The motion is then quasi-steady. For example, a slowly
oscillating sphere of radius $R$ experiences, to leading order,

\\[
\b{F}=6\pi\mu R\b{u}(t),
\\]

provided the oscillatory $\mathrm{Re}$ is small.

The opposite case is

\\[
l^2\omega\gg\nu.
\\]

Then vorticity is confined to a thin layer near the surface. Outside this
layer the fluid is practically ideal and irrotational:

\\[
\curl\b{v}=0,\qquad \div\b{v}=0.
\\]

The outer flow is therefore a potential flow, determined by the impermeability
condition on the moving surface. The tangential no-slip condition is restored
inside the thin viscous layer.

Let $x$ be the distance measured normally from the surface into the fluid, and
let $v_0e^{-i\omega t}$ be the tangential velocity of the inviscid outer flow
at the surface, in the reference frame of the body. Then the boundary-layer
correction has the same form as for the oscillating plane:

\\[
v_y(x,t)
=v_0e^{-i\omega t}
\left(1-\exp\left[-(1-i)\frac{x}{\delta}\right]\right),
\\]

The mean loss of mechanical energy is then

\\[
\overline{\dot E}_{\mathrm{mech}}
=-\frac{1}{2}\sqrt{\frac{\omega\mu\rho}{2}}
\int v_0^2\,df,
\\]

where the integral is taken over the surface of the body and $v_0$ denotes the
amplitude of the tangential velocity of the potential flow at the surface.

## Complex Drag

For a body oscillating with velocity

\\[
\b{u}=\b{u}_0e^{-i\omega t},
\\]

the hydrodynamic force is usually written as

\\[
\b{F}=\beta\b{u},\qquad
\beta=\beta_1+i\beta_2.
\\]

In real notation this means

\\[
\b{F}
=\beta_1\b{u}-\frac{\beta_2}{\omega}\dot{\b{u}}.
\\]

The term with $\beta_1$ is dissipative, while the term with $\beta_2$ is an
inertial correction. The mean rate of loss of mechanical energy is

\\[
\overline{\dot E}_{\mathrm{mech}}
=-\frac{1}{2}\beta_1u_0^2.
\\]

For a sphere of radius $R$, the exact linear solution gives

\\[
\b{F}
=6\pi\mu R\left(1+\frac{R}{\delta}\right)\b{u}
+3\pi R^2\sqrt{\frac{2\mu\rho}{\omega}}
\left(1+\frac{2R}{9\delta}\right)\dot{\b{u}},
\qquad
\delta=\sqrt{\frac{2\nu}{\omega}}.
\\]

The first part is the viscous drag, and the second part is the force required
to accelerate the surrounding fluid. In the limit $\omega\to0$ this reduces to
Stokes' law. In the opposite limit $R\gg\delta$,

\\[
\b{F}
=3\pi R^2\sqrt{2\mu\rho\omega}\,\b{u}
+\frac{2}{3}\pi\rho R^3\dot{\b{u}},
\\]

which is the sum of the boundary-layer friction and the added-mass force.
