---
layout: post
title: "Periodic and Trigonometric Functions"
subtitle: "cal1.3"
classification: "Calculus 1.3"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Periodic Functions

A **periodic function** is a function that repeats its values at regular intervals.
The smallest positive value of $p$ such that $f(x + p) = f(x)$ for all $x$ in the domain of $f$ is called the **period** of the function. (Sometimes, the word "smallest" is omitted)
The period of a periodic function is the length of one complete cycle of the function.
Trigonometric functions are the most common examples of periodic functions.

## Trigonometric Functions

### Angle Measurement

Angles are measured in **radians**. Radians are defined as the ratio of the length of the arc subtended by the angle to the radius of the circle.

\\[
\theta = \frac{s}{r}
\\]

where $\theta$ is the angle in radians, $s$ is the length of the arc, and $r$ is the radius of the circle.
The relationship between degrees and radians is given by:

\\[
\pi \text{ rad} = 180^\circ
\\]

### Sine and Cosine Functions

The **sine** and **cosine** functions can be defined in several ways, typically using the unit circle(geometrical way) or power series(analytical way).
It is convenient to define them using the power series for latter discussions such as differentiation,
but here we will use the unit circle definition for simplicity.

The **unit circle** is a circle with a radius of 1 centered at the origin of the Cartesian coordinate system.
The coordinates of a point on the unit circle can be expressed in terms of the angle $\theta$ as follows,
and thus the sine and cosine functions are defined as:

\\[
x = \cos(\theta), \quad y = \sin(\theta)
\\]

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Unit_circle.svg/1024px-Unit_circle.svg.png)
{: .centered}

Sine and cosine functions on the unit circle
{: .figcaption}

The sine and cosine functions are periodic with a period of $2\pi$.

### The Six Basic Trigonometric Functions

The six basic trigonometric functions are defined as follows:

|           | Sine | Cosine | Tangent | Cosecant |                               Secant                               |              Cotangent               |
|:---------:|:---:|:---:|:---:|:---:|:------------------------------------------------------------------:|:------------------------------------:|
| Functions | $\sin x$ | $\cos x$ | $\tan x = \dfrac{\sin x}{\cos x}$ | $\csc x = \dfrac{1}{\sin x}$ |                    $\sec x = \dfrac{1}{\cos x}$                    |  $\cot x = \dfrac{\cos x}{\sin x}$   |
| Domain    | $\mathbb{R}$ | $\mathbb{R}$ | $\mathbb{R} \setminus \left( \mathbb{Z} + \dfrac{1}{2} \right)\pi$ | $\mathbb{R} \setminus \mathbb{Z}\pi$ | $\mathbb{R} \setminus \left( \mathbb{Z} + \dfrac{1}{2} \right)\pi$ | $\mathbb{R} \setminus \mathbb{Z}\pi$ |
| Range    | $[-1, 1]$ | $[-1, 1]$ | $\mathbb{R}$ | $\mathbb{R} \setminus (-1,1)$ | $\mathbb{R} \setminus (-1,1)$ |             $\mathbb{R}$             |
| Period   | $2\pi$ | $2\pi$ | $\pi$ | $2\pi$ | $2\pi$ |                $\pi$                 |
| Symmetry | Odd | Even | Odd | Odd | Even | Odd |

![image](https://upload.wikimedia.org/wikipedia/commons/2/27/Trigonometric_functions_derivation_animation.svg)
{: .centered}

Animation of the six basic trigonometric functions
{: .figcaption}

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Trigonometric_functions.svg/2560px-Trigonometric_functions.svg.png)
{: .centered}

Graph of the six basic trigonometric functions
{: .figcaption}

## Trigonometrical Identities

### Pythagorean Identities

\\[
\sin^2 x + \cos^2 x = 1 \nl
\sec^2 x = 1 + \tan^2 x \nl
\csc^2 x = 1 + \cot^2 x
\\]

### Angle Addition Identities

\\[
\sin(x + y) = \sin x \cos y + \cos x \sin y \nl
\cos(x + y) = \cos x \cos y - \sin x \sin y \nl
\tan(x + y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}
\\]

### The Law of Cosines

If $a,b,c$ are the lengths of the sides of a triangle opposite to angles $A,B,C$, respectively, then:

\\[
c^2 = a^2 + b^2 - 2ab \cos C \nl
a^2 = b^2 + c^2 - 2bc \cos A \nl
b^2 = c^2 + a^2 - 2ca \cos B
\\]

### Extra Properties

\\[
\abs{ \sin \theta } \leq \abs{ \theta } \leq \abs{ \tan \theta } \quad \left( \abs{ \theta } < \frac{\pi}{2} \right) \nt
0\leq 1 - \cos \theta \leq \frac{ \theta^2 }{2}
\\]

These are very easy to prove, so I will not include the proofs here.