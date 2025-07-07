---
layout: post
title: "Expected Values"
subtitle: "stat2.2"
classification: "Statistics 2.2"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Expected Value

The **expected value** of a random variable $g(X)$ is a measure of the central tendency of the distribution of $g(X)$.
It is denoted by $\mathrm{E}\[g(X)\]$, $\mathbb{E}\[g(X)\]$, $\mathrm{E}g(X)$, or just simply $\mu_{g(X)}$.
$\langle g(X) \rangle$ or $\overline{g(X)}$ are also used in some contexts, especially in physics.
It is defined as:

\\[
\mathrm{E}\[g(X)\] = \begin{cases}
\dps \int_{-\infty}^{\infty} g(x) f_X(x) \dd{x} & ; X \text{ is continuous} \nl \nl
\dps \sum_{x \in \mathscr{X}} g(x) f_X(x) & ; X \text{ is discrete}
\end{cases}
\\]

, if the integral or the sum is defined, where $f_X(x)$ is the probability density function (PDF) for continuous random variables or the probability mass function (PMF) for discrete random variables.
If $g=\mathrm{id}$, then $\mathrm{E}\[X\]$ is called the **expected value** or **mean** of $X$.

### Properties of Expected Value

The most important property of expected value is its linearity:

\\[
\mathrm{E}\[aX + bY + c\] = a \mathrm{E}\[X\] + b \mathrm{E}\[Y\] + c
\\]
where $a$, $b$, and $c$ are constants, and $X$ and $Y$ are random variables.
It is trivial by its definition, since the integral or sum are also linear operations.
Following are some other useful properties:
 - $X\le Y \implies \mathrm{E}\[X\] \leq \mathrm{E}\[Y\]$
 - $a\le X \le b \implies a \leq \mathrm{E}\[X\] \leq b$

### Minimizing Distance

The expected value can be interpreted as the point that minimizes the distance to the random variable.

\\[
\argmin_{c \in \mathbb{R}} \mathrm{E}\[(X - c)^2\] = \mathrm{E}\[X\]
\\]

<details markdown="1"> <summary>Proof</summary>
\\[
\begin{align\*}
\Expct{(X - c)^2} & = \Expct{ (X-\expct{X} + \expct{X} - c)^2 } \nl
& = \Expct{ (X-\expct{X})^2 + 2(X-\expct{X})(\expct{X} - c) + (\expct{X} - c)^2 } \nl
& = \Expct{ (X-\expct{X})^2 } + 2(\expct{X} - c)(\expct{X}-\expct{X}) + (\expct{X} - c)^2 \nl
& = \Expct{ (X-\expct{X})^2 } + (\expct{X} - c)^2
\end{align\*}
\\]
</details>