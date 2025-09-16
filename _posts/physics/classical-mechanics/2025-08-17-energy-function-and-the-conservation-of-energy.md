---
layout: post
title: "Energy Function and the Conservation of Energy"
subtitle: "cm1.6"
classification: "Classical Mechanics 1.6"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Energy Function

Let's think of the total derivative of the Lagrangian with respect to time:

\\[
\begin{align\*}
\odv{L}{t} &= \sum_i \pdv{L}{q_i} \odv{q_i}{t} + \sum_i \pdv{L}{\dot{q}_i} \odv{\dot{q}_i}{t} + \pdv{L}{t} \nl
&= \sum_i \odv{}{t} \left( \pdv{L}{\dot{q}_i} \right) \dot{q}_i + \sum_i \pdv{L}{\dot{q}_i} \odv{\dot{q}_i}{t} + \pdv{L}{t} \nl
&= \sum_i \odv{}{t} \left( \dot{q}_i \pdv{L}{\dot{q}_i} \right) + \pdv{L}{t}
\end{align\*}
\\]

Rearranging gives us

\\[
\odv{}{t} \left( \sum_i \dot{q}_i \pdv{L}{\dot{q}_i} - L \right) + \pdv{L}{t} = 0
\\]

We define the energy function $h$ (which is equivalent to the Hamiltonian $H$) as:

\\[
\begin{align\*}
h(\b{q}, \dot{\b{q}}, t) &= \sum_i \dot{q}_i \pdv{L}{\dot{q}_i} - L \nl
&= \dot{\b{q}} \cdot \pdv{L}{\dot{\b{q}}} - L \nl
&= \dot{\b{q}} \cdot \b{p} - L
\end{align\*}
\\]

Thus, we have

\\[
\odv{h}{t} = -\pdv{L}{t}
\\]

If the Lagrangian does not explicitly depend on time, then $h$ is conserved.

### Degree Analysis

We saw that the total kinetic energy $T$ can always be written as:

\\[
T = T_0 + T_1 + T_2
\\]

where $T_0$ is independent of the generalized velocities $\dot{q}_i$, $T_1$ is linear in $\dot{q}_i$, and $T_2$ is quadratic in $\dot{q}_i$.
For most systems, the potential energy $V$ can be also split into three parts.
Therefore, the Lagrangian can be expressed as:

\\[
L = L_0 + L_1 + L_2
\\]

Now, recall that Euler's theorem for homogeneous functions states that if a function $f(x_1, x_2, \ldots, x_n)$ is homogeneous of degree $k$, then:

\\[
\sum_{i=1}^{n} x_i \pdv{f}{x_i} = k f
\\]

Applying this to the energy function $h$, we have:

\\[
h = 2L_2 + L_1 - L = L_2 - L_0
\\]

If the transformation equation defining the generalized coordinates does not depend on time,
then $T=T_2$. If, further, the potential does not depend on velocities, then $L_2=T$ and $L_0=-V$.
Thus, in this common case, the energy function is simply the total mechanical energy:

\\[
h = T + V = E
\\]

Thus, if the Lagrangian does not explicitly depend on time, then the total mechanical energy is conserved.

### Non-conservative Systems

Finally, for the case where non-conservative forces are present, and they are the frictional forces
derivable from a Rayleigh dissipation function $\mathcal{F}$, we have:

\\[
\odv{h}{t} = -\pdv{L}{t} - \sum_i \pdv{\mathcal{F}}{\dot{q}_i} \dot{q}_i
\\]

Applying Euler's theorem again, we get:

\\[
\odv{h}{t} = -\pdv{L}{t} - 2\mathcal{F}
\\]

If the Lagrangian does not explicitly depend on time, for the system where $h$ is the total mechanical energy $E$,
we have:

\\[
\odv{E}{t} = -2\mathcal{F}
\\]

which matches the [result](dalemberts-principle-and-lagranges-equations.html#rayleighs-dissipation-function) we've obtained earlier.