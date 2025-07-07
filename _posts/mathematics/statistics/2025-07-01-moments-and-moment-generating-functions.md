---
layout: post
title: "Moments and Moment Generating Functions"
subtitle: "stat2.3"
classification: "Statistics 2.3"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Moments

The **$n$-th moment** of a random variable $X$ is defined as the expected value of $X^n$:

\\[
\mu_n^\prime = \mathrm{E}\[X^n\]
\\]

The **$n$-th central moment** is defined as the expected value of the deviation of $X$ from its mean raised to the $n$-th power:

\\[
\mu_n = \mathrm{E}\[(X - \mu)^n\]
\\]

where $\mu=\mu_1^\prime = \mathrm{E}\[X\]$ is the first moment (mean) of $X$.

### Variance & Standard Deviation

The **variance** of a random variable $X$ is the second central moment, and often denoted as
$\mathrm{Var}(X)$, $\mathbb{V}(X)$, or $\sigma^2$. It is defined as:

\\[
\sigma^2 = \mathrm{Var}(X) = \mu_2 = \mathrm{E}\[(X - \mu)^2\]
\\]

The positive square root of the variance is called the **standard deviation**, which is usually denoted by $\sigma$.
The variance measures the spread of the random variable around its mean. There are two useful formulas for variance:

- $\mathrm{Var}(aX + b) = a^2 \mathrm{Var}(X)$
- $\mathrm{Var}(X) = \mathrm{E}\[X^2\] - \mathrm{E}\[X\]^2$

## Moment Generating Functions

The **moment generating function (MGF)** of a random variable $X$ is defined as:

\\[
M_X(t) = \mathrm{E}\[e^{tX}\]
\\]

provided that the expectation exists for $t$ in some neighborhood of $0$. More explicitly, the MGF is given by:

\\[
M_X(t) = \begin{cases}
\dps \int_{-\infty}^{\infty} e^{tx} f_X(x) \dd{x} & ; X \text{ is continuous} \nl \nl
\dps \sum_{x} e^{tx} f_X(x) & ; X \text{ is discrete}
\end{cases}
\\]

The MGF is useful because it can be used to find all moments of the random variable $X$.
If $X$ has mgf $M_X(t)$,

\\[
\mathrm{E}\[X^n\] = M_X^{(n)}(0) = \odvn{n}{}{t} M_X(t) \bigg|_{t=0}
\\]

<details markdown="1"> <summary>Proof</summary>
\\[
\begin{align\*}
\odvn{n}{}{t} M_X(t) &= \odvn{n}{}{t} \int_{-\infty}^{\infty} e^{tx} f_X(x) \dd{x} \nl
&= \int_{-\infty}^{\infty} \odvn{n}{}{t} e^{tx} f_X(x) \dd{x} \nl
&= \int_{-\infty}^{\infty} x^n e^{tx} f_X(x) \dd{x} \nl
&= \mathrm{E}\left[X^n e^{tX}\right]
\end{align\*}
\\]
</details>

The following is a useful property of the MGF, omitting the proof.

\\[
M_{aX + b}(t) = e^{bt} M_X(at)
\\]

### Unique Determination of Distribution

Since we can find out that the MGF is a **laplace transform** of the pdf, it is not always defined.
This is because the infinite sum $\sum_{n=0}^\infty \mu_n^\prime t^n/n!$ may not converge.
But once it is defined, it uniquely determines the distribution of the random variable $X$.

Let $F_X(x)$ and $F_Y(y)$ be the cdfs all of whose moments exist.
- $X,Y$ have bounded support, then $F_X(u)=F_Y(u) \iff \mu_n^\prime(X) = \mu_n^\prime(Y)$ for all $n\in\mathbb{N}_0$.
- If mgfs exists and $M_X(t) = M_Y(t)$ for all $t$ in some neighborhood of $0$, then $F_X(u)=F_Y(u)$.

### Convergence of Moment Generating Functions

Suppose $\set{X_i}\_{i\in\mathbb{N}}$ is a sequence of random variables, each with mgf $M\_{X_i}(t)$.
Furthermore, assume that

\\[
\lim_{i \to \infty} M_{X_i}(t) = M_X(t) \quad t\in\mathcal{N}(0, \epsilon)
\\]

for some $\epsilon > 0$. $\mathcal{N}(0, \epsilon)$ is a neighborhood of $0$.
Then, the mgf $M_X(t)$ uniquely determines the distribution of $X$. Specifically, there is a unique
cdf $F_X(x)$ whose mgf is $M_X(t)$. Convergence of mgf implies convergence in distribution.

\\[
\lim_{i \to \infty} F_{X_i}(x) = F_X(x)
\\]

The proof of this statement relies on the theory of Laplace transforms. We'll not cover it here.

### Example

Here we introduce an example for nonunique moments.

\\[
\begin{align\*}
f_1(x) &= \frac{1}{\sqrt{2\pi}x} e^{-(\ln x)^2/2} \quad (x \ge 0) \nl \nl
f_2(x) &= f_1(x) \[1+\sin(2\pi\ln x)\] \quad (x \ge 0)
\end{align\*}
\\]

Try to calculate the moments of $f_1$ and $f_2$, and you will find out that they are the same.

## Cumulant Generating Functions

The **cumulant generating function** of a random variable $X$ is defined as:

\\[
K(t) = \ln M_X(t) = \ln \mathrm{E}\[e^{tX}\]
\\]

### Cumulants

The **$n$-th cumulant** of a random variable $X$ is defined as the $n$-th derivative of the cumulant generating function evaluated at $t=0$:

\\[
\kappa_n = \odvn{n}{}{t} K(t) \bigg|_{t=0}
\\]

Following are the first few cumulants:
- $\kappa_1 = \mu_1^\prime$ (mean)
- $\kappa_2 = \mu_2$ (variance)
- $\kappa_3 = \mu_3$
- $\kappa_4 = \mu_4 - 3\mu_2^2$ (excess kurtosis)

## Factorial Moment Generating Functions

The **factorial moment generating function** of a random variable $X$ is defined as:

\\[
FM_X(t) = \mathrm{E}\[t^X\]
\\]

provided that the expectation exists for $t$ in some neighborhood of $0$. The factorial moment generating function is useful for discrete random variables.

### Factorial Moments

The **$n$-th factorial moment** of a random variable $X$ is defined as:

\\[
\mathrm{E}\[(X)_n\] = \mathrm{E}\left\[ \binom{X}{n} n! \right\] = \odvn{n}{}{t} FM_X(t) \bigg|_{t=1}
\\]

where $(X)_n$ is the falling factorial.

## Characteristic Functions

The **characteristic function** of a random variable $X$ is defined as:

\\[
\phi_X(t) = \mathrm{E}\[e^{itX}\] = \begin{cases}
\dps \int_{-\infty}^{\infty} e^{itx} f_X(x) \dd{x} & ; X \text{ is continuous} \nl \nl
\dps \sum_{x} e^{itx} f_X(x) & ; X \text{ is discrete}
\end{cases}
\\]

The characteristic function is the most useful generating function,
as it exists for all random variables and uniquely determines the distribution of $X$.
And this is guaranteed by the theory of Fourier transform, since the characteristic function is the Fourier transform of the pdf.

### Convergence of Characteristic Functions

Suppose $\set{X_k}\_{k\in\mathbb{N}}$ is a sequence of random variables, each with characteristic function $\phi_{X_k}(t)$.
Furthermore, assume that

\\[
\lim_{k \to \infty} \phi_{X_k}(t) = \phi_X(t) \quad t\in\mathcal{N}(0, \epsilon)
\\]

Then, for all $x$ where $F_X(x)$ is continuous, we have

\\[
\lim_{k \to \infty} F_{X_k}(x) = F_X(x)
\\]

The proof of this statement relies on the theory of Fourier transforms. We'll not cover it here.