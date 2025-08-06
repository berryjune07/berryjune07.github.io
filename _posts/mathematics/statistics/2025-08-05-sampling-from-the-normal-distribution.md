---
layout: post
title: "Sampling from the Normal Distribution"
subtitle: "stat5.2"
classification: "Statistics 5.2"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Statistics of the normal random sample

Let $X_1, \ldots, X_n$ be a random sample from the normal distribution with mean $\mu$ and variance $\sigma^2$,
i.e., $X_i \sim N(\mu, \sigma^2)$. Let $\bar{X}$ be the sample mean and $S^2$ be the sample variance of the random sample.
Then the following properties hold:
- $\bar{X}$ and $S^2$ are independent random variables.
- $\bar{X} \sim N(\mu, \sigma^2/n)$
- $(n-1) S^2 / \sigma^2 \sim \chi^2_{n-1}$

For the first one, one can show that the variables $\bar{X}$ and $S^2$ are independent so that the two statistics can be treated separately.
We'll show it elegantly a bit later.
The second one follows from the properties of the normal distribution, which states that the sum of independent normal random variables is also normally distributed.
The third one follows from the definition of the sample variance and the properties of the chi-squared distribution.
Let's prove it directly.

### Chi-squared distribution

The _chi-squared distribution_ with $p$ degrees of freedom is defined as the following distribution:

\\[
f_{\chi^2_p}(x) = \frac{1}{2^{p/2} \Gamma(p/2)} x^{\frac{p}{2}-1} e^{-x/2}, \quad x > 0
\\]

Chi-squared distribution is also defined as the sum of the squares of $p$ independent standard normal random variables.
First, we can show that the square of a standard normal random variable is chi-squared distributed with one degree of freedom.

\\[
f_Z(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}
\\]

\\[
\begin{align\*}
f_{Z^2}(x) &= f_Z(\sqrt{x})\frac{1}{2\sqrt{x}} + f_Z(-\sqrt{x})\frac{1}{2\sqrt{x}} \nl
&= \frac{1}{\sqrt{2\pi x}} e^{-\frac{x}{2}} \nl
&= f_{\chi^2_1}(x)
\end{align\*}
\\]

Now, we can show that the sum of $p$ independent chi-squared distributed random variables with one degree of freedom is chi-squared distributed with $p$ degrees of freedom,
using the moment generating function (mgf). Referring to [here](/mathematics/common-discrete-and-continuous-distributions.html#chi-squared-distribution), the mgf of the chi-squared distribution is given by:

\\[
M_{\chi^2_p}(t) = (1 - 2t)^{-p/2}, \quad t < \frac{1}{2}
\\]

The mgf of the sum of independent random variables is the product of their individual mgfs.
Denote $Y = \sum_{i=1}^p Z_i^2$, where $Z_i$ are independent standard normal random variables.
Then the mgf of $Y$ is given by:

\\[
M_Y(t) = \prod_{i=1}^p M_{Z_i^2}(t) = (1 - 2t)^{-p/2} = M_{\chi^2_p}(t)
\\]

This shows that $Y$ is chi-squared distributed with $p$ degrees of freedom.

\\[
Y \sim \chi^2_p
\\]

Also, similarly we can show the following property of the chi-squared distribution:

\\[
X\sim \chi^2\_p, \; Y\sim \chi^2\_q \implies X \pm Y \sim \chi^2\_{p \pm q}
\\]

Be careful that $X$ and $Y$ must be independent for this property to hold.

### Proof of the sample variance

We know the following equation holds:

\\[
(n-1)S^2 = \sum_{i=1}^n (X_i - \bar{X})^2 = \sum_{i=1}^n (X_i - \mu)^2 - n(\bar{X} - \mu)^2
\\]

where $\mu$ is the population mean.
Then we can write as:

\\[
\frac{(n-1)S^2}{\sigma^2} = \sum_{i=1}^n \left(\frac{X_i - \mu}{\sigma}\right)^2 - \left(\frac{\bar{X} - \mu}{\sigma/\sqrt{n}}\right)^2
\\]

Denote $Z_i = (X_i - \mu)/\sigma$ and $Z = (\bar{X} - \mu)/(\sigma/\sqrt{n})$.
Then we have:

\\[
\frac{(n-1)S^2}{\sigma^2} = \sum_{i=1}^n Z_i^2 - Z^2
\\]

and also we know that $Z_i \sim \mathcal{N}(0, 1)$ and $Z \sim \mathcal{N}(0, 1)$, by the properties above.
Finally, by the property of the chi-squared distribution, we have:

\\[
\frac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}
\\]

### Independence of $\bar{X}$ and $S^2$

Let's prove the following Lemma.

Let $X_j\sim\mathcal{N}\;(\mu_j,\sigma_j^2) (j=1,\ldots,n)$ which are mutually independent.
For constants $a_{ij}$ where $i=1,\ldots,n$, define

\\[
U_i = \sum_{j=1}^n a_{ij} X_j \;(i=1,\ldots,n)
\\]

or write as a vector form:

\\[
\mathbf{U} = A \mathbf{X}
\\]

Then, the random variables $U_i$ and $U_j$ are independent if and only if $\text{Cov}(U_i,U_j)=0$. Furtheremore,

\\[
\text{Cov}(U_i,U_j) = \sum_{j=1}^n a_{ik} a_{jk} \sigma_k^2
\\]

<details markdown="1"><summary>Proof</summary>

The joint distribution of $\mathbf{X}$ is:

\\[
f_{\mathbf{X}}(\mathbf{x}) = \frac{1}{(2\pi)^{n/2}\prod_{i=1}^n \sigma_i} \exp\left(-\frac{1}{2}\sum_{i=1}^n\left\[\frac{x_i-\mu_i}{\sigma_i}\right\]^2 \right)
\\]

by defining the following constants,

\\[
\bs{\mu} = \begin{bmatrix}
\mu_1 \nl \vdots \nl \mu_n
\end{bmatrix}, \quad D = \text{diag}(\sigma_1^2, \cdots, \sigma_n^2), \quad
C = \frac{1}{(2\pi)^{n/2}\prod_{i=1}^n \sigma_i}
\\]

we can also write the distribution as:

\\[
f_{\mathbf{X}}(\mathbf{x}) = C \exp\left(-\frac{1}{2}(\mathbf{x}-\bs{\mu})^\top D^{-1} (\mathbf{x}-\bs{\mu}) \right)
\\]

Then the distribution of $\mathbf{U}$ will be:

\\[
f_{\mathbf{U}}(\mathbf{u}) = C \exp\left(-\frac{1}{2}\left(A^{-1}\mathbf{u}-\bs{\mu}\right)^\top D^{-1} \left(A^{-1}\mathbf{u}-\bs{\mu}\right) \right) \lVert A^{-1} \rVert
\\]

By defining $\bs{\mu}^\prime = A\bs{\mu}$,

\\[
\begin{align\*}
f_{\mathbf{U}}(\mathbf{u}) &= C \exp\left(-\frac{1}{2}\left(A^{-1}(\mathbf{u}-\bs{\mu}^\prime)\right)^\top D^{-1} \left(A^{-1}(\mathbf{u}-\bs{\mu}^\prime)\right) \right) \frac{1}{\Vert A \Vert} \nl
&= \frac{C}{\Vert A \Vert} \exp\left(-\frac{1}{2}\left(\mathbf{u}-\bs{\mu}^\prime\right)^\top \left(A^\top\right)^{-1} D^{-1} A^{-1} \left(\mathbf{u}-\bs{\mu}^\prime\right) \right) \nl
&= \frac{C}{\Vert A \Vert} \exp\left(-\frac{1}{2}\left(\mathbf{u}-\bs{\mu}^\prime\right)^\top \left(ADA^\top\right)^{-1} \left(\mathbf{u}-\bs{\mu}^\prime\right) \right)
\end{align\*}
\\]

Referring to [here](/covariance-and-correlation.html#multivariate-normal-distribution), this is the pdf of the multivariate normal distribution, and
$ADA^\top$ is the covariance matrix.
Therefore, we get $\text{Cov}(U_i,U_j) = \left\[ADA^\top\right\]\_{ij} = \sum\_{j=1}^n a\_{ik} a\_{jk} \sigma\_k^2$.
And then we can induce that $\text{Cov}(U_i,U_j)=0$ implies the independence of $U_i$ and $U_j$, and also the inverse.
</details>

We can transform the sample variance equation as:

\\[
\begin{align\*}
S^2 &= \frac{1}{n-1} \sum_{i=1}^n \left(X_i-\bar{X}\right)^2 \nl
&= \frac{1}{n-1} \left( \left\[ \sum_{i=2}^n \left(X_i-\bar{X}\right) \right\]^2 \sum_{i=2}^n \left(X_i-\bar{X}\right)^2 \right)
\end{align\*}
\\]

Therefore, $S^2$ is the function only of $\left(X_2-\bar{X},\ldots,X_n-\bar{X}\right)$.
So if we show the independence of $\bar{X}$ and $X_j-\bar{X}$s, we can show the independence of $\bar{X}$ and $S^2$.
As an illustration of the application of the lemma, write:

\\[
\begin{align\*}
\bar{X} &= \sum_{i=1}^n \frac{1}{n} X_i \nl
X_j-\bar{X} &= \sum_{i=1}^n \left( \delta_{ij} - \frac{1}{n} \right) X_i
\end{align\*}
\\]

It is then easy to show that 

\\[
\text{Cov}\left(\bar{X},X_j-\bar{X}\right) = \sum_{i=1}^n \frac{1}{n}\left(\delta_{ij}-\frac{1}{n}\right) \sigma^2 = 0
\\]

as long as the $X_i$s have the same variance since it's from the identical population. Thus, the proof is end.

## Student's t-distribution

If $X_1,\ldots,X_n$ are a random sample from a $\mathcal{N}(\mu,\sigma^2)$, we know that the quantity

\\[
\frac{\bar{X}-\mu}{\sigma\sqrt{n}}
\\]

is distributed as a $\mathcal{N}(0,1)$ random variable. However, in most cases, the value of $\sigma$ is unknown so that we should use the sample standard deviation $S$.
Therefore, we should investigate the distribution of the following value:

\\[
\frac{\bar{X}-\mu}{S\sqrt{n}}
\\]

We can write it in a slightly different way.

\\[
\frac{\left(\bar{X}-\mu\right)/(\sigma/\sqrt{n})}{\sqrt{S^2/\sigma^2}}
\\]

Here, the numerator is a $\mathcal{N}(0,1)$ random variable, and the denominator is $\sqrt{\chi^2_{n-1}/(n-1)}$ random variable, and we can infer that these
two random variables are independent since $\bar{X}$ and $S^2$ are independent which is proved above. Thus, we should find the distribution of:

\\[
T = \frac{Z}{\sqrt{V/\nu}}
\\]

where $Z$ is the standard normal random variable and $V$ is the chi-squared random variable with $\nu$ degrees of freedom.
And the distribution of this new random variable $T$ is called the **student's t-distribution** with $\nu$ degrees of freedom,
or simply the **t-distribution**.
Now let's derive the actual distribution.

\\[
f_{U,V}(u,v) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2} \frac{1}{\Gamma\left(\frac{\nu}{2}\right) 2^{\nu/2}} v^{\frac{\nu}{2}-1} e^{-v/2}
\\]

Now make the transformation

\\[
G(u,v) = \left( \frac{u}{\sqrt{v/\nu}}, v \right) = (t,w)
\\]

Therefore,

\\[
\begin{align\*}
f_T(t) &= \int_0^\infty f_{U,V} \left(t\sqrt{\frac{w}{\nu}} ,w \right) \abs{ \partial{G^{-1}}{(t,w)} } \,\dd{w} \nl
&= \frac{1}{\sqrt{2\pi}} \frac{1}{\Gamma\left(\frac{\nu}{2}\right) 2^{\nu/2}} \int_0^\infty \exp\left( -\frac{t^2w}{2\nu}\right) w^{\frac{\nu}{2}-1} e^{-w/2} \sqrt{\frac{w}{\nu}} \, \dd{w} \nl
&= \frac{1}{\sqrt{2\pi\nu}\Gamma\left(\frac{\nu}{2}\right) 2^{\nu/2}} \int_0^\infty \exp\left( -\frac{1}{2}\left(1+\frac{t^2}{\nu}\right) w \right) w^{\frac{\nu+1}{2}-1} \,\dd{w} \nl
&= \frac{1}{\sqrt{2\pi\nu}\Gamma\left(\frac{\nu}{2}\right) 2^{\nu/2}} \Gamma\left( \frac{\nu+1}{2} \right) \left\[ \frac{1+t^2/\nu}{2} \right\]^{-(\nu+1)/2} \nl
&= \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\pi\nu}\Gamma\left(\frac{\nu}{2}\right)} \left( 1+\frac{t^2}{\nu} \right)^{-(\nu+1)/2}
\end{align\*}
\\]

This is the PDF of the student's t-distribution with $\nu$ degrees of freedom:

\\[
f_T(t) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\pi\nu}\Gamma\left(\frac{\nu}{2}\right)} \left( 1+\frac{t^2}{\nu} \right)^{-(\nu+1)/2}
\\]

and we know that:

\\[
\frac{\bar{X}-\mu}{S\sqrt{n}} \sim t_{n-1}
\\]

Let's seek for the properties of the student's t-distribution.

| Parameters | $\supp f_T$ (Support) | $f_T(x)$ (PDF)                                                                                                                                | $F_T(x)$ (CDF)                                                                                                                                                                                                                      | $\mathrm{E}[T]$ (Mean)                                                  | $\mathrm{Var}[T]$ (Variance)                                                                                       | $\gamma_1$ (Skewness)                                                   | $\gamma_2$ (Kurtosis)                                                                                            | $M_T(t)$ (MGF) | $\phi_T(t)$ (CF)                                                                                                    |
|:-----------|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|:---------------|:--------------------------------------------------------------------------------------------------------------------|
| $\nu > 0$  | $\mathbb{R}$          | $\dfrac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\; \Gamma\left(\frac{\nu}{2}\right)} \left(1 + \dfrac{x^2}{\nu}\right)^{-(\nu+1)/2}$ | $\dfrac{1}{2} + x \dfrac{\Gamma\left(\frac{\nu+1}{2}\right) }{\sqrt{\pi\nu} \Gamma\left(\frac{\nu}{2}\right) } {}_2F_1\left\[ \begin{matrix} \frac{1}{2}, \frac{\nu+1}{2} \nl \frac{3}{2} \end{matrix} ; -\frac{x^2}{\nu} \right\]$ | $\begin{cases} 0 &; \nu>1 \nl \text{undefined} &; \nu\le 1 \end{cases}$ | $\begin{cases} \dfrac{\nu}{\nu-2} &; \nu>2 \nl \infty &; 1<\nu\le 2 \nl \text{undefined} &; \nu \le 1 \end{cases}$ | $\begin{cases} 0 &; \nu>3 \nl \text{undefined} &; \nu\le 3 \end{cases}$ | $\begin{cases} \dfrac{6}{\nu-4} &; \nu>4 \nl \infty &; 2<\nu\le 4 \nl \text{undefined} &; \nu \le 2 \end{cases}$ | undefined      | $\dfrac{ (\sqrt{\nu}\abs{t})^{\nu/2} K_{\nu/2}(\sqrt{\nu}\abs{t})}{\Gamma\left(\frac{\nu}{2}\right) 2^{\nu/2 - 1}}$ |
{:.scroll-table}

## Snedecor's F-distribution

Let $X_1,\ldots,X_n$ be a random sample from a $\mathcal{N}(\mu_X,\sigma_X^2)$ population, and let
$Y_1,\ldots,Y_m$ be a random sample from a $\mathcal{N}(\mu_Y,\sigma_Y^2)$ population.
If we are interested in comparing the variability of the populations, one quantity of interest woul be the ratio $\sigma_X^2/\sigma_Y^2$.
Information about this ratio is contained in $S_X^2/S_Y^2$, the ratio of sample variances. So, we should investigate the distribution of the following value:

\\[
\frac{S_X^2/S_Y^2}{\sigma_X^2/\sigma_Y^2} = \frac{S_X^2/\sigma_X^2}{S_Y^2/\sigma_Y^2}
\\]

We can observe that the numerator and the denominator of the rhs are both proportional to the chi-squared random variable.
Thus, we should find the distribution of:

\\[
F = \frac{U/p}{V/q}
\\]

where $U\sim\chi^2_p$ and $V\sim\chi^2_q$. The distribution of this new random variable is called the **Snedecor's F-distribution** with $p$ and $q$ degrees of freedom,
or simply the **F-distribution**.   

\\[
f_{U,V}(u,v) = \frac{1}{\Gamma\left(\frac{p}{2}\right) 2^{p/2}} u^{\frac{p}{2}-1} e^{-u/2} \cdot \frac{1}{\Gamma\left(\frac{q}{2}\right) 2^{q/2}} v^{\frac{q}{2}-1} e^{-v/2}
\\]

Now make the transformation

\\[
G(u,v) = \left( \frac{u/p}{v/q}, v \right) = (x,w)
\\]

Therefore,

\\[
\begin{align\*}
f_F(x) &= \int_0^\infty f_{U,V}\left( \frac{pxw}{q}, w \right) \abs{ \pdv{G^{-1}}{(x,w)} } \,\dd{w} \nl
&= \frac{1}{\Gamma\left(\frac{p}{2}\right) 2^{p/2} \Gamma\left(\frac{q}{2}\right) 2^{q/2}} \int_0^\infty \left( \frac{pxw}{q} \right)^{\frac{p}{2}-1} e^{-pxw/2q} w^{\frac{q}{2}-1} e^{-w/2} \cdot \frac{pw}{q} \,\dd{w} \nl
&= \frac{1}{\Gamma\left(\frac{p}{2}\right) \Gamma\left(\frac{q}{2}\right) 2^{(p+q)/2}} \left( \frac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \int_0^\infty w^{\frac{p+q}{2}-1} e^{-\frac{1}{2}\left(1 + \frac{px}{q} \right) w} \,\dd{w} \nl
&= \frac{1}{\Gamma\left(\frac{p}{2}\right) \Gamma\left(\frac{q}{2}\right) 2^{(p+q)/2}} \left( \frac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \Gamma\left(\frac{p+q}{2} \right) \left( \frac{1}{2}\left(1 + \frac{px}{q} \right) \right)^{-(p+q)/2} \nl
&= \frac{\Gamma\left( \frac{p+q}{2} \right)}{\Gamma\left( \frac{p}{2} \right)\Gamma\left( \frac{q}{2} \right)} \left( \frac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \left(1 + \frac{px}{q} \right)^{-(p+q)/2} \nl
&= \frac{1}{\mathrm{B}\left( \frac{p}{2},\frac{q}{2} \right)} \left( \frac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \left(1 + \frac{p}{q}x \right)^{-(p+q)/2}
\end{align\*}
\\]

This is the PDF of the F-distribution with $p$ and $q$ degrees of freedom:

\\[
f_F(x) = \frac{1}{\mathrm{B}\left( \frac{p}{2},\frac{q}{2} \right)} \left( \frac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \left(1 + \frac{p}{q}x \right)^{-(p+q)/2}
\\]

and we know that:

\\[
\frac{S_X^2/S_Y^2}{\sigma_X^2/\sigma_Y^2} \sim F_{p,q}
\\]

Let’s seek for the properties of the F-distribution.

| Parameters | $\supp f_F$ (Support)                                                             | $f_F(x)$ (PDF)                                                                                                                                               | $F_F(x)$ (CDF)                                                 | $\mathrm{E}[F]$ (Mean)                                                           | $\mathrm{Var}[F]$ (Variance)                                                                            | $\gamma_1$ (Skewness)                                                                                                    | $\gamma_2$ (Kurtosis)                                                                                                         | $M_F(t)$ (MGF) | $\phi_F(t)$ (CF)                                                                                                                           |
|:-----------|:----------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:---------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| $p,q > 0$  | $\begin{cases} \mathbb{R}\_{\ge0} &; p\ge 2 \nl \mathbb{R}\_+ &; p<2 \end{cases}$ | $\dfrac{1}{\mathrm{B}\left( \frac{p}{2},\frac{q}{2} \right)} \left( \dfrac{p}{q} \right)^{p/2} x^{\frac{p}{2}-1} \left(1 + \dfrac{p}{q}x \right)^{-(p+q)/2}$ | $I_{\frac{px}{px+q}} \left(\dfrac{p}{2}, \dfrac{q}{2} \right)$ | $\begin{cases} \dfrac{q}{q-2} &; q>2 \nl \text{undefined} &; q\le 2 \end{cases}$ | $\begin{cases} \dfrac{2q^2 (p+q-2)}{p(q-2)^2 (q-4)} &; q>4 \nl \text{undefined} &; q \le 4 \end{cases}$ | $\begin{cases} \dfrac{(2p+q- 2) \sqrt{8(q-4)}}{(q-6) \sqrt{p(p+q-2)}} &; q>6 \nl \text{undefined} &; q\le 6 \end{cases}$ | $\begin{cases} \dfrac{12p(5q-22)(p+q-2)+(q-4)(q-2)^2}{p(q-6)(q-8)(p+q-2)} &; q>8 \nl \text{undefined} &; q \le 8 \end{cases}$ | undefined      | $\dfrac{\Gamma{\left(\frac{p+q}{2}\right)}}{\Gamma{\left(\frac{q}{2}\right)}} U \left(\dfrac{p}{2},1-\dfrac{q}{2},-\frac{q}{p} it \right)$ |
{:.scroll-table}

- $X\sim F_{p,q} \implies 1/X \sim F_{q,p}$
- $X\sim t_q \implies X^2 \sim F_{1,q}$
- $X\sim F_{p,q} \implies pX/(q+pX) \sim \mathrm{Beta}(p/2,q/2)$