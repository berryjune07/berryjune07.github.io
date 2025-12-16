---
layout: post
title: "Antiderivatives and Indefinite Integrals"
subtitle: "cal3.8"
classification: "Calculus 3.8"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Antiderivatives

A function $F$ is called an **antiderivative** of $f$ on an interval $I$ if $F'(x) = f(x)$ for all $x$ in $I$.

We can easily find that the antiderivative is not unique. From the [corollary of the MVT](/mathematics/the-mean-value-theorem.html#corollary),
functions with same derivatives can differ by a constant. Thus, if $F(x)$ is an antiderivative of $f(x)$, $F(x)+C$ is also an antiderivative of $f(x)$ for an arbitrary constant $C$.
Therefore, the most general antiderivative of $f$ on $I$ is a family of functions given by:

\\[
F(x)+C
\\]

whose graphs are vertical translations of one another. Antiderivatives are usually denoted as the upper case letters of the function while the original function is usually denoted as the lower case letters.

## Indefinite Integrals

The collection of all antiderivatives of a function $f$ is called the **indefinite integral** of $f$ respect to $x$, and is denoted by:

\\[
\int f(x) \dd{x}
\\]

The symbol $\int$ is called the **integral sign**, and the function $f(x)$ is called the **integrand**.
$x$ is the **variable of integration** and $\dd{x}$ is called the **differential of $x$**.

### Properties

\\[
\begin{align\*}
& \int kf(x) \dd{x} = k\int f(x) \dd{x} \nl
& \int (f(x)+g(x)) \dd{x} = \int f(x) \dd{x} + \int g(x) \dd{x}
\end{align\*}
\\]

These linear properties simply follow from the linearity of the derivative operator.

### Examples

|         $f(x)$          | $x^n \;\; (-1\ne n \in \mathbb{Z})$ |   $\sin x$    |   $\cos x$   |  $\sec^2 x$  |  $\csc^2 x$   | $\sec x \tan x$ | $\csc x \cot x$ |
|:-----------------------:|:-----------------------------------:|:-------------:|:------------:|:------------:|:-------------:|:---------------:|:---------------:|
| $\dps \int f(x) \dd{x}$ |     $\dfrac{x^{n+1}}{n+1} + C$      | $-\cos x + C$ | $\sin x + C$ | $\tan x + C$ | $-\cot x + C$ |  $\sec x + C$   |  $-\csc x + C$  |
{:.scroll-table}