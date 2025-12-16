---
layout: post
title: "Internal Waves in an Incompressible Fluid"
subtitle: "fl1.10"
classification: "Fluid Mechanics 1.10"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Internal Waves in an Incompressible Fluid

There is a kind of gravity wave that can be propagated in an incompressible fluid.
Such waves are due to an inhomogeneity of the fluid caused by the gravitational field;
the pressure and entropy necessarily vary with height.
We shall suppose below that the wavelength is small in comparison with distances over which the
gravitational field causes a remarkable change in density, while the fluid itself is incompressible.
This means that the change of density caused by pressure variations in the wave motion is negligible.

Use a suffix $0$ to distinguish the quantities in mechanical equilibrium, and a prime to mark small deviations from them.
We can neglect the terms with magnitudes of $O(a^2)$, where $a$ is the amplitude of the wave motion.
Then the conservation of the entropy is given by:

\\[
\pdv{s^\prime}{t} + \b{v} \cdot \grad s_0 = 0
\\]

where $s_0$ is a given function of the vertical coordinate $z$.
The Euler equation is then given by:

\\[
\begin{align\*}
\pdv{\b{v}}{t} &= - \frac{\grad p}{\rho} + \b{g} = - \frac{ \rho \b{g} + \grad p^\prime}{ \rho_0 }
\left( 1 - \frac{\rho^\prime}{\rho_0} \right) + \b{g} \nl
&= \frac{\b{g} \rho^\prime - \grad p^\prime}{ \rho_0 }
\end{align\*}
\\]

since $ \grad p_0 = \rho_0 \b{g} $. By the assumption, we have:

\\[
\rho^\prime = \left( \pdv{\rho_0}{s_0} \right)_p s^\prime
\\]

Thus the Euler equation becomes:

\\[
\pdv{\b{v}}{t} = \frac{\b{g}}{\rho_0} \left( \pdv{\rho_0}{s_0} \right)_p s^\prime - \frac{\grad p^\prime}{\rho_0}
\\]

We shall seek a solution in the form of a plane wave:

\\[
\b{v} = \b{v}_m e^{i(\b{k} \cdot \b{r} - \omega t)}
\\]

and similarly for $s^\prime$ and $p^\prime$, with:

\\[
\div \b{v} = 0
\\]

Substituting these to the equations above, we obtain:

\\[
i\omega s^\prime = v_z \odv{s_0}{z}, \qquad -\omega \b{v} = \frac{1}{\rho_0} \left( \pdv{\rho_0}{s_0} \right)_p s^\prime \b{g} - \frac{i\b{k}}{\rho_0} p^\prime
\\]

The incompressibility condition reduces to $\b{v} \cdot \b{k} = 0$, and gives with the second of these equations:

\\[
ik^2 p^\prime = \left( \pdv{\rho_0}{s_0} \right)_p s^\prime \b{g} \cdot \b{k}
\\]

Denote $\theta$ as the angle between $\b{k}$ and $\hat{\b{z}}$. Then:

\\[
ikp^\prime = -\left( \pdv{\rho_0}{s_0} \right)_p s^\prime g \cos \theta
\\]

Substituting this into the second equation, we obtain:

\\[
-i\omega \b{v} = \frac{1}{\rho_0} \left( \pdv{\rho_0}{s_0} \right)_p s^\prime g \left( -\hat{\b{z}} + \hat{\b{k}} \cos \theta \right)
\\]

Taking the $z$-component of this equation and substituting for $s^\prime$ from the first equation, we get:

\\[
\omega^2 = \omega_0^2 \sin^2 \theta
\\]

where $\omega_0$ is given as:

\\[
\omega_0^2 = - \frac{g}{\rho} \left( \pdv{\rho}{s} \right)_p \odv{s}{z}
\\]

Here and henceforward we omit the suffix $0$ from the variables.
We see that the frequency depends only on the direction of the wave vector, and not on its magnitude.
For $\theta = 0$, we have $\omega = 0$, which means that no wave can propagate vertically.

If the fluid is both in mechanical and thermodynamic equilibrium, its tempature is constant and we can write:

\\[
\odv{s}{z} = \left( \pdv{s}{p} \right)_T \odv{p}{z} = - \rho g \left( \pdv{s}{p} \right)_T
\\]

with well-known thermodynamic relations:

\\[
\left( \pdv{s}{p} \right)_T = \frac{1}{\rho^2} \left( \pdv{\rho}{T} \right)_p, \qquad
\left( \pdv{\rho}{s} \right)_p = \frac{T}{c_p} \left( \pdv{\rho}{T} \right)_p
\\]

We find then that the following holds:

\\[
\omega_0 = \sqrt{\frac{T}{c_p}} \frac{g}{\rho} \abs{ \left( \pdv{\rho}{T} \right)_p }
\\]

In particular, for a perfect gas,

\\[
\omega_0 = \frac{g}{\sqrt{c_p T}}
\\]

The dependence of the frequency on the direction yields the group velocity not parallel to the wave vector.
Representing $\omega(\b{k})$ in the form:

\\[
\omega = \omega_0 \sqrt{ 1 - \left( \frac{\b{k} \cdot \hat{\b{z}}}{k} \right)^2 }
\\]

we find that:

\\[
\b{U} = \pdv{\omega}{\b{k}} = -\frac{\omega_0^2}{\omega k} (\hat{\b{k}} \cdot \hat{\b{z}}) \left\[ \hat{\b{z}} - \left(\hat{\b{k}} \cdot \hat{\b{z}}\right) \hat{\b{k}} \right\]
\\]

This is perpendicular to $\b{k}$, and its magnitude is:

\\[
U = \frac{\omega_0}{k} \cos \theta
\\]

Its vertical component is:

\\[
U_z = -\frac{\omega_0}{k} \cos \theta \sin \theta
\\]

## Waves in a Rotating Fluid

Another kind of internal wave can be propagated in an incompressible fluid uniformly rotating as a whole.
The Euler equation becomes:

\\[
\pdv{\b{v}}{t} + (\b{v} \cdot \grad) \b{v} = -\frac{1}{\rho} \grad P - 2\bs{\Omega} \cross \b{v}
\\]

where $\bs{\Omega}$ is the angular velocity vector of the fluid rotation, and $P$ is the effective pressure defined as:

\\[
P = p - \frac{1}{2} \rho \abs{ \bs{\Omega} \cross \b{r} }^2
\\]

Neglecting the terms with magnitudes of $O(a^2)$, we obtain:

\\[
\pdv{\b{v}}{t} + 2\bs{\Omega} \cross \b{v} = -\frac{1}{\rho} \grad p^\prime
\\]

where $p^\prime$ is the pressure variation in the wave motion. Taking the curl of this equation to eliminate the right-hand side, we obtain:

\\[
\pdv{ }{t} (\curl \b{v}) = 2(\bs{\Omega} \cdot \grad) \b{v}
\\]

since by the incompressibility condition $\div \b{v} = 0$ applied to:

\\[
\curl (\bs{\Omega} \cross \b{v}) = \bs{\Omega} \div \b{v} - (\bs{\Omega} \cdot \grad) \b{v}
\\]

Taking the direction of $\bs{\Omega}$ as the z-axis, we obtain:

\\[
\pdv{ }{t} (\curl \b{v}) = 2\Omega \pdv{\b{v}}{z}
\\]

We seek the solution as a plane wave:

\\[
\b{v} = \b{v}_m e^{i(\b{k} \cdot \b{r} - \omega t)}
\\]

where $\b{k} \cdot \b{v} = 0$. Substituting this into the equation above, we obtain:

\\[
\omega \b{k} \cross \b{v} = 2i\Omega k_z \b{v}
\\]

Taking a cross product with $\b{k},

\\[
-\omega k^2 \b{v} = 2i\Omega k_z \b{k} \cross \b{v}
\\]

Comparing of the two equations yields the dependednce of $\omega$ on $\b{k}$:

\\[
\omega = 2\Omega \frac{k_z}{k} = 2\Omega \cos \theta
\\]

where $\theta$ is the angle between $\b{k}$ and $\hat{\b{z}}$.
The group velocity is:

\\[
\b{U} = \frac{2\Omega}{k} \left\[ \hat{\b{z}} - \left(\hat{\b{k}} \cdot \hat{\b{z}}\right) \hat{\b{k}} \right\]
\\]

Its magnitude is:

\\[
U = \frac{2\Omega}{k} \sin \theta
\\]

and its vertical component is:

\\[
U_z = \frac{2\Omega}{k} \sin^2 \theta
\\]