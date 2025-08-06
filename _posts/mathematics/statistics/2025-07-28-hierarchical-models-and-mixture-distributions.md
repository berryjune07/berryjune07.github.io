---
layout: post
title: "Hierarchical Models and Mixture Distributions"
subtitle: "stat4.4"
classification: "Statistics 4.4"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Mixture Distributions

A random variable $X$ is said to have a **mixture distribution** if the distribution of $X$ depends on a quantity that is itself a random variable.

### Example

Let $X\|Y \sim \mathrm{B}(Y, p)$ and $Y \sim \mathrm{Poisson}(\lambda)$.
This is called a **hierarchical model**. By summing over the possible values of $Y$, we can find the marginal distribution of $X$.
Omitting the details, we can show that $X\sim \mathrm{Poisson}(\lambda p)$.

The level of hierarchy can be extended to more than two levels.
For example, let $X\|Y \sim \mathrm{B}(Y, p)$, $Y\|Z \sim \mathrm{Poisson}(Z)$, and $Z \sim \mathrm{Gamma}(\alpha, \beta)$.

### Properties

If $X$ an $Y$ are any two random variables, then

\\[
\mathrm{E}[X] = \mathrm{E}[\mathrm{E}[X\|Y]]
\\]

provided that the expectations exist. It is known as the **law of total expectation**.
We also have

\\[
\mathrm{Var}[X] = \mathrm{E}[\mathrm{Var}[X\|Y]] + \mathrm{Var}[\mathrm{E}[X\|Y]]
\\]

This is known as the **law of total variance**. These properties are useful for calculating expectations and variances in hierarchical models.
We're omitting the proofs here.