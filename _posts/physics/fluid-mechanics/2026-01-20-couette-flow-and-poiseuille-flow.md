---
layout: post
title: "Couette Flow and Poiseuille Flow"
subtitle: "fl2.3"
classification: "Fluid Mechanics 2.3"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Plane Couette Flow

Consider a viscous incompressible fluid between two parallel planes.
Let the lower plane be $y=0$, the upper plane be $y=h$, and take the $x$-axis in the direction of motion.
Assume a steady one-dimensional velocity field

\\[
\b{v}=v(y)\hat{\b{x}}.
\\]

The equation of continuity is identically satisfied.
The incompressible Navier--Stokes equation reduces to

\\[
\eta \odvn{2}{v}{y}=\odv{p}{x}, \qquad \pdv{p}{y}=0.
\\]

For pure Couette flow, there is no pressure gradient:

\\[
\odv{p}{x}=0.
\\]

Hence

\\[
\odvn{2}{v}{y}=0,
\\]

so that $v$ is linear in $y$.
If the lower plane is fixed and the upper plane moves with velocity $u$, then

\\[
v(0)=0,\qquad v(h)=u.
\\]

Therefore

\\[
v(y)=\frac{u}{h}y
\\]

and the mean velocity is

\\[
\bar{v}
=\frac{1}{h}\int_0^h v(y)\,dy
=\frac{u}{2}.
\\]

The shear stress is constant:

\\[
\varepsilon_{xy}
=\eta\odv{v}{y}
=\eta\frac{u}{h}.
\\]

Thus the tangential force per unit area on the lower plane is $\eta u/h$, while the force on the upper plane has the opposite sign.

## Plane Poiseuille Flow

Now suppose both planes are fixed and the motion is caused by a pressure gradient.
The boundary conditions are

\\[
v(0)=v(h)=0.
\\]

Since $\pdv{p}{y}=0$, the pressure is constant across the gap.
Also the equation

\\[
\eta \odvn{2}{v}{y}=\odv{p}{x}
\\]

has a left-hand side depending only on $y$ and a right-hand side depending only on $x$.
Hence $\odv{p}{x}$ must be constant.
Let

\\[
\Delta p=p(0)-p(l)>0
\\]

be the pressure drop over a length $l$ in the positive $x$-direction.
Then

\\[
\odv{p}{x}=-\frac{\Delta p}{l}.
\\]

Solving the differential equation gives

\\[
v(y)=\frac{\Delta p}{2\eta l}y(h-y)
\\]

which is parabolic and reaches its maximum at $y=h/2$:

\\[
v_{\max}=\frac{\Delta p}{8\eta l}h^2.
\\]

The mean velocity is

\\[
\bar{v}
=\frac{1}{h}\int_0^h v(y)\,dy
=\frac{\Delta p}{12\eta l}h^2
=\frac{2}{3}v_{\max}.
\\]

Per unit width in the $z$-direction, the volume discharge is

\\[
q=\int_0^h v(y)\,dy
=\frac{\Delta p}{12\eta l}h^3.
\\]

The shear stress distribution is

\\[
\varepsilon_{xy}
=\eta\odv{v}{y}
=\frac{\Delta p}{2l}(h-2y).
\\]

It changes sign at the middle of the channel.
The wall shear stress has magnitude

\\[
\abs{\varepsilon_{xy}}_{y=0,h}
=\frac{\Delta p}{2l}h.
\\]

If the upper plane also moves with velocity $u$, the two effects superpose:

\\[
v(y)=\frac{u}{h}y+\frac{\Delta p}{2\eta l}y(h-y).
\\]

This is often called Couette--Poiseuille flow.

## Flow in a Circular Pipe

Consider steady flow in a circular pipe of radius $R$ and length $l$.
Take the $x$-axis along the pipe.
By symmetry,

\\[
\b{v}=v(r)\hat{\b{x}},
\\]

where $r$ is the distance from the axis.
The pressure is constant over each cross-section, and

\\[
\odv{p}{x}=-\frac{\Delta p}{l}.
\\]

The $x$-component of the Navier--Stokes equation becomes

\\[
\eta \frac{1}{r}\odv{}{r}\left(r\odv{v}{r}\right)
=-\frac{\Delta p}{l}.
\\]

Integrating once,

\\[
r\odv{v}{r}
=-\frac{\Delta p}{2\eta l}r^2+C.
\\]

The velocity must remain finite at $r=0$, so $C=0$.
Integrating again gives

\\[
v(r)=-\frac{\Delta p}{4\eta l}r^2+C_1.
\\]

The no-slip condition $v(R)=0$ gives

\\[
v(r)=\frac{\Delta p}{4\eta l}(R^2-r^2)
\\]

This is again a parabolic profile.
The maximum velocity is

\\[
v_{\max}=v(0)=\frac{\Delta p}{4\eta l}R^2.
\\]

The volume discharge is

\\[
\begin{align\*}
Q
&=2\pi\int_0^R v(r)r\,dr \nl
&=\frac{\pi\Delta p}{8\eta l}R^4.
\end{align\*}
\\]

Thus

\\[
Q=\frac{\pi R^4}{8\eta l}\Delta p
\\]

which is the Hagen--Poiseuille law.
The mean velocity in the pipe is

\\[
\bar{v}
=\frac{Q}{\pi R^2}
=\frac{\Delta p}{8\eta l}R^2
=\frac{1}{2}v_{\max}.
\\]

The mass discharge is $\rho Q$.
In particular, the dependence on the fourth power of $R$ shows why the radius of a pipe is the dominant geometric factor in viscous laminar flow.
