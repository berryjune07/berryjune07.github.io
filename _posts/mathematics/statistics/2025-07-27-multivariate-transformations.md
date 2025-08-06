---
layout: post
title: "Multivariate Transformations"
subtitle: "stat4.3"
classification: "Statistics 4.3"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Multivariate Transformations

A **multivariate transformation** is a function that maps a vector of random variables to another vector of random variables.
Let $\mathbf{X} \sim f_{\mathbf{X}}(\mathbf{x})$ be a random vector at $\mathbb{R}^n$ and $\mathbf{Y} = T(\mathbf{X})$ be a transformation of $\mathbf{X}$.
Here, $T: \mathbb{R}^n \to \mathbb{R}^n$ is one-to-one and differentiable.
Then the distribution of $\mathbf{Y}$ is given by:

\\[
f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}\left(T^{-1}(\mathbf{y}) \right) \left| \det \pdv{T^{-1}(\mathbf{y})}{\mathbf{y}} \right|
\\]

where $\det \pdv{T^{-1}(\mathbf{y})}{\mathbf{y}}$ is the determinant of the Jacobian matrix of the inverse transformation $T^{-1}$.

<details markdown="1"> <summary>Proof</summary>
\\[
\begin{align\*}
P(\mathbf{Y} \in A) &= P(T(\mathbf{X}) \in A) = P(\mathbf{X} \in T^{-1}(A)) \nl
&= \int_{T^{-1}(A)} f_{\mathbf{X}}(\mathbf{x}) \, \dd{\mathbf{x}} \nl
&= \int_{A} f_{\mathbf{X}}\left(T^{-1}(\mathbf{y}) \right) \left| \det \pdv{T^{-1}(\mathbf{y})}{\mathbf{y}} \right| \, \dd{\mathbf{y}} \nl
&= \int_{A} f_{\mathbf{Y}}(\mathbf{y}) \, \dd{\mathbf{y}}
\end{align\*}
\\]
</details> <br> 

If $T$ is not one-to-one, we can think of the partition of the domain into disjoint sets where $T$ is one-to-one.
In this case, we can apply the transformation to each partition and sum the contributions.
We can construct the process just as we did for the [univariate case](/mathematics/distributions-of-functions-of-a-random-variable.html#monotonic-partitions).

\\[
f_{\mathbf{Y}}(\mathbf{y}) = \begin{cases}
\dps \sum_{i} f_{\mathbf{X}}\left(T^{-1}_i(\mathbf{y}) \right) \left| \det \pdv{T^{-1}_i(\mathbf{y})}{\mathbf{y}} \right| \mathbf{1}_{T_i(\mathbf{X})} (\mathbf{y}) & ; \mathbf{y} \in \supp f_{\mathbf{Y}} \nl
0 & ; \mathbf{y} \notin \supp f_{\mathbf{Y}}
\end{cases}
\\]