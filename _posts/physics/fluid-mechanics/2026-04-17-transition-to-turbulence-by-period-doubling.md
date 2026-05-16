---
layout: post
title: "Transition to Turbulence by Period Doubling"
subtitle: "fl3.4"
classification: "Fluid Mechanics 3.4"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Period Doubling

Another route from regular motion to irregular motion is **period doubling**.
Suppose that after the first instability of a steady flow the observed motion
is periodic with period $T$:

\\[
\b{v}(\b{r},t+T)=\b{v}(\b{r},t).
\\]

As $\mathrm{Re}$ is increased, this periodic motion may lose stability and be
replaced by a new periodic motion with period $2T$:

\\[
\b{v}(\b{r},t+2T)=\b{v}(\b{r},t),
\qquad
\b{v}(\b{r},t+T)\ne\b{v}(\b{r},t).
\\]

The original frequency

\\[
\omega=\frac{2\pi}{T}
\\]

is then accompanied by the subharmonic frequency $\omega/2$. Further
increase of $\mathrm{Re}$ may produce periods

\\[
4T,\;8T,\;16T,\;\cdots .
\\]

Thus the spectrum contains successive subharmonics

\\[
\frac{\omega}{2},\quad
\frac{\omega}{4},\quad
\frac{\omega}{8},\quad\cdots .
\\]

After infinitely many doublings, the period is no longer finite. This gives a
possible transition to aperiodic deterministic motion.

## Poincare Map Formulation

Let $P_{\mathrm{Re}}$ be a Poincare map of the flow. A periodic solution of
period $T$ is a fixed point

\\[
P_{\mathrm{Re}}(X_\ast)=X_\ast.
\\]

Linear stability of this periodic orbit is determined by the eigenvalues of
the derivative

\\[
DP_{\mathrm{Re}}(X_\ast).
\\]

These eigenvalues are the Floquet multipliers. A period-doubling bifurcation
occurs when one real multiplier crosses $-1$:

\\[
\lambda=-1.
\\]

After the crossing, the fixed point of $P_{\mathrm{Re}}$ is unstable, but
there may be a stable orbit of period two:

\\[
P_{\mathrm{Re}}(X_1)=X_2,\qquad
P_{\mathrm{Re}}(X_2)=X_1.
\\]

In the original continuous-time flow this is a periodic orbit of period
$2T$.

Near the bifurcation, the dynamics along the critical direction can often be
reduced to a one-dimensional normal form

\\[
x_{n+1}=-(1+\epsilon)x_n+ax_n^3+\cdots .
\\]

The fixed point $x=0$ changes stability at $\epsilon=0$. A nonzero period-two
orbit satisfies

\\[
f_{\epsilon}(x)=-x.
\\]

Using the normal form,

\\[
-(1+\epsilon)x+ax^3=-x,
\\]

and hence

\\[
x^2=\frac{\epsilon}{a}.
\\]

Thus, when $\epsilon/a>0$, the amplitude of the doubled oscillation grows as

\\[
|x|\propto \sqrt{|\epsilon|}.
\\]

This square-root law is analogous to the amplitude scaling near a soft
hydrodynamic instability.

## Cascade

Let the successive period-doubling thresholds be

\\[
\mathrm{Re}_1,\mathrm{Re}_2,\mathrm{Re}_3,\cdots .
\\]

At $\mathrm{Re}_1$ the period becomes $2T$, at $\mathrm{Re}_2$ it becomes
$4T$, and so on. In many one-dimensional maps these thresholds accumulate at
a finite value

\\[
\mathrm{Re}\_{\infty}
=\lim_{n\to\infty}\mathrm{Re}_n.
\\]

For $\mathrm{Re}<\mathrm{Re}\_\infty$, the motion is still periodic, although
the period may be very large. At $\mathrm{Re}=\mathrm{Re}\_\infty$, the
period-doubling cascade has no finite period left.

The intervals between successive thresholds shrink geometrically. For a wide
class of one-hump maps,

\\[
\delta
=\lim_{n\to\infty}
\frac{\mathrm{Re}\_n-\mathrm{Re}\_{n-1}}
{\mathrm{Re}_{n+1}-\mathrm{Re}_n}
\simeq4.6692016.
\\]

This number is the Feigenbaum constant. Its universality is not a direct
consequence of the Navier-Stokes equation; it belongs to the reduced return
map when that map has the appropriate structure. Nevertheless, it explains
why very different physical systems can show similar period-doubling
scaling.

There is also a spatial scaling constant

\\[
\alpha\simeq2.5029079,
\\]

which describes the relative size of structures in the return map. These
constants are useful diagnostics when experimental data show a clear
period-doubling sequence.

## Spectrum

Before the first doubling, a measured quantity $u(t)$ has a Fourier expansion
with frequencies

\\[
n\omega,\qquad n\in\mathbb{Z}.
\\]

After one doubling, the fundamental frequency is $\omega/2$, so the spectrum
contains

\\[
\frac{n\omega}{2}.
\\]

After $m$ doublings, the fundamental frequency is

\\[
\frac{\omega}{2^m}.
\\]

Thus increasingly low subharmonics appear. Near the accumulation point the
spectral lines become very dense on finite frequency intervals. Beyond the
accumulation point the motion may become chaotic, and the spectrum usually
develops a continuous component.

This distinguishes period doubling from quasi-periodic transition. In
quasi-periodic motion, new independent frequencies appear. In period
doubling, the new frequencies are subharmonics of the old one.

## Logistic Map as a Model

A simple model which shows the period-doubling cascade is the logistic map

\\[
x_{n+1}=rx_n(1-x_n).
\\]

For small $r$ the attracting set is a fixed point. As $r$ increases, this
fixed point loses stability and a stable period-two orbit appears. Further
increase produces period-four, period-eight, and so on.

This map is not a fluid equation. Its role is to model the return map near a
low-dimensional transition. If a hydrodynamic Poincare map can be reduced to
a similar one-dimensional map, the same cascade may appear in the fluid
signal.

## Hydrodynamical Interpretation

In a fluid experiment, period doubling is observed by measuring a quantity
such as velocity at a fixed point, pressure drop, or heat flux. If the
original oscillation has period $T$, then the time series begins to alternate
between two unequal cycles. This is the period-$2T$ state. Later it may
alternate among four cycles, then eight, and so on.

Such behavior has been observed in several hydrodynamic systems, including
thermal convection, Taylor-Couette flow, and wakes. The exact thresholds are
not universal; they depend on geometry, boundary conditions, and the chosen
control parameter. What may be universal is the scaling of the return map
once the dynamics has reduced to the appropriate form.

Period doubling is therefore a route to turbulence, but not the only one.
Other flows pass through quasi-periodic motion, intermittency, or a direct
transition to a strange attractor. In high-dimensional fluid systems several
routes may coexist. The useful point is that complicated turbulent motion can
arise from a definite sequence of deterministic bifurcations rather than from
external randomness.
