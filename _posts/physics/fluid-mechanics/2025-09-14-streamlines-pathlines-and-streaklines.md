---
layout: post
title: "Streamlines, Pathlines, and Streaklines"
subtitle: "fl1.4"
classification: "Fluid Mechanics 1.4"
categories: physics
tags: fluid-mechanics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

In fluid mechanics, understanding the motion of fluid particles is crucial. Three fundamental concepts that help describe this motion are streamlines, pathlines, and streaklines. Each of these concepts provides a different perspective on how fluid particles move and interact within a flow field.

## Streamlines

Streamlines are imaginary lines that represent the instantaneous direction of the fluid flow at a given moment in time. They are tangent to the velocity vector of the fluid at every point along the line. In steady flows, streamlines remain constant over time, while in unsteady flows, they can change.
Mathematically, streamlines $\b{r}(l)$ are defined by:

\\[
\odv{\b{r}}{l} \cross \b{v}(\b{r}(l), t) = 0
\\]

where $l$ is the parameter along the streamline, and $\b{v}$ is the velocity field.
Here $t$ is a fixed time.

## Pathlines

Pathlines trace the actual trajectory of individual fluid particles over time. They show the path that a specific fluid particle follows as it moves through the flow field.
Pathlines $\b{r}(t)$ are defined by:

\\[
\odv{\b{r}}{t} = \b{v}(\b{r}(t), t)
\\]

where $\b{r}(t)$ is the position vector of the fluid particle at time $t$.
Initial conditions are given by $\b{r}(t_0) = \b{r}_0$.

## Streaklines

Streaklines are formed by the continuous release of fluid particles from a specific point in the flow field over time. They represent the locus of all particles that have passed through a particular point.
It is easier to visualize streaklines in experiments, as they can be observed by injecting dye or smoke into the flow at a fixed point.
Streaklines $\b{r}(t,t_0)$ are defined by:

\\[
\pdv{\b{r}}{t} = \b{v}(\b{r}(t,t_0), t)
\\]

where $t_0$ is the time when the particles were released, and $t$ is the current time.
Initial conditions are given by $\b{r}(t_0, t_0) = \b{r}_0$.
For a fixed $t$ which we are observing, $t_0 \in \[t_i, t\]$ becomes a variable parameterizing the streakline where $t_i$ is the initial time when the flow started (or when the dye injection started).

![Streamlines, Pathlines, and Streaklines](https://upload.wikimedia.org/wikipedia/commons/1/13/Streaklines_and_pathlines_animation.gif)
{:.centered}
An animation showing the streamlines, pathlines, and streaklines.
The velocity field is given by $\b{v} = (1,xt)$.
Streamlines are the dashed lines, pathlines are the red lines, and streaklines are the blue lines.
{:.figcaption}