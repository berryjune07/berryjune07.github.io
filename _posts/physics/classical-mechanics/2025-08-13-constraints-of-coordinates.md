---
layout: post
title: "Constraints of Coordinates"
subtitle: "cm1.2"
classification: "Classical Mechanics 1.2"
categories: physics
tags: classical-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Constraints

A **constraint** is a condition that restricts the motion of a system.
For example, a particle constrained to move along a straight line, or a gas confined to a cylinder.
Constraints can be classified to two main types.

### Holonomic Constraints

A **holonomic constraint** is a constraint that can be expressed as an equation involving the coordinates of the system:

\\[
f(\b{r}_1, \b{r}_2, \ldots, \b{r}_n, t) = 0
\\]

where $\b{r}_i$ are the coordinates of the particles in the system.
The simplest example is a rigid body, where the distance between any two points is constant.
Holonomic constraints can be classified further into two types again.

#### Rheonomic Constraints

A **rheonomic constraint** is a holonomic constraint that the equation of the constraint explicitly depends on time.
Mechanical systems with such constraints are called **rheonomous**.

#### Scleronomic Constraints

A **scleronomic constraint** is a holonomic constraint that the equation of the constraint does not explicitly depend on time.
Mechanical systems with such constraints are called **scleronomous**.

### Non-Holonomic Constraints

A **non-holonomic constraint** is a constraint that cannot be expressed as an equation involving the coordinates of the system.
A gas confined to a cylinder is an example of a non-holonomic constraint, as the gas can move freely in the cylinder but cannot escape it,
so that the constraint is expressed in terms of inequalities rather than equations.

## Generalized Coordinates

A **generalized coordinate** system is a coordinate system that describes the configuration of a system in terms of its degrees of freedom.
A **degree of freedom** is a parameter that can be varied independently to describe the configuration of a system:
mechanical systems with $N$ particles and $M$ holonomic constraints have $3N - M$ degrees of freedom since
each particle has 3 degrees of freedom in 3D space, and each holonomic constraint reduces the degrees of freedom by 1.
By denoting the generalized coordinates as $q_1, q_2, \ldots, q_n$, where $n = 3N - M$,

\\[
\begin{align\*}
\b{r}_1 &= \b{r}_1(q_1, q_2, \ldots, q_n, t) \nl
& \;\; \vdots \nl
\b{r}_N &= \b{r}_N(q_1, q_2, \ldots, q_n, t)
\end{align\*}
\\]

The generalized coordinates can be used to describe the configuration of the system in terms of its degrees of freedom.
It doesn't have to be the Cartesian coordinates, even doesn't have to be the linear or orthogonal coordinates,
or has the dimension of the space. 

Advantage of generalized coordinates comes from the independence of the coordinates.
Formal space coordinates are independent of each other only if the system is free of constraints.
In generalized coordinates, the coordinates are independent of each other even if the system is constrained.

### Pfaffian Constraints

A **Pfaffian constraint** is a non-holonomic constraint that can be expressed as a linear combination of the differentials of the generalized coordinates:

\\[
\sum_{i=1}^{n} A_{ri} \dd{q_i} + B_r \dd{t} = 0
\\]

where $A_{ri}$ and $B_r$ are functions of the generalized coordinates and time.
Suppose that we're arguing with a holonomic system with the following constraints:

\\[
f_r(q_1, q_2, \ldots, q_n, t) = 0
\\]

Then we can differentiate the equation with respect to time:

\\[
\sum_{i=1}^{n} \pdv{f_r}{q_i} \dd{q_i} + \pdv{f_r}{t} \dd{t} = 0
\\]

And we see that the form of the equation is the same as the Pfaffian constraint form.
This means that holonomic constraints can always be expressed in Pfaffian form, but not all Pfaffian constraints are holonomic.
A Pfaffian constraint is holonomic if and only if the equation can be _integrated_ to yield a holonomic constraint.