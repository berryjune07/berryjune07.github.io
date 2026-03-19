---
layout: post
title: "Convex Hull Algorithm"
subtitle: "convex-hull-algorithm"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

The convex hull of a shape is the smallest convex set that contains the shape.

\\[
\text{conv}(S) = \bigcap \Set{ C \subseteq \mathbb{R}^n \| S \subseteq C, C \text{ is convex} }
\\]

![Convex Hull](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/ConvexHull.svg/3840px-ConvexHull.svg.png){: width="50%"}
{:.centered}
Convex hull of a set of points
{:.figcaption}

It can be visualized as the shape formed by stretching a rubber band around the outermost points of the shape.
The convex hull is a fundamental concept in computational geometry and has applications in various fields such as computer graphics, pattern recognition, and geographic information systems.
Here, we will explore the **convex hull algorithm**, which is used to compute the convex hull of a set of finite points in the plane.
There are several algorithms to compute the convex hull, including **Graham's scan** and **Monotone chain algorithm**, which are most simple and efficient algorithms.

We will use the following notations:

\\[
\begin{align\*}
\text{CCW}(\b{p}, \b{q}, \b{r}) &= \left\[ \overrightarrow{\b{pq}} \times \overrightarrow{\b{pr}} \right\]_z \nl
&= (q_x - p_x)(r_y - p_y) - (q_y - p_y)(r_x - p_x) \nl
&= p_x q_y + q_x r_y + r_x p_y - p_y q_x - q_y r_x - r_y p_x
\end{align\*}
\\]

## Graham's Scan

