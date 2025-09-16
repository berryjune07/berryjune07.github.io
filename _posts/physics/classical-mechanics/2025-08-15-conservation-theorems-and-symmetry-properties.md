---
layout: post
title: "Conservation Theorems and Symmetry Properties"
subtitle: "cm1.5"
classification: "Classical Mechanics 1.5"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Canonical Momentum

The canonical momentum associated with a coordinate $q_i$ is defined as:

\\[
p_i = \pdv{L}{\dot{q}_i}
\\]

$p_i$ does not necessarily have the dimensions of linear momentum. For example, in spherical coordinates, the canonical momentum associated with the angular coordinate $\phi$ is $p_\phi = m r^2 \sin^2\theta \dot{\phi}$, which has dimensions of angular momentum.
For an example of particles in electromagnetic fields,

\\[
\b{p}_i = m_i \dot{\b{r}}_i + q_i \b{A}(\b{r}_i, t)
\\]

where $q_i$ is the charge of the $i$-th particle and $\b{A}$ is the vector potential.

Let's think of the Lagrange equation of motion:

\\[
\odv{}{t} \left( \pdv{L}{\dot{q}_i} \right) - \pdv{L}{q_i} = 0
\\]

This can be rewritten as:

\\[
\dot{p}_i = \pdv{L}{q_i}
\\]

So that if the Lagrangian does not depend on a particular coordinate $q_i$, called **cyclic** or **ignorable**, then the corresponding canonical momentum $p_i$ is conserved.
Note that the $q_i$s here should be independent coordinates.

## Symmetry and Conservation Laws

### Conservation of Linear Momentum

We first consider a generalized coordinated $q_j$, for which a change $\dd{q_j}$
represents a translation of the system in some direction.
Then clearly $q_j$ cannot appear in $T$. Further, we assume that the potential energy $V$ is not a function of $\dot{q}_j$.
Then the Lagrangian equation of motion reduces to:

\\[
\dot{p}_j = -\pdv{V}{q_j} = Q_j
\\]

Denoting as $\b{n} = \pdv{\b{r}_i}{q_j}$ we have:

\\[
Q_j = \sum_i \b{F}_i \cdot \b{n} = \b{n} \cdot \b{F}
\\]

where $\b{F}$ is the total force on the system.
The conjugate momentum is:

\\[
\begin{align\*}
p_j &= \pdv{T}{\dot{q}_j} = \sum_i m_i \dot{\b{r}}_i \cdot \pdv{\dot{\b{r}}_i}{\dot{q}_j} \nl
&= \sum_i m_i \b{v}_i \cdot \pdv{\b{r}_i}{q_j} \nl
&= \b{n} \cdot \b{P}
\end{align\*}
\\]

where $\b{P}$ is the total linear momentum of the system.
Thus, if the potential does not depend on $q_j$, then the $Q_j = 0$ and the component of the total linear momentum in the direction of $\b{n}$ is conserved.

### Conservation of Angular Momentum

In a similar fashion, it can be shown that if a cyclic coordinate $q_j$ is such that
$\dd{q_j}$ corresponds to a rotation of the system about some axis, then the conserved conjugate momentum $p_j$ is the component of the total angular momentum $\b{L}$ along that axis.
By the same argument as before, $T$ does not depend on $q_j$, and we assume that $V$ does not depend on $\dot{q}_j$.
Then the Lagrange equation of motion reduces to:

\\[
\dot{p}_j = -\pdv{V}{q_j} = Q_j
\\]

as before. Setting $\b{n}$ as the unit vector along the axis of rotation, we have:

\\[
\pdv{\b{r}_i}{q_j} = \b{n} \times \b{r}_i
\\]

Thus,

\\[
\begin{align\*}
Q_j &= \sum_i \b{F}_i \cdot (\b{n} \times \b{r}_i) \nl
&= \b{n} \cdot \sum_i (\b{r}_i \times \b{F}_i) \nl
&= \b{n} \cdot \b{N}
\end{align\*}
\\]

where $\b{N}$ is the total torque on the system.
Similarly, the conjugate momentum is:

\\[
\begin{align\*}
p_j &= \pdv{T}{\dot{q}_j} = \sum_i m_i \dot{\b{r}}_i \cdot \pdv{\dot{\b{r}}_i}{\dot{q}_j} \nl
&= \sum_i m_i \b{v}_i \cdot (\b{n} \times \b{r}_i) \nl
&= \b{n} \cdot \sum_i (\b{r}_i \times m_i \b{v}_i) \nl
&= \b{n} \cdot \b{L}
\end{align\*}
\\]

where $\b{L}$ is the total angular momentum of the system.
Thus, if the potential does not depend on $q_j$, then $Q_j = 0$ and the component of the total angular momentum along the axis of rotation is conserved.