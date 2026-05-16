---
layout: post
title: "Energy Dissipation in an Incompressible Fluid"
subtitle: "fl2.2"
classification: "Fluid Mechanics 2.2"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Kinetic Energy Balance

Let an incompressible viscous fluid have constant density $\rho$ and shear viscosity $\mu$.
Then $\div \b{v}=0$, and the viscous part of the stress tensor is

\\[
\varepsilon_{ik}=\mu\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right).
\\]

The incompressible Navier--Stokes equation without external force can be written in index notation as

\\[
\pdv{v_i}{t}=-v_k\pdv{v_i}{x_k}-\frac{1}{\rho}\pdv{p}{x_i}
+\frac{1}{\rho}\pdv{\varepsilon_{ik}}{x_k}.
\\]

Multiplying by $\rho v_i$, we obtain the local balance of kinetic energy density:

\\[
\begin{align\*}
\pdv{}{t}\left(\frac{1}{2}\rho v^2\right)
&=-\rho v_i v_k\pdv{v_i}{x_k}-v_i\pdv{p}{x_i}
+v_i\pdv{\varepsilon_{ik}}{x_k} \nl
&=-\div\left(\frac{1}{2}\rho v^2\b{v}+p\b{v}-\b{v}\cdot\bs{\varepsilon}\right)
-\varepsilon_{ik}\pdv{v_i}{x_k}.
\end{align\*}
\\]

Here $\b{v}\cdot\bs{\varepsilon}$ denotes the vector whose $k$-th component is
$v_i\varepsilon_{ik}$.
Thus the expression

\\[
\frac{1}{2}\rho v^2\b{v}+p\b{v}-\b{v}\cdot\bs{\varepsilon}
\\]

is the kinetic energy flux density.
The first term is the transport of kinetic energy by mass motion, the second term is the pressure work flux, and the last term is the flux due to viscous momentum transfer.
The remaining term is not a divergence term and therefore represents an irreversible conversion of mechanical energy into heat.

Integrating over a volume $V$ with boundary surface $S$, we get

\\[
\odv{}{t}\int_V \frac{1}{2}\rho v^2\,dV
=-\oint_S \left(\frac{1}{2}\rho v^2\b{v}+p\b{v}-\b{v}\cdot\bs{\varepsilon}\right)\cdot d\b{f}
-\int_V \varepsilon_{ik}\pdv{v_i}{x_k}\,dV.
\\]

If the volume is the whole region of motion and either the velocity vanishes at infinity or the no-slip condition holds on a fixed solid boundary, the surface integral vanishes.
Then

\\[
\dot{E}\_{\mathrm{kin}}
=-\int_V \varepsilon_{ik}\pdv{v_i}{x_k}\,dV.
\\]

Since $\varepsilon_{ik}$ is symmetric, this may be symmetrized:

\\[
\dot{E}\_{\mathrm{kin}}
=-\frac{1}{2}\int_V \varepsilon_{ik}
\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right)dV.
\\]

Substituting the viscous stress tensor gives

\\[
\dot{E}_{\mathrm{kin}}
=-\frac{\mu}{2}\int_V
\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right)^2 dV
\\]

where summation over repeated indices is understood.
Equivalently, if

\\[
E_{ik}=\frac{1}{2}\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right)
\\]

is the strain-rate tensor, then

\\[
\dot{E}\_{\mathrm{kin}}=-2\mu\int_V E_{ik}E_{ik}\,dV.
\\]

The quantity

\\[
\Phi=\frac{\mu}{2}
\left(\pdv{v_i}{x_k}+\pdv{v_k}{x_i}\right)^2
=2\mu E_{ik}E_{ik}
\\]

is called the **dissipation function**.
It is the mechanical energy lost per unit volume and unit time.
Since the mechanical energy cannot increase by internal friction alone, we must have

\\[
\mu>0.
\\]

## Potential Flow Form

For a potential flow, let

\\[
\b{v}=\grad \phi.
\\]

Then

\\[
\pdv{v_i}{x_k}=\pdv{v_k}{x_i}.
\\]

If the fluid is also incompressible, then $\laplacian \phi=0$, hence

\\[
\laplacian v_i=\pdv{}{x_i}(\laplacian \phi)=0.
\\]

The dissipation formula becomes

\\[
\dot{E}_{\mathrm{kin}}
=-2\mu\int_V \left(\pdv{v_i}{x_k}\right)^2dV.
\\]

Using integration by parts,

\\[
\begin{align\*}
\int_V \left(\pdv{v_i}{x_k}\right)^2dV
&=\int_V \pdv{}{x_k}\left(v_i\pdv{v_i}{x_k}\right)dV
-\int_V v_i\laplacian v_i\,dV \nl
&=\oint_S v_i\pdv{v_i}{x_k}\,df_k.
\end{align\*}
\\]

Since

\\[
v_i\pdv{v_i}{x_k}
=\frac{1}{2}\pdv{}{x_k}(v^2),
\\]

we obtain the surface form

\\[
\dot{E}_{\mathrm{kin}}
=-\mu\oint_S \grad(v^2)\cdot d\b{f}
\\]

for an incompressible potential flow.
This form is useful when the outer flow is potential but the loss of energy is determined by boundary data.
