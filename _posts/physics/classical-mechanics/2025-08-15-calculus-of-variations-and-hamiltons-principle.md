---
layout: post
title: "Calculus of Variations and Hamilton's Principle"
subtitle: "cm1.4"
classification: "Classical Mechanics 1.4"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Calculus of Variations

**Calculus of variations** is a field of mathematical analysis that deals with maximizing or minimizing functionals, which are mappings from a set of functions to the real numbers. It is used to find the function that optimizes a given quantity, often subject to certain constraints.

### Fundamental Lemma of the Calculus of Variations

The **Fundamental Lemma of the Calculus of Variations** states that if a function $f$ is continuous on the interval $(a,b)$ satisfies:

\\[
\int_a^b f(x) h(x) \dd{x} = 0
\\]

for all compactly supported smooth functions $h$ on $(a,b)$, then $f$ must be identically zero.

<details markdown="1">
<summary>Proof</summary>
Suppose $\exists x_0 \in (a,b) : f(x_0) \neq 0$. Without loss of generality, assume $f(x_0) > 0$.
By the continuity of $f$, there exists a neighborhood around $x_0$, say $(x_0 - \delta, x_0 + \delta) \subset (a,b)$, 
where $f(x) > 0$ for all $x$ in this neighborhood.
Now, we can choose a smooth function $h$ that is positive in this neighborhood and zero elsewhere. 
For example, we can define $h$ as follows:

\\[
h(x) = \begin{cases}
\exp\left(-\frac{1}{(x - x_0)^2 - \delta^2}\right) &; \abs{x - x_0} < \delta \nl
0 &; \text{otherwise}
\end{cases}
\\]

This function $h$ is smooth and compactly supported in $(a,b)$.
Then, we have:

\\[
\int_a^b f(x) h(x) \dd{x} > 0
\\]

which contradicts the assumption. Therefore, $\forall x \in (a,b): f(x) = 0$.
</details>

### Euler--Lagrange Equation

Given a functional of the form:

\\[
J\[f\] = \int_{x_1}^{x_2} F\left(x, f(x), f^\prime(x)\right) \dd{x}
\\]

where $F$ is a smooth function of $x$, $f(x)$, and the derivative $f^\prime(x)$.
We wish to find the function $f(x)$ that makes $J[f]$ stationary (i.e., a local minimum or maximum),
subject to the boundary conditions $f(x_1) = y_1$ and $f(x_2) = y_2$,
and this can be achieved by solving the **Euler--Lagrange equation**:

\\[
\pdv{F}{f} - \odv{}{x} \left( \pdv{F}{f^\prime} \right) = 0
\\]

<details markdown="1">
<summary>Derivation</summary>
To derive the Euler--Lagrange equation, we consider a small perturbation of the function $f(x)$:

\\[
f(x) \to f(x) + \varepsilon \eta(x)
\\]

where $\varepsilon$ is a small parameter and $\eta(x)$ is an arbitrary smooth function that vanishes at the endpoints: $\eta(x_1) = \eta(x_2) = 0$.
Then define:

\\[
\begin{align\*}
\Phi(\varepsilon) &= J\[f + \varepsilon \eta\] \nl
&= \int_{x_1}^{x_2} F\left(x, f(x) + \varepsilon \eta(x), f^\prime(x) + \varepsilon \eta^\prime(x)\right) \dd{x}
\end{align\*}
\\]

At a stationary point if set $\varepsilon = 0$, its derivative with respect to $\varepsilon$ must be zero:

\\[
\begin{align\*}
\odv{\Phi}{\varepsilon} &= \int_{x_1}^{x_2} \odv{}{\varepsilon} F\left(x, f(x) + \varepsilon \eta(x), f^\prime(x) + \varepsilon \eta^\prime(x)\right) \dd{x} \nl
&= \int_{x_1}^{x_2} \left\[ \eta(x) \pdv{F}{f}(x,f(x)+\varepsilon \eta(x),f^\prime(x)+\varepsilon \eta^\prime(x)) + \eta^\prime(x) \pdv{F}{f^\prime}(x,f(x)+\varepsilon \eta(x),f^\prime(x)+\varepsilon \eta^\prime(x)) \right\] \dd{x}
\end{align\*}
\\]

\\[
\eval{\odv{\Phi}{\varepsilon}}\_{\varepsilon=0} = \int_{x_1}^{x_2} \left\[ \eta(x) \pdv{F}{f}(x,f(x),f^\prime(x)) + \eta^\prime(x) \pdv{F}{f^\prime}(x,f(x),f^\prime(x)) \right\] \dd{x} = 0
\\]

We can integrate the second term by parts, yielding:

\\[
\int_{x_1}^{x_2} \left\[ \pdv{F}{f} - \odv{}{x} \left( \pdv{F}{f^\prime} \right) \right\] \eta(x) \dd{x} + \left\[ \eta(x) \pdv{F}{f^\prime} \right\]\_{x_1}^{x_2} = 0
\\]

The boundary term vanishes because $\eta(x_1) = \eta(x_2) = 0$. Since $\eta(x)$ is arbitrary, by the Fundamental Lemma of the Calculus of Variations, we must have:

\\[
\pdv{F}{f} - \odv{}{x} \left( \pdv{F}{f^\prime} \right) = 0
\\]

This is the Euler--Lagrange equation.
</details>

### Generalization

The Euler--Lagrange equation can be generalized to functionals that depend on higher-order derivatives or multiple functions of several variables.
Consider a functional of the form:

\\[
I\[f_1, \cdots, f_p\] = \int_\Omega \mathcal{L}\left(x_1, \cdots, x_m ; f_1, \cdots, f_p ; f_{1,1}, \cdots, f_{p,m} ; \cdots ; f_{1,\underbrace{1\cdots1}\_n}, \cdots, f_{p,\underbrace{m\cdots m}_n}\right) \dd{x_1} \cdots \dd{x_m}
\\]

where $\Omega$ is a domain in $\mathbb{R}^m$ and

\\[
f_{i,\mu_1 \cdots \mu_j} = \frac{\partial^j f_i}{\partial x_{\mu_1} \cdots \partial x_{\mu_j}}
\\]

Then the Euler--Lagrange equations for this functional are given by:

\\[
\pdv{\mathcal{L}}{f_i} + \sum_{j=1}^n \sum_{1 \leq \mu_1 \leq \cdots \leq \mu_j \leq m} (-1)^j \frac{\partial^j}{\partial x_{\mu_1} \cdots \partial x_{\mu_j}} \left( \pdv{\mathcal{L}}{f_{i,\mu_1 \cdots \mu_j}} \right) = 0 \quad (i=1,\cdots,p)
\\]

or more compactly:

\\[
\sum_{j=0}^n (-1)^j \sum_{\mu\in\text{Inc}(\[j\],\[m\])} \partial^j_{\mu_1 \cdots \mu_j} \left( \pdv{\mathcal{L}}{f_{i,\mu_1 \cdots \mu_j}} \right) = 0 \quad (i=1,\cdots,p)
\\]

### $\delta$ Notation

Sometimes, it is convenient to use the $\delta$ notation to denote variations.

\\[
\delta \, \circ := \pdv{\,\circ}{\varepsilon} \dd{\varepsilon}
\\]

Here, $\delta\,\circ$ is called the variation of $\circ$.
A variation of an arbitrary function $\mathcal{L}(x, f(x), f^\prime(x))$ is given by:

\\[
\begin{align\*}
\delta \mathcal{L} &= \pdv{\mathcal{L}}{\varepsilon} \dd{\varepsilon} \nl
&= \pdv{\mathcal{L}}{f} \pdv{f}{\varepsilon} \dd{\varepsilon} + \pdv{\mathcal{L}}{f^\prime} \pdv{f^\prime}{\varepsilon} \dd{\varepsilon} \nl
&= \pdv{\mathcal{L}}{f} \delta f + \pdv{\mathcal{L}}{f^\prime} \delta f^\prime
\end{align\*}
\\]

so its slightly different from the total differential $\dd{\mathcal{L}}$. Since partial derivatives commute, we have:

\\[
\delta f^\prime = (\delta f)^\prime
\\]

Using this, we can rewrite the variation of the functional $J[f]$ as:

\\[
\begin{align\*}
\delta J &= \int_{x_1}^{x_2} \delta F \dd{x} \nl
&= \int_{x_1}^{x_2} \left\[ \pdv{F}{f} \delta f + \pdv{F}{f^\prime} \delta f^\prime \right\] \dd{x} \nl
&= \int_{x_1}^{x_2} \left\[ \pdv{F}{f} - \odv{}{x} \left( \pdv{F}{f^\prime} \right) \right\] \delta f \dd{x}
\end{align\*}
\\]

So we can obtain the Euler--Lagrange equation also by such way.

## Hamilton's Principle

A configuration of a physical system is described by a set of generalized coordinates $q_i$,
and so we call the $n$-dimensional space formed by these coordinates the **configuration space**.
**Hamilton's principle**, also known as the **principle of least action**,
states that the actual path taken by a system between two configurations at times $t_1$ and $t_2$ is the one that makes the action functional stationary.
The **action** is defined as the time integral of the Lagrangian $L$:

\\[
S\[\b{q}(t)\] = \int_{t_1}^{t_2} L\left(t, \b{q}(t), \dot{\b{q}}(t)\right) \dd{t}
\\]

It is also often denoted as $I$.
Then, the Hamilton's principle can be expressed mathematically as:

\\[
\delta S = 0
\\]

Then, by the Euler--Lagrange equation, we have:

\\[
\pdv{L}{q_i} - \odv{}{t} \left(\pdv{L}{\dot{q}_i}\right) = 0 \quad (i=1,\cdots,n)
\\]

These are exactly the Lagrange equations of motion, derived from D'Alembert's principle before.
This shows the equivalence between Hamilton's principle, D'Alembert's principle, Lagrange equations of motion, and the Newtonian mechanics.

### Systems with Holonomic Constraints

For systems with holonomic constraints, we can introduce Lagrange multipliers to incorporate the constraints into the action functional.
Suppose the system is subject to $m$ holonomic constraints of the form:

\\[
f_\alpha(\b{q},t) = 0 \quad (\alpha=1,\cdots,m)
\\]

We can modify the action integral by adding terms involving Lagrange multipliers $\lambda_\alpha(t)$:

\\[
S = \int_{t_1}^{t_2} \left( L + \sum_{\alpha=1}^m \lambda_\alpha f_\alpha \right) \dd{t}
\\]

Then, applying Hamilton's principle $\delta S = 0$ leads to:

\\[
\int_{t_1}^{t_2} \dd{t} \sum_{i=1}^n \left\[ \pdv{L}{q_i} - \odv{}{t} \left( \pdv{L}{\dot{q}\_i} \right) + \sum_{\alpha=1}^m \lambda_\alpha \pdv{f_\alpha}{q_i} \right\] \delta q_i = 0
\\]

However, since the variations $\delta q_i$ are not all independent due to the constraints,
we should choose the $\lambda_\alpha$'s so that $m$ of the equations are satisfied for arbitrary $\delta q_i$,
and then choose the variations of the $delta q_i$ in the remaining $n-m$ equations independently.
This leads to the modified equations of motion:

\\[
\pdv{L}{q_i} - \odv{}{t} \left( \pdv{L}{\dot{q}\_i} \right) + \sum_{\alpha=1}^m \lambda_\alpha \pdv{f_\alpha}{q_i} = 0 \quad (i=1,\cdots,n)
\\]

along with the constraint equations $f_\alpha(\b{q},t) = 0$.
Therefore, we have $n+m$ equations to solve for the $n$ generalized coordinates $q_i(t)$ and the $m$ Lagrange multipliers $\lambda_\alpha(t)$.
The equation can be written as:

\\[
\pdv{L}{q_i} - \odv{}{t} \left( \pdv{L}{\dot{q}_i} \right) = Q_i \quad (i=1,\cdots,n)
\\]

where $Q_i$ are the generalized forces of constraint:

\\[
Q_i = -\sum_{\alpha=1}^m \lambda_\alpha \pdv{f_\alpha}{q_i}
\\]

However, since the choice of the sign was arbitrary, we can mathematically define only the
magnitudes of the generalized forces of constraint, not their directions. We should research their directions from the physical meanings of the constraints.

### Systems with Semi-Holonomic Constraints

Non-holonomic constraints are a generalization of holonomic constraints that can be expressed in the form:

\\[
f_\alpha(\b{q}, \dot{\b{q}}, t) = 0
\\]

and these simply result to the modification of the equations of motion:

\\[
\pdv{L}{q_i} - \odv{}{t} \left( \pdv{L}{\dot{q}\_i} \right) + \sum_{\alpha=1}^m \lambda_\alpha \left\[ \pdv{f_\alpha}{q_i} - \odv{}{t} \left( \pdv{f_\alpha}{\dot{q}_i} \right) \right\] = 0 \quad (i=1,\cdots,n)
\\]

but let's know deal with the **semi-holonomic one-form constraints**:

\\[
\omega_\alpha = \sum_{k=1}^n a_{\alpha k}(\b{q},t) \dd{q_k} + a_{\alpha 0}(\b{q},t) \dd{t} = 0 \quad (\alpha=1,\cdots,m)
\\]

It would be expected that the varied paths should satisfy the constraints.
However, it has been proven no such varied paths can be constructed unless the constraints are integrable, i.e., actually holonomic.
Correct equations of motion can nonetheless be derived when varied paths are constructed by the actual motion by virtual displacements,
even if the varied paths do not satisfy the constraints.
The virtual displacements $\delta q_i$ must satisfy the constraints:

\\[
\sum_{k=1}^n a_{\alpha k} \delta q_k = 0 \quad (\alpha=1,\cdots,m)
\\]

Then let's use the Lagrange multipliers $\mu_\alpha$ as before. Following should also hold:

\\[
\int_{t_1}^{t_2} \dd{t} \sum_{\alpha=1}^m \mu_\alpha \sum_{k=1}^n a_{\alpha k} \delta q_k = 0
\\]

Combining this with the variation of the action integral, we have:

\\[
\pdv{L}{q_i} - \odv{}{t} \left( \pdv{L}{\dot{q}\_i} \right) + \sum_{\alpha=1}^m \mu_\alpha a_{\alpha i} = 0 \quad (i=1,\cdots,n)
\\]

with the constraint equations:

\\[
\sum_{k=1}^n a_{\alpha k} \dot{q}\_k + a_{\alpha 0} = 0 \quad (\alpha=1,\cdots,m)
\\]

Thus, we have $n+m$ equations to solve for the $n$ generalized coordinates $q_i(t)$ and the $m$ Lagrange multipliers $\mu_\alpha(t)$.