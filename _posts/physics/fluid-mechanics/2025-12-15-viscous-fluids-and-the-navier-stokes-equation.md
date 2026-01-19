---
layout: post
title: "Viscous Fluids and the Navier–Stokes Equation"
subtitle: "fl2.1"
classification: "Fluid Mechanics 2.1"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Viscous stress tensor

Let's now study the effect of energy dissipation, occurring during the motion of a fluid, on that motion itself.
This process is the result of the thermodynamic irreversibility of the motion, which is due to internal friction(viscosity) and thermal conduction.
Here, we will study the effect of viscosity on the motion of a fluid.
[Remind](/physics/ideal-fluids-and-the-equation-of-continuity.html#momentum)
that the equation of motion can be written as:

\\[
\pdv{(\rho \b{v})}{t} + \div \b{\Pi} = \b{f}
\\]

where $\b{\Pi}$ is the momentum flux density tensor:

\\[
\b{\Pi} = p \b{I} + \rho \b{v} \otimes \b{v}
\\]

This expression represents a completely reversible transfer of momentum, due simply to the mechanical transport of the
different particles of fluid from place to place and to the pressure forces acting on them.
The viscosity causes another, irreversible, transfer of momentum, so the appropriate
additional term to the momentum flux density tensor could let us write the equation of motion of the viscous fluid.

\\[
\b{\Pi} = p \b{I} + \rho \b{v} \otimes \b{v} - \bs{\varepsilon}
\\]

where $\bs{\varepsilon}$ is the **viscous stress tensor**.
The **stress tensor** is defined as:

\\[
\bs{\sigma} = -p \b{I} + \bs{\varepsilon}
\\]

so that it satisfies:

\\[
\b{\Pi} = -\bs{\sigma} + \rho \b{v} \otimes \b{v}
\\]

The viscous stress tensor is only a linear approximation of the stress around a point and does not account for
higher-order terms of its Taylor expansion. However, it is still sufficient for the most practical cases.
The general form of the tensor $\bs{\varepsilon}$ can be established as follows. The process of internal friction
occurs in a fluid only when different fluid particles move with different velocities, so that there is a relative
motion between various parts of the fluid. Hence, $\bs{\varepsilon}$ must depend on the space derivative of the fluid velocity.

### General Newtonian Fluid

A fluid is said to be **Newtonian** if the viscous stress tensor is a linear function of the velocity gradients.
No real fluid is perfectly Newtonian, but many important fluids, including gases and water, can be assumed to be, as long as the flow stresses and strain rates are not too high.
First, we introduce the **strain rate tensor** $\b{E}$, defined as:

\\[
\b{E} = \pdv{\b{e}}{t} = \frac{1}{2} \left( \grad \b{v} + (\grad \b{v})^\top \right)
\\]

where $\b{e}$ is the strain tensor. The relation between the strain tensor and the strain rate tensor will be covered at a different post.
Anyway, using the Einstein summation convention, the stress tensor of a Newtonian fluid can be written as:

\\[
\varepsilon_{ij} = 2\mu_{ijkl} E_{kl}
\\]

$\bs{\mu}$ is called the **viscosity tensor** which is a 4th-order tensor.
Since the strain rate tensor $\b{E}$ is a symmetric tensor, it has six independent elements.
Therefore, the viscosity tensor $\bs{\mu}$ has $6 \times 9 = 54$ linearly independent elements.

The intrinsic torque per unit volume on a fluid element can be expressed as:

\\[
\bs{\tau} = \bs{\varepsilon} - \bs{\varepsilon}^\top
\\]

In most cases, however, the intrinsic angular momentum of a fluid element is conserved so that there is no intrinsic torque,
resulting in a symmetric viscous stress tensor. In this case, the viscosity tensor has $6 \times 6 = 36$ linearly independent elements.

### Isotropic Newtonian Fluid

The viscosity tensor $\bs{\mu}$ is called **isotropic** if it is the same for all directions.
By isotropic tensors Kronecker delta($\delta_{ij}$) and Levi--Civita tensor($\varepsilon_{ijk}$),
the way to construct a 4th-order isotropic tensor is applying tensor product, addition, scalar multiplication and tensor contraction.
We know that the tensor product of two Levi--Civita tensors can be expressed as a sum of products of Kronecker deltas.
Therefore, the only way to construct a 4th-order isotropic tensor is by using Kronecker deltas.
Using this fact, the most general form of the viscosity tensor for an isotropic Newtonian fluid is:

\\[
\mu_{ijkl} = \alpha \delta_{ij} \delta_{kl} + \beta \delta_{ik} \delta_{jl} + \gamma \delta_{il} \delta_{jk}
\\]

where $\alpha$, $\beta$ and $\gamma$ are constants so that the viscosity tensor has only three linearly independent elements.
Assuming symmetric viscous stress tensor, we have $\beta = \gamma$ and only two independent elements remain.
Thus, the viscous stress tensor for an isotropic Newtonian fluid can be written as:

\\[
\varepsilon_{ij} = 2\alpha \delta_{ij} \tr(E) + 4\beta E_{ij}
\\]

By substituting the expression of strain rate tensor, we obtain:

\\[
\bs{\varepsilon} = 2\alpha (\div \b{v}) \b{I} + 2\beta \left( \grad \b{v} + (\grad \b{v})^\top \right)
\\]

We usually separate the viscous stress tensor into two terms where one of them is traceless.

\\[
\bs{\varepsilon} = \eta \left\[ \grad \b{v} + (\grad \b{v})^\top - \frac{2}{3} (\div \b{v}) \b{I} \right\] + \zeta (\div \b{v}) \b{I}
\\]

where $\eta$ and $\zeta$ are **coefficients of viscosity**.
Especially, $\eta$ is called the **shear viscosity** or **dynamic viscosity** and $\zeta$ is called the **bulk viscosity** or **volume viscosity**.
As we will see later, these coefficients are always positive.

## Navier--Stokes equation

By substituting the expression of viscous stress tensor into the equation of motion, we obtain the **Navier--Stokes equation**:

\\[
\pdv{(\rho \b{v})}{t} + \div \left( \rho \b{v} \otimes \b{v} + \[ p - \zeta (\div \b{v}) \] \b{I} - \eta \left\[ \grad \b{v} + (\grad \b{v})^\top - \frac{2}{3} (\div \b{v}) \b{I} \right\] \right) = \rho \b{a}
\\]

where $\b{a}$ is the acceleration due to external forces.
We can write the Navier--Stokes equation also in a convective form, simplifying the equation above using a mass continuity equation:

\\[
\rho \mdv{\b{v}} = - \grad p + \div \left\[ \eta \left\\{ \grad \b{v} + (\grad \b{v})^\top - \frac{2}{3} (\div \b{v}) \b{I} \right\\} \right\] + \grad \[ \zeta (\div \b{v}) \] + \rho \b{a}
\\]

$\eta$ and $\zeta$ are functions of pressure and temperature. In general, $p$ and $T$ are not constant throughout the fluid, so 
$\eta$ and $\zeta$ cannot be taken outside the graient operator. In most cases, however, the viscosity coefficients do not change noticeably in the fluid, i.e., 
they may be regarded as constant. If then, $\eta$ and $\zeta$ can be taken outside the gradient operator.

\\[
\rho \mdv{\b{v}} = - \grad p + \eta \laplacian \b{v} + \left( \zeta + \frac{1}{3} \eta \right) \grad (\div \b{v}) + \rho \b{a}
\\]

since $\div (\grad \b{v})^\top = \grad (\div \b{v})$.
We also often use the following induced coefficients:

\\[
\nu = \frac{\eta}{\rho}, \quad \xi = \frac{\zeta}{\rho}
\\]

where $\nu$ is called the **shear kinematic viscosity**(or simply just kinematic viscosity) and $\xi$ is called the **bulk kinematic viscosity**.
Using these, we can rewrite the equation more compactly:

\\[
\mdv{\b{v}} = - \frac{1}{\rho} \grad p + \nu \laplacian \b{v} + \left( \xi + \frac{1}{3} \nu \right) \grad (\div \b{v}) + \b{a}
\\]

In most cases of liquid flow, we assume that the fluid is incompressible, i.e., $\div \b{v} = 0$.
Then, the equation becomes much simpler:

\\[
\mdv{\b{v}} = - \frac{1}{\rho} \grad p + \nu \laplacian \b{v} + \b{a}
\\]

We must also write down the boundary conditions of the equation. There are always forces of molecular attraction
between a viscous fluid and the surface of a solid body, and these forces tend to make the fluid adhere to the surface.
Accordingly, it requires that the fluid velocity should vanish at fixed solid boundaries.

\\[
\b{v} = 0
\\]

### Equation of Motion in Curvilinear Coordinates

The Navier--Stokes equation can also be written in curvilinear coordinates.
At first, let's have a look at the equation in cylindrical coordinates.
In cylindrical coordinates, the divergence and laplacian operators are written as:

\\[
\div \b{v} = \frac{1}{r} \pdv{(r v_r)}{r} + \frac{1}{r} \pdv{v_\theta}{\theta} + \pdv{v_z}{z} \nt
\laplacian f = \frac{1}{r} \pdv{}{r} \left( r \pdv{f}{r} \right) + \frac{1}{r^2} \pdvn{2}{f}{\theta} + \pdvn{2}{f}{z}
\\]

Thus, the Navier--Stokes equation in cylindrical coordinates is:

\\[
\begin{align\*}
\rho\left(\pdv{v_r}{t}+v_r\pdv{v_r}{r}+\frac{v_\theta}{r}\pdv{v_r}{\theta}+v_z\pdv{v_r}{z}-\frac{v_\theta^2}{r}\right)
&=-\pdv{p}{r}+\mu \left(\nabla^2 v_r-\frac{v_r}{r^2}-\frac{2}{r^2}\pdv{v_\theta}{\theta}\right)+\left(\zeta+\frac{1}{3}\mu\right)\pdv{}{r}(\div\b{v})+\rho a_r \nt
\rho \left(\pdv{v_\theta}{t}+v_r\pdv{v_\theta}{r}+\frac{v_\theta}{r}\pdv{v_\theta}{\theta}+v_z\pdv{v_\theta}{z}+\frac{v_r v_\theta}{r}\right)
&=-\frac{1}{r}\pdv{p}{\theta}+\mu \left(\nabla^2 v_\theta-\frac{v_\theta}{r^2}+\frac{2}{r^2}\pdv{v_r}{\theta}\right)+\left(\zeta+\frac{1}{3}\mu\right)\frac{1}{r}\pdv{}{\theta}(\div\b{v})+\rho a_\theta \nt
\rho \left(\pdv{v_z}{t}+v_r\pdv{v_z}{r}+\frac{v_\theta}{r}\pdv{v_z}{\theta}+v_z\pdv{v_z}{z}\right)
&=-\pdv{p}{z}+\mu\nabla^2 v_z+\left(\zeta+\frac{1}{3}\mu\right)\pdv{}{z}(\div\b{v})+\rho a_z
\end{align\*}
\\]

In spherical coordinates, the divergence and laplacian operators are written as:

\\[
\div \b{v} = \frac{1}{r^2} \pdv{}{r} \left( r^2 v_r \right) + \frac{1}{r \sin \theta} \pdv{}{\theta} \left( \sin \theta v_\theta \right) + \frac{1}{r \sin \theta} \pdv{v_\phi}{\phi} \nt
\laplacian f = \frac{1}{r^2} \pdv{}{r} \left( r^2 \pdv{f}{r} \right) + \frac{1}{r^2 \sin \theta} \pdv{}{\theta} \left( \sin \theta \pdv{f}{\theta} \right) + \frac{1}{r^2 \sin^2 \theta} \pdvn{2}{f}{\phi}
\\]

Thus, the Navier--Stokes equation in spherical coordinates is:

\\[
\begin{align\*}
\rho \left(\pdv{v_r}{t}+v_r\pdv{v_r}{r}+\frac{v_\theta}{r}\pdv{v_r}{\theta}+\frac{v_\phi}{r\sin\theta}\pdv{v_r}{\phi}-\frac{v_\theta^2+v_\phi^2}{r}\right)
&=-\pdv{p}{r}+\mu \left(\nabla^2 v_r-\frac{2v_r}{r^2}-\frac{2}{r^2}\!\left(\pdv{v_\theta}{\theta}+\cot\theta\,v_\theta+\frac{1}{\sin\theta}\pdv{v_\phi}{\phi}\right)\right)+\left(\zeta+\frac{1}{3}\mu\right)\pdv{}{r}(\div\b{v})+\rho a_r \nt
\rho \left(\pdv{v_\theta}{t}+v_r\pdv{v_\theta}{r}+\frac{v_\theta}{r}\pdv{v_\theta}{\theta}+\frac{v_\phi}{r\sin\theta}\pdv{v_\theta}{\phi}+\frac{v_r v_\theta-v_\phi^2\cot\theta}{r}\right)
&=-\frac{1}{r}\pdv{p}{\theta}+\mu \left(\nabla^2 v_\theta+\frac{2}{r^2}\pdv{v_r}{\theta}-\frac{v_\theta}{r^2\sin^2\theta}\right)+\left(\zeta+\frac{1}{3}\mu\right)\frac{1}{r}\pdv{}{\theta}(\div\b{v})+\rho a_\theta \nt
\rho \left(\pdv{v_\phi}{t}+v_r\pdv{v_\phi}{r}+\frac{v_\theta}{r}\pdv{v_\phi}{\theta}+\frac{v_\phi}{r\sin\theta}\pdv{v_\phi}{\phi}+\frac{v_r v_\phi+v_\theta v_\phi\cot\theta}{r}\right)
&=-\frac{1}{r\sin\theta}\pdv{p}{\phi}+\mu \left(\nabla^2 v_\phi+\frac{2}{r^2\sin\theta}\pdv{v_r}{\phi}-\frac{v_\phi}{r^2\sin^2\theta}\right)+\left(\zeta+\frac{1}{3}\mu\right)\frac{1}{r\sin\theta}\pdv{}{\phi}(\div\b{v})+\rho a_\phi \nt
\end{align\*}
\\]