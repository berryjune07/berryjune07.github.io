---
layout: post
title: "Combining Functions"
subtitle: "cal1.2"
classification: "Calculus 1.2"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Basic Operations on Functions

Like numbers, functions can be combined using basic operations such as addition, subtraction, multiplication, and division.
If $f$ and $g$ are two functions, we can define new functions on their common domain $D(f) \cap D(g)$ as follows:

* **Addition**: $(f+g)(x) = f(x) + g(x)$
* **Subtraction**: $(f-g)(x) = f(x) - g(x)$
* **Multiplication**: $(fg)(x) = f(x)g(x)$
* **Division**: $(f/g)(x) = \frac{f(x)}{g(x)}$ for $g(x) \neq 0$

## Composition of Functions

The **composition** of two functions $f$ and $g$ is a new function defined by applying one function to the result of the other.
It can only be performed when the range of the first function is a subset of the domain of the second function,
i.e. $g(X) \subset D(f)$.
The composition of $f$ and $g$ is denoted by $f \circ g$ and is defined as:

\\[
f \circ g (x) = f(g(x))
\\]

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Example_for_a_composition_of_two_functions.svg/1703px-Example_for_a_composition_of_two_functions.svg.png)
{: .centered}

A diagram showing the composition of two functions
{: .figcaption}

## Shifting

The **shifting** of a function is a transformation that moves the graph of the function in the coordinate plane.
There are two types of shifts: vertical and horizontal.

* **Vertical Shift**: $y = f(x) + k$ shifts the graph in the vertical direction.
  - If $k > 0$, the graph shifts up.
  - If $k < 0$, the graph shifts down.
* **Horizontal Shift**: $y = f(x - h)$ shifts the graph in the horizontal direction.
  - If $h > 0$, the graph shifts to the right.
  - If $h < 0$, the graph shifts to the left.

Both types of shifts can also be performed simultaneously.

## Scaling and Reflection

**Scaling** is a transformation that stretches or compresses the graph of a function in the vertical or horizontal direction.
There also are two types of scaling: vertical and horizontal.

* **Vertical Scaling**: $y = kf(x)$ scales the graph vertically.
  - If $k > 1$, the graph stretches vertically.
  - If $0 < k < 1$, the graph compresses vertically.
* **Horizontal Scaling**: $y = f(kx)$ scales the graph horizontally.
  - If $k > 1$, the graph compresses horizontally.
  - If $0 < k < 1$, the graph stretches horizontally.

**Reflection** is a transformation that flips the graph of a function across a line.
* **Reflection across the x-axis**: $y = -f(x)$ reflects the graph across the x-axis.
* **Reflection across the y-axis**: $y = f(-x)$ reflects the graph across the y-axis.

We can think of the reflection as a special case of scaling, where the scaling factor is exactly $k = -1$.
Scaling for any $k<0$, can be regarded as a reflection followed by a scaling with $|k|$.