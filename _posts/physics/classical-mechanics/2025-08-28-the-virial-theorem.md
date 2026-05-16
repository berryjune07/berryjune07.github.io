---
layout: post
title: "The Virial Theorem"
subtitle: "cm2.2"
classification: "Classical Mechanics 2.2"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## The Virial

Let a system consist of particles with position vectors $\b{r}_i$, momenta $\b{p}_i$, and applied forces $\b{F}_i$.
Define

\\[
G = \sum_i \b{p}_i \cdot \b{r}_i.
\\]

This quantity is called the **virial function**.
Taking its time derivative gives

\\[
\begin{align\*}
\odv{G}{t}
&= \sum_i \dot{\b{p}}_i\cdot\b{r}_i + \sum_i \b{p}_i\cdot\dot{\b{r}}_i \nl
&= \sum_i \b{F}_i\cdot\b{r}_i + \sum_i m_i \dot{\b{r}}_i^2 \nl
&= \sum_i \b{F}_i\cdot\b{r}_i + 2T.
\end{align\*}
\\]

Thus,

\\[
\odv{G}{t} = 2T + \sum_i \b{F}_i\cdot\b{r}_i.
\\]

This identity is purely mechanical.
The theorem comes from averaging it over time.

## Time Average

For any quantity $A(t)$, define the time average over an interval $\tau$ by

\\[
\overline{A} = \frac{1}{\tau}\int_0^\tau A(t)\dd{t}.
\\]

Averaging the virial identity gives

\\[
2\overline{T} + \overline{\sum_i \b{F}_i\cdot\b{r}_i}
= \frac{G(\tau)-G(0)}{\tau}.
\\]

If the motion is periodic and $\tau$ is a period, then $G(\tau)=G(0)$.
More generally, if all positions and velocities remain bounded, then $G$ remains bounded, and

\\[
\lim_{\tau\to\infty}\frac{G(\tau)-G(0)}{\tau}=0.
\\]

Therefore, for bounded motion,

\\[
2\overline{T}
= -\overline{\sum_i \b{F}_i\cdot\b{r}_i}.
\\]

This is the **virial theorem**.
The quantity

\\[
-\frac{1}{2}\sum_i \b{F}_i\cdot\b{r}_i
\\]

is the virial of Clausius.

## Conservative Forces

If the forces are derived from a potential $V$,

\\[
\b{F}_i = -\pdv{V}{\b{r}_i},
\\]

then the virial theorem becomes

\\[
2\overline{T}
= \overline{\sum_i \pdv{V}{\b{r}_i}\cdot\b{r}_i}.
\\]

For a single particle in a central potential,

\\[
\b{F}=f(r)\hat{\b{r}}
=-\odv{V}{r}\hat{\b{r}},
\\]

so

\\[
\b{F}\cdot\b{r}=f(r)r=-r\odv{V}{r}.
\\]

Hence

\\[
2\overline{T}
= \overline{r\odv{V}{r}}.
\\]

This form is especially useful because it relates the average kinetic energy directly to the radial dependence of the potential.

## Homogeneous Potentials

Suppose that $V$ is homogeneous of degree $s$ in the coordinates:

\\[
V(\lambda\b{r}_1,\ldots,\lambda\b{r}_N)
= \lambda^s V(\b{r}_1,\ldots,\b{r}_N).
\\]

By Euler's theorem for homogeneous functions,

\\[
\sum_i \pdv{V}{\b{r}_i}\cdot\b{r}_i = sV.
\\]

Therefore,

\\[
2\overline{T}=s\overline{V}.
\\]

For a central power-law potential

\\[
V(r)=ar^s,
\\]

the same result is simply

\\[
2\overline{T}=s\overline{V}.
\\]

Goldstein often writes $s=n+1$, so that the force varies as $r^n$.
Then

\\[
\overline{T}
= \frac{n+1}{2}\overline{V}.
\\]

For the inverse-square force,

\\[
V(r)=-\frac{k}{r},
\\]

so $s=-1$.
Thus

\\[
2\overline{T}=-\overline{V}.
\\]

For a bound Kepler orbit,

\\[
\overline{E}
= \overline{T}+\overline{V}
= -\overline{T}
= \frac{1}{2}\overline{V}.
\\]

For the isotropic harmonic oscillator,

\\[
V(r)=\frac{1}{2}kr^2,
\\]

so $s=2$ and

\\[
\overline{T}=\overline{V}.
\\]

These two cases are the two central examples that later reappear in Bertrand's theorem.

## Perfect Gas

The virial theorem also gives the ideal gas law in a concise mechanical form.
Let $N$ particles be confined in a volume $\mathcal{V}$.
For a perfect gas, the interparticle contribution to the virial is neglected, so the relevant forces are the constraint forces from the wall.

By equipartition, the average kinetic energy is

\\[
\overline{T}=\frac{3}{2}Nk_B\Theta,
\\]

where $\Theta$ is the absolute temperature.
The wall force on the particles is opposite to the pressure force exerted by the gas on the wall.
Thus the force contribution may be written as a surface integral:

\\[
\sum_i \b{F}\_i\cdot\b{r}\_i
= -\int_{\partial\mathcal{V}} P \b{n}\cdot\b{r}\dd{A}.
\\]

If the pressure is uniform, Gauss's theorem gives

\\[
\int_{\partial\mathcal{V}} \b{n}\cdot\b{r}\dd{A}
= \int_{\mathcal{V}}\div \b{r}\dd{V}
= 3\mathcal{V}.
\\]

Therefore

\\[
2\overline{T}
= 3P\mathcal{V}.
\\]

Using $\overline{T}=\frac{3}{2}Nk_B\Theta$,

\\[
P\mathcal{V}=Nk_B\Theta.
\\]

Thus the ideal gas law is a special case of the virial theorem when the internal force contribution is negligible.
For a nonideal gas, the interparticle forces contribute to the virial and modify the equation of state.

## Remarks

The virial theorem is not an instantaneous equality.
It is a statement about averages, and its hypotheses are important.
If the motion is not bounded and not periodic, then the boundary term

\\[
\frac{G(\tau)-G(0)}{\tau}
\\]

need not vanish.
For example, scattering orbits under a central force are not subject to the same virial relation as bound orbits.

The theorem is also insensitive to certain frictional forces if steady motion is maintained by external energy input.
For a force proportional to velocity,

\\[
\b{f}_i=-\gamma_i\dot{\b{r}}_i,
\\]

the corresponding virial contribution is proportional to

\\[
\sum_i \dot{\b{r}}_i\cdot\b{r}_i
= \frac{1}{2}\odv{}{t}\sum_i r_i^2.
\\]

Its time average vanishes for bounded steady motion.
Thus the virial can depend only on the nonfrictional part of the force, although the energy balance of the maintained system still requires external work.
