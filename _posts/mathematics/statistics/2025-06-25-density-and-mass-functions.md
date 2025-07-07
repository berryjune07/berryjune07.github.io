---
layout: post
title: "Density and Mass Functions"
subtitle: "stat1.5"
classification: "Statistics 1.5"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Prabability Mass Function (PMF)

The **probability mass function (PMF)** of a discrete random variable $X$ is given by:
\\[
f_X(x) = P(X = x)
\\]

## Probability Density Function (PDF)

The **probability density function (PDF)** of a continuous random variable $X$ is the function that satisfies:
\\[
F_X(x) = \int_{-\infty}^x f_X(t) \dd{t}
\\]
for all $x\in\mathbb{R}$, where $F_X(x)$ is the cumulative distribution function (CDF) of $X$.

## Properties
A function $f_X(x)$ is a PDF or a PMF of a random variable $X$ if and only if
 - $f_X(x) \geq 0$
 - $\sum_{x} f_X(x) = 1$ (for PMF)
 - $\int_{-\infty}^{\infty} f_X(x) \dd{x} = 1$ (for PDF)