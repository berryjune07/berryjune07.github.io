---
layout: post
title: "Distributions of Functions of a Random Variable"
subtitle: "stat2.1"
classification: "Statistics 2.1"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Transformation of Random Variables

If $X$ is a random variable with cdf $F_X(x)$, then any function of $X$, say $Y = g(X)$, is also a random variable.
We can describe the probabilistic behavior of $Y$ in terms of $X$ and $g$.

\\[
P(Y \in A) = P( g(X) \in A ) = P(X \in g^{-1}(A))
\\]

where $g^{-1}(A)$ is the preimage of $A$ under $g$. Formally, if we write $y=g(x)$, the
function $g$ defines a mapping from the original sample space of $X$, $\mathscr{X}$, to a new sample space,
$\mathscr{Y}$, the sample space of $Y$. A preimage of a set $A \subseteq \mathscr{Y}$ is the set of all points in $\mathscr{X}$ that map to $A$ under $g$:

\\[
g^{-1}(A) = \set{ x \in \mathscr{X} \mid g(x) \in A }
\\]

Basically, $A$ and $g^{-1}(A)$ are sets, but if they are singletons(i.e., sets with one element),
we can omit the set notation.

### Transformation of PDFs

Suppose that $X$ and $Y$ are discrete r
If $X$ is a continuous random variable with pdf $f_X(x)$, then the pdf of $Y = g(X)$ can be derived as follows:

\\[
f_Y(y) = P(Y=y) = \sum_{x \in g^{-1}(y)} P(X=x) = \sum_{x \in g^{-1}(y)} f_X(x)
\\]

### Example

Let $X$ be a uniform random variable on the interval $[0,2\pi]$ with pdf

\\[
f_X(x) = \begin{cases}
1/2\pi & ; 0 < x < 2\pi \nl
0 & ; \text{otherwise}
\end{cases}
\\]

Let $Y = \sin^2(X)$, then the cdf of $Y$ can be derived as follows:

\\[
\begin{align\*}
F_Y(y) &= P(Y \leq y) = P(\sin^2(X) \leq y) = P(-\sqrt{y} \leq \sin(X) \leq \sqrt{y}) \nl
&= 4P(0 \leq X \leq \arcsin\sqrt{y}) \nl
&= \frac{2\arcsin\sqrt{y}}{\pi}
\quad (0 \leq y \leq 1)
\end{align\*}
\\]

Therefore, the whole cdf and pdf is

\\[
F_Y(y) = \begin{cases}
0 & ; y < 0 \nl
\frac{2}{\pi}\arcsin\sqrt{y} & ; 0 \leq y \leq 1 \nl
1 & ; y > 1
\end{cases}
\quad
f_Y(y) = \odv{}{y} F_Y(y) = \begin{cases}
0 & ; y \le 0 \nl
1/\pi\sqrt{y(1-y)} & ; 0 < y < 1 \nl
0 & ; y \ge 1 \nl
\end{cases}
\\]

## Monotonic Transformations

If $g$ is a monotonic function, we can derive the pdf of $Y = g(X)$ more easily. First, we should
investigate the relationship between the cdf of $Y$ and the cdf of $X$.
We usually set as $\mathscr{X} = \set{ x \mid f_X(x) > 0 }$, which is called a support, for a convenience so that $g$ becomes one-to-one.
For $y\in \mathscr{Y} = g(\mathscr{X})$, we have:
- $g$ is an increasing function on $\mathscr{X}$: $F_Y(y) = F_X(g^{-1}(y))$
- $g$ is a decreasing function on $\mathscr{X}$: $F_Y(y) = 1 - F_X(g^{-1}(y))$

<details markdown="1"> <summary> Proof </summary>

If $g$ is an increasing function, we have:
\\[
F_Y(y) = P(X \leq g^{-1}(y)) = \int_{-\infty}^{g^{-1}(y)} f_X(x) \dd{x} = F_X(g^{-1}(y))
\\]

If $g$ is a decreasing function, we have:
\\[
F_Y(y) = P(X \geq g^{-1}(y)) = \int_{g^{-1}(y)}^{\infty} f_X(x) \dd{x} = 1 - F_X(g^{-1}(y))
\\]
</details>

### Transformation of PDFs

By the theorem above, we can derive the pdf of $Y = g(X)$ as follows:

\\[
f_Y(y) = \begin{cases}
\dps f_X(g^{-1}(y)) \abs{ \odv{}{y}g^{-1}(y) } & ; y \in \mathscr{Y} \nl
0 & ; y \notin \mathscr{Y}
\end{cases}
\\]

### Monotonic Partitions

Suppose there exists a partition $\set{A_0,A_1,\ldots,A_k}$ of $\mathscr{X}$ such that $P(X\in X_0) = 0$
and $f_X(x)$ is continuous on each $A_i$. Further, suppose there exist functions
$g_1(x),\ldots,g_k(x)$ defined on $A_1,\ldots,A_k$ respectively, satisfying
 - $g(x)=g_i(x)$ for $x\in A_i$
 - $g_i$ is monotonic on $A_i$
 - $g_i^{-1}(y)\in\mathcal{C}^1$ for $y\in g_i(A_i)$

Also, let's write $\mathscr{Y} = g(\mathscr{X}) = \bigcup_{i=1}^k g_i(A_i)$, which is the image of $\mathscr{X}$ under $g$.
Then the pdf of $Y = g(X)$ can be derived as follows:

\\[
f_Y(y) = \begin{cases}
\dps \sum_{i=1}^k f_X(g_i^{-1}(y)) \abs{ \odv{}{y}g_i^{-1}(y) } \mathbf{1}_{g_i(A_i)}(y) & ; y \in \mathscr{Y} \nl
0 & ; y \notin \mathscr{Y}
\end{cases}
\\]

where $\mathbf{1}_{g_i(A_i)}(y)$ is the indicator function of the set $g_i(A_i)$, which is 1 if $y\in g_i(A_i)$ and 0 otherwise.
Here, $A_0$ is a technical set that is not used in the calculation, but it is necessary to make the partition complete.

### Probability integral transformation

The probability integral transformation states that if $X$ is a random variable with continuous cdf $F_X(x)$,
then the random variable $Y = F_X(X)$ is uniformly distributed on the interval $[0,1]$.

\\[
F_Y(y) = P(F_X(X) \leq y) = y
\\]

Before we prove this theorem, we need to introduce the concept of a quantile function.
The **quantile function** of a random variable $X$ is defined as the pseudo-inverse of its cdf, i.e.,

\\[
Q_X(p) = \inf \set{ x \mid F_X(x) \geq p }
\\]

The quantile function is a non-decreasing function that maps the interval $[0,1]$ to the support of $X$.
Since $F_X(x)$ is monotonic but not necessarily strictly increasing, the inverse of $F_X(x)$ does not exist,
so we need the such definition by an infimum.

<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
F_Y(y) &= P(F_X(X) \leq y) \nl
&= P(X \leq Q_X(y)) \nl
&= F_X(Q_X(y)) \nl
&= y
\end{align\*}
\\]
</details>