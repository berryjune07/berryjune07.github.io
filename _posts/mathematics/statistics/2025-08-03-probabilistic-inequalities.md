---
layout: post
title: "Probabilistic Inequalities"
subtitle: "stat4.6"
classification: "Statistics 4.6"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Hölder's inequality

**Hölder's inequality** states that for any random variables $X$ and $Y$ and for any $p, q > 1$ such that

\\[
\frac{1}{p} + \frac{1}{q} = 1
\\]

the following holds:

\\[
\abs{\mathrm{E}[XY]} \leq \mathrm{E}\abs{XY} \leq \big(\mathrm{E}\abs{X}^p\big)^\frac{1}{p} \big(\mathrm{E}\abs{Y}^q\big)^\frac{1}{q}
\\]

### Lemma

Let $a$ and $b$ be non-negative real numbers. Then we have:

\\[
\frac{1}{p} a^p + \frac{1}{q} b^q \geq a b
\\]

with equality if and only if $a^p = b^q$.

<details markdown="1"><summary> Proof</summary>

Fix $b$, and consider the function

\\[
f(a) = \frac{1}{p} a^p + \frac{1}{q} b^q - ab
\\]

The derivative is given by:
\\[
f\'(a) = a^{p-1} - b
\\]

To minimize $f(a)$, we set $f\'(a) = 0$ and get $a = b^{\frac{1}{p-1}} = b^{\frac{q}{p}}$. Substituting this back into $f(a)$ gives:

\\[
f\left(b^{\frac{q}{p}}\right) = \frac{1}{p} b^q + \frac{1}{q} b^q - b^{\frac{q}{p}+1} = b^q - b^q = 0
\\]

A check of the second derivative confirms that this is indeed a minimum, and thus we prove the lemma.
</details>

### Proof

The first inequality simply follows from $-\abs{XY} \le XY \le \abs{XY}$. Now let's prove the second one. By setting

\\[
a = \frac{\abs{X}}{(\mathrm{E}\abs{X}^p)^{\frac{1}{p}}}, \quad b = \frac{\abs{Y}}{(\mathrm{E}\abs{Y}^q)^{\frac{1}{q}}}
\\]

and applying the lemma, we have:

\\[
\frac{1}{p} \frac{\abs{X}^p}{\mathrm{E}\abs{X}^p} + \frac{1}{q} \frac{\abs{Y}^q}{\mathrm{E}\abs{Y}^q} \geq \frac{\abs{XY}}{(\mathrm{E}\abs{X}^p)^{\frac{1}{p}} (\mathrm{E}\abs{Y}^q)^{\frac{1}{q}}}
\\]

Taking expectation on both sides yields:

\\[
1 \geq \frac{\mathrm{E}\abs{XY}}{(\mathrm{E}\abs{X}^p)^{\frac{1}{p}} (\mathrm{E}\abs{Y}^q)^{\frac{1}{q}} }
\\]

and thus we obtain Hölder's inequality.

### Cauchy--Schwarz inequality

**Cauchy--Schwarz inequality** is a special case of Hölder's inequality where $p = q = 2$. It states that for any random variables $X$ and $Y$:

\\[
\abs{\mathrm{E}[XY]} \leq \mathrm{E}\abs{XY} \leq \sqrt{\mathrm{E}\abs{X}^2} \sqrt{\mathrm{E}\abs{Y}^2}
\\]

or also written as:

\\[
(\mathrm{E}[XY])^2 \leq \mathrm{E}\left[X^2\right] \mathrm{E}\left[Y^2\right]
\\]

### Covariance and correlation

If $X$ and $Y$ have means $\mu_X, \mu_Y$ and variances $\sigma_X^2, \sigma_Y^2$, we can apply Cauchy--Schwarz inequality to the centered variables $X - \mu_X$ and $Y - \mu_Y$:

\\[
\abs{\mathrm{E}[(X - \mu_X)(Y - \mu_Y)]} \leq \sqrt{\mathrm{E}[(X - \mu_X)^2]} \sqrt{\mathrm{E}[(Y - \mu_Y)^2]}
\\]

This leads to the well-known properties of covariance and correlation:

\\[
\abs{\text{Cov}(X, Y)} \leq \sigma_X \sigma_Y
\\]

and

\\[
\abs{\text{Corr}(X, Y)} \leq 1
\\]

## Minkowski's inequality

**Minkowski's inequality** is a generalization of the triangle inequality for $L^p$ norms. It states that for any random variables $X$ and $Y$ and for any $p \geq 1$:

\\[
(\mathrm{E}\abs{X+Y}^p)^{\frac{1}{p}} \leq (\mathrm{E}\abs{X}^p)^{\frac{1}{p}} + (\mathrm{E}\abs{Y}^p)^{\frac{1}{p}}
\\]

Proof is omitted. It can be done by applying Hölder's inequality and the basic triangle inequality $\abs{X+Y} \leq \abs{X} + \abs{Y}$.

## Jensen's inequality

**Jensen's inequality** states that for any convex function $g$ and any random variable $X$:

\\[
E[g(X)] \geq g(E[X])
\\]

Equality holds if and only if $g$ is linear on the support of $X$. If $g$ is concave, the inequality is reversed:

\\[
E[g(X)] \leq g(E[X])
\\]

### Proof

Let $l(x)$ be the linear function that is tangent to $g$ at the point $x= E[X]$. Then, by the definition of convexity, we have $g(x) \geq l(x)$ for all $x$. Taking expectation on both sides gives:

\\[
\mathrm{E}[g(X)] \geq \mathrm{E}[l(X)] = l(\mathrm{E}[X]) = g(\mathrm{E}[X])
\\]

## Inequality for means

Jensen's inequality can be used to prove an inequality between the three means: arithmetic mean, geometric mean, and harmonic mean.
We define the **arithmetic mean** of a positive random variable $X$ as:

\\[
\mathrm{AM}[X] = \mathrm{E}[X]
\\]

the **geometric mean** as:

\\[
\mathrm{GM}[X] = \exp\left(\mathrm{E}[\ln X]\right)
\\]

and the **harmonic mean** as:
\\[
\mathrm{HM}[X] = \frac{1}{\mathrm{E}[1/X]}
\\]

Then $\mathrm{AM}[X] \geq \mathrm{GM}[X] \geq \mathrm{HM}[X]$ for any positive random variable $X$.
More generally, for any $p\in \mathbb{R}$, we define the **power mean** as:

\\[
M_p[X] = \left(\mathrm{E}[X^p]\right)^{\frac{1}{p}} = \exp\left(\frac{1}{p} \ln \mathrm{E}[X^p]\right)
\\]

We can check that $M_1[X] = \mathrm{AM}[X]$, $M_0[X] = \mathrm{GM}[X]$, and $M_{-1}[X] = \mathrm{HM}[X]$.
Also, for $p\to \infty$, we have $M_p[X] \to \max X$ and for $p\to -\infty$, we have $M_p[X] \to \min X$.
Checking this later, we have the powerful theorem that $M_p[X]$ is an increasing function of $p$ for any positive random variable $X$.

\\[
\pdv{}{p} M_p[X] \geq 0
\\]

### Special values of $p$

Let's check that $M_0[X] = \mathrm{GM}[X]$ is indeed the geometric mean.
By the L'Hôpital's rule, we have:

\\[
\lim_{p \to 0} \ln M_p[X] = \lim_{p \to 0} \frac{\ln \mathrm{E}[X^p]}{p} = \lim_{p \to 0} \frac{\mathrm{E}[ X^p \ln X]}{\mathrm{E}[X^p]} = \mathrm{E}[\ln X]
\\]

Thus, we have:

\\[
\lim_{p \to 0} M_p[X] = \exp\left(\mathrm{E}[\ln X]\right) = \mathrm{GM}[X]
\\]

Let's also check that $M_\infty[X] = \max X$ is indeed the maximum.
We can write the power mean as:

\\[
M_p[X] = \max X \exp\left(\frac{1}{p} \ln \mathrm{E}\left[\left(\frac{X}{\max X}\right)^p\right]\right)
\\]

Also by the L'Hôpital's rule, we have:

\\[
\begin{align\*}
\lim_{p \to \infty} \ln \frac{M_p[X]}{\max X} &= \lim_{p \to \infty} \frac{\ln \mathrm{E}\left[\left(\frac{X}{\max X}\right)^p\right]}{p} \nl
&= \lim_{p \to \infty} \frac{\mathrm{E}\left[\left(\frac{X}{\max X}\right)^p \ln \frac{X}{\max X}\right]}{\mathrm{E}\left[\left(\frac{X}{\max X}\right)^p\right]} \nl
&= \frac{f_X(\max X) \ln 1}{f_X(\max X)} \nl
&= 0
\end{align\*}
\\]

Thus, we have:

\\[
\lim_{p \to \infty} M_p[X] = \max X
\\]

Similarly, we can check that $M_{-\infty}[X] = \min X$ is indeed the minimum.

### Proof

First, we have the following property of the power means:

\\[
M_p[X] \geq M_q[X] \implies M_{-p}[X] \leq M_{-q}[X]
\\]

It is proved by substituting $X$ with $1/X$ in the definition of the power mean.
Now, we can prove the inequality including the geometric mean:

\\[
M_{-p}[X] \leq M_0[X] \leq M_p[X]
\\]

for any $p> 0$. The proof follows from the Jensen's inequality applied to the concave function $g(x) = \ln x$:

\\[
\mathrm{E}[\ln X] \leq \ln \mathrm{E}[X]
\\]

Substituting $X$ with $X^p$ gives:

\\[
\exp \mathrm{E} [\ln X] \leq \mathrm{E}[X^p]^{\frac{1}{p}}
\\]

and substituting $X$ with $1/X$ gives:

\\[
\exp \mathrm{E} [\ln X] \geq \mathrm{E}[X^{-p}]^{-\frac{1}{p}}
\\]

and the inequality is proved. Showing that $M_p[X]$ is an increasing function at $p>0$, the theorem is automatically proved by the properties proven above.
For $0<p\leq q$, define $r=q/p$ and apply the Jensen's inequality to the convex function $g(x) = x^r$:

\\[
\mathrm{E}[X]^r \leq \mathrm{E}[X^r]
\\]

Substituting $Y = X^{1/p}$ gives:

\\[
\mathrm{E}[Y^p]^\frac{1}{p} \leq \mathrm{E}[Y^q]^\frac{1}{q}
\\]

Thus, we have:

\\[
p<q \implies M_p[X] \leq M_q[X]
\\]

By constructing the probability theory upon the measure theory, we can treat these probabilistic properties more rigorously.