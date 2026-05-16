---
layout: post
title: "The Law of Similarity and Reynolds Number"
subtitle: "fl2.4"
classification: "Fluid Mechanics 2.4"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Dimensional Form of a Flow

Consider a steady incompressible flow past a body of fixed shape.
If two bodies have the same shape and differ only by a change of all lengths in the same ratio, we say that they are
**geometrically similar**.
Then the shape is determined by one characteristic length $l$.
Let $u$ be the velocity of the incident stream and let $\nu=\mu/\rho$ be the kinematic viscosity of the fluid.
The hydrodynamical problem is then specified, apart from the dimensionless shape, by

\\[
\nu,\qquad u,\qquad l.
\\]

Their dimensions are

\\[
[\nu]=L^2T^{-1},\qquad [u]=LT^{-1},\qquad [l]=L.
\\]

From these three quantities only one independent dimensionless quantity can be formed:

\\[
\mathrm{Re}=\frac{ul}{\nu}=\frac{\rho ul}{\mu}.
\\]

This is $\mathrm{Re}$.
It measures the ratio of the inertial term to the viscous term in the Navier--Stokes equation:

\\[
\frac{(\b{v}\cdot\grad)\b{v}}{\nu\laplacian\b{v}}
\sim
\frac{u^2/l}{\nu u/l^2}
=\frac{ul}{\nu}.
\\]

If we introduce dimensionless variables

\\[
\b{r}=l\b{r}^{\prime},\qquad
\b{v}=u\b{v}^{\prime},\qquad
p=p_0+\rho u^2 p^{\prime},
\\]

then the steady incompressible Navier--Stokes equation becomes

\\[
(\b{v}^{\prime}\cdot\grad^{\prime})\b{v}^{\prime}
=-\grad^{\prime}p^{\prime}
+\frac{1}{\mathrm{Re}}{\laplacian}^{\prime}\b{v}^{\prime},\qquad
\div^{\prime}\b{v}^{\prime}=0.
\\]

Thus the dimensionless velocity and pressure have the form

\\[
\b{v}=u\,\b{f}\left(\frac{\b{r}}{l},\mathrm{Re}\right),\qquad
p=p_0+\rho u^2 f\left(\frac{\b{r}}{l},\mathrm{Re}\right).
\\]

This is the simplest form of the **law of similarity**.
Two geometrically similar steady incompressible flows are dynamically similar if their values of $\mathrm{Re}$ are equal.

For a quantity which is not a function of position, for example the drag force $D$, the same argument gives

\\[
D=\rho u^2l^2 C_D(\mathrm{Re})
\\]

where $C_D$ is a dimensionless function of $\mathrm{Re}$.

## Buckingham Pi Theorem

The above argument is a special case of the Buckingham pi theorem.

_Theorem._
Suppose that a physical law contains $n$ dimensional quantities $q_1,\ldots,q_n$, and let the dimension matrix of these
quantities have rank $s$.
Then there exist $n-s$ independent dimensionless products

\\[
\Pi_1,\ldots,\Pi_{n-s}
\\]

such that every dimensionally homogeneous relation

\\[
F(q_1,\ldots,q_n)=0
\\]

can be written in the form

\\[
\Phi(\Pi_1,\ldots,\Pi_{n-s})=0.
\\]

Thus the number of independent dimensionless parameters is the number of dimensional quantities minus the rank of the
dimension matrix.

<details markdown="1"> <summary> Proof </summary>

Suppose that a physical relation involves non-zero quantities

\\[
q_1,\ldots,q_n
\\]

and fundamental dimensions $D_1,\ldots,D_m$.
Write the dimension of $q_j$ as

\\[
[q_j]=D_1^{a_{1j}}\cdots D_m^{a_{mj}}.
\\]

Let

\\[
A=(a_{ij})\in \mathbb{R}^{m\times n}
\\]

be the dimension matrix, and let $s=\operatorname{rank} A$.
A monomial

\\[
\Pi=q_1^{b_1}\cdots q_n^{b_n}
\\]

is dimensionless if and only if

\\[
Ab=0.
\\]

Hence the number of independent dimensionless monomials is

\\[
\dim\ker A=n-s.
\\]

Choose $s$ quantities whose dimension vectors are linearly independent.
After reordering, let these be $q_1,\ldots,q_s$, and write

\\[
A=\begin{bmatrix} B & C \end{bmatrix},
\\]

where $B$ is an invertible $s\times s$ matrix after restricting to the independent rows.
For each remaining quantity $q_{s+\alpha}$, let $c_\alpha$ be the corresponding column of $C$ and define

\\[
\beta^{(\alpha)}=-B^{-1}c_\alpha.
\\]

Then

\\[
\Pi_\alpha
=q_{s+\alpha}\prod_{i=1}^s q_i^{\beta_i^{(\alpha)}},
\qquad
\alpha=1,\ldots,n-s
\\]

is dimensionless, since its dimension vector is

\\[
c_\alpha+B\beta^{(\alpha)}=0.
\\]

It remains to show that every dimensionally homogeneous physical law can be written using only these $\Pi_\alpha$.
Changing the fundamental units multiplies the quantities by

\\[
q_j\mapsto \lambda_1^{a_{1j}}\cdots \lambda_m^{a_{mj}}q_j.
\\]

A physical law cannot depend on this arbitrary choice of units.
Therefore its truth value is constant along the orbits of this scaling action.
Because $B$ is invertible, the $s$ independent scaling parameters may be chosen so that
$q_1,\ldots,q_s$ are changed to any prescribed positive reference values.
After this normalization, the only remaining coordinates of the orbit space are precisely

\\[
\Pi_1,\ldots,\Pi_{n-s}.
\\]

Thus a dimensionally homogeneous relation

\\[
F(q_1,\ldots,q_n)=0
\\]

is equivalent to

\\[
\Phi(\Pi_1,\ldots,\Pi_{n-s})=0.
\\]

This proves the Buckingham pi theorem.

</details>

---

As an example, for the drag force on a body in a viscous incompressible fluid we may take

\\[
D,\rho,u,l,\mu.
\\]

There are five dimensional quantities and three fundamental dimensions $M,L,T$.
Hence there are two independent dimensionless groups, which may be chosen as

\\[
\frac{D}{\rho u^2l^2},\qquad
\frac{\rho ul}{\mu}.
\\]

Therefore

\\[
\frac{D}{\rho u^2l^2}=C_D(\mathrm{Re}),
\\]

which is the drag form written above.

## Other Similarity Numbers

If gravity is important, the quantities determining the flow include $g$ as well as $\nu,u,l$.
Then there are two independent dimensionless parameters.
One may take $\mathrm{Re}$ and the Froude number

\\[
\mathrm{Fr}=\frac{u}{\sqrt{gl}}
\\]

or, equivalently, $\mathrm{Fr}^2=u^2/(gl)$.
Free-surface flows are usually governed by both $\mathrm{Re}$ and $\mathrm{Fr}$; a model and the original motion are
fully similar only when both are equal.

If the motion is non-steady and has a characteristic time $\tau$, a further dimensionless quantity appears:

\\[
\mathrm{St}=\frac{l}{u\tau}.
\\]

Landau uses the reciprocal form $S=u\tau/l$.
The equality of this parameter expresses similarity of the time scale of the motion.
For externally forced oscillations, $\tau$ is the period of forcing.
For spontaneous oscillations of a given type, the dimensionless period is not arbitrary but is determined by the other
dimensionless parameters, for example

\\[
\mathrm{St}=f(\mathrm{Re}).
\\]

Other effects introduce their own similarity parameters.
For compressible flow, the Mach number

\\[
\mathrm{Ma}=\frac{u}{c}
\\]

compares the flow speed with the sound speed.
For capillary motion, the Weber number

\\[
\mathrm{We}=\frac{\rho u^2l}{\sigma}
\\]

compares inertia with surface tension.
For heat transfer in fluids, the Prandtl number

\\[
\mathrm{Pr}=\frac{\nu}{\chi}
\\]

compares momentum diffusion with thermal diffusion.
The relevant list is not universal; it is determined by the physical terms retained in the equations and boundary
conditions.

## Kinematic and Dynamic Similarity

There are several levels of similarity.

Two flows are **geometrically similar** if their boundaries and bodies are obtained from each other by one scale factor.
They are **kinematically similar** if, after the transformations

\\[
\b{r}^{\prime}=\frac{\b{r}}{l},\qquad
t^{\prime}=\frac{ut}{l},\qquad
\b{v}^{\prime}=\frac{\b{v}}{u},
\\]

the dimensionless velocity fields are the same.
Thus streamlines, pathlines, and periods correspond after rescaling.

They are **dynamically similar** if the dimensionless governing equations and dimensionless boundary conditions are the
same.
Equivalently, all independent dimensionless numbers which enter the problem have the same values.
Dynamic similarity implies the equality of all dimensionless force coefficients, pressure coefficients, and velocity
profiles.

There is also **complete similarity** in a limiting problem when a dimensionless solution tends to a finite limit
independent of a parameter, for example the inviscid limit away from boundary layers.
In contrast, **incomplete similarity** occurs when a parameter remains in the asymptotic form through powers or
logarithms.
This distinction appears repeatedly in viscous flows, since a small viscosity may disappear from the main equation but
remain essential in boundary conditions, wakes, and thin layers.
