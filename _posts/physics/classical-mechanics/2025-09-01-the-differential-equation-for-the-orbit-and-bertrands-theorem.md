---
layout: post
title: "The Differential Equation for the Orbit and Bertrand's Theorem"
subtitle: "cm2.3"
classification: "Classical Mechanics 2.3"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Orbit Equation

For central force motion, the time variable can be eliminated in favor of the polar angle.
The angular momentum integral is

\\[
\ell=\mu r^2\dot{\theta}.
\\]

Thus

\\[
\odv{}{t}
= \dot{\theta}\odv{}{\theta}
= \frac{\ell}{\mu r^2}\odv{}{\theta}.
\\]

It is convenient to introduce

\\[
u=\frac{1}{r}.
\\]

Then

\\[
\dot{r}
= \odv{r}{\theta}\dot{\theta}
= -\frac{1}{u^2}\odv{u}{\theta}\frac{\ell u^2}{\mu}
= -\frac{\ell}{\mu}\odv{u}{\theta}.
\\]

The radial equation is

\\[
\mu\ddot{r}-\frac{\ell^2}{\mu r^3}=f(r).
\\]

Substituting $u=1/r$ gives Binet's equation:

\\[
\odvn{2}{u}{\theta}+u
= -\frac{\mu}{\ell^2u^2}f\left(\frac{1}{u}\right).
\\]

Equivalently, since $f(r)=-\odv{V}{r}$,

\\[
\odvn{2}{u}{\theta}+u
= -\frac{\mu}{\ell^2u^2}f\left(\frac{1}{u}\right)
= \frac{\mu}{\ell^2u^2}
\eval{\odv{V}{r}}_{r=1/u}.
\\]

This equation determines the shape of the orbit without first solving for $r(t)$ and $\theta(t)$ separately.

## Apsidal Symmetry

A turning point of the radial motion occurs when

\\[
\dot{r}=0.
\\]

Since

\\[
\dot{r}=-\frac{\ell}{\mu}\odv{u}{\theta},
\\]

this is equivalent to

\\[
\odv{u}{\theta}=0.
\\]

Choose the angular coordinate so that a turning point occurs at $\theta=0$.
Then the initial conditions at that point are

\\[
u(0)=u_0, \qquad
\eval{\odv{u}{\theta}}_{\theta=0}=0.
\\]

Binet's equation is invariant under $\theta\mapsto -\theta$.
The reflected function $u(-\theta)$ therefore satisfies the same equation and the same initial conditions.
By uniqueness of solutions,

\\[
u(\theta)=u(-\theta).
\\]

Hence the orbit is symmetric about the apsidal line through the turning point.
Knowing the part of the orbit between two neighboring apsides determines the full orbit by repeated reflection.

## First-Order Form

The energy integral gives another form of the orbit equation.
Using

\\[
\dot{r}=-\frac{\ell}{\mu}\odv{u}{\theta}
\\]

and $r=1/u$, we get

\\[
E
= \frac{\ell^2}{2\mu}\left[
\left(\odv{u}{\theta}\right)^2+u^2
\right]
+V\left(\frac{1}{u}\right).
\\]

Thus

\\[
\left(\odv{u}{\theta}\right)^2
= \frac{2\mu}{\ell^2}
\left(E-V\left(\frac{1}{u}\right)\right)-u^2.
\\]

Therefore,

\\[
\theta-\theta_0
= \int_{u_0}^{u}
\frac{\dd{s}}
{\sqrt{\frac{2\mu}{\ell^2}
\left(E-V\left(\frac{1}{s}\right)\right)-s^2}}.
\\]

This is the orbit in quadrature.
It is often more useful than the time quadrature because many physical questions concern the curve itself rather than the position at a specified time.

## Power-Law Potentials

Consider a power-law potential

\\[
V(r)=ar^{n+1}.
\\]

The force then varies as $r^n$:

\\[
f(r)=-(n+1)ar^n.
\\]

The case $n=-1$ is exceptional in this parametrization.
It would make $V$ constant, while a force proportional to $r^{-1}$ instead corresponds to a logarithmic potential.

The orbit quadrature becomes

\\[
\theta-\theta_0
= \int_{u_0}^{u}
\frac{\dd{s}}
{\sqrt{\frac{2\mu E}{\ell^2}
-\frac{2\mu a}{\ell^2}s^{-(n+1)}
-s^2}}.
\\]

For brevity, put

\\[
A=\frac{2\mu E}{\ell^2}, \qquad
B=\frac{2\mu a}{\ell^2}.
\\]

This integral is elementary only in special cases.
The important trigonometric cases are

\\[
n=1,\quad n=-2,\quad n=-3.
\\]

Since $s=u=1/r>0$, the case $n=1$ can be simplified by putting $y=s^2$.
If

\\[
C_1^2=\frac{A^2}{4}-B,
\\]

then

\\[
\begin{align\*}
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{\dd{s}}{\sqrt{A-Bs^{-2}-s^2}} \nl
&= \frac{1}{2}\int_{u_0^2}^{u^2}
\frac{\dd{y}}{\sqrt{-y^2+Ay-B}} \nl
&= \frac{1}{2}
\left[
\arcsin\left(\frac{y-A/2}{C_1}\right)
\right]_{u_0^2}^{u^2}.
\end{align\*}
\\]

For $n=-2$, if

\\[
C_{-2}^2=A+\frac{B^2}{4},
\\]

then

\\[
\begin{align\*}
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{\dd{s}}{\sqrt{A-Bs-s^2}} \nl
&=
\left[
\arcsin\left(\frac{s+B/2}{C_{-2}}\right)
\right]_{u_0}^{u}.
\end{align\*}
\\]

For $n=-3$, if $C_{-3}=B+1$, then

\\[
\begin{align\*}
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{\dd{s}}{\sqrt{A-(B+1)s^2}} \nl
&=
\frac{1}{\sqrt{C_{-3}}}
\left[
\arcsin\left(\sqrt{\frac{C_{-3}}{A}}s\right)
\right]_{u_0}^{u}.
\end{align\*}
\\]

Here $n=1$ is Hooke's law, $n=-2$ is the inverse-square force, and $n=-3$ is a borderline case connected to an inverse-cube force.
The constants must of course be such that the square roots are real on the interval of motion.

For several other integer powers, such as

\\[
n=5,3,0,-4,-5,-7,
\\]

the integral is elliptic.
Recall the incomplete elliptic integrals

\\[
\begin{align\*}
F(\phi,k)
&= \int_0^\phi
\frac{\dd{\alpha}}{\sqrt{1-k^2\sin^2\alpha}}, \nl
E(\phi,k)
&= \int_0^\phi
\sqrt{1-k^2\sin^2\alpha}\dd{\alpha}, \nl
\Pi(\phi,\lambda,k)
&= \int_0^\phi
\frac{\dd{\alpha}}
{(1-\lambda\sin^2\alpha)\sqrt{1-k^2\sin^2\alpha}}.
\end{align\*}
\\]

Every integral of a rational function of $x$ and $\sqrt{P_3(x)}$ or $\sqrt{P_4(x)}$, where $P_3$ and $P_4$ are cubic and quartic polynomials with distinct roots, reduces to a combination of these elliptic integrals.
Thus its inverse is an elliptic function.

The listed powers reduce as follows:

\\[
\begin{align\*}
n=5:\quad
\theta-\theta_0
&= \frac{1}{2}\int_{u_0^2}^{u^2}
\frac{y\dd{y}}{\sqrt{-y^4+Ay^3-B}},
\qquad y=s^2, \nl
n=3:\quad
\theta-\theta_0
&= \frac{1}{2}\int_{u_0^2}^{u^2}
\frac{y\dd{y}}{\sqrt{-y^4+Ay^3-By}},
\qquad y=s^2, \nl
n=0:\quad
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{s\dd{s}}{\sqrt{-s^4+As^2-Bs}}, \nl
n=-4:\quad
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{\dd{s}}{\sqrt{A-s^2-Bs^3}}, \nl
n=-5:\quad
\theta-\theta_0
&= \int_{u_0}^{u}
\frac{\dd{s}}{\sqrt{A-s^2-Bs^4}}, \nl
n=-7:\quad
\theta-\theta_0
&= \frac{1}{2}\int_{u_0^2}^{u^2}
\frac{\dd{y}}{\sqrt{Ay-y^2-By^4}},
\qquad y=s^2.
\end{align\*}
\\]

For example, the $n=-4$ case is already an elliptic integral of the first kind.
If

\\[
A-s^2-Bs^3
= C(s-e_1)(e_2-s)(e_3-s),
\\]

on the interval $e_1<s<e_2$, then

\\[
\int
\frac{\dd{s}}{\sqrt{A-s^2-Bs^3}}
=
\frac{2}{\sqrt{C(e_3-e_1)}}F(\phi,k),
\\]

where

\\[
\sin^2\phi=\frac{s-e_1}{e_2-e_1},
\qquad
k^2=\frac{e_2-e_1}{e_3-e_1}.
\\]

The $n=-5$ case similarly gives a particularly simple quartic reduction.
If

\\[
A-s^2-Bs^4
=A\left(1-\frac{s^2}{\alpha^2}\right)
\left(1-\frac{s^2}{\beta^2}\right),
\\]

then

\\[
\int
\frac{\dd{s}}{\sqrt{A-s^2-Bs^4}}
=
\frac{\alpha}{\sqrt{A}}
F\left(\arcsin\frac{s}{\alpha},\frac{\alpha}{\beta}\right).
\\]

The other quartic forms above reduce to the same standard elliptic integrals, generally as a combination of $F$, $E$, and $\Pi$ after factoring the quartic.
For a general power, the quadrature may instead lead to hypergeometric functions or require numerical integration.

The important point is that formal integrability of the central force problem does not imply elementary solvability.
The first integrals reduce the problem to one-dimensional integrations, but the resulting functions can still be complicated.

## Nearly Circular Orbits

Let $r=r_0$ be a circular orbit.
The circularity condition is

\\[
f(r_0)=-\frac{\ell^2}{\mu r_0^3}.
\\]

Equivalently, $V_{\mathrm{eff}}^\prime(r_0)=0$.
The circular orbit is stable when

\\[
-f^\prime(r_0)-\frac{3f(r_0)}{r_0}>0.
\\]

In logarithmic form, for an attractive force this is

\\[
\eval{\odv{\log |f|}{\log r}}_{r=r_0}>-3.
\\]

For an attractive power law $f(r)=-kr^n$, this gives $n>-3$.

Now perturb the circular orbit slightly.
Writing the orbit in terms of $u=1/r$, one obtains to first order

\\[
u = u_0 + a\cos\beta\theta,
\\]

where

\\[
\beta^2
= 3+\eval{\frac{r}{f(r)}\odv{f}{r}}_{r=r_0}.
\\]

For $f(r)=-kr^n$,

\\[
\beta^2=n+3.
\\]

The apsidal angle, the angular separation between successive nearest or farthest points, is

\\[
\Delta\theta=\frac{\pi}{\beta}.
\\]

If $\beta$ is rational, the nearly circular orbit closes after a finite number of radial oscillations and revolutions.
If $\beta$ is irrational, the orbit never exactly closes.

## Bertrand's Theorem

Suppose that every bounded orbit under an attractive central force is closed.
Then, in particular, every orbit that is only slightly perturbed from a circular orbit must be closed.
The preceding analysis implies that $\beta$ must be rational.
Moreover, since the radius of the circular orbit can be varied continuously, $\beta$ cannot jump between different rational values.
It must be constant over the allowed radii.

Thus

\\[
\odv{\log |f|}{\log r}=\beta^2-3,
\\]

so the force must locally have the power-law form

\\[
f(r)=-kr^{\beta^2-3}.
\\]

This is only a necessary condition from nearly circular orbits.
Bertrand's theorem is stronger:

**Bertrand's theorem.**
The only central attractive forces for which all bounded orbits are closed are

\\[
f(r)=-\frac{k}{r^2}
\qquad\text{and}\qquad
f(r)=-kr.
\\]

The first is the inverse-square force, and the second is Hooke's law.
They correspond to

\\[
\beta^2=1
\qquad\text{and}\qquad
\beta^2=4.
\\]

For the inverse-square law, the bounded orbits are ellipses with the force center at one focus.
For Hooke's law, the bounded orbits are ellipses with the force center at the center.
No other attractive central force has the property that every bounded orbit closes.

This theorem is a rigidity statement.
Closed orbits are not generic; they signal an additional structure in the dynamics.
In the Kepler problem this extra structure is expressed by the Laplace-Runge-Lenz vector.
For the isotropic oscillator the corresponding extra conserved quantity is naturally tensorial rather than vectorial.
