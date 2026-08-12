---
layout: post
title: "The Kepler Problem"
subtitle: "cm2.4"
classification: "Classical Mechanics 2.4"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Inverse-Square Force

The Kepler problem is the central force problem with

\\[
f(r)=-\frac{k}{r^2}, \qquad
V(r)=-\frac{k}{r},
\\]

where $k>0$.
For gravitation,

\\[
k=Gm_1m_2,
\\]

and the mass in the one-body problem is the reduced mass

\\[
\mu=\frac{m_1m_2}{m_1+m_2}.
\\]

Binet's equation is

\\[
\odvn{2}{u}{\theta}+u
= -\frac{\mu}{\ell^2u^2}f\left(\frac{1}{u}\right).
\\]

Since

\\[
f\left(\frac{1}{u}\right)=-ku^2,
\\]

we obtain

\\[
\odvn{2}{u}{\theta}+u=\frac{\mu k}{\ell^2}.
\\]

The solution is

\\[
u=\frac{\mu k}{\ell^2}\left[1+e\cos(\theta-\theta_0)\right].
\\]

Thus

\\[
r=\frac{p}{1+e\cos(\theta-\theta_0)},
\qquad
p=\frac{\ell^2}{\mu k}.
\\]

This is the polar equation of a conic section with one focus at the force center.

## Energy and Eccentricity

The eccentricity is determined by the energy and angular momentum.
Using

\\[
E = \frac{\ell^2}{2\mu}\left\[
\left(\odv{u}{\theta}\right)^2+u^2
\right\]-ku,
\\]

and substituting the conic solution gives

\\[
e^2=1+\frac{2E\ell^2}{\mu k^2}.
\\]

Therefore,

| energy | eccentricity |   orbit   |
|:------:|:------------:|:---------:|
| $E<0$  |  $0\le e<1$  |  ellipse  |
| $E=0$  |    $e=1$     | parabola  |
| $E>0$  |    $e>1$     | hyperbola |
{:.centered}

The circular orbit is the special case $e=0$.
Then

\\[
E=-\frac{\mu k^2}{2\ell^2}.
\\]

This agrees with the circular orbit condition

\\[
r_0=\frac{\ell^2}{\mu k}.
\\]

## Elliptic Orbits

For an elliptic orbit, let $a$ be the semimajor axis.
The turning points occur when $\dot{r}=0$, so they are the roots of

\\[
E = \frac{\ell^2}{2\mu r^2}-\frac{k}{r}.
\\]

The sum of the two apsidal distances is $2a$, and this gives

\\[
a=-\frac{k}{2E}.
\\]

Thus, for a Kepler ellipse, the energy depends only on the semimajor axis:

\\[
E=-\frac{k}{2a}.
\\]

The angular momentum is related to $a$ and $e$ by

\\[
\ell^2=\mu ka(1-e^2).
\\]

Hence the orbit may also be written as

\\[
r=\frac{a(1-e^2)}{1+e\cos(\theta-\theta_0)}.
\\]

The nearest and farthest distances are

\\[
r_{\min}=a(1-e), \qquad
r_{\max}=a(1+e).
\\]

The inverse-square force is therefore special not only because the orbit is closed, but also because the size of an ellipse is fixed by $E$ alone while its shape is fixed by $\ell$ through $e$.

## Motion in Time

The orbit equation gives $r$ as a function of $\theta$.
To determine the position at a given time, we must use the areal velocity:

\\[
\odv{A}{t}=\frac{\ell}{2\mu}.
\\]

For elliptic motion, introduce the eccentric anomaly $\psi$ by

\\[
r=a(1-e\cos\psi).
\\]

The Cartesian parametrization of the ellipse, with the origin at the focus and periapsis on the positive $x$-axis, is

\\[
x=a(\cos\psi-e), \qquad
y=a\sqrt{1-e^2}\sin\psi.
\\]

The period follows from the fact that the areal velocity is constant.
The area of the ellipse is

\\[
\pi ab
=\pi a^2\sqrt{1-e^2}.
\\]

Since

\\[
\ell^2=\mu ka(1-e^2),
\\]

we get

\\[
\tau
=2\pi\sqrt{\frac{\mu a^3}{k}}.
\\]

Equivalently,

\\[
\tau^2=\frac{4\pi^2\mu}{k}a^3.
\\]

For the gravitational two-body problem, $k=Gm_1m_2$ and $\mu=m_1m_2/(m_1+m_2)$, so

\\[
\tau^2=\frac{4\pi^2}{G(m_1+m_2)}a^3.
\\]

If one mass is much larger than the other, this reduces to the usual form of Kepler's third law.

Let

\\[
\omega=\frac{2\pi}{\tau}
=\sqrt{\frac{k}{\mu a^3}}.
\\]

Integrating the time equation gives Kepler's equation:

\\[
\omega(t-t_p)=\psi-e\sin\psi,
\\]

where $t_p$ is the time of periapsis passage.
The left side is the mean anomaly, $\psi$ is the eccentric anomaly, and the polar angle $\theta$ is the true anomaly.
The relation between $\theta$ and $\psi$ is

\\[
\cos\theta
=\frac{\cos\psi-e}{1-e\cos\psi},
\\]

or equivalently,

\\[
\tan\frac{\theta}{2}
=\sqrt{\frac{1+e}{1-e}}\tan\frac{\psi}{2}.
\\]

Thus the practical time problem is reduced to solving the transcendental equation

\\[
\psi-e\sin\psi=M,
\\]

where $M=\omega(t-t_p)$.
This equation has no elementary inverse in general, so numerical methods are required for high-precision orbital prediction.

For parabolic motion, $e=1$, and the orbit can be parametrized by

\\[
x=\tan\frac{\theta}{2}.
\\]

The time from periapsis is then proportional to

\\[
x+\frac{x^3}{3}.
\\]

Thus the parabolic case is algebraic rather than transcendental, but inversion still requires solving a cubic equation.

## Laplace-Runge-Lenz Vector

The Kepler problem has one more simple conserved vector.
Let

\\[
\b{p}=\mu\dot{\b{r}}, \qquad
\b{L}=\b{r}\times\b{p}.
\\]

For the inverse-square force, define

\\[
\b{A}=\b{p}\times\b{L}-\mu k\hat{\b{r}}.
\\]

which is called the **Laplace-Runge-Lenz(LRL) vector**.
We show that $\b{A}$ is conserved.
Newton's equation is

\\[
\dot{\b{p}}=-\frac{k}{r^2}\hat{\b{r}}.
\\]

Since $\b{L}$ is conserved,

\\[
\odv{}{t}(\b{p}\times\b{L})
=\dot{\b{p}}\times\b{L}.
\\]

Using $\b{L}=\b{r}\times\b{p}$ and the triple product identity,

\\[
\begin{align\*}
\dot{\b{p}}\times\b{L}
&= -\frac{k}{r^3}\b{r}\times(\b{r}\times\b{p}) \nl
&= -\frac{k}{r^3}\left\[\b{r}(\b{r}\cdot\b{p})-r^2\b{p}\right\] \nl
&= \mu k\odv{}{t}\left(\frac{\b{r}}{r}\right).
\end{align\*}
\\]

Therefore

\\[
\odv{\b{A}}{t}=0.
\\]

The vector $\b{A}$ is perpendicular to $\b{L}$:

\\[
\b{A}\cdot\b{L}=0.
\\]

Hence it lies in the orbital plane.
Taking the dot product with $\b{r}$ gives

\\[
\begin{align\*}
\b{A}\cdot\b{r}
&= \b{r}\cdot(\b{p}\times\b{L})-\mu kr \nl
&= \b{L}\cdot(\b{r}\times\b{p})-\mu kr \nl
&= \ell^2-\mu kr.
\end{align\*}
\\]

If $\theta$ is measured from the direction of $\b{A}$, then

\\[
Ar\cos\theta=\ell^2-\mu kr.
\\]

Thus

\\[
r=\frac{\ell^2/(\mu k)}{1+\dps \frac{A}{\mu k}\cos\theta}.
\\]

Comparing with the conic equation, we identify

\\[
e=\frac{A}{\mu k}.
\\]

Therefore $\b{A}$ points toward periapsis and its magnitude determines the eccentricity.

The constants are not independent.
One relation is

\\[
\b{A}\cdot\b{L}=0.
\\]

The other is obtained from the magnitude:

\\[
A^2=\mu^2k^2+2\mu E\ell^2.
\\]

This is equivalent to the eccentricity formula.

## Degeneracy

For a general central force, $E$ and $\b{L}$ are the natural conserved quantities.
They determine the radial bounds and the plane of motion, but they do not usually determine a closed curve.
The radial and angular motions generally have incommensurable periods, so the orbit does not close.

The Kepler problem is exceptional.
The Laplace-Runge-Lenz vector fixes the direction of the apsidal line and supplies an additional algebraic constant of motion.
This is the mechanical origin of the degeneracy of Kepler orbits: the radial period and angular period match so that every bounded orbit is closed.

The harmonic oscillator has a similar closed-orbit property, but its extra conserved quantity is better expressed as a second-rank tensor.
These two cases are precisely the two possibilities singled out by Bertrand's theorem.
