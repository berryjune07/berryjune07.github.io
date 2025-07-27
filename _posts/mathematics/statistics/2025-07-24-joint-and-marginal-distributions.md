---
layout: post
title: "Joint and Marginal Distributions"
subtitle: "stat4.1"
classification: "Statistics 4.1"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Multidimensional Random Variables

A **multidimensional random variable** is a vector of random variables, each representing a different dimension or aspect of the data.
An *$n$-dimensional random variable* is a vector of $n$ random variables, or interpreted as a function from a sample space to $\mathbb{R}^n$.

## Joint Distribution

The **joint distribution** of a multidimensional random variable is the probability distribution that describes
the likelihood of different combinations of values for the random variables.

If $X_1, \ldots, X_n$ are discrete random variables, the joint probability mass function (PMF) is defined as:

\\[
f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = P(X_1 = x_1, \ldots, X_n = x_n)
\\]

It has to satisfy:
\\[
\sum_{x_1, \ldots, x_n} f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = 1
\\]

For random variables $X_1, \ldots, X_n$, the joint cumulative distribution function (CDF) is defined as:

\\[
F_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = P(X_1 \leq x_1, \ldots, X_n \leq x_n)
\\]

If $X_1, \ldots, X_n$ are continuous random variables, the joint probability density function (PDF) is defined as:

\\[
f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = \frac{\partial^n F_{X_1, \ldots, X_n}(x_1, \ldots, x_n)}{\partial x_1 \cdots \partial x_n}
\\]

It has to satisfy:
\\[
\int_{-\infty}^{\infty} \cdots \int_{-\infty}^{\infty} f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) \, \dd{x_1} \cdots \dd{x_n} = 1
\\]

## Marginal Distribution

The **marginal distribution** of a random variable is the distribution of that variable alone, ignoring the others.

For discrete random variables, the marginal PMF is obtained by summing over the other variables:

\\[
f_{X_i}(x_i) = \sum_{x_1, \ldots, x_{i-1}, x_{i+1}, \ldots, x_n} f_{X_1, \ldots, X_n}(x_1, \ldots, x_n)
\\]

For continuous random variables, the marginal PDF is obtained by integrating over the other variables:

\\[
f_{X_i}(x_i) = \int_{-\infty}^{\infty} \cdots \int_{-\infty}^{\infty} f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) \, \dd{x_1} \cdots \dd{x_{i-1}} \dd{x_{i+1}} \cdots \dd{x_n}
\\]