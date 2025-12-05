---
layout: post
title: "Gravity Waves"
subtitle: "fl1.9"
classification: "Fluid Mechanics 1.9"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

The free surface of a liquid in equilibrium in a gravitational field is horizontal.
If, under the action of external perturbation, the surface is displaced from its equilibrium position, and this motion will be propagated as waves on the surface of the liquid.
**Gravity waves** are waves that occur on the surface of a fluid, such as water, where the restoring force is gravity.
These waves are commonly observed in oceans, lakes, and other bodies of water.
Gravity waves appear mainly on the surface of liquids; they affect the interior also but to a much smaller extent.

## Governing Equations

To analyze gravity waves, we start with the assumptions of an incompressible and irrotational ideal fluid.
The governing equations are the Laplace equation for the velocity potential $\phi$ and the boundary conditions at the free surface and the bottom of the fluid.
Let's set up a coordinate system with the $x$-axis along the undisturbed free surface and the $z$-axis pointing upwards, with $z=0$ at the still water level(SWL), $z=\eta(x,t)$ at the free surface, and $z=-h$ at the bottom of the fluid.
The SWL differs from the mean water level(MWL) by the time-averaged value of $\eta(x,t)$: $\eta_0$.
First, the Laplace equation for $\phi(x,z,t)$ is given by:

\\[
\pdvn{2}{\phi}{x} + \pdvn{2}{\phi}{z} = 0 \quad (- h \leq z \leq \eta)
\\]

The boundary conditions to be satisfied are the free surface kinematic boundary condition

\\[
\mdv{\eta} = \pdv{\phi}{z} = \pdv{\eta}{t} + \pdv{\eta}{x} \pdv{\phi}{x} \quad (z = \eta),
\\]

the free surface dynamic boundary condition

\\[
\pdv{\phi}{t} + \frac{1}{2} \left( \left( \pdv{\phi}{x} \right)^2 + \left( \pdv{\phi}{z} \right)^2 \right) + g \eta = gz_0 \quad (z = \eta),
\\]

where $z_0$ is a constant reference level called mean energy level(MEL), and the bottom boundary condition

\\[
\pdv{\phi}{z} = 0 \quad (z = -h)
\\]

since the bottom is assumed to be rigid and impermeable.
Assume the potential function $\phi$ as a traveling wave solution of the form:

\\[
\phi(x,z,t) = \phi(\theta,z)
\\]

where $\theta = kx - \omega t$, $k$ is the wave number, and $\omega$ is the angular frequency.
By separating variables as $\phi(\theta,z) = \Theta(\theta) Z(z)$ and assuming that $\Theta(\theta)$ is periodic,
we can solve the equation as:

\\[
k^2 \frac{\odvni{2}{\Theta}{\theta}}{\Theta} = - \frac{\odvni{2}{Z}{z}}{Z} = -k^2n^2
\\]

so that $\phi$ becomes a periodic wave with wave number $k$, where $n$ is for higher modes at Fourier series expansion.
The general solution is:

\\[
\Theta(\theta) = \sin(n \theta), \quad Z(z) = \cosh(nk(z+h))
\\]

where $Z$ has been determined by the bottom boundary condition.
Thus, the potential function can be expressed as:

\\[
\phi(\theta,z) = \frac{\omega}{k^2} \sum_{n=1}^{\infty} \phi_n \cosh\[nk(z+h)\] \sin(n \theta)
\\]

where $\phi_n$ are dimensionless coefficients to be determined by the free surface boundary conditions.
Traveling wave assumption also gives that $\eta(x,t) = \eta(\theta)$.
Substituting this expression into the free surface kinematic boundary condition gives:

\\[
\frac{\omega}{k} \sum_{n=1}^{\infty} n \phi_n \sinh\[nk(h+\eta)\] \sin(n \theta) = -\omega \pdv{\eta}{\theta} + k \pdv{\eta}{\theta} \frac{\omega}{k} \sum_{n=1}^{\infty} \phi_n \cosh\[nk(h+\eta)\] \cos(n \theta)
\\]

Rearranging this equation and integrating with respect to $\theta$ gives:

\\[
\sum_{n=1}^{\infty} \phi_n \sinh\[nk(h+\eta)\] \cos(n \theta) = k\eta + C
\\]

where $C$ is an integration constant. For the primary no wave circumstance, we can set $C=0$.

\\[
\begin{equation}
\sum_{n=1}^{\infty} \phi_n \sinh\[nk(h+\eta)\] \cos(n \theta) = k\eta
\end{equation}
\\]

Substituting the expression of $\phi$ into the free surface dynamic boundary condition gives:

\\[
-\frac{\omega^2}{k^2} \left\[ \sum_{n=1}^{\infty} n\phi_n \cosh\[nk(h+\eta)\] \cos(n \theta)
+\frac{1}{2} \left\\{ \sum_{n=1}^{\infty} n\phi_n \cosh\[nk(h+\eta)\] \cos(n \theta) \right\\}^2 
+\frac{1}{2} \left\\{ \sum_{n=1}^{\infty} n\phi_n \sinh\[nk(h+\eta)\] \sin(n \theta) \right\\}^2 \right\] + g \eta = g z_0
\\]

We can nondimensionalize $\omega^2$ by $gk$, i.e. $\omega^2 = gk \Omega$, so that the equation becomes:

\\[
\begin{equation}
\begin{aligned}
& - \Omega \sum_{n=1}^{\infty} n\phi_n \cosh\[nk(h+\eta)\] \cos(n \theta) \nl
& + \frac{\Omega}{2} \left\\{ \sum_{n=1}^{\infty} n\phi_n \cosh\[nk(h+\eta)\] \cos(n \theta) \right\\}^2 \nl
& + \frac{\Omega}{2} \left\\{ \sum_{n=1}^{\infty} n\phi_n \sinh\[nk(h+\eta)\] \sin(n \theta) \right\\}^2 + k \eta = k z_0
\end{aligned}
\end{equation}
\\]

The free surface could also be expressed in Fourier series as:

\\[
\eta = \eta_0 + \sum_{n=1}^{\infty} \eta_n \cos(n \theta)
\\]

What remains is to determine the Fourier coefficients $\phi_n$ and $\eta_n$.
This can be done by iteratively expanding the hyperbolic functions in equations $(1)$ and $(2)$ as Taylor series about $\eta=0$ and equating the coefficients of $\cos(n \theta)$ on both sides of the equations.

\\[
\cosh\[nk(h+\eta)\] = \sum_{j=0}^{\infty} \frac{(nk)^j}{j!} \begin{Bmatrix} \cosh(nkh) &; 2 \mid j \nl \sinh(nkh) &; 2 \nmid j \end{Bmatrix} \eta^j \nt
\sinh\[nk(h+\eta)\] = \sum_{j=0}^{\infty} \frac{(nk)^j}{j!} \begin{Bmatrix} \sinh(nkh) &; 2 \mid j \nl \cosh(nkh) &; 2 \nmid j \end{Bmatrix} \eta^j
\\]

After that, we can obtain a set of nonlinear algebraic equations for $\phi_n$, $\eta_n$, $\omega$, and $z_0$,
which could be solved using the perturbation method.

\\[
\eta_n = \sum_{j=1}^{\infty} \varepsilon^j \eta_n^{(j)}, \quad
\phi_n = \sum_{j=1}^{\infty} \varepsilon^j \phi_n^{(j)}, \quad
\Omega = \sum_{j=0}^{\infty} \varepsilon^j \Omega^{(j)}
\\]

where $\varepsilon$ is a small global perturbation parameter associated with the wave height that is equal to zero when the wave height is zero.
It is obvious that $\eta_n^{(j)} = \phi_n^{(j)} = 0$ for $j < n$ since physically the $n$-th harmonic cannot appear before the $n$-th order of perturbation.
Owing to the fact that the number of unknown coefficients is more than the number of equations,
we will normalize $k\eta_1^{(1)}$ to be unit, i.e. $k\eta_1^{(1)} = 1$ and leave $\eta_1^{(j)}$ for $j \geq 2$ not to be determined.
Assuming $\varepsilon \ll 1$ and considering only the first-order terms of $\varepsilon$, we get:

\\[
k\eta = \varepsilon \cos \theta + O\left( \varepsilon^2 \right)
\\]

which means that $\varepsilon/k$ represents the wave amplitude.
Let's denote the amplitude of the linear wave as $a$, so that $\varepsilon = ka$.

## Airy Wave Theory

By retaining only the first-order terms of $\varepsilon$ in equations $(1)$ and $(2)$, we obtain:

\\[
\Omega^{(0)} = \tanh(kh) \nl
\eta_0 = 0 \nl
\phi_1^{(1)} = \frac{1}{\sinh(kh)}
\\]

Substituting these results back into the expressions for $\phi$ and $\eta$, we get the linear wave solution, also known as **Airy wave theory**:

\\[
\eta = a \cos \theta, \qquad
\phi = \frac{a\omega}{k} \frac{\cosh\[k(z+h)\]}{\sinh(kh)} \sin \theta, \qquad
\omega = \sqrt{gk \tanh(kh)}
\\]

The wave height is $H = 2a$. Phase velocity $c_p$ and group velocity $c_g$ can be derived as:

\\[
c_p = \sqrt{\frac{g}{k} \tanh(kh)}, \qquad
c_g = \frac{1}{2} c_p \left\[ 1 + \frac{2kh}{\sinh(2kh)} \right\]
\\]

Velocity components can be derived from the potential function as:

\\[
v_x = a \omega \frac{\cosh\[k(z+h)\]}{\sinh(kh)} \cos \theta, \qquad
v_z = a \omega \frac{\sinh\[k(z+h)\]}{\sinh(kh)} \sin \theta
\\]

Let's also derive the particle trajectory $(x_p, z_p)$.
We have:

\\[
\odv{x_p}{t} = v_x(x_p, z_p, t), \qquad
\odv{z_p}{t} = v_z(x_p, z_p, t)
\\]

Assuming that the particle is slightly displaced from its mean position $(x_0, z_0)$, we can express the particle trajectory as:

\\[
x_p = x_0 + \Delta x(x_0, z_0, t), \qquad
z_p = z_0 + \Delta z(x_0, z_0, t)
\\]

Assuming that the displacements $\Delta x$ and $\Delta z$ are small, we can approximate the velocity components at the particle position by their values at the mean position.
Then, we have:

\\[
\Delta x = - a \frac{\cosh\[k(z_0+h)\]}{\sinh(kh)} \sin(kx_0 - \omega t), \qquad
\Delta z = a \frac{\sinh\[k(z_0+h)\]}{\sinh(kh)} \cos(kx_0 - \omega t)
\\]

This shows that the particle motion under a gravity wave is approximately elliptical, with the major axis in the horizontal direction.
The size of the ellipse decreases exponentially with depth, indicating that the wave motion is most pronounced near the surface and diminishes with depth.

### Deep Water and Shallow Water Limits

In the deep water limit ($kh \gg 1$) and shallow water limit ($kh \ll 1$), the solutions simplify to:

|               | $\phi$                                            | $\omega$      | $c_p$                     | $c_g$                  | $v_x$                                   | $v_z$                                    | $\Delta x$                        | $\Delta z$                         |
|---------------|---------------------------------------------------|---------------|---------------------------|------------------------|-----------------------------------------|------------------------------------------|-----------------------------------|------------------------------------|
| Deep Water    | $\dps \frac{a\omega}{k} e^{kz} \sin \theta$       | $\sqrt{gk}$   | $\dps \sqrt{\frac{g}{k}}$ | $\dps \frac{1}{2} c_p$ | $a\omega e^{kz} \cos \theta$            | $a\omega e^{kz} \sin \theta$             | $-a e^{kz} \sin\theta$            | $a e^{kz} \cos \theta$             |
| Shallow Water | $\dps \frac{a\omega}{k} \frac{1}{kh} \sin \theta$ | $k \sqrt{gh}$ | $\sqrt{gh}$               | $c_p$                  | $\dps a\omega \frac{1}{kh} \cos \theta$ | $\dps a\omega \frac{z+h}{h} \sin \theta$ | $\dps -a \frac{1}{kh} \sin\theta$ | $\dps a \frac{z+h}{h} \cos \theta$ |
{:.scroll-table}

Practically, these approximations are usually valid when $h > \dfrac{1}{2} \lambda$ for deep water and $h < \dfrac{1}{20} \lambda$ for shallow water, where $\lambda$ is the wavelength.

### Stokes Drift

In addition to the oscillatory motion, particles in a gravity wave also experience a net drift known as **Stokes drift**.
To derive the Stokes drift, we consider the Taylor expansion of the velocity components about the mean position up to the first order in displacements.
Let's denote $v_x^0 = v_x(x_0, z_0, t)$ for convenience.

\\[
v_x(x_p, z_p, t) = v_x^0 + \pdv{v_x}{x} \Delta x + \pdv{v_x}{z} \Delta z + O\left( \Delta x^2 + \Delta z^2 \right)
\\]

Taking the time average over one wave period $T = \dfrac{2\pi}{\omega}$, we find that $\overline{v_x^0} = 0$.

\\[
\begin{align\*}
\overline{v_x} &= \overline{\pdv{v_x}{x} \Delta x + \pdv{v_x}{z} \Delta z} \nl
&= \frac{a^2 \omega k}{\sinh^2(kh)} \overline{\cosh^2\[k(z+h)\] \sin^2\theta + \sinh^2\[k(z+h)\] \cos^2\theta} \nl
&= \frac{1}{2} \varepsilon a \omega \frac{\cosh\[2k(z+h)\]}{\sinh^2(kh)}
\end{align\*}
\\]

Thus, the Stokes drift velocity is given by:

\\[
\bar{u}_\text{S} = \frac{1}{2} \varepsilon a \omega \frac{\cosh\[2k(z+h)\]}{\sinh^2(kh)}
\\]

This shows that the Stokes drift velocity has a magnitude of $O(\varepsilon)$, and most of the drift occurs near the free surface, decreasing with depth.

## Stokes Wave Theory

**Stokes wave theory** extends the analysis of gravity waves to include nonlinear effects by considering higher-order terms in the perturbation expansion.
By retaining terms up to the third order in $\varepsilon$, we obtain corrections to the surface elevation, potential function, and wave frequency.
Let's denote $\tilde{\eta}_n^{(j)} = k \eta_n^{(j)}$ for convenience.
Omitting the complicated calculations of the coefficients, the third-order Stokes wave solution is given by:

\\[
\eta = a \left\[ \frac{\varepsilon}{2\sigma} + \left( 1 + \varepsilon \tilde{\eta}_1^{(2)} + \varepsilon^2 \tilde{\eta}_1^{(3)} \right) \cos \theta
+\varepsilon \frac{3-\sigma^2}{4\sigma^3} \left( 1+ 2\varepsilon \tilde{\eta}_1^{(2)} \right) \cos 2\theta
+\varepsilon^2 \frac{3\left( 8+(1-\sigma^2)^3 \right)}{64 \sigma^6} \cos 3\theta \right\]
\\]

\\[
\phi = \frac{a\omega}{k} \left\[ \frac{ 1+\varepsilon \tilde{\eta}_1^{(2)} + \varepsilon^2 \left\[ \tilde{\eta}_1^{(3)} - 3\left(2+\sigma^2\right)/8\sigma^4 \right\] }{\sinh(kh)} \cosh\[k(z+h)\] \sin \theta
+\varepsilon \frac{3\left(1+2\varepsilon \tilde{\eta}_1^{(2)}\right)}{8\sinh^4(kh)} \cosh\[2k(z+h)\] \sin 2\theta
+\varepsilon^2 \frac{9-4\sinh^2(kh)}{64 \sinh^7(kh)} \cosh\[3k(z+h)\] \sin 3\theta \right\]
\\]

\\[
\omega^2 = gk\sigma \left\[ 1 + \varepsilon^2 \frac{9 - 6\sigma^2 + 5\sigma^4}{8\sigma^4} \right\]
\\]

\\[
z_0 = \varepsilon a \frac{3-\sigma^2}{4\sigma}
\\]

\\[
H = 2a \left\[ 1 + \varepsilon \tilde{\eta}_1^{(2)} + \varepsilon^2 \left\\{\tilde{\eta}_1^{(3)} + \frac{3\left(8+(1-\sigma^2)^3\right)}{64 \sigma^6} \right\\} \right\]
\\]

where $\sigma = \tanh(kh)$.

These higher-order corrections account for the nonlinear interactions between wave components, leading to phenomena such as wave steepening and the generation of higher harmonics.
Stokes showed that the crest becomes nondifferentiable, forming a sharp angle of $120^\circ$ when the wave height reaches a critical value.

### Ursell Number

Let's take a look at the ratio of the free-surface amplitude at second order to that at first order.
Assume $\tilde{\eta}_1^{(2)}=0$ for simplicity.

\\[
\mathcal{S} = \varepsilon \frac{3-\sigma^2}{4\sigma^3}
\\]

In deep water, it becomes:

\\[
\lim_{kh \to \infty} \mathcal{S} = \frac{1}{2} \varepsilon
\\]

In shallow water, it simplifies to:

\\[
\lim_{kh \to 0} \mathcal{S} = \frac{3}{4} \frac{\varepsilon}{(kh)^3} = \frac{3}{4} \frac{a}{k^2 h^3}
\\]

In terms of wave height $H = 2a$ and wavelength $\lambda = 2\pi/k$, it can be expressed as:

\\[
\lim_{kh \to 0} \mathcal{S} = \frac{3}{32\pi^2} \frac{H \lambda^2}{h^3} = \frac{3}{32\pi^2} \mathcal{U}
\\]

where $\mathcal{U}$ is the **Ursell number**, defined as:

\\[
\mathcal{U} = \frac{H \lambda^2}{h^3}
\\]

The Ursell number is a dimensionless parameter that characterizes the relative importance of nonlinear effects in shallow water waves.
When $\mathcal{U} \ll 32\pi^2/3 \approx 100$, linear wave theory is adequate.
It is known that fifth-order Stokes wave theory provides a good approximation when $\mathcal{U} < 40$.
For larger Ursell numbers, more sophisticated nonlinear wave theories, such as cnoidal wave theory or fifth-order stream function theory, are required to accurately describe the wave behavior.
Refer to _Korteweg--de Vries equation_ or _Boussinesq equation_ for more information on shallow water wave theories.