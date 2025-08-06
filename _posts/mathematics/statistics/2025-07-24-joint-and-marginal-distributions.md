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

or also noted as:

\\[
\sum_{\mathbf{x}} f_{\mathbf{X}}(\mathbf{x}) = 1
\\]

where $\mathbf{X} = (X_1, \ldots, X_n)$ and $\mathbf{x} = (x_1, \ldots, x_n)$. For random variables $X_1, \ldots, X_n$, the joint cumulative distribution function (CDF) is defined as:

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

or also noted as:

\\[
\int_{\mathbb{R}^n} f_{\mathbf{X}}(\mathbf{x}) \, \dd{\mathbf{x}} = 1
\\]

### Expected Value

The expected value of a function $g$ of the multidimensional random variable $\mathbf{X}$ is defined as:

\\[
\mathrm{E}\[g(\mathbf{X})\] = \begin{cases}
\dps \sum_{\mathbf{x}} g(\mathbf{x}) f_{\mathbf{X}}(\mathbf{x}) & ; \mathbf{X} \text{ is discrete} \nl \nl
\dps \int_{\mathbb{R}^n} g(\mathbf{x}) f_{\mathbf{X}}(\mathbf{x}) \, \dd{\mathbf{x}} & ; \mathbf{X} \text{ is continuous}
\end{cases}
\\]

Here, the function $g$ can be any function; mapping $\mathbf{X}$ to a real number, a vector, or any other type of value.

## Marginal Distribution

The **marginal distribution** of a random variable is the distribution of that variable alone, ignoring the others.

For discrete random variables, the marginal PMF is obtained by summing over the other variables:

\\[
f_{\mathbf{X}\_I}(x\_I) = \sum\_{\mathbf{x}\_J} f_{\mathbf{X}}(\mathbf{x})
\\]

where $\mathbf{X}_I$ is the tuple of random variable of interest and $\mathbf{X}_J$ are the other random variables.
It means that $J = \set{1, \ldots, n} \setminus I$ is the set of indices of the other random variables.
For continuous random variables, the marginal PDF is obtained by integrating over the other variables:

\\[
f_{\mathbf{X}_I}(x_I) = \int_{\mathbb{R}^{n - |I|}} f_{\mathbf{X}}(\mathbf{x}) \, \dd{\mathbf{x}_J}
\\]

where $\mathbf{X}_I$ is the tuple of random variable of interest and $\mathbf{X}_J$ are the other random variables.

## Multinomial Distribution

The **multinomial distribution** is a generalization of the binomial distribution for multiple categories.
It describes the probabilities of counts for each category in a fixed number of trials.
Let $n$ and $m$ be positive integers, and let $p_1, \ldots, p_n$ be the probabilities of each category such that $\sum_{i=1}^n p_i = 1$.
Then the random vector $(X_1, \ldots, X_n)$ follows a multinomial distribution with parameters $m$ and $(p_1, \ldots, p_n)$ if the joint PMF is given by:

\\[
f(x_1, \ldots, x_n) = \frac{m!}{x_1! \cdots x_n!} p_1^{x_1} \cdots p_n^{x_n} = m!\prod_{i=1}^n \frac{p_i^{x_i}}{x_i!}
\\]

where $x_i$ is the count of category $i$ and $\sum_{i=1}^n x_i = m$.
A generalization of the binomial theorem is the multinomial theorem, which states that:

\\[
\left( \sum_{i=1}^n p_i \right)^m = \sum_{ \substack{\sum_{i=1}^n x_i = m \nl\nl x_i \geq 0} } \binom{m}{x_1, \cdots, x_n} \prod_{i=1}^n p_i^{x_i}
\\]

where $\binom{m}{x_1, \cdots, x_n} = \frac{m!}{x_1! \cdots x_n!}$ is the multinomial coefficient.