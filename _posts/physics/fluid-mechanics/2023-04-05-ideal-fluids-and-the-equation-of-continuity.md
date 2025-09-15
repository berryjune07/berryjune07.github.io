---
layout: post
title: "Ideal Fluids and the Equation of Continuity"
subtitle: "fl1.2"
classification: "Fluid Mechanics 1.2"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Ideal Fluids

In fluid mechanics, an **ideal fluid** is a fluid that can be completely characterized by its density and pressure, without considering other factors such as viscosity or thermal conductivity.
It is a theoretical concept that simplifies the analysis of fluid behavior by assuming certain idealized properties:
1. **Non-viscosity**: It has no internal friction, meaning it does not resist shear stress.
2. **Non-conductivity**: It does not conduct heat, meaning there is no heat transfer within the fluid.

To summarize, an ideal fluid is inviscid and adiabatic fluid.
In reality, all fluids have some viscosity and thermal conductivity, but the ideal fluid model is useful for understanding the basic principles of fluid dynamics and for solving certain types of problems.

## Equation of Continuity

### Mass

Let's substitute $\b{f} = \rho$ into the [Reynolds Transport Theorem](introduction-to-fluid-mechanics.html#reynolds-transport-theorem).
Then we have:

\\[
\mdv{} \int_{V(t)} \rho \dd{V} = \int_{V(t)} \left\[\pdv{\rho}{t} + \div(\rho \b{v})\right\] \dd{V}
\\]

The left-hand side represents the rate of change of mass within the control volume $V(t)$.
However, by the conservation of mass, the mass within a closed system cannot change.
Therefore, the left-hand side is zero. Since it holds for any arbitrary control volume, the integrand on the right-hand side must also be zero:

\\[
\pdv{\rho}{t} + \div(\rho \b{v}) = 0
\\]

This is the **equation of continuity**, which expresses the conservation of mass in fluid dynamics.
The quantity inside the divergence operator, $\rho \b{v}$, is called the **mass flux density**.

\\[
\b{j} = \rho \b{v}
\\]

Expanding the divergence term, we have:

\\[
\pdv{\rho}{t} + \b{v} \cdot \grad \rho + \rho \div \b{v} = 0
\\]

Using the material derivative, we can rewrite this as:

\\[
\mdv{\rho} + \rho \div \b{v} = 0
\\]

Not only for mass, but for any conserved quantity $\b{f}$ of the control volume,
we can obtain a similar equation by substituting $\b{f}$ into the Reynolds Transport Theorem.

\\[
\pdv{\b{f}}{t} + \div(\b{f} \otimes \b{v}) = 0 \nt
\mdv{\b{f}} + \b{f} \div \b{v} = 0
\\]

### Entropy

For an ideal fluid, we can also consider the conservation of entropy, since it is adiabatic.
Denoting $s$ as the entropy per unit mass, we can substitute $\b{f} = \rho s$ into the Reynolds Transport Theorem.
Then we similarly obtain:

\\[
\pdv{(\rho s)}{t} + \div(\rho s \b{v}) = 0 \nt
\mdv{(\rho s)} + \rho s \div \b{v} = 0
\\]

The product $\rho s \b{v}$ is called the **entropy flux density**.
This equation can be simplified using the equation of continuity for mass:

\\[
\rho \left( \pdv{s}{t} + \b{v} \cdot \grad s \right) + s \left( \pdv{\rho}{t} + \div(\rho \b{v}) \right) = 0
\\]

The second term is zero by the mass continuity equation, so we have:

\\[
\mdv{s} = 0
\\]

which just matches our expectation that the entropy of an ideal fluid is conserved along a fluid parcel's trajectory.

### Energy

For an ideal fluid, we can also consider the continuity equation for energy.
Denoting $\varepsilon$ as the internal energy per unit mass, we can substitute $\b{f} = \rho \left( \frac{1}{2} v^2 + \varepsilon \right)$ into the Reynolds Transport Theorem.

\\[
\mdv{E} = \int_{V(t)} \left\[\pdv{}{t} \left( \frac{1}{2} \rho v^2 + \rho \varepsilon \right) + \div \left( \rho \b{v} \left( \frac{1}{2} v^2 + \varepsilon \right) \right) \right\] \dd{V} \nl
\\]

The left-hand side represents the power input to the control volume $V(t)$.

\\[
\begin{align\*}
\mdv{E} &= \int_{\partial V(t)} \b{v} \cdot \dd{\b{F}} + \int_{V(t)} \b{v} \cdot \dd{\b{F}} \nl
&= \int_{\partial V(t)} \b{v} \cdot (-p \dd{\b{A}}) + \int_{V(t)} \b{v} \cdot \b{f} \dd{V} \nl
&= \int_{V(t)} \left\[ -\div(p \b{v}) + \b{v} \cdot \b{f} \right\] \dd{V}
\end{align\*}
\\]

where $\b{f}$ is the body force per unit volume, such as gravity.
Then we similarly obtain:

\\[
\pdv{}{t} \left( \frac{1}{2} \rho v^2 + \rho \varepsilon \right) + \div \left\[ \rho \b{v} \left( \frac{1}{2} v^2 + \varepsilon \right) + p\b{v} \right\] = \b{v} \cdot \b{f}
\\]

Substituting $w = \varepsilon + \frac{p}{\rho}$, the enthalpy per unit mass, we have:

\\[
\pdv{}{t} \left( \frac{1}{2} \rho v^2 + \rho \varepsilon \right) + \div \left\[ \rho \b{v} \left( \frac{1}{2} v^2 + w \right) \right\] = \b{v} \cdot \b{f}
\\]

Hence, we see that the expression

\\[
\rho \b{v} \left( \frac{1}{2} v^2 + w \right)
\\]

must be called the **energy flux density** of an ideal fluid.
And by using the mass continuity equation, we can simplify this to:

\\[
\rho \mdv{} \left( \frac{1}{2} v^2 + \varepsilon \right) = - \div (p \b{v}) + \b{v} \cdot \b{f}
\\]

### Momentum

Finally, we can consider the continuity equation for momentum.
Substituting $\b{f} = \rho \b{v}$ into the Reynolds Transport Theorem, we have:

\\[
\mdv{\b{P}} = \int_{V(t)} \left\[\pdv{(\rho \b{v})}{t} + \div(\rho \b{v} \otimes \b{v})\right\] \dd{V}
\\]

The left-hand side represents the net force acting on the control volume $V(t)$.

\\[
\begin{align\*}
\mdv{\b{P}} &= \int_{\partial V(t)} p (-\dd{\b{A}}) + \int_{V(t)} \dd{\b{F}} \nl
&= \int_{V(t)} \left( -\grad p + \b{f} \right) \dd{V}
\end{align\*}
\\]

Then we similarly obtain:

\\[
\pdv{(\rho \b{v})}{t} + \div(\rho \b{v} \otimes \b{v}) = -\grad p + \b{f} \nt
\mdv{(\rho \b{v})} + \rho \b{v} \div \b{v} = -\grad p + \b{f}
\\]

We can also write this as:

\\[
\pdv{(\rho \b{v})}{t} + \div (p \b{I} + \rho \b{v} \otimes \b{v}) = \b{f}
\\]

where $\b{I}$ is the identity tensor.
Hence, we see that the expression

\\[
\b{\Pi} = p \b{I} + \rho \b{v} \otimes \b{v}
\\]

must be called the **momentum flux density tensor** of an ideal fluid.
This tensor is clearly symmetric.
And by using the mass continuity equation, we can simplify this to:

\\[
\rho \mdv{\b{v}} = -\grad p + \b{f}
\\]