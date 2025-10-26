---
layout: post
title: "Covariance and Correlation"
subtitle: "stat4.5"
classification: "Statistics 4.5"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Covariance

**Covariance** is a measure of how much two random variables change together.
The covariance between two random variables $X$ and $Y$ is defined as:

\\[
\text{Cov}(X, Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]
\\]

### Properties of Covariance

By expanding the expectation and denoting the means as $\mu_X = \mathbb{E}[X]$ and $\mu_Y = \mathbb{E}[Y]$, we can rewrite the covariance as:

\\[
\text{Cov}(X, Y) = \mathbb{E}[XY] - \mu_X \mu_Y
\\]

Also, covariance has the following properties:

\\[
\mathrm{Var}(aX + bY) = a^2 \mathrm{Var}(X) + b^2 \mathrm{Var}(Y) + 2ab \text{Cov}(X, Y)
\\]

If $X$ and $Y$ are independent, then:

\\[
\text{Cov}(X, Y) = 0
\\]

However, be cautious: a covariance of zero does not imply independence of $X$ and $Y$.

## Correlation

**Correlation** is a standardized measure of the relationship between two random variables, defined as:

\\[
\rho_{X,Y} = \text{Corr}(X, Y) = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X) \text{Var}(Y)}}
\\]

By denoting the standard deviations as $\sigma_X = \sqrt{\text{Var}(X)}$ and $\sigma_Y = \sqrt{\text{Var}(Y)}$, we can express correlation as:

\\[
\rho_{X,Y} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}
\\]

### Properties of Correlation

If $X$ and $Y$ are independent, then:

\\[
\rho_{X,Y} = \frac{0}{\sigma_X \sigma_Y} = 0
\\]

Also, correlation has the following important property:
- $-1 \leq \rho_{X,Y} \leq 1$
- $\abs{\rho_{X,Y}} = 1$ if and only if there exists $a\neq 0$ such that $Y = aX + b$ for some constant $b$. Then, $\rho_{X,Y} = \text{sgn}\,a$.

<details markdown="1"><summary>Proof</summary>
\\[
\begin{align\*}
h(t) &:= \mathrm{E}\left[ ((X-\mu_X)t+(Y-\mu_Y))^2  \right] \nl
&= t^2 \sigma_X^2 + 2t \text{Cov}(X, Y) + \sigma_Y^2 \geq 0 \nl
\Rightarrow \;\; \text{Disc}_t h &= 4 \text{Cov}(X, Y)^2 - 4 \sigma_X^2 \sigma_Y^2 \leq 0 \nl
\therefore & -1 \leq \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} \leq 1
\end{align\*}
\\]

The equality holds if and only if the discriminant is zero, which means $h(t)$ is a perfect square. This implies that there exists a constant $a \neq 0$ such that $Y = aX + b$ for some constant $b$, leading to $\rho_{X,Y} = \text{sgn}\, a$.
</details>

## Multivariate Normal Distribution

The **multivariate normal distribution** is a generalization of the normal distribution to multiple dimensions. A random vector $\mathbf{X} = (X_1, X_2, \ldots, X_n)$ follows a multivariate normal distribution if every linear combination of its components is normally distributed.
The multivariate normal distribution is characterized by its mean vector $\bs{\mu} = (\mu_1, \mu_2, \ldots, \mu_n)$ and covariance matrix $\bs{\Sigma}$, which is a symmetric positive semi-definite matrix.

The probability density function of a multivariate normal distribution is given by:

\\[
f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^n \det \bs{\Sigma}}} \exp\left(-\frac{1}{2}(\mathbf{x} - \bs{\mu})^\top \bs{\Sigma}^{-1} (\mathbf{x} - \bs{\mu})\right)
\\]

where $\mathbf{x}$ is a vector in $\mathbb{R}^n$, $\bs{\mu}$ is the mean vector, and $\bs{\Sigma}$ is the covariance matrix: $\Sigma_{i,j} = \text{Cov}(X_i, X_j)$.
Then we write as:

\\[
\mathbf{X} \sim \mathcal{N}(\bs{\mu}, \bs{\Sigma})
\\]

Let's check an important property of the multivariate normal distribution:

\\[
X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)
\\]

where $\sigma_i^2 = \Sigma_{i,i}$ is the variance of $X_i$ and $\mu_i$ is the mean of $X_i$.