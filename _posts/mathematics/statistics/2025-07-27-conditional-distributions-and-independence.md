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

We can generalize this to multidimensional random variables.

Let $\mathbf{X} = (X_1, \ldots, X_n)$ and $I,J$ be partitions of $\set{1, \ldots, n}$.
The conditional distribution of $\mathbf{X}_I$ given $\mathbf{X}_J = \mathbf{x}_J$ is defined as:

\\[
f_{\mathbf{X}\_I \| \mathbf{X}\_J}(\mathbf{x}\_I \| \mathbf{x}\_J) = \frac{f_{\mathbf{X}}(\mathbf{x})}{f_{\mathbf{X}\_J}(\mathbf{x}\_J)}
\\]

where $f_{\mathbf{X}}(\mathbf{x})$ is the joint distribution of $\mathbf{X}$ and $f_{\mathbf{X}_J}(\mathbf{x}_J)$ is the marginal distribution of $\mathbf{X}_J$.

## Independence

Two random variables $X$ and $Y$ are said to be **independent** if the occurrence of one does not affect the distribution of the other.
This means that the joint distribution can be expressed as the product of the marginal distributions:

\\[
f_{X,Y}(x,y) = f_X(x) f_Y(y)
\\]

If $X$ and $Y$ are independent, then the conditional distribution is equal to the marginal distribution:
* $f_{X\|Y}(x\|y) = f_X(x)$
* $f_{Y\|X}(y\|x) = f_Y(y)$

Generally, let $\mathbf{X}\_1, \ldots, \mathbf{X}\_n$ be a collection of random vectors with joint distribution $f_{\mathbf{X}\_1, \ldots, \mathbf{X}\_n}(\mathbf{x}\_1, \ldots, \mathbf{x}\_n)$.
Let $f_{\mathbf{X}\_i}(\mathbf{x}\_i)$ be the marginal distribution of $\mathbf{X}\_i$. Then $\mathbf{X}\_1, \ldots, \mathbf{X}\_n$ are called **mutually independent** if:

\\[
f_{\mathbf{X}\_1, \ldots, \mathbf{X}\_n}(\mathbf{x}\_1, \ldots, \mathbf{x}\_n) = \prod_{i=1}^n f_{\mathbf{X}\_i}(\mathbf{x}\_i)
\\]

## Properties

If $X$ and $Y$ are independent, then:
- $P(X\in A, Y \in B) = P(X \in A) P(Y \in B)$ for any sets $A$ and $B$.
- $\mathrm{E}[g(X) h(Y)] = \mathrm{E}[g(X)] \mathrm{E}[h(Y)]$ for any functions $g$ and $h$.
- $g(X)$ and $h(Y)$ are independent for any functions where $g$ is only a function of $X$ and $h$ is only a function of $Y$.

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

We can also extend these properties to the cases of general multidimensional random variables.