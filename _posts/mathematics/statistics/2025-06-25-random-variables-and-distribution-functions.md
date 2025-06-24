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
It is also called the **induced probability function** on $\mathscr{X}$,
and we can easily check that it satisfies the Kolmogorov axioms.
Therefore, in most cases, we simply write $P(X=x_i)$ instead of $P_X(X=x_i)$.

## Distribution Functions