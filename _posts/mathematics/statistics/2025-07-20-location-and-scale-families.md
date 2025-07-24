---
layout: post
title: "Location and Scale Families"
subtitle: "stat3.3"
classification: "Statistics 3.3"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Location--Scale Families

A **location--scale family** is a class of probability distributions that can be expressed in the form:

\\[
\frac{1}{\sigma} f\left( \frac{x - \mu}{\sigma} \right)
\\]

where $\mu$ is the _location parameter_ and $\sigma > 0$ is the _scale parameter_.
The location parameter $\mu$ shifts the distribution along the x-axis, while the scale parameter $\sigma$ stretches or compresses the distribution.
Therefore, if the random variable $Z$ has a pdf $f(z)$, then the random variable $X = \sigma Z + \mu$ has a pdf given above.
Then we have:
 - $\mathrm{E}[X] = \sigma \mathrm{E}[Z] + \mu$
 - $\mathrm{Var}[X] = \sigma^2 \mathrm{Var}[Z]$