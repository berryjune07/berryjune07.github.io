---
layout: post
title: "Probability Inequalities"
subtitle: "stat3.4"
classification: "Statistics 3.4"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Chebyshev's Inequality

Let $X$ be a random variable and let $g(x)$ be a non-negative function. Then, for any $r>0$,

\\[
P(g(X) \geq r) \leq \frac{\mathrm{E}\[g(X)\]}{r}
\\]

<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
\mathrm{E}\[g(X)\] &= \int_{-\infty}^\infty g(x) f_X(x) \dd{x} \nl
&\ge \int_{x:g(x) \geq r} g(x) f_X(x) \dd{x} \nl
&\geq r \int_{x:g(x) \geq r} f_X(x) \dd{x} \nl
&= r P(g(X) \geq r)
\end{align\*}
\\]
</details>

### Special Case

Let $g(x) = (x - \mu)^2/\sigma^2$, where $\mu = \mathrm{E}[X]$ and $\sigma^2 = \mathrm{Var}[X]$.
For convenience write $r=t^2$. Then

\\[
P(|X - \mu| \geq t\sigma) \leq \frac{1}{t^2}
\\]

or equivalently,

\\[
P(|X - \mu| < t\sigma) \geq 1 - \frac{1}{t^2}
\\]

### Tighter Inequality

If $Z$ is standard normal, then for all $t> 0$,

\\[
P(|Z| \geq t) \leq \sqrt{\frac{2}{\pi}} \frac{e^{-t^2/2}}{t}
\\]

<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
P(Z\geq t) &= \int_t^\infty \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \dd{x} \nl
&\leq \frac{1}{\sqrt{2\pi}} \int_t^\infty \frac{x}{t} e^{-x^2/2} \dd{x} \nl
&= \frac{1}{\sqrt{2\pi}} \frac{e^{-t^2/2}}{t}
\end{align\*}
\\]
</details>

There is a more general inequality known as the **Gauss inequality** which describes the property
of unimodal distributions. Let $X\sim f$, where $f$ is unimodal with mode $\nu$, and define $\tau^2 = \mathrm{E}\left\[(X-\nu)^2 \right\]$. Then

\\[
P(|X - v| > \varepsilon) \leq \begin{cases}
\dfrac{4\tau^2}{9\varepsilon^2} & ; \varepsilon \ge \dfrac{4}{3} \tau \nl \nl
1-\dfrac{\varepsilon}{\sqrt{3}\tau} & ; \varepsilon \le \dfrac{4}{3} \tau
\end{cases}
\\]

Although this is a tighter bound than Chebyshev's inequality, the dependence on the mode $v$ makes it less useful in practice.
The extension to **Vysochanskij–Petunin inequality** removes this limitation. Let $X\sim f$ be a unimodal distribution, and define
$\xi^2 = \mathrm{E}\left\[(X - \alpha)^2 \right\]$ for an arbitrary $\alpha$. Then

\\[
P(|X - \alpha| > \varepsilon) \leq \begin{cases}
\dfrac{4\xi^2}{9\varepsilon^2} & ; \varepsilon \ge \dfrac{8}{3} \xi \nl \nl
\dfrac{4\xi^2}{9\varepsilon^2} - \dfrac{1}{3} & ; \varepsilon \le \dfrac{8}{3} \xi
\end{cases}
\\]

Taking $\alpha = \mathrm{E}[X]$ and $\varepsilon = 3\sigma$ gives us a _three sigma rule_:

\\[
P(|X - \mu| > 3\sigma) \leq \frac{4}{81} < 5\%
\\]

## Identities

### Gamma Recursion

Let $X_{\alpha,\beta}\sim \mathrm{Gamma}(\alpha, \beta)$ with pdf $f(x\|\alpha, \beta)$, where $\alpha > 1$.
Then for any constants $a,b$,

\\[
P(a<X_{\alpha,\beta}<b) = \beta( f(a\|\alpha, \beta) - f(b\|\alpha, \beta) ) + P(a<X_{\alpha-1,\beta}<b)
\\]

### Stein's Lemma

Let $X\sim\mathcal{N}(\mu, \sigma^2)$ and $f$ be a differentiable function such that $\mathrm{E}|f'(X)| < \infty$.
Then,

\\[
\mathrm{E}\[f(X)(X - \mu)\] = \sigma^2 \mathrm{E}\[f'(X)\]
\\]

### Chi-Squared Recursion

For any function $f$,

\\[
\mathrm{E}\left\[ f\left(\chi^2\_p\right) \right\] = p \mathrm{E}\left\[ \frac{f(\chi^2\_{p+2})}{\chi^2\_{p+2}} \right\]
\\]

### Hwang's Recursion

Let $f(x)$ be a function of which mean and $f(-1)$ exists.
- If $X\sim\mathrm{Poisson}(\lambda)$,
\\[
\mathrm{E}\[ \lambda f(X) \] = \mathrm{E} \[ Xf(X-1) \]
\\]
- If $X\sim\mathrm{NB}(r,p)$,
\\[
\mathrm{E}\[(1-p)f(X)\] = \mathrm{E}\left\[ \frac{X}{r+X-1}f(X-1) \right\]
\\]