---
layout: post
title: "Strange Attractors"
subtitle: "fl3.3"
classification: "Fluid Mechanics 3.3"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Attractors in a Dissipative Flow

For a viscous fluid, the state at time $t$ may be regarded as a point $X(t)$
in a phase space. Formally $X$ contains the velocity field, and possibly
temperature or other fields, subject to the constraints and boundary
conditions. The Navier-Stokes equation defines an evolution

\\[
X(t)=S_tX(0).
\\]

An invariant set $\mathcal{A}$ is called an attractor if

\\[
S_t\mathcal{A}=\mathcal{A}
\\]

and if all states in some neighborhood of $\mathcal{A}$ approach it as
$t\to\infty$. In hydrodynamics this is natural because viscosity dissipates
mechanical energy. Even when the phase space is infinite-dimensional, the
long-time motion may be confined to a much smaller set.

The simplest attractors are:

1. A fixed point, corresponding to a steady flow.
2. A limit cycle, corresponding to a periodic flow.
3. An invariant torus, corresponding to quasi-periodic flow.

A **strange attractor** is an attracting invariant set on which the motion is
aperiodic and sensitive to initial conditions. It is not merely a high
dimensional torus with many frequencies. Its geometry is folded and
fractal-like, and nearby trajectories separate exponentially before being
folded back by dissipation.

## Lyapunov Exponents

Let $X(t)$ and $X(t)+\delta X(t)$ be two nearby trajectories. Linearizing the
evolution about $X(t)$ gives

\\[
\delta X(t)=DS_t(X(0))\delta X(0).
\\]

The largest Lyapunov exponent is defined by

\\[
\lambda_1
=\lim_{t\to\infty}
\frac{1}{t}
\log\frac{\|\delta X(t)\|}{\|\delta X(0)\|},
\\]

for a generic small perturbation direction. If

\\[
\lambda_1>0,
\\]

then nearby trajectories separate exponentially:

\\[
\|\delta X(t)\|\sim \|\delta X(0)\|e^{\lambda_1t}.
\\]

This is sensitive dependence on initial conditions. The motion is still
deterministic, but long-time prediction from finite-precision initial data is
impossible.

For a full spectrum of Lyapunov exponents

\\[
\lambda_1\ge\lambda_2\ge\cdots,
\\]

a dissipative system has negative total volume growth in phase space. In a
finite-dimensional truncation this means

\\[
\sum_i\lambda_i<0.
\\]

Thus a strange attractor has both stretching and contraction: some directions
expand, while the total phase volume contracts. The combination produces
folding.

## Stretching and Folding

A useful model is a map which stretches a region, folds it, and places it
back into itself. Stretching separates nearby points, while folding keeps the
motion bounded. Repetition creates fine-scale structure.

For a Poincare map $P$, a strange attractor is an invariant set satisfying

\\[
P(\mathcal{A})=\mathcal{A},
\\]

but the map on $\mathcal{A}$ is not equivalent to a rigid rotation on a
circle or torus. The dynamics may have infinitely many unstable periodic
orbits embedded in the attractor. A typical trajectory does not settle onto
one of them, but wanders among their neighborhoods.

This is the essential difference from quasi-periodic motion. On a torus,
nearby trajectories neither separate exponentially nor converge. On a strange
attractor, nearby trajectories separate exponentially along unstable
directions, but the dissipative dynamics keeps them inside the same bounded
set.

## Dimension of an Attractor

The dimension of a strange attractor need not be an integer. One practical
estimate is the Kaplan-Yorke dimension. Suppose the Lyapunov exponents are
ordered and let $m$ be the largest integer such that

\\[
\sum_{i=1}^m\lambda_i\ge0.
\\]

Then

\\[
D_{\mathrm{KY}}
=m+\frac{\sum_{i=1}^m\lambda_i}{|\lambda_{m+1}|}.
\\]

This number measures how many effective degrees of freedom are active on the
attractor. In a hydrodynamic problem the actual phase space is very large,
but at moderate $\mathrm{Re}$ the attractor dimension may still be small
enough for a reduced description to be meaningful.

For developed turbulence, many Lyapunov exponents may be positive. Then the
motion is not only chaotic in time but also complicated in space. The
effective number of degrees of freedom grows with $\mathrm{Re}$.

## Lorenz System

The Lorenz system is not the full Navier-Stokes equation, but it is a
classical low-dimensional model obtained from a truncation of thermal
convection. It has the form

\\[
\begin{align\*}
\dot X&=\sigma(Y-X), \nl
\dot Y&=rX-Y-XZ, \nl
\dot Z&=XY-bZ.
\end{align\*}
\\]

Here $r$ is proportional to the Rayleigh number, and $\sigma,b$ are positive
parameters. For certain parameter values the system has a strange attractor.
It illustrates several features relevant to hydrodynamics:

1. The equations are deterministic.
2. The phase volume contracts.
3. The motion is aperiodic.
4. The largest Lyapunov exponent is positive.

Thus complicated irregular motion does not require random forcing. It may
arise from deterministic nonlinear equations.

## Relation with Transition to Turbulence

The Landau-Hopf picture suggests that turbulence is obtained by adding more
and more incommensurable frequencies. The discovery of strange attractors
shows a different possibility. After only a few instabilities, an invariant
torus may lose stability and be replaced by a strange attractor. This is the
Ruelle-Takens scenario.

In fluid mechanics this means that a flow can become irregular before a large
number of independent frequencies have appeared. The observed signal may
have a broadband spectrum, but this does not necessarily mean that it is a
linear superposition of many independent oscillations. It may instead be the
spectrum of deterministic chaotic motion on a strange attractor.

The distinction is important. Quasi-periodic motion has a discrete Fourier
spectrum. Chaotic motion has sensitive dependence and usually produces a
continuous component in the spectrum. In experiments the difference is seen
by studying return maps, Lyapunov exponents, and the geometry of the
reconstructed attractor.

For fully developed turbulence the attractor is expected to be very
high-dimensional. Nevertheless, the idea of a strange attractor clarifies the
onset of irregular motion: randomness is not required at the level of the
equations. The apparent randomness is produced by nonlinear deterministic
dynamics together with sensitivity to initial conditions.
