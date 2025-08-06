---
layout: post
title: "Random Samples and the Statistics"
subtitle: "stat5.1"
classification: "Statistics 5.1"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Random Samples

The random variables $X_1, \ldots, X_n$ are said to form a **random sample** if they are _independent and identically distributed_ (i.i.d.).
This means that each $X_i$ is drawn from the same probability distribution $f(x)$ and that the values of $X_i$ do not influence each other.
Here we call $f(x)$ the **population distribution**. From the definition, the joint distribution of the random sample is given by:

\\[
f(x_1, \ldots, x_n) = \prod_{i=1}^n f(x_i)
\\]

Provided that the mgf of the population distribution exists, the mgf of the sample mean is:

\\[
M_{\bar{X}}(t) = \left[ M_X\left(\frac{t}{n}\right) \right]^n
\\]

It appears the same for the characteristic functions.

## Statistics

A **statistic** is a function of the random sample $X_1, \ldots, X_n$ that does not depend on the parameters of the population distribution.
We can denote a statistic as $T(X_1, \ldots, X_n)$, where $T$ is a function that takes the random sample as input.
The probability distribution of a statistic is called the **sampling distribution**.
A statistic is a random variable that summarizes or describes some aspect of the sample, such as the sample mean, sample variance, or sample median.

### Sample Mean

The **sample mean** is the arithmetic average of the random sample and is usually denoted as:

\\[
\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i
\\]

Assuming $\mathrm{E}[X_i] = \mu$ and $\mathrm{Var}[X_i] = \sigma^2$ for all $i$, the expected value of the sample mean is given by:

\\[
\mathrm{E}[\bar{X}] = \frac{1}{n} \sum_{i=1}^n \mathrm{E}[X_i] = \mu
\\]

The variance of the sample mean is given by:

\\[
\mathrm{Var}[\bar{X}] = \frac{1}{n^2} \sum_{i=1}^n \mathrm{Var}[X_i] = \frac{\sigma^2}{n}
\\]

### Sample Variance

The **sample variance** is a measure of the spread of the random sample and is usually denoted as:

\\[
S^2 = \frac{1}{n-1} \sum_{i=1}^n \left(X_i - \bar{X}\right)^2
\\]

The **sample standard deviation** is the square root of the sample variance.

The expected value of the sample variance is given by:

\\[
\mathrm{E}[S^2] = \sigma^2
\\]

Why do we divide by $n-1$ instead of $n$? This is because we are estimating the population variance from the sample, and dividing by $n-1$ (the **Bessel's correction**) corrects the bias in the estimation.
Let's prove this:

\\[
(n-1)S^2 = \sum_{i=1}^n (X_i - \bar{X})^2 = \sum_{i=1}^n X_i^2 - n\bar{X}^2
\\]

Using the fact that $\mathrm{E}[X^2]=\mathrm{Var}[X] + \mathrm{E}[X]^2$, we can compute the expected value:

\\[
\mathrm{E}[(n-1)S^2] = n (\sigma^2 + \mu^2) - n\left( \frac{\sigma^2}{n} + \mu^2 \right) = (n-1)\sigma^2
\\]

### Sampling Distribution of the Sample Mean

If $X$ and $Y$ are independent random variables with pdfs $f_X(x)$ and $f_Y(y)$, then the pdf of the sum $Z = X + Y$ is given by the convolution of the two pdfs.
One can prove the theorem directly from the formula derived [here](/mathematics/multivariate-transformations.html):

\\[
f_Z(z) = \int_{-\infty}^{\infty} f_X(x) f_Y(z - x) \, dx
\\]

We can extend this to the case of the sample mean.
If $X_1, \ldots, X_n$ are independent and identically distributed random variables with pdf $f(x)$, then the pdf of the sample mean $\bar{X}$ is given by:

\\[
f_{\bar{X}}(\bar{x}) = n \int_{-\infty}^{\infty} \cdots \int_{-\infty}^{\infty} f\left(n \bar{x} - \sum_{i=1}^{n-1} x_i\right) \prod_{i=1}^{n-1} f(x_i) \, dx_1 \cdots dx_{n-1}
\\]