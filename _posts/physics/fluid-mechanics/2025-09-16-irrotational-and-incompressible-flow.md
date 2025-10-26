---
layout: post
title: "Irrotational and Incompressible Flow"
subtitle: "fl1.7"
classification: "Fluid Mechanics 1.7"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Irrotational Flow

A flow is said to be **irrotational** if the curl of the velocity field is zero everywhere:

\\[
\nabla \times \mathbf{v} = 0
\\]

This implies that there is no local rotation of fluid elements in the flow.
It is also called a **potential flow** because the velocity field can be expressed as the gradient of a scalar **velocity potential** function $\phi$:

\\[
\b{v} = \nabla \phi
\\]

### Properties

Writing Euler's equation as [here](bernoullis-equation.html#bernoullis-equation),

\\[
\pdv{\b{v}}{t} - \b{v} \times (\curl \b{v}) = -\grad \left(\frac{1}{2}v^2 + w + \Phi\right)
\\]

and substituting $\b{v} = \grad \phi$ gives:

\\[
\grad \left( \pdv{\phi}{t} + \frac{1}{2} v^2 + w + \Phi \right) = 0
\\]

This implies:

\\[
\pdv{\phi}{t} + \frac{1}{2} v^2 + w + \Phi = f(t)
\\]

where $f(t)$ is an arbitrary function of time.
However, since potentials are not uniquely defined, we can absorb $f(t)$ into $\phi$ by redefining the potential, i.e. set $f(t) = 0$ without loss of generality.
Thus, for irrotational and steady flow, Bernoulli's equation holds throughout the entire flow field, not just along streamlines:

\\[
\frac{1}{2} v^2 + w + \Phi = \text{const.}
\\]

Also, since the vorticity $\b{\omega} = \curl \b{v}$ is zero everywhere, the velocity circulation $\Gamma$ around any closed curve $C$ is zero.

### Examples

For a steady flow, the velocity field is constant in space at infinity, so that the curl is zero.
A steady flow past any object is irrotational outside the boundary layer, where viscous effects are negligible.
Another important case of potential flow occurs for small oscillations of a body immersed in fluid.
If the amplitude $a$ of the oscillations is small compared to the characteristic length $l$ of the body, i.e. $a \ll l$, the flow can be treated as irrotational.

<details markdown="1"> <summary> Proof </summary>
Let's estimate the order of magnitude of terms in Euler's equation.

\\[
\pdv{\b{v}}{t} + (\b{v} \cdot \grad) \b{v} = -\grad (w + \Phi)
\\]

The velocity changes markedly (by an amount of the same order as $u$, the velocity of the oscillating body)
over a distance of order $l$ and a time of order $1/\omega$, where $\omega$ is the angular frequency of oscillation.
Thus, we can estimate:

\\[
\pdv{\b{v}}{t} \sim \omega u, \quad (\b{v} \cdot \grad) \b{v} \sim \frac{u^2}{l}
\\]

Since $\omega \sim u/a$, we have:

\\[
\frac{(\b{v} \cdot \grad) \b{v}}{\pdv{\b{v}}{t}} \sim \frac{u^2/l}{\omega u} \sim \frac{a}{l} \ll 1
\\]

Therefore, the nonlinear term $(\b{v} \cdot \grad) \b{v}$ can be neglected compared to the unsteady term $\pdv{\b{v}}{t}$.
Thus, taking the curl of both sides gives:

\\[
\pdv{(\curl \b{v})}{t} = 0
\\]

This implies $\curl \b{v} = \text{const.}$
In oscillatory motion, the time-averaged velocity is zero, so the constant must be zero.
Hence, the flow is irrotational.
</details>

## Incompressible Flow

A flow is said to be **incompressible** if the density $\rho$ of the fluid remains constant along fluid particle trajectories.
Mathematically, this is expressed as:

\\[
\mdv{\rho}{t} = 0
\\]

Reminding the [Euler's equation](eulers-equation-and-hydrostatics.html#eulers-equation),
it can be shown that incompressibility is equivalent to the zero divergence of the velocity field:

\\[
\div \b{v} = 0
\\]

### Properties

Zero divergence of the velocity also implies:

\\[
\mdv{\varepsilon} = 0
\\]

where $\varepsilon$ is the internal energy per unit mass, which is also the result from the Euler's equation.
Therefore, for a streamline in an incompressible steady flow of an ideal fluid, Bernoulli's equation reduces to:

\\[
\frac{1}{2} v^2 + \frac{p}{\rho} + \Phi = \text{const.}
\\]

or also often written as:

\\[
p + \frac{1}{2} \rho v^2 + \rho \Phi = \text{const.}
\\]

### Two-Dimensional Incompressible Flow

In two-dimensional incompressible flow, the velocity field can be expressed in terms of a **stream function** $\psi(x,y,t)$ as:

\\[
v_x = \pdv{\psi}{y}, \quad v_y = -\pdv{\psi}{x}
\\]

so that it automatically satisfies the incompressibility condition $\div \b{v} = 0$.
From the equation of $\b{v}$ [here](eulers-equation-and-hydrostatics.html#thermodynamic-analysis),
we obtain the differential equation for $\psi$:

\\[
\pdv{}{t} \laplacian \psi - \pdv{\psi}{x} \pdv{}{y} \laplacian \psi + \pdv{\psi}{y} \pdv{}{x} \laplacian \psi = 0
\\]

If we know the stream function $\psi$, we can immediately determine the form of streamlines.
The equation of a streamline is:

\\[
\frac{\dd{x}}{v_x} = \frac{\dd{y}}{v_y}
\\]

Substituting the expressions for $v_x$ and $v_y$ in terms of $\psi$, we have:

\\[
\pdv{\psi}{x} \dd{x} + \pdv{\psi}{y} \dd{y} = \dd{\psi} = 0
\\]

This shows that the stream function $\psi$ is constant along a streamline.
In other words, the value of $\psi$ uniquely identifies each streamline in the flow field.

If we draw a curve between two points $A$ and $B$ in the xy-plane,
the mass flux $Q$ across this curve is given by the difference in the stream function values at these points:

\\[
\begin{align\*}
Q &= \int_A^B \rho v_n \dd{l} = \rho \int_A^B \left( -v_y \dd{x} + v_x \dd{y} \right) \nl
&= \rho \int_A^B \dd{\psi} = \rho \left( \psi_B - \psi_A \right)
\end{align\*}
\\]

### Examples

When the pressure changes adiabatically by $\Delta p$, the density changes by $\Delta \rho = \left( \pdv{\rho}{p} \right)_s \Delta p$.
According to the Bernoulli's equation, $\Delta p \sim \rho v^2$.
We shall show further that $\left( \pdv{p}{\rho} \right)_s = c^2$, where $c$ is the speed of sound in the fluid.
Thus, we have $\Delta \rho / \rho \sim v^2 / c^2$.
If the fluid velocity $v$ is much smaller than the speed of sound $c$, i.e. $v \ll c$,
the change in density is negligible, and the flow can be treated as incompressible.

Let's extend this argument to unsteady flow.
Let $\tau$ and $l$ be the characteristic time and length scales of the flow, respectively.
By Euler's equation, the pressure changes by an amount $\Delta p \sim \rho l v / \tau$ over a time interval of order $\tau$,
and the corresponding change in density is $\Delta \rho \sim \rho l v / (c^2 \tau)$.
Now substituting this to the continuity equation, we have $\tau \gg l/c$ for $\Delta \rho / \rho \ll 1$.

If the both conditions $v \ll c$ and $\tau \gg l/c$ are satisfied,
the flow can be treated as incompressible.

## Irrotational and Incompressible Flow

If a flow is both irrotational and incompressible, the velocity field is governed by both conditions:

\\[
\div \b{v} = 0, \quad \curl \b{v} = 0
\\]

This implies that the velocity potential $\phi$ satisfies Laplace's equation:

\\[
\laplacian \phi = 0
\\]

### Properties

For the flow to be irrotational and incompressible, we can use the results about Bernoulli's equation from both irrotational and incompressible flow sections.
Thus, Bernoulli's equation written as follows holds throughout the entire flow field:

\\[
p + \frac{1}{2} \rho v^2 + \rho \Phi = \text{const.}
\\]

This means that the pressure distribution in the flow can be determined directly from the velocity field.
The greatest pressure occurs where the velocity is minimum, and vice versa. If a body is immersed
in such a flow and there exists a _stagnation point_ on the body's surface where the fluid velocity is zero, the pressure at that point is given by:

\\[
p_\text{max} = p_\infty + \frac{1}{2} \rho v_\infty^2
\\]

### Two-Dimensional Irrotational and Incompressible Flow

There are powerful methods of solving problems of two-dimensional incompressible flow of an incompressible fluid
past bodies of various profiles, involving the application of complex variable theory.
The velocity potential $\phi$ and the stream function $\psi$ are related to the velocity components as follows:

\\[
v_x = \pdv{\phi}{x} = \pdv{\psi}{y}, \quad v_y = \pdv{\phi}{y} = -\pdv{\psi}{x}
\\]

These relations between $\phi$ and $\psi$ are known as the _Cauchy-Riemann equations_
for a complex function $w=\phi + i \psi$ to be an analytic function of the complex variable $z = x + iy$.
This means that $w(z)$ has a well-defined derivative at every point in the flow field.

\\[
\odv{w}{z} = \pdv{\phi}{x} + i \pdv{\psi}{x} = v_x - i v_y
\\]

The function $w(z)$ is called the **complex potential**, and $\odv{w}{z}$ is the **complex velocity**.

\\[
\odv{w}{z} = v e^{-i \theta}
\\]

where $v$ is the magnitude of the velocity and $\theta$ is the angle between the velocity vector and the x-axis.
At a solid surface, the stream function $\psi$ is constant, since no fluid can cross the boundary.
Thus, the body surface corresponds to a streamline in the flow (\psi = const.), and the problem reduces to finding an analytic function $w(z)$
that satisfies the real boundary conditions on the body surface and the appropriate conditions at infinity.

The integral of the complex velocity around a closed curve $C$ is given by:

\\[
\begin{align\*}
\oint_C \odv{w}{z} \dd{z} &= \oint_C (v_x - i v_y)(\dd{x} + i \dd{y}) \nl
&= \oint_C (v_x \dd{x} + v_y \dd{y}) + i \oint_C (-v_y \dd{x} + v_x \dd{y}) \nl
&= \Gamma + i Q/\rho
\end{align\*}
\\]

where $Q$ is the mass flux across the curve $C$, and $\Gamma$ is the circulation around $C$.
By the _residue theorem_ from complex variable theory,

\\[
\oint_C \odv{w}{z} \dd{z} = 2 \pi i \sum_k \text{Res}(w^\prime, z_k)
\\]

where the sum is over all singularities $z_k$ of $\odv{w}{z}$ inside the curve $C$.
This shows that both the circulation $\Gamma$ and the mass flux $Q$ are determined by the singularities of the complex velocity within the curve $C$.

\\[
\Gamma + i \frac{Q}{\rho} = 2 \pi i \sum_k \text{Res}(w^\prime, z_k)
\\]