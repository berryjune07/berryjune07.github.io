---
layout: post
title: "Convergence Concepts in Statistics"
subtitle: "stat5.4"
classification: "Statistics 5.4"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Convergence in Probability

A sequence of random variables $X_n$ **converges in probability** to a random variable $X$
if for every $\epsilon > 0$,

\\[
\lim_{n \to \infty} P(|X_n - X| \geq \epsilon) = 0
\\]

or equivalently,

\\[
\lim_{n \to \infty} P(|X_n - X| < \epsilon) = 1
\\]

We denote this as

\\[
X_n \xrightarrow{p} X
\\]

The $X_n$ are typically not independent and identically distributed random variables, as in a random sample.

### Weak Law of Large Numbers (WLLN)

The **Weak Law of Large Numbers** states that the sample mean converges in probability to the population mean.
Let $X_1,\cdots$ be i.i.d. random variables with $\mathrm{E}\[X_i\] = \mu$ and $\mathrm{Var}(X_i) = \sigma^2 < \infty$.
Define the sample mean as $\bar{X}\_n = \frac{1}{n} \sum\_{i=1}^n X_i$.
Then, for any $\epsilon > 0$,

\\[
\lim_{n \to \infty} P\left(\abs{\bar{X}_n - \mu} < \epsilon \right) = 1
\\]

that is $\bar{X}\_n \xrightarrow{p} \mu$.
The property summarized by WLLN, that a sequence of the same statistic
approaches a constant as the sample size increases, is called **consistency**.

<details markdown="1"><summary>Proof</summary>
By Chebyshev's inequality,

\\[
\begin{align\*}
P\left(\abs{\bar{X}_n - \mu} \geq \epsilon\right) &= P\left( (\bar{X}_n - \mu)^2 \geq \epsilon^2 \right) \nl
& \leq \frac{\mathrm{Var}\left(\bar{X}_n\right)}{\epsilon^2} \nl
&= \frac{\sigma^2/n}{\epsilon^2}
\end{align\*}
\\]

This is equivalent to:

\\[
1 - \frac{\sigma^2}{n \epsilon^2} \leq P\left(|\bar{X}_n - \mu| < \epsilon\right) \leq 1
\\]

Taking the limit as $n \to \infty$, by the Squeeze Theorem,

\\[
\lim_{n \to \infty} P\left(|\bar{X}_n - \mu| < \epsilon\right) = 1
\\]

There are more general versions of WLLN, where we need assume onlt that the mean is finite, not the variance.
</details>

### Consistency of $S^2$ and $S$

Using Chebyshev's inequality, we have:

\\[
P(\abs{S_n^2 - \sigma^2} \geq \epsilon) \leq \frac{\mathrm{Var}(S_n^2)}{\epsilon^2}
\\]

Therefore, the condition for $S_n^2$ to be a consistent estimator of $\sigma^2$ is that:

\\[
S_n^2 \xrightarrow{p} \sigma^2 \iff \lim_{n \to \infty} \mathrm{Var}(S_n^2) = 0
\\]

Now let's have a look for $S_n$. We have the following identity:

\\[
\mathrm{E}\[S_n] = \sqrt{\mathrm{E}\[S_n^2] - \mathrm{Var}(S_n)}
\\]

Therefore, in general, $S_n$ is a biased estimator of $\sigma$.
However, if $\mathrm{Var}(S_n^2) \to 0$ as $n \to \infty$, then $\mathrm{Var}(S_n) \to 0$ as well, and $S_n$ is a consistent estimator of $\sigma$.
This is also a consequence of the properties of limit of continuous functions, since $S_n = \sqrt{S_n^2}$.

## Almost Sure Convergence

A sequence of random variables $X_n$ **converges almost surely** (a.s.) or **with probability 1** to a random variable $X$
if for every $\epsilon > 0$,

\\[
P\left( \lim_{n \to \infty} |X_n - X| < \epsilon \right) = 1
\\]

We denote this as

\\[
X_n \xrightarrow{\text{a.s.}} X
\\]

Almost sure convergence is a stronger condition than convergence in probability.

* $X_n \xrightarrow{\text{a.s.}} X \implies X_n \xrightarrow{p} X$

The following is a counterexample showing that the converse is not true.
Consider the sequence of random variables defined on the interval $[0,1]$ by:

\\[
X_n(\omega) = \mathbf{1}_{\left\[ k/2^m, (k+1)/2^m \right)}(\omega)
\\]

where $n = 2^m + k$ with $0 \le k < 2^m$ and $\omega \in [0,1]$.
Then we can find that $X_n \xrightarrow{p} 0$ but $X_n \not\xrightarrow{\text{a.s.}} 0$.


### Strong Law of Large Numbers (SLLN)

The **Strong Law of Large Numbers** states that the sample mean converges almost surely to the population mean.
Let $X_1,\cdots$ be i.i.d. random variables with $\mathrm{E}\[X_i\] = \mu$ and $\mathrm{Var}(X_i) = \sigma^2 < \infty$.
Define the sample mean as $\bar{X}\_n = \frac{1}{n} \sum\_{i=1}^n X_i$.
Then, for any $\epsilon > 0$,

\\[
P\left( \lim_{n \to \infty} \abs{\bar{X}_n - \mu} < \epsilon \right) = 1
\\]

that is $\bar{X}\_n \xrightarrow{\text{a.s.}} \mu$.
The proof is more involved than that of WLLN, and we will not present it here.

## Convergence in Distribution

A sequence of random variables $X_n$ **converges in distribution** to a random variable $X$
if for every point $x$ at which the cumulative distribution function (CDF) $F_X(x)$ is continuous,

\\[
\lim_{n \to \infty} F_{X_n}(x) = F_X(x)
\\]

We denote this as

\\[
X_n \xrightarrow{d} X
\\]

Convergence in distribution is a weaker condition than convergence in probability.

* $X_n \xrightarrow{p} X \implies X_n \xrightarrow{d} X$
* $X_n \xrightarrow{p} c \iff X_n \xrightarrow{d} c$ for a constant $c$

## Continuous Mapping Theorem

**Continuous mapping theorem** states that for a function $g$ with a set of discontinuities of measure zero,
the following holds:

\\[
X_n \xrightarrow{d} X \implies g(X_n) \xrightarrow{d} g(X) \nl
X_n \xrightarrow{p} X \implies g(X_n) \xrightarrow{p} g(X) \nl
X_n \xrightarrow{\text{a.s.}} X \implies g(X_n) \xrightarrow{\text{a.s.}} g(X)
\\]

The proof is omitted here.

## Central Limit Theorem (CLT)

The **Central Limit Theorem** states that the standardized sample mean converges in distribution to a standard normal distribution.
Let $X_1,\cdots$ be i.i.d. random variables with $\mathrm{E}\[X_i\] = \mu$ and $0 < \text{Var}(X_i) = \sigma^2 < \infty$.
Define the sample mean as $\bar{X}\_n = \frac{1}{n} \sum\_{i=1}^n X_i$. Then,

\\[
\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} \mathcal{N}(0,1)
\\]

This means that any sample mean $\bar{X}\_n$ can be approximated by a normal distribution with mean $\mu$ and variance $\sigma^2/n$ when $n$ is large,
regardless of the original distribution of $X_i$.

### Proof

We can prove CLT using characteristic functions.
The characteristic function of $X$ is defined as:

\\[
\phi_X(t) = \mathrm{E}\[\exp(itX)\]
\\]

Let $Z_i = \frac{X_i - \mu}{\sigma}$, then $\mathrm{E}\[Z_i\] = 0$ and $\mathrm{Var}(Z_i) = 1$.

\\[
\begin{align\*}
\phi_{\frac{\bar{X}\_n - \mu}{\sigma/\sqrt{n}}}(t) &= \phi_{\frac{1}{\sqrt{n}} \sum_{i=1}^n Z_i}(t) \nl
&= \prod_{i=1}^n \phi_{Z_i}\left(\frac{t}{\sqrt{n}}\right) \nl
&= \left\[ \phi_Z\left(\frac{t}{\sqrt{n}}\right) \right\]^n
\end{align\*}
\\]

Take logarithm on both sides and let $n \to \infty$. Using l'Hôpital's rule, we have:

\\[
\begin{align\*}
\lim_{n \to \infty} \ln \phi_{\frac{\bar{X}\_n - \mu}{\sigma/\sqrt{n}}}(t) &= \lim_{n \to \infty} n \ln \phi_Z\left(\frac{t}{\sqrt{n}}\right) \nl
&= \lim_{h \to 0^+} \frac{\ln \phi_Z(th)}{h^2} \nl
&= \lim_{h \to 0^+} \frac{t \phi_Z^\prime(th)}{2h \phi_Z(th)} \nl
&= \frac{t}{2} \lim_{h \to 0^+} \frac{\phi_Z^\prime(th)}{h} \nl
&= \frac{t^2}{2} \lim_{h \to 0^+} \phi_Z^{\prime\prime}(th) \nl
&= \frac{t^2}{2} i^2 \mathrm{E}\[Z^2\] \nl
&= -\frac{t^2}{2} \left( \mathrm{Var}(Z) + \mathrm{E}\[Z\]^2 \right) \nl
&= -\frac{t^2}{2}
\end{align\*}
\\]

which is valid since $\phi_Z(0) = 1$ and $\phi_Z^\prime(0) = i \mathrm{E}\[Z\] = 0$.
Exponentiating both sides, we get:

\\[
\lim_{n \to \infty} \phi_{\frac{\bar{X}\_n - \mu}{\sigma/\sqrt{n}}}(t) = \exp\left(-\frac{t^2}{2}\right)
\\]

This is the characteristic function of the standard normal distribution $\mathcal{N}(0,1)$.
By the property of characteristic functions, we conclude that:

\\[
\lim_{n \to \infty} F_{\frac{\bar{X}\_n - \mu}{\sigma/\sqrt{n}}}(x) = \Phi(x)
\\]

where $\Phi(x)$ is the CDF of $\mathcal{N}(0,1)$.
This completes the proof.

## Slutsky's Theorem

If $X_n \xrightarrow{d} X$ and $Y_n \xrightarrow{p} a$ for some constant $a$, then:

* $X_n + Y_n \xrightarrow{d} X + a$
* $X_n Y_n \xrightarrow{d} aX$

The proof is omitted here.

## Delta Method

The **Delta method** is a technique used to derive the asymptotic distribution of a function of an estimator.
Let $X_n$ be a sequence of random variables such that:

\\[
\sqrt{n}(X_n - \theta) \xrightarrow{d} \mathcal{N}(0, \sigma^2)
\\]

For a function $g$ that is differentiable and $g^\prime(\theta) \neq 0$, we have:

\\[
\sqrt{n}\left\[g(X_n) - g(\theta)\right\] \xrightarrow{d} \mathcal{N}\left(0, \sigma^2 \left\[g^\prime(\theta)\right\]^2\right)
\\]

<details markdown="1"><summary>Proof</summary>
By Taylor's theorem, we have:

\\[
g(X_n) = g(\theta) + g^\prime(\tilde{\theta}_n)(X_n - \theta)
\\]

for some $\tilde{\theta}_n$ between $X_n$ and $\theta$.
From the condition, we know that $X_n \xrightarrow{p} \theta$, yielding $\tilde{\theta}_n \xrightarrow{p} \theta$ as well.
By the continuous mapping theorem, we have $g^\prime(\tilde{\theta}_n) \xrightarrow{p} g^\prime(\theta)$.
The equation can be restated as:

\\[
\sqrt{n}\left\[g(X_n) - g(\theta)\right\] = g^\prime(\tilde{\theta}_n) \sqrt{n}(X_n - \theta)
\\]

By Slutsky's theorem, we conclude that:

\\[
\sqrt{n}\left\[g(X_n) - g(\theta)\right\] \xrightarrow{d} g^\prime(\theta) \, \mathcal{N}(0, \sigma^2) = \mathcal{N}\left(0, \sigma^2 \left\[g^\prime(\theta)\right\]^2\right)
\\]
</details>

### Second Order Delta Method

If $g^\prime(\theta) = 0$ but $g^{\prime\prime}(\theta) \neq 0$, then we similarly have:

\\[
\sqrt{n}\left\[g(X_n) - g(\theta)\right\] \xrightarrow{d} \sigma^2 \frac{g^{\prime\prime}(\theta)}{2} \chi^2_1
\\]

### Multivariate Delta Method

The multivariate version of the Delta method states that if $\b{X}_n$ is a sequence of random vectors such that:

\\[
\sqrt{n}(\b{X}_n - \bs{\theta}) \xrightarrow{d} \mathcal{N}(\b{0}, \bs{\Sigma})
\\]

Then for a function $g$ that is differentiable at $\bs{\theta}$, we have:

\\[
\sqrt{n}\left\[g(\b{X}_n) - g(\bs{\theta})\right\] \xrightarrow{d} \mathcal{N}\left(0, \grad g(\bs{\theta})^\top \cdot \bs{\Sigma} \cdot \grad g(\b{\theta})\right)
\\]