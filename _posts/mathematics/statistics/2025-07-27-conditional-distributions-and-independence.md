---
layout: post
title: "Conditional Distributions and Independence"
subtitle: "stat4.2"
classification: "Statistics 4.2"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Conditional Distribution

The **conditional distribution** of a random variable given another random variable describes the distribution of the first variable when the second variable is fixed at a certain value.
Let $(X, Y)$ be a bivariate random variable with joint distribution $f_{X,Y}(x,y)$ and marginal distributions $f_X(x)$ and $f_Y(y)$.
For any $y$ in the support of $Y$, the conditional distribution of $X$ given $Y = y$ is defined as:

\\[
f_{X\|Y}(x\|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}
\\]

This is the conditional probability mass function (PMF) for discrete random variables or the conditional probability density function (PDF) for continuous random variables.

For discrete random variables:
\\[
\sum_{x} f_{X\|Y}(x\|y) = 1
\\]
For continuous random variables:
\\[
\int_{-\infty}^{\infty} f_{X\|Y}(x\|y) \, \dd{x} = 1
\\]

## Independence

Two random variables $X$ and $Y$ are said to be **independent** if the occurrence of one does not affect the distribution of the other.
This means that the joint distribution can be expressed as the product of the marginal distributions:

\\[
f_{X,Y}(x,y) = f_X(x) f_Y(y)
\\]

If $X$ and $Y$ are independent, then the conditional distribution is equal to the marginal distribution:
* $f_{X\|Y}(x\|y) = f_X(x)$
* $f_{Y\|X}(y\|x) = f_Y(y)$

## Properties

If $X$ and $Y$ are independent, then:
- $P(X\in A, Y \in B) = P(X \in A) P(Y \in B)$ for any sets $A$ and $B$.
- $\mathrm{E}[g(X) h(Y)] = \mathrm{E}[g(X)] \mathrm{E}[h(Y)]$ for any functions $g$ and $h$.

If they have moment generating functions, respectively $M_X(t)$ and $M_Y(s)$, then $Z=X+Y$ has the moment generating function:
\\[
M_Z(t) = M_X(t) M_Y(t)
\\]

Let $X_1\sim\mathcal{N}(\mu_1, \sigma_1^2)$ and $X_2\sim\mathcal{N}(\mu_2, \sigma_2^2)$ be independent normal random variables.
Recall that the moment generating function of a normal random variable $X\sim\mathcal{N}(\mu, \sigma^2)$ is given by $M_X(t) = \exp(\mu t + \sigma^2 t^2 / 2)$.
Then by the theorem above, $Z = X_1 + X_2$ is also normally distributed:

\\[
Z \sim \mathcal{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)
\\]