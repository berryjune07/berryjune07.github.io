---
layout: post
title: "Space and Time & Motion of a Body"
subtitle: "eph3"
classification: "Elementary Physics 3"
categories: physics
tags: elementary-physics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Space

**Space** is the boundless three-dimensional extent in which objects and events occur and have relative position and direction.
There are three main coordinate systems used to describe space: Cartesian, cylindrical and spherical coordinates.

### Coordinate Systems

In **Cartesian coordinates**, space is described using three perpendicular axes $x$, $y$, and $z$.

![Cartesian Coordinates](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rectangular_coordinates.svg/2067px-Rectangular_coordinates.svg.png){: width="50%"}
{:.centered}
Cartesian coordinates
{:.figcaption}

In **cylindrical coordinates**, space is described using a radial distance $\rho$, an angle $\phi$, and a height $z$.

\\[
\begin{bmatrix}
x \nl y \nl z
\end{bmatrix} = \begin{bmatrix}
\rho \cos \phi \nl \rho \sin \phi \nl z
\end{bmatrix}
\\]

\\[
\begin{align\*}
\hat{\bs{\rho}} &= \cos \phi \hat{\b{x}} + \sin \phi \hat{\b{y}} \nl
\hat{\bs{\phi}} &= -\sin \phi \hat{\b{x}} + \cos \phi \hat{\b{y}} \nl
\hat{\b{z}} &= \hat{\b{z}}
\end{align\*}
\\]

![Cylindrical Coordinates](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cylindrical_Coordinates.svg/2056px-Cylindrical_Coordinates.svg.png){: width="50%"}
{:.centered}
Cylindrical coordinates
{:.figcaption}

In **spherical coordinates**, space is described using a radial distance $r$, a polar angle $\theta$, and an azimuthal angle $\phi$.

\\[
\begin{bmatrix}
x \nl y \nl z
\end{bmatrix} = \begin{bmatrix}
r \sin \theta \cos \phi \nl r \sin \theta \sin \phi \nl r \cos \theta
\end{bmatrix}
\\]

\\[
\begin{align\*}
\hat{\b{r}} &= \sin \theta \cos \phi \hat{\b{x}} + \sin \theta \sin \phi \hat{\b{y}} + \cos \theta \hat{\b{z}} \nl
\hat{\bs{\theta}} &= \cos \theta \cos \phi \hat{\b{x}} + \cos \theta \sin \phi \hat{\b{y}} - \sin \theta \hat{\b{z}} \nl
\hat{\bs{\phi}} &= -\sin \phi \hat{\b{x}} + \cos \phi \hat{\b{y}}
\end{align\*}
\\]

![Spherical Coordinates](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coordenadas_esf%C3%A9ricas_01.svg/2261px-Coordenadas_esf%C3%A9ricas_01.svg.png){: width="50%"}
{:.centered}
Spherical coordinates
{:.figcaption}

## Time

**Time** is the indefinite continued progress of existence and events that occur in apparently irreversible succession.
Time is often considered the fourth dimension in physics, alongside the three spatial dimensions.
We usually denote time as $t$ at physical equations.

## Motion

**Motion** is the phenomenon in which an object changes its position with respect to time.
Motion is mathematically described in terms of displacement, distance, velocity, acceleration, speed and
frame of reference to an observer.

### Position

**Position** is the location of an object in space at a given time. It is represented as a vector $\b{r}$ in a coordinate system.
**Displacement** is the change in position of an object.
These are vector quantities, meaning they have both magnitude and direction.

\\[
\b{s} = \b{r}_f - \b{r}_i
\\]

where $\b{r}_f$ is the final position and $\b{r}_i$ is the initial position.

### Velocity

**Velocity** is the rate of change of position with respect to time.

\\[
\b{v} = \odv{\b{r}}{t} = \dot{\b{r}}
\\]

where $\b{v}$ is the velocity vector, $\b{r}$ is the position vector, and $t$ is time.
**Speed** is the magnitude of velocity and is a scalar quantity.

\\[
v = \abs{\b{v}}
\\]

### Acceleration

**Acceleration** is the rate of change of velocity with respect to time.

\\[
\b{a} = \odv{\b{v}}{t} = \odvn{2}{\b{r}}{t} = \dot{\b{v}} = \ddot{\b{r}}
\\]

where $\b{a}$ is the acceleration vector, $\b{v}$ is the velocity vector, and $t$ is time.

## Projectile Motion

**Projectile motion** is a form of motion experienced by an object or particle that is thrown near the earth's surface and moves along a curved path under the action of gravity only (neglecting air resistance).
Projectile motion can be analyzed by breaking it down into two components: horizontal and vertical motion.

\\[
\b{a} = -g \hat{\b{z}}
\\]

where $g$ is the acceleration due to gravity and $\hat{\b{z}}$ is the unit vector in the vertical direction.

\\[
\b{v} = \b{v}_0 + \b{a} t = \b{v}_0 - g t \hat{\b{z}}
\\]

where $\b{v}_0$ is the initial velocity vector. We often set the horizontal component of the initial velocity as the $r$-axis.
If the initial velocity is at an angle $\theta$ with respect to the horizontal, then:

\\[
\b{v} = v_0 \cos\theta \hat{\b{r}} + (v_0 \sin\theta - g t) \hat{\b{z}}
\\]

where $v_0$ is the magnitude of the initial velocity.

\\[
\b{r} = \b{r}_0 + \int_0^t \b{v} \, dt = \b{r}_0 + v_0 t\cos\theta \hat{\b{r}} + \left(v_0t \sin\theta - \frac{1}{2} g t^2\right) \hat{\b{z}}
\\]

where $\b{r}_0$ is the initial position vector, and usually we set $\b{r}_0 = 0$. Then the trajectory of the projectile can be expressed as:

\\[
z = r \tan \theta - \frac{g r^2}{2 v_0^2 \cos^2 \theta}
\\]

We show that the trajectory of a projectile is a parabola. The maximum height $H$ of the projectile can be found by setting the vertical component of the velocity to zero:

\\[
H = \frac{v_0^2 \sin^2 \theta }{2g}
\\]

The whole time of flight $T$ can be found by setting the vertical position to zero:

\\[
T = \frac{2 v_0 \sin \theta}{g}
\\]

The horizontal range $R$ of the projectile can be found by substituting $T$ into the horizontal position equation:

\\[
R = v_0 \cos \theta \cdot T = \frac{v_0^2 \sin 2\theta}{g}
\\]

We can also find that the range is maximized when $\theta = 45^\circ$.

## Uniform Circular Motion

**Uniform circular motion** is the motion of an object traveling at a constant speed in a circular path.
The object moves with a constant speed but its direction changes continuously, resulting in an acceleration directed towards the center of the circle (centripetal acceleration).
Uniform circular motion is often described with polar coordinates.
If the radius of the circle is $r$ and the speed of the object is $v$,

\\[
\b{r} = r \hat{\b{r}} = r\left( \cos(\omega t) \hat{\b{x}} + \sin(\omega t) \hat{\b{y}} \right)
\\]

where $\omega$ is the angular velocity, which is related to the speed by $v = R \omega$.

\\[
\b{v} = \dot{\b{r}} = r \dot{\theta} \hat{\bs{\theta}} = r \omega \hat{\bs{\theta}} = v \left( -\sin(\omega t) \hat{\b{x}} + \cos(\omega t) \hat{\b{y}} \right)
\\]

\\[
\b{a} = \dot{\b{v}} = r\omega \left( -\dot{\theta} \hat{\b{r}} \right) = -\frac{v^2}{r} \hat{\b{r}} = -r \omega^2 \hat{\b{r}}
\\]

And this acceleration is directed towards the center of the circle, which is why it is called _centripetal acceleration_.

### General Polar Motion

**General polar motion** is a more general form of motion in polar coordinates, where the radius $r$ and the angular velocity $\omega$ can vary with time.

\\[
\b{r} = r \hat{\b{r}}
\\]

\\[
\b{v} = \dot{r} \hat{\b{r}} + r \dot{\theta} \hat{\bs{\theta}}
\\]

Then the speed is given by:

\\[
v = \sqrt{\dot{r}^2 + r^2 \dot{\theta}^2}
\\]

The acceleration is given by:

\\[
\b{a} = \left( \ddot{r} - r \dot{\theta}^2 \right) \hat{\b{r}} + \left( r \ddot{\theta} + 2 \dot{r} \dot{\theta} \right) \hat{\bs{\theta}}
\\]

where $\dot{r}$ is the radial velocity, $\ddot{r}$ is the radial acceleration, $\dot{\theta}$ is the angular velocity, and $\ddot{\theta}$ is the angular acceleration.
Here, the $\hat{\b{r}}$ component is the centripetal acceleration - which generates the radial motion,
and the $\hat{\bs{\theta}}$ component is the _tangential acceleration_ - which changes the speed of the object along the circular path.

## Frame of Reference

A **frame of reference** is a coordinate system used to measure the position and motion of objects.
It provides a perspective from which the motion of an object can be observed and described.
A frame of reference can be _inertial_ (non-accelerating) or _non-inertial_ (accelerating).

## Relative Motion

Suppose that we have two frames of reference, $S$ and $S^\prime$, where $S$ is an inertial frame and $S^\prime$ is a non-inertial frame that is accelerating with respect to $S$.
Two observers, trying to measure the same object $O$, are located at the origin of each frame and themselves are also regarded as measurable objects.
The relationship between the two frames can be expressed as:

\\[
\begin{align\*}
\b{r}\_{O\vert S^\prime} &= \b{r}\_{O\vert S} + \b{r}\_{S^\prime \vert S} \nl
\b{v}\_{O\vert S^\prime} &= \b{v}\_{O\vert S} + \b{v}\_{S^\prime \vert S} \nl
\b{a}\_{O\vert S^\prime} &= \b{a}\_{O\vert S} + \b{a}\_{S^\prime \vert S}
\end{align\*}
\\]

where $\b{x}_{A\vert B}$ is the physical quantity of object $A$ as observed from frame $B$.

![Relative Motion](https://files.mtstatic.com/site_4539/16413/0?Expires=1755010668&Signature=A8xW0o0OISE1pN7C2mi5OxuYeJlvZrS4uJhOSZp~iPmkAnqfQPbNFiWPVx~mQztI3-8abt8tJTChMasRKSEiEsBXPHy-W7GuGxcnMa6ajB8TXWfuWyYQHIn6AaU41Xp7wCxlfPbPG2~0Ghb7KMCe~yGke69fXy-URAMEytPADn0_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA){: width="50%"}
{:.centered}
Relative motion between frames of reference $A$ and $B$ observing object $P$
{:.figcaption}

Here, following properties hold:

\\[
\begin{align\*}
\b{v}\_{S^\prime \vert S} &= \dot{\b{r}}\_{S^\prime \vert S} \nl
\b{a}\_{S^\prime \vert S} &= \dot{\b{v}}\_{S^\prime \vert S} = \ddot{\b{r}}\_{S^\prime \vert S}
\end{align\*}
\\]

\\[
\begin{align\*}
\b{r}\_{S^\prime \vert S} = - \b{r}\_{S \vert S^\prime} \nl
\b{v}\_{S^\prime \vert S} = - \b{v}\_{S \vert S^\prime} \nl
\b{a}\_{S^\prime \vert S} = - \b{a}\_{S \vert S^\prime}
\end{align\*}
\\]