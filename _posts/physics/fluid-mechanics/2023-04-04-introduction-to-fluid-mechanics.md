---
layout: post
title: "Introduction to Fluid Mechanics"
subtitle: "fl1.1"
classification: "Fluid Mechanics 1.1"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

**Fluid mechanics**s the branch of physics that studies the behavior of fluids and the forces acting on them.
**Fluids** are substances that can flow and take the shape of their container, such as liquids and gases.
Specifically, fluids are defined as substances that cannot resist shear stress, meaning they deform continuously under the application of a shear force.
It is also stated that their Mohr circle is a point.

Since the phenomena considered in fluid mechanics are mostly macroscopic, the fluid is treated as a continuous medium, ignoring its molecular structure.
This approach is known as the _continuum hypothesis_.
In this framework, the properties of the fluid, such as density, pressure, and velocity, are defined at every point in space and time.
This allows the use of mathematical tools such as calculus and differential equations to describe the behavior of fluids.
The mathematical description of the state of an **ideal fluid** is determined by means of 5 independent variables:
viz., 3 components of the velocity vector and of any two thermodynamic quantities. We usually choose the density and the pressure.

\\[
\rho(\b{r}, t), \quad p(\b{r}, t), \quad \b{v}(\b{r}, t)
\\]

## Eulerian and Lagrangian Descriptions

In fluid mechanics, there are two main approaches to describe the motion of fluids: the Eulerian and Lagrangian descriptions.
The **Eulerian description** focuses on specific points in space and describes how the fluid properties change at those points over time.
In contrast, the **Lagrangian description** follows individual fluid particles as they move through space and time, tracking their properties along their trajectories.
For rigid body mechanics, the Lagrangian description is more natural, as it focuses on the motion of individual particles.
However, in fluid mechanics, both descriptions are important and have their advantages and disadvantages.

## Material Derivative

In fluid mechanics, the **material derivative** (also known as the **substantial derivative** or **particle derivative**) is a mathematical operator that describes the rate of change of a fluid property (such as velocity, temperature, or concentration) as it moves with the fluid flow.
Basically, partial derivatives by time only describe the change of a property at a fixed point in space, while the material derivative accounts for both the local change and the change due to the motion of the fluid.
Suppose that the velocity field of a fluid is given by $\b{v}(\b{r}, t)$.
Since any fluid property $f(\b{r}, t)$ depends on both position and time, the total derivative with respect to time can be expressed as:

\\[
\begin{align\*}
\odv{}{t} &= \pdv{}{t} + \odv{x}{t} \pdv{}{x} + \odv{y}{t} \pdv{}{y} + \odv{z}{t} \pdv{}{z} \nl
&= \pdv{}{t} + \odv{\b{r}}{t} \cdot \nabla \nl
\end{align\*}
\\]

which is trivial by the chain rule. So if we consider a fluid particle moving with the flow, its position changes according to the velocity field,
and so we define the material derivative as:

\\[
\mdv{} = \pdv{}{t} + \b{v} \cdot \nabla
\\]

We call the region of the fluid which we are interested in the **control volume**.
The material derivative is also applicable to the control volume itself, which is moving with the fluid flow.
This is particularly useful in fluid mechanics, where we often want to analyze the behavior of a specific region of the fluid as it moves and deforms over time.

## Reynolds Transport Theorem

The **Reynolds Transport Theorem** is an n-dimensional generalization of the Leibniz integration rule.
It is mathematically expressed as:

\\[
\odv{}{t} \int_{\Omega(t)} \b{f} \dd{V} = \int_{\Omega(t)} \pdv{\b{f}}{t} \dd{V} + \int_{\partial \Omega(t)} \b{f} (\b{v} \cdot \dd{\b{A}})
\\]

where $\Omega(t)$ is a time-dependent region, $\partial \Omega(t)$ is its boundary, $\b{f}$ an any mathematical object, and $\b{v}$ the velocity of the boundary, $\dd{\b{A}}$ the outward-oriented surface element.
By the divergence theorem, we can rewrite the surface integral as a volume integral:

\\[
\odv{}{t} \int_{\Omega(t)} \b{f} \dd{V} = \int_{\Omega(t)} \left\[ \pdv{\b{f}}{t} + \div (\b{f} \otimes \b{v}) \right\] \dd{V}
\\]

where $\otimes$ is the tensor product. This theorem is particularly useful in fluid mechanics,
as it allows us to apply the arguments of classical mechanics to a control volume that is moving and deforming with the fluid flow,
and it is done just by substituting $\b{f}$ with the physical quantity we are interested in.