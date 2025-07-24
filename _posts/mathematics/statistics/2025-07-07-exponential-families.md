---
layout: post
title: "Exponential Families"
subtitle: "stat3.2"
classification: "Statistics 3.2"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Exponential Families

An **exponential family** is a class of probability distributions that can be expressed in a specific form.
The general form of an exponential family distribution is:

\\[
f(x \mid \bs{\theta}) = h(x) \exp\left( \bs{\eta}(\bs{\theta})\cdot\mathbf{T}(x) - A(\bs{\theta}) \right)
\\]

Here, $\bs{\theta}$ is the parameter vector and $\bs{\eta}(\bs{\theta})$ is the natural parameter vector.
For a distribution to be in the exponential family, its support must be independent of the parameters, and the function $h(x)$ must not depend on the parameters.

### Properties

\\[
\begin{align\*}
\mathrm{E}\left\[ \pdv{\bs{\eta(\bs{\theta})}}{\theta_i}\cdot\mathbf{T}(X) \right\] &= \pdv{A(\bs{\theta})}{\theta_i} \nl
\mathrm{Var}\left\[ \pdv{\bs{\eta}(\bs{\theta})}{\theta_i}\cdot\mathbf{T}(X) \right\] &= \pdvn{2}{A(\bs{\theta})}{\theta_i} - 
\mathrm{E}\left\[ \pdvn{2}{\bs{\eta}(\bs{\theta})}{\theta_i}\cdot\mathbf{T}(X) \right\]
\end{align\*}
\\]

<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
\mathrm{E}\left\[ \pdv{\bs{\eta}(\bs{\theta})}{\theta_i}\cdot\mathbf{T}(X) \right\] &=
\int_X \pdv{\bs{\eta}(\bs{\theta})}{\theta_i}\cdot\mathbf{T}(x) h(x) \exp(\bs{\eta}(\bs{\theta})\cdot \mathbf{T}(x)-A(\bs{\theta})) \dd{x} \nl
&= \int_X h(x) e^{-A(\bs{\theta})}\pdv{}{\theta_i}\exp(\bs{\eta}(\bs{\theta})\cdot \mathbf{T}(x)) \dd{x} \nl
&= e^{-A(\bs{\theta})}\pdv{}{\theta_i} \int_X h(x) \exp(\bs{\eta}(\bs{\theta})\cdot \mathbf{T}(x)) \dd{x} \nl
&= e^{-A(\bs{\theta})}\pdv{}{\theta_i} e^{A(\bs{\theta})} \nl
&= \pdv{A(\bs{\theta})}{\theta_i}
\end{align\*}
\\]
where $X$ is the support of the distribution. The second equation can be derived similarly.
</details>

### Natural Parameter Space

The **natural parameter space** is the set of all possible values of the natural parameter vector $\bs{\eta}(\bs{\theta})$.

\\[
\mathscr{H} = \Set{ \bs{\eta} \| \int_{-\infty}^\infty h(x) \exp(\bs{\eta} \cdot \mathbf{T}(x)) \dd{x} <  \infty }
\\]

For the values of $\bs{\eta}\in \mathscr{H}$, we must have:

\\[
A(\bs{\eta}) = \ln\left( \int_{-\infty}^\infty h(x) \exp(\bs{\eta} \cdot \mathbf{T}(x)) \dd{x} \right)
\\]

Natural parameter space has many useful properties, such as being convex.

### Curved Exponential Families

A **curved exponential family** is a subset of the exponential family where $\dim(\bs{\theta}) < \dim(\bs{\eta})$.
A **full exponential family** is one where $\dim(\bs{\theta}) = \dim(\bs{\eta})$.