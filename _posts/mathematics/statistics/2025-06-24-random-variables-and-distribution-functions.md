---
layout: post
title: "Random Variables and Distribution Functions"
subtitle: "stat1.4"
classification: "Statistics 1.4"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Random Variables

A **random variable**  is a function that assigns a real number to each outcome in a sample space.
$X: S \to \mathbb{R}$ is a most common notation for a random variable, where $S$ is the sample space.

Suppose we have a sample space $S = \set{s_1, s_2, \ldots, s_n}$.
Then a random variable $X$ can be defined as a function that maps each outcome $s_i$ to a real number.
\\[
X: S \to \mathbb{R}, X(S) = \mathscr{X} = \set{x_1, x_2, \ldots, x_m}
\\]
Thus, we get
\\[
P_X(X=x_i) = P(\set{s_j \in S \mid X(s_j) = x_i})
\\]
where $P_X$ is the probability measure induced by the random variable $X$.
It is also called the **(induced) probability function** on $\mathscr{X}$,
and we can easily check that it satisfies the Kolmogorov axioms.
Therefore, in most cases, we simply write $P(X=x_i)$ instead of $P_X(X=x_i)$.

## Distribution Functions

### Cumulative Distribution Function (CDF)

The **cumulative distribution function (CDF)** $F_X:\mathbb{R} \to [0,1]$ of a random variable $X$ is defined as:
\\[
F_X(x) = P(X \leq x)
\\]
F_X can be discontinuous, with jumps at points where the random variable takes specific values.
The size of a jump at any point is equal to $P(X = x)$, and every jump point has a _right-continuity_.
The function $F(x)$ is a CDF if and only if the following three conditions hold:
1. $F_X(x)$ is non-decreasing: $F_X(x_1) \leq F_X(x_2)$ for $x_1 < x_2$.
2. $\lim_{x \to -\infty} F_X(x) = 0$ and $\lim_{x \to \infty} F_X(x) = 1$.
3. $F_X(x)$ is right-continuous: $\lim_{x \searrow x_0} F_X(x) = F_X(x_0)$ for all $x$.

For example, for a probability function $P_X(X=x) = (1-p)^{x-1}p \; (0<p<1)$ for $x\in \mathbb{N}$, the CDF is
$F_X(x) = 1 - (1-p)^{\lfloor x \rfloor [x\ge0]}$.

### Continuity

A random variable $X$ is said to be **continuous** if its CDF $F_X(x)$ is continuous for all $x \in \mathbb{R}$.
A random variable is **discrete** if it is not continuous, meaning that there are points where the CDF has jumps.

### Identically Distributed Random Variables

Two random variables $X$ and $Y$ are said to be **identically distributed** if, for every set $A\in \mathscr{B}^1$,
\\[
P(X \in A) = P(Y \in A)
\\]
It means that they have the same probability distribution, even if they are defined on different sample spaces.
However, it is possible for two random variables to be identically distributed but different probability for every outcome.
This is only true for the smallest sigma algebra $\mathscr{B}^1$ on $\mathbb{R}$, which is just the intervals.
For those, we can use the CDF to check if two random variables are identically distributed:
 - $X$ and $Y$ are identically distributed.
 - $F_X(x) = F_Y(x)$ for all $x \in \mathbb{R}$.

The two conditions above are equivalent. The proof is a bit deep, so we will not cover it here.