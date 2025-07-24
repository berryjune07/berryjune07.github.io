---
layout: post
title: "Common Discrete and Continuous Distributions"
subtitle: "stat3.1"
classification: "Statistics 3.1"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

- PMFs are only provided on the supports
- CDFs are defined for all real numbers, but assume that the "real" CDFs are obtained by operating the "Ramp Function"

\\[
R(x) = \min(\max(x, 0), 1) = \begin{cases}
0 & ; x < 0 \nl
x & ; 0 \le x \le 1 \nl
1 & ; x > 1
\end{cases}
\\]

## Common Discrete Distributions

### Discrete Uniform Distribution

\\[
X \sim \mathcal{U}(a, b)
\\]

The **discrete uniform distribution** has a constant PMF over its support.

| Parameters                           | $\supp f_X$ (Support)   | $f_X(x)$ (PMF) | $F_X(x)$ (CDF)                     | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis)                    | $M_X(t)$ (MGF)                                  | $\phi_X(t)$ (CF)                                     |
|:-------------------------------------|:------------------------|:---------------|:-----------------------------------|:-------------------------|:-------------------------------|:----------------------|:-----------------------------------------|:------------------------------------------------|:-----------------------------------------------------|
| $a, b \in \mathbb{Z} \nl n := b-a+1$ | $\[a,b\]\cap\mathbb{Z}$ | $\dfrac{1}{n}$ | $\dfrac{\lfloor x\rfloor -a+1}{n}$ | $\dfrac{a+b}{2}$         | $\dfrac{n^2-1}{12}$            | $0$                   | $-\dfrac{6}{5}\cdot\dfrac{n^2+1}{n^2-1}$ | $\dfrac{e^{at}}{n}\cdot\dfrac{1-e^{nt}}{1-e^t}$ | $\dfrac{e^{iat}}{n}\cdot\dfrac{1-e^{int}}{1-e^{it}}$ |
{:.scroll-table}

### Hypergeometric Distribution

\\[
X \sim \mathrm{Hypergeometric}(N, K, n)
\\]

The **hypergeometric distribution** describes the probability of drawing $x$ successes in $n$ draws from a finite population of size $N$ containing $K$ successes, without replacement.

| Parameters                          | $\supp f_X$ (Support)                       | $f_X(x)$ (PMF)                                            | $F_X(x)$ (CDF)                                                                           | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance)   | $\gamma_1$ (Skewness)                                                     | $\gamma_2$ (Kurtosis)                                                                    | $M_X(t)$ (MGF)                                                                                                           | $\phi_X(t)$ (CF)                                                                                                            |
|:------------------------------------|:--------------------------------------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------------------|:-------------------------|:---------------------------------|:--------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| $N,K,n\in\mathbb{N}_0 \nl K,n\le N$ | $\[\max(0,n+K-N),\min(K,n)\]\cap\mathbb{Z}$ | $\dps \dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$ | $\dps \sum_{k=0}^{\lfloor x \rfloor} \dfrac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$ | $\dfrac{nK}{N}$          | $\dfrac{nK(N-K)(N-n)}{N^2(N-1)}$ | $\dfrac{(N-2K)\cdot\sqrt{N-1}\cdot(N-2n)}{\sqrt{nK(N-K)(N-n)}\cdot(N-2)}$ | $\dfrac{N^2(N-1)\[N(N+1)-6K(N-K)-6n(N-n)\]+6nK(N-K)(N-n)(5N-6)}{nK(N-K)(N-n)(N-2)(N-3)}$ | $\dps \dfrac{\binom{N-K}{n}}{\binom{N}{n}} {}_2F_1\left\[ \begin{matrix} -n, -K \nl N-K-n+1 \end{matrix} ; e^t \right\]$ | $\dps \dfrac{\binom{N-K}{n}}{\binom{N}{n}} {}_2F_1\left\[ \begin{matrix} -n, -K \nl N-K-n+1 \end{matrix} ; e^{it} \right\]$ |
{:.scroll-table}

where ${}_pF_q\left[ \begin{matrix} a_1 & a_2 & \cdots & a_p \nl b_1 & b_2 & \ldots & b_q \end{matrix} ; z \right]$
is the *generalized hypergeometric function*.

### Bernoulli Distribution

\\[
X \sim \mathrm{Bernoulli}(p)
\\]

The **Bernoulli distribution** is a special case of the binomial distribution with $n=1$.
$p$ is the probability of success, and $q=1-p$ is the probability of failure.

| Parameters               | $\supp f_X$ (Support) | $f_X(x)$ (PMF) | $F_X(x)$ (CDF)                              | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)    | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF) | $\phi_X(t)$ (CF) |
|:-------------------------|:----------------------|:---------------|:--------------------------------------------|:-------------------------|:-------------------------------|:-------------------------|:----------------------|:---------------|:-----------------|
| $p\in\[0,1\] \nl q:=1-p$ | $\set{0,1}$           | $p^xq^{1-x}$   | $q\mathbf{1} _{x\ge0}+p\mathbf{1} _{x\ge1}$ | $p$                     | $pq$                           | $\dfrac{q-p}{\sqrt{pq}}$ | $\dfrac{1-6pq}{pq}$   | $pe^t + q$     | $pe^{it} + q$    |
{:.scroll-table}

### Binomial Distribution

\\[
X \sim \mathrm{B}(n, p)
\\]

The **binomial distribution** describes the number of successes in $n$ independent Bernoulli trials, each with success probability $p$.

| Parameters                                 | $\supp f_X$ (Support)   | $f_X(x)$ (PMF)                | $F_X(x)$ (CDF)                                               | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)     | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF) | $\phi_X(t)$ (CF)  |
|:-------------------------------------------|:------------------------|:------------------------------|:-------------------------------------------------------------|:-------------------------|:-------------------------------|:--------------------------|:----------------------|:---------------|:------------------|
| $n\in\mathbb{N}_0, p\in\[0,1\] \nl q:=1-p$ | $\[0,n\]\cap\mathbb{Z}$ | $\dps \binom{n}{x}p^xq^{n-x}$ | $\dps \sum_{k=0}^{\lfloor x \rfloor} \binom{n}{k}p^kq^{n-k}$ | $np$                     | $npq$                          | $\dfrac{q-p}{\sqrt{npq}}$ | $\dfrac{1-6pq}{npq}$  | $(pe^t + q)^n$ | $(pe^{it} + q)^n$ |
{:.scroll-table}

### Poisson Distribution

\\[
X \sim \mathrm{Poisson}(\lambda)
\\]

The **Poisson distribution** describes the number of events occurring in a fixed interval of time or space, given a known average rate $\lambda$.

| Parameters  | $\supp f_X$ (Support) | $f_X(x)$ (PMF)                       | $F_X(x)$ (CDF)                                                       | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)       | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)           | $\phi_X(t)$ (CF)            |
|:------------|:----------------------|:-------------------------------------|:---------------------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------------|:----------------------|:-------------------------|:----------------------------|
| $\lambda>0$ | $\mathbb{N}_0$        | $\dfrac{\lambda^x e^{-\lambda}}{x!}$ | $\dsum_{k=0}^{\lfloor x \rfloor} \dfrac{\lambda^k e^{-\lambda}}{k!}$ | $\lambda$                | $\lambda$                      | $\dfrac{1}{\sqrt{\lambda}}$ | $\dfrac{1}{\lambda}$  | $\exp\[\lambda(e^t-1)\]$ | $\exp\[\lambda(e^{it}-1)\]$ |
{:.scroll-table}

The Poisson distribution can be derived from a set of basic assumptions. For each $t\ge 0$, let $N_t$ be
an integer-valued random variable with the following properties. (Think of $N_t$ as the number of events in the interval $[0, t]$.)
1. $N_0 = 0$
   * start with no events
2. $s<t \implies N_s$ and $N_t - N_s$ are independent.
   * the number of events in disjoint intervals are independent
3. $N_s$ and $N_{t+s}-N_t$ are identically distributed.
   * the number of events depends only on the length of the interval
4. $\dps \lim_{t\to 0} \frac{P(N_t=1)}{t} = \lambda$
   * event probability is proportional to the length of the interval if the interval is small
5. $\dps \lim_{t\to 0} \frac{P(N_t>1)}{t} = 0$
   * no simultaneous events

If $N_t$ satisfies these properties, then $N_t\sim\mathrm{Poisson}(\lambda t)$.

### Negative Binomial Distribution

\\[
X \sim \mathrm{NB}(r, p)
\\]

The **negative binomial distribution** describes the number of failures before the $r$-th success in a sequence of independent Bernoulli trials, each with success probability $p$.

| Parameters                               | $\supp f_X$ (Support) | $f_X(x)$ (PMF)                  | $F_X(x)$ (CDF)                                                 | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)    | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                     | $\phi_X(t)$ (CF)                      |
|:-----------------------------------------|:----------------------|:--------------------------------|:---------------------------------------------------------------|:-------------------------|:-------------------------------|:-------------------------|:----------------------|:-----------------------------------|:--------------------------------------|
| $r\in\mathbb{N}, p\in\[0,1\] \nl q:=1-p$ | $\mathbb{N}_0$        | $\dps \binom{x+r-1}{r-1}p^rq^x$ | $\dps \sum_{k=0}^{\lfloor x \rfloor} \binom{k+r-1}{r-1}p^rq^k$ | $\dfrac{rq}{p}$          | $\dfrac{rq}{p^2}$              | $\dfrac{2-p}{\sqrt{rq}}$ | $\dfrac{6q+p^2}{rq}$  | $\left(\dfrac{p}{1-qe^t}\right)^r$ | $\left(\dfrac{p}{1-qe^{it}}\right)^r$ |
{:.scroll-table}

### Geometric Distribution

\\[
X \sim \mathrm{Geometric}(p)
\\]

The **geometric distribution** describes the number of trials until the first success in a sequence of independent Bernoulli trials, each with success probability $p$.

| Parameters              | $\supp f_X$ (Support) | $f_X(x)$ (PMF) | $F_X(x)$ (CDF)            | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)   | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)         | $\phi_X(t)$ (CF)             |
|:------------------------|:----------------------|:---------------|:--------------------------|:-------------------------|:-------------------------------|:------------------------|:----------------------|:-----------------------|:-----------------------------|
| $p\in(0,1\] \nl q:=1-p$ | $\mathbb{N}$          | $p q^{x-1}$    | $1-q^{\lfloor x \rfloor}$ | $\dfrac{1}{p}$           | $\dfrac{q}{p^2}$               | $\dfrac{2-p}{\sqrt{q}}$ | $\dfrac{6q+p^2}{q}$   | $\dfrac{pe^t}{1-qe^t}$ | $\dfrac{pe^{it}}{1-qe^{it}}$ |
{:.scroll-table}

## Common Continuous Distributions

### Continuous Uniform Distribution

\\[
X \sim \mathcal{U}_{\[a, b\]}
\\]

The **continuous uniform distribution** has a constant PDF over its support.

| Parameters | $\supp f_X$ (Support) | $f_X(x)$ (PDF)   | $F_X(x)$ (CDF)                                             | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                    | $\phi_X(t)$ (CF)                     |
|:-----------|:----------------------|:-----------------|:-----------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:----------------------------------|:-------------------------------------|
| $a<b$      | $\[a,b\]$             | $\dfrac{1}{b-a}$ | $\dfrac{x-a}{b-a}$ | $\dfrac{a+b}{2}$         | $\dfrac{(b-a)^2}{12}$          | $0$                   | $-\dfrac{6}{5}$       | $\dfrac{e^{bt} - e^{at}}{t(b-a)}$ | $\dfrac{e^{ibt} - e^{iat}}{it(b-a)}$ |
{:.scroll-table}

### Gamma Distribution

\\[
X \sim \mathrm{Gamma}(\alpha, \beta)
\\]

The **gamma distribution** is a two-parameter family of continuous probability distributions, often used to model waiting times.

| Parameters       | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                                    | $F_X(x)$ (CDF)                                                          | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness)      | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                                                 | $\phi_X(t)$ (CF)          |
|:-----------------|:----------------------|:------------------------------------------------------------------|:------------------------------------------------------------------------|:-------------------------|:-------------------------------|:---------------------------|:----------------------|:---------------------------------------------------------------|:--------------------------|
| $\alpha,\beta>0$ | $\mathbb{R}_{\ge0}$   | $\dfrac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1} e^{-x/\beta}$ | $\dfrac{1}{\Gamma(\alpha)} \gamma\left(\alpha, \dfrac{x}{\beta}\right)$ | $\alpha\beta$            | $\alpha\beta^2$                | $\dfrac{2}{\sqrt{\alpha}}$ | $\dfrac{6}{\alpha}$   | $(1-\beta t)^{-\alpha} \;\; \left( t<\dfrac{1}{\beta} \right)$ | $(1-i\beta t)^{-\alpha} $ |
{:.scroll-table}

where $\Gamma(\alpha)$ is the *Gamma function* and $\gamma(\alpha, x)$ is the *lower incomplete gamma function*.

### Chi-Squared Distribution

\\[
X \sim \chi^2(k)
\\]

The **chi-squared distribution** is a special case of the gamma distribution with $\alpha = k/2$ and $\beta = 2$.
It is also defined as the distribution of the sum of the squares of $k$ independent standard normal random variables.
We commonly use it in hypothesis testing and confidence interval estimation.

| Parameters       | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                     | $F_X(x)$ (CDF)                                                         | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                                     | $\phi_X(t)$ (CF) |
|:-----------------|:----------------------|:---------------------------------------------------|:-----------------------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:---------------------------------------------------|:-----------------|
| $k\in\mathbb{N}$ | $\mathbb{R}_+$        | $\dfrac{1}{2^{k/2}\Gamma(k/2)} x^{k/2-1} e^{-x/2}$ | $\dfrac{1}{\Gamma(k/2)} \gamma\left(\dfrac{k}{2}, \dfrac{x}{2}\right)$ | $k$                      | $2k$                           | $\sqrt{\dfrac{8}{k}}$ | $\dfrac{12}{k}$       | $(1-2t)^{-k/2} \;\; \left( t<\dfrac{1}{2} \right)$ | $(1-2it)^{-k/2}$ |
{:.scroll-table}

### Exponential Distribution

\\[
X \sim \mathrm{Exp}(\lambda)
\\]

The **exponential distribution** is a special case of the gamma distribution with $\alpha = 1$ and $\beta = 1/\lambda$.
It is often used to model the time until an event occurs, such as the time until failure of a machine or the time between arrivals in a Poisson process.

| Parameters  | $\supp f_X$ (Support) | $f_X(x)$ (PDF)           | $F_X(x)$ (CDF)     | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                                | $\phi_X(t)$ (CF)              |
|:------------|:----------------------|:-------------------------|:-------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:----------------------------------------------|:------------------------------|
| $\lambda>0$ | $\mathbb{R}_{\ge0}$   | $\lambda e^{-\lambda x}$ | $1-e^{-\lambda x}$ | $\dfrac{1}{\lambda}$     | $\dfrac{1}{\lambda^2}$         | $2$                   | $6$                   | $\dfrac{\lambda}{\lambda-t} \;\; (t<\lambda)$ | $\dfrac{\lambda}{\lambda-it}$ |
{:.scroll-table}

### Normal Distribution

\\[
X \sim \mathcal{N}(\mu, \sigma^2)
\\]

The **normal distribution** (or Gaussian distribution) is a continuous probability distribution characterized by its bell-shaped curve.
It is the most important distribution in statistics, as many statistical tests and methods assume normality.

| Parameters                      | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                                                 | $F_X(x)$ (CDF)                                                                             | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                                       | $\phi_X(t)$ (CF)                                      |
|:--------------------------------|:----------------------|:-------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:-----------------------------------------------------|:------------------------------------------------------|
| $\mu\in\mathbb{R} \nl \sigma>0$ | $\mathbb{R}$          | $\dfrac{1}{\sqrt{2\pi}\sigma} \exp\left( -\dfrac{(x-\mu)^2}{2\sigma^2}\right)$ | $\dfrac{1}{2} \left[ 1 + \mathrm{erf}\left( \dfrac{x-\mu}{\sigma\sqrt{2}} \right) \right]$ | $\mu$                    | $\sigma^2$                     | $0$                   | $0$                   | $\exp\left( \mu t + \dfrac{\sigma^2 t^2}{2} \right)$ | $\exp\left( i\mu t - \dfrac{\sigma^2 t^2}{2} \right)$ |
{:.scroll-table}

where $\mathrm{erf}(x)$ is the *error function*.

### Beta Distribution

\\[
X \sim \mathrm{Beta}(\alpha, \beta)
\\]

The **beta distribution** is a continuous probability distribution defined on the interval $\[0, 1\]$.
It is often used to model random variables that are constrained to a finite range, such as proportions or probabilities.

| Parameters       | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                             | $F_X(x)$ (CDF)                                                              | $\mathrm{E}\[X\]$ (Mean)       | $\mathrm{Var}\[X\]$ (Variance)                          | $\gamma_1$ (Skewness)                                                              | $\gamma_2$ (Kurtosis)                                                                                                    | $M_X(t)$ (MGF)                                                                  | $\phi_X(t)$ (CF)                                                                 |
|:-----------------|:----------------------|:-----------------------------------------------------------|:----------------------------------------------------------------------------|:-------------------------------|:--------------------------------------------------------|:-----------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| $\alpha,\beta>0$ | $\[0,1\]$             | $\dfrac{1}{B(\alpha, \beta)} x^{\alpha-1} (1-x)^{\beta-1}$ | $\dps \dfrac{1}{B(\alpha, \beta)} \int_0^x t^{\alpha-1} (1-t)^{\beta-1} dt$ | $\dfrac{\alpha}{\alpha+\beta}$ | $\dfrac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ | $\dfrac{2(\beta-\alpha)\sqrt{\alpha+\beta+1}}{(\alpha+\beta+2)\sqrt{\alpha\beta}}$ | $\dfrac{6\[(\alpha-\beta)^2(\alpha+\beta+1)-\alpha\beta(\alpha+\beta+2)\]}{\alpha\beta(\alpha+\beta+2)(\alpha+\beta+3)}$ | ${}_1F_1\left[ \begin{matrix} \alpha \nl \alpha+\beta \end{matrix} ; t \right]$ | ${}_1F_1\left[ \begin{matrix} \alpha \nl \alpha+\beta \end{matrix} ; it \right]$ |
{:.scroll-table}

where $B(\alpha, \beta)$ is the *Beta function*.

### Cauchy Distribution

\\[
X \sim \mathrm{Cauchy}(\mu, \gamma)
\\]

The **Cauchy distribution** is a continuous probability distribution with heavy tails.
It is often used in robust statistics and is known for its undefined mean and variance.

| Parameters                      | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                                                  | $F_X(x)$ (CDF)                                                              | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF) | $\phi_X(t)$ (CF)                             |
|:--------------------------------|:----------------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:---------------|:---------------------------------------------|
| $\mu\in\mathbb{R} \nl \gamma>0$ | $\mathbb{R}$          | $\dfrac{1}{\pi\gamma \left\[ 1+\left( \dfrac{x-\mu}{\gamma} \right)^2 \right]}$ | $\dfrac{1}{2} + \dfrac{1}{\pi} \arctan\left( \dfrac{x-\mu}{\gamma} \right)$ | undefined                | undefined                      | undefined             | undefined             | undefined      | $\exp\left( i\mu t - \gamma \abs{t} \right)$ |
{:.scroll-table}

### Log-Normal Distribution

\\[
X \sim \mathrm{LogNormal}(\mu, \sigma^2)
\\]

The **log-normal distribution** is a continuous probability distribution of a random variable whose logarithm is normally distributed.
It is often used to model stock prices, income distributions, and other positive-valued data.

| Parameters                      | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                                                         | $F_X(x)$ (CDF)                                                                                    | $\mathrm{E}\[X\]$ (Mean)                       | $\mathrm{Var}\[X\]$ (Variance)                                         | $\gamma_1$ (Skewness)                                   | $\gamma_2$ (Kurtosis)                                   | $M_X(t)$ (MGF) | $\phi_X(t)$ (CF)                                                 |
|:--------------------------------|:----------------------|:---------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|:-----------------------------------------------|:-----------------------------------------------------------------------|:--------------------------------------------------------|:--------------------------------------------------------|:---------------|:-----------------------------------------------------------------|
| $\mu\in\mathbb{R} \nl \sigma>0$ | $\mathbb{R}_+$        | $\dfrac{1}{x\sigma\sqrt{2\pi}} \exp\left( -\dfrac{(\ln x - \mu)^2}{2\sigma^2} \right)$ | $\dfrac{1}{2} \left\[ 1 + \mathrm{erf}\left( \dfrac{\ln x - \mu}{\sigma\sqrt{2}} \right) \right]$ | $\exp\left( \mu + \dfrac{\sigma^2}{2} \right)$ | $\left( \exp(\sigma^2) - 1 \right) \exp\left( 2\mu + \sigma^2 \right)$ | $\left(\exp(\sigma^2) +2\right)\sqrt{\exp(\sigma^2)-1}$ | $\exp(4\sigma^2) +2\exp(3\sigma^2)+3\exp(2\sigma^2) -6$ | undefined      | $\dps \sum_{n=0}^\infty \dfrac{(it)^n}{n!e^{n\mu+n^2\sigma^2/2}$ |
{:.scroll-table}

### Laplace Distribution

\\[
X \sim \mathrm{Laplace}(\mu, \sigma)
\\]

The **Laplace distribution** (or double exponential distribution) is a continuous probability distribution characterized by its peakedness at the mean and exponential decay in both tails.

| Parameters                      | $\supp f_X$ (Support) | $f_X(x)$ (PDF)                                                       | $F_X(x)$ (CDF)                                                                                                             | $\mathrm{E}\[X\]$ (Mean) | $\mathrm{Var}\[X\]$ (Variance) | $\gamma_1$ (Skewness) | $\gamma_2$ (Kurtosis) | $M_X(t)$ (MGF)                                                               | $\phi_X(t)$ (CF)                 |
|:--------------------------------|:----------------------|:---------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-------------------------------|:----------------------|:----------------------|:-----------------------------------------------------------------------------|:---------------------------------|
| $\mu\in\mathbb{R} \nl \sigma>0$ | $\mathbb{R}$          | $\dfrac{1}{2\sigma} \exp\left( -\dfrac{\abs{x-\mu}}{\sigma} \right)$ | $\dfrac{1}{2} \left\[ 1 + \mathrm{sgn}(x-\mu) \left( 1 - \exp\left( -\dfrac{\abs{x-\mu}}{\sigma} \right) \right) \right\]$ | $\mu$                    | $2\sigma^2$                    | $0$                   | $3$                   | $\dfrac{\exp(\mu t)}{1-b^2t^2} \;\; \left( \abs{t}<\dfrac{1}{\sigma}\right)$ | $\dfrac{\exp(i\mu t)}{1+b^2t^2}$ |
{:.scroll-table}

## Properties

### Poisson Approximation

The Poisson distribution can be used to approximate the binomial distribution when $n$ is large and $p$ is small, such that $np = \lambda$ is moderate.
This is particularly useful when dealing with rare events.

\\[
X \sim \mathrm{B}(n, p) \approx \mathrm{Poisson}(np)
\\]

### Gamma--Poisson Relation

\\[
X \sim \mathrm{Gamma}(\alpha, \beta), \; Y \sim \mathrm{Poisson}(x/\beta) \implies F_X(x)=1-F_Y(\alpha)
\\]

The equation above holds when $\alpha$ is a positive integer.
It is proven by integrating the PDF of the gamma distribution and simple induction on $\alpha$.

### Normal Approximation

The normal distribution can be used to approximate the binomial distribution when $n$ is large and $p$ is not too close to 0 or 1.

\\[
X \sim \mathrm{B}(n, p), \; Y \sim \mathcal{N}(np, npq) \implies F_X(x) \approx F_Y(x)
\\]

Generally, we can use this approximation when $\min(np, nq) \ge 5$. However, we do not approximate
$P(X \le x)$ with $P(Y \le x)$, but rather use the **continuity correction**:
- $P(X \le x) \approx P(Y \le x + 0.5)$
- $P(X \ge x) \approx P(Y \ge x - 0.5)$
- $P(a \le X \le b) \approx P(a - 0.5 \le Y \le b + 0.5)$

This correction accounts for the fact that the binomial distribution is discrete while the normal distribution is continuous.
