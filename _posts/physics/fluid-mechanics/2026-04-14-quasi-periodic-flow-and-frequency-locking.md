---
layout: post
title: "Quasi-periodic Flow and Frequency Locking"
subtitle: "fl3.2"
classification: "Fluid Mechanics 3.2"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## From Periodic to Quasi-periodic Motion

After the first instability of a steady flow, the new motion is often
periodic. If the first unstable mode has frequency $\omega_1$, then the
velocity may be written schematically as

\\[
\b{v}(\b{r},t)
=\b{V}(\b{r},\omega_1t),
\qquad
\b{V}(\b{r},\phi+2\pi)=\b{V}(\b{r},\phi).
\\]

The motion is a limit cycle in the phase space of the fluid.
Increasing $\mathrm{Re}$ further may destabilize this periodic motion. A
second independent frequency $\omega_2$ may then appear. The corresponding
flow has the form

\\[
\b{v}(\b{r},t)
=\b{V}(\b{r},\phi_1,\phi_2),
\qquad
\phi_i=\omega_it+\phi_i^0,
\\]

where

\\[
\b{V}(\b{r},\phi_1+2\pi,\phi_2)
=\b{V}(\b{r},\phi_1,\phi_2+2\pi)
=\b{V}(\b{r},\phi_1,\phi_2).
\\]

Thus the trajectory lies on a two-dimensional torus. More generally, after
$m$ independent oscillatory instabilities one obtains

\\[
\b{v}(\b{r},t)
=\b{V}(\b{r},\phi_1,\cdots,\phi_m),
\qquad
\phi_i=\omega_it+\phi_i^0,
\\]

with $\b{V}$ periodic in each phase. The motion is then on an $m$-torus.

If the frequencies are rationally independent, i.e. if

\\[
n_1\omega_1+\cdots+n_m\omega_m=0,\qquad n_i\in\mathbb{Z},
\\]

implies $n_1=\cdots=n_m=0$, the orbit never closes. It is dense on the torus.
The motion is not periodic, but it is not random: every value is still
determined by the phases.

The Fourier spectrum of such a motion is discrete. Since $\b{V}$ is periodic
in each phase, it may be expanded as

\\[
\b{V}(\b{r},\phi_1,\cdots,\phi_m)
=\sum_{\b{n}\in\mathbb{Z}^m}
\b{V}_{\b{n}}(\b{r})
e^{i(n_1\phi_1+\cdots+n_m\phi_m)}.
\\]

Hence

\\[
\b{v}(\b{r},t)
=\sum_{\b{n}\in\mathbb{Z}^m}
\b{V}_{\b{n}}(\b{r})
e^{i(n_1\omega_1+\cdots+n_m\omega_m)t}.
\\]

The observed frequencies are all integer linear combinations of the basic
frequencies.

## Poincare Map

A periodic flow can be studied by looking once per period. If the period is
$T$, the time-$T$ map

\\[
P:X(0)\mapsto X(T)
\\]

is the Poincare map of the motion, where $X$ denotes the state of the fluid.
A stable periodic motion is a stable fixed point of $P$.

When this fixed point loses stability through a complex pair of multipliers,
the Poincare map may acquire an invariant closed curve. In the continuous
flow this corresponds to a two-torus. Motion on this invariant curve is
described by an angle variable

\\[
\theta_{n+1}=\theta_n+2\pi\rho \pmod{2\pi},
\\]

where $\rho$ is the rotation number. If $\rho$ is rational, the orbit is
periodic. If $\rho$ is irrational, the orbit is quasi-periodic and dense on
the invariant curve.

This gives another way to understand the appearance of a second frequency:
the original period gives one phase, and the rotation on the Poincare section
gives the second phase.

## Frequency Locking

The preceding discussion assumes that the frequencies remain independent.
In nonlinear hydrodynamics this need not be true. Suppose two frequencies are
close to a rational relation

\\[
q\omega_2-p\omega_1\simeq0,
\qquad
p,q\in\mathbb{Z}.
\\]

Then the slowly varying resonant phase is

\\[
\theta=q\phi_2-p\phi_1.
\\]

Nonlinear coupling may produce an equation of the form

\\[
\dot{\theta}
=\Delta-K\sin\theta+\cdots,
\qquad
\Delta=q\omega_2-p\omega_1.
\\]

This is the standard phase-locking equation. If

\\[
|\Delta|<|K|,
\\]

there is a stable fixed value of $\theta$. Then

\\[
q\omega_2-p\omega_1=0
\\]

in the observed motion, even if the uncoupled frequencies were only close to
this relation. The flow becomes periodic rather than quasi-periodic. This is
called **frequency locking**.

If $|\Delta|>|K|$, the phase $\theta$ drifts, and the two frequencies remain
independent. Thus the transition between quasi-periodicity and locking is a
competition between detuning and nonlinear coupling.

## Arnold Tongues

Let $\lambda$ be a parameter measuring the strength of the nonlinear coupling.
Near a rational ratio $p/q$, the locked region in parameter space has the
shape of a tongue:

\\[
|q\omega_2-p\omega_1|<K(\lambda).
\\]

These regions are called **Arnold tongues**. Their widths are small for weak
coupling and grow as the nonlinearity increases. Low-order resonances such as
$1:1$, $1:2$, and $2:3$ are usually the most visible, because their coupling
terms occur at relatively low order in the amplitudes.

This explains why a hydrodynamic system whose linear modes have many possible
frequencies may nevertheless show a simple periodic response. The nonlinear
terms can select a rational relation between the phases and suppress the
independent drift.

## Relation with the Landau Picture

The Landau picture of transition to turbulence may be described as a
successive appearance of more and more independent frequencies:

\\[
\omega_1,\qquad
\omega_1,\omega_2,\qquad
\omega_1,\omega_2,\omega_3,\qquad \cdots .
\\]

With many incommensurable frequencies, the motion becomes very complicated
and its spectrum contains many lines of the form

\\[
n_1\omega_1+n_2\omega_2+\cdots+n_m\omega_m.
\\]

However, this construction alone does not fully explain developed
turbulence. First, frequency locking can reduce the number of independent
frequencies by forcing rational relations. Second, nonlinear dynamics can
destroy invariant tori and produce a strange attractor. Thus quasi-periodic
motion is one possible route away from laminar flow, but it is not the only
route to turbulence.
