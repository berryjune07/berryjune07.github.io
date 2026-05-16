---
layout: post
title: "Exact Solutions of the Navier–Stokes Equation"
subtitle: "fl2.8"
classification: "Fluid Mechanics 2.8"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Rotating Disk

Exact solutions of the Navier--Stokes equation are rare when the nonlinear term does not vanish identically.
One important example is the motion caused by an infinite plane disk rotating uniformly about its axis.
Let the disk be the plane $z=0$, the fluid occupy $z>0$, and the disk rotate with angular velocity $\Omega$.
The boundary conditions are

\\[
v_r=0,\qquad v_\phi=\Omega r,\qquad v_z=0 \quad (z=0),
\\]

and

\\[
v_r=0,\qquad v_\phi=0 \quad (z\to\infty).
\\]

The similarity form is

\\[
v_r=r\Omega F(\zeta),\qquad
v_\phi=r\Omega G(\zeta),\qquad
v_z=\sqrt{\nu\Omega}\,H(\zeta),
\\]

\\[
p=-\rho\nu\Omega P(\zeta),\qquad
\zeta=\sqrt{\frac{\Omega}{\nu}}z.
\\]

The radial and azimuthal velocities are proportional to $r$, while the axial velocity is constant on each plane
$z=\mathrm{const.}$.
Substitution into the Navier--Stokes equation and into $\div\b{v}=0$ gives

\\[
\begin{align\*}
F^2-G^2+F^\prime H &= F^{\prime\prime}, \nl
2FG+G^\prime H &= G^{\prime\prime}, \nl
HH^\prime &= P^\prime+H^{\prime\prime}, \nl
2F+H^\prime &= 0,
\end{align\*}
\\]

where the prime denotes differentiation with respect to $\zeta$.
The boundary conditions are

\\[
F(0)=0,\qquad G(0)=1,\qquad H(0)=0,
\\]

\\[
F(\infty)=0,\qquad G(\infty)=0.
\\]

The problem is reduced to a system of ordinary differential equations.
Its solution must be found numerically.
The axial velocity at infinity is not zero; rather,

\\[
v_z(\infty)=H(\infty)\sqrt{\nu\Omega},
\\]

where $H(\infty)<0$.
This vertical flow is necessary because the rotating disk throws fluid radially outward near the surface.

The tangential stress on the disk is

\\[
\sigma_{z\phi}
=\mu\left(\pdv{v_\phi}{z}\right)_{z=0}
=\mu r\Omega\sqrt{\frac{\Omega}{\nu}}\,G^\prime(0).
\\]

For a disk of large finite radius $R$, neglecting edge effects, the moment of the frictional forces on both sides is

\\[
M
=2\int_0^R 2\pi r^2\sigma_{z\phi}\,dr
=\pi R^4\rho\sqrt{\nu\Omega^3}\,G^\prime(0).
\\]

Numerically,

\\[
M\simeq -1.94\,R^4\rho\sqrt{\nu\Omega^3}.
\\]

The sign indicates that the viscous moment opposes the rotation of the disk.

## Hamel Flow

Another exact solution is the steady radial flow between two plane walls meeting at an angle $\alpha$.
Use cylindrical coordinates $(r,\phi,z)$, where the $z$-axis is the line of intersection of the planes.
Assume that the flow is uniform in the $z$-direction and purely radial:

\\[
v_\phi=v_z=0,\qquad v_r=v(r,\phi).
\\]

The equation of continuity gives

\\[
\pdv{(rv_r)}{r}=0,
\\]

so that $rv_r$ is a function only of $\phi$.
Introduce

\\[
u(\phi)=\frac{rv_r}{6\nu}.
\\]

Then the angular component of the equation of motion gives

\\[
\frac{1}{\rho}\pdv{p}{\phi}
=\frac{12\nu^2}{r^2}\odv{u}{\phi}.
\\]

Thus

\\[
\frac{p}{\rho}
=\frac{12\nu^2}{r^2}u(\phi)+f(r).
\\]

Substitution into the radial component separates the variables and gives

\\[
\frac{p}{\rho}
=\frac{6\nu^2}{r^2}(2u-C_1)+\mathrm{const.},
\\]

where $u$ satisfies

\\[
u^{\prime\prime}+4u+6u^2=2C_1.
\\]

Multiplying by $u^\prime$ and integrating once,

\\[
\frac{1}{2}(u^\prime)^2+2u^2+2u^3-2C_1u-2C_2=0.
\\]

Equivalently,

\\[
2\phi
=\pm\int\frac{du}{\sqrt{-u^3-u^2+C_1u+C_2}}+C_3.
\\]

The constants are determined by the no-slip conditions

\\[
u\left(\pm\frac{\alpha}{2}\right)=0
\\]

and by the mass flux through any section $r=\mathrm{const.}$:

\\[
Q
=\rho\int_{-\alpha/2}^{\alpha/2}v_r r\,d\phi
=6\nu\rho\int_{-\alpha/2}^{\alpha/2}u(\phi)\,d\phi.
\\]

The dimensionless parameter

\\[
\mathrm{Re}=\frac{|Q|}{\nu\rho}
\\]

is the corresponding $\mathrm{Re}$.
For converging flow $(Q<0)$, a symmetric solution exists for any aperture $\alpha<\pi$ and any $\mathrm{Re}$.
For large $\mathrm{Re}$ the flow is almost potential in the middle of the channel and differs from it mainly in narrow
layers near the walls.
For diverging flow $(Q>0)$, the symmetric everywhere-diverging solution exists only up to a maximum value
$\mathrm{Re}_{\max}(\alpha)$.
Beyond this value asymmetric solutions appear, and the steady diverging flow is in practice unstable.

## Submerged Jet

Consider a jet emerging from a narrow tube into an infinite viscous fluid.
Take spherical coordinates $(r,\theta,\phi)$ with the polar axis in the direction of the jet.
For an axially symmetric solution,

\\[
v_\phi=0,\qquad
v_r=\frac{F(\theta)}{r},\qquad
v_\theta=\frac{f(\theta)}{r}.
\\]

The continuity equation gives

\\[
F(\theta)=-\odv{f}{\theta}-f\cot\theta.
\\]

For this form, the equations of motion are satisfied by

\\[
f(\theta)=-\frac{2\nu\sin\theta}{A-\cos\theta},
\\]

and hence

\\[
F(\theta)
=2\nu\left\\{\frac{A^2-1}{(A-\cos\theta)^2}-1\right\\}.
\\]

The pressure distribution is

\\[
p-p_0
=-\frac{4\rho\nu^2(A\cos\theta-1)}{r^2(A-\cos\theta)^2}.
\\]

The constant $A>1$ is determined by the momentum flux of the jet.
If $P$ denotes this momentum flux, then

\\[
P
=16\pi\rho\nu^2 A
\left[
1+\frac{4}{3(A^2-1)}
-\frac{A}{2}\log\frac{A+1}{A-1}
\right].
\\]

The streamlines satisfy

\\[
\frac{r\sin^2\theta}{A-\cos\theta}=\mathrm{const.}
\\]

In the weak-jet limit, $A\gg 1$, and

\\[
P\simeq \frac{16\pi\rho\nu^2}{A}.
\\]

The corresponding velocity field is

\\[
v_\theta=-\frac{P}{8\pi\rho\nu}\frac{\sin\theta}{r},\qquad
v_r=\frac{P}{4\pi\rho\nu}\frac{\cos\theta}{r}.
\\]

In the strong-jet limit, $A\to 1$ and the jet is concentrated near the axis.
Then the solution is no longer a small perturbation of the surrounding fluid, although it is still an exact solution of
the steady Navier--Stokes equations for a point jet.
