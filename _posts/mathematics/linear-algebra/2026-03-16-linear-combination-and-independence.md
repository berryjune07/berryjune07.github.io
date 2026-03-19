---
layout: post
title: "Linear Combination and Independence"
subtitle: "la1.3"
classification: "Linear Algebra 1.3"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Linear combination and span

Given a subset $S \subseteq V$ of a vector space $V$, a **linear combination** of the vectors in $S$ is any vector that can be expressed as a finite sum of scalar multiples of vectors in $S$.

\\[
\sum_{i=1}^n c_i \b{v}_i
\\]

where $c_i \in F$ and $\b{v}_i \in S$ for $i=1,\cdots,n$.
Here, $c_i$ are called the **coefficients** of the linear combination.

The set of all linear combinations of vectors in $S$ is called the **span** of $S$, denoted by $\span(S)$.

\\[
\span(S) = \Set{ \sum_{i=1}^n c_i \b{v}_i \| n \in \mathbb{N}, c_i \in F, \b{v}_i \in S }
\\]

If $V = \span(S)$, then we say that $S$ **spans** or **generates** $V$, and $S$ is called a **spanning set** of $V$.
Let's see some properties of the span. For $S,S_1,S_2 \subseteq V$,

* $\span(\emptyset) = \\{\b{0}\\}$
* $S \subseteq \span(S)$
* $\span(S) \leq V$
* $\span(V) = V$
* $W \leq V \iff \span(W) = W$
* $S_1 \subseteq S_2 \implies \span(S_1) \subseteq \span(S_2)$
* $\span(S_1 \cup S_2) = \span(S_1) + \span(S_2)$
* $\span(S_1 \cap S_2) \subseteq (\span(S_1) \cap \span(S_2))$

These can be easily verified by the definition of span and the properties of vector spaces.

## Linear independence

A subset $S \subseteq V$ is called **linearly independent** if the only linear combination of vectors in $S$ that equals the zero vector is the trivial linear combination where all coefficients are zero.

\\[
\sum_{i=1}^n c_i \b{v}_i = \b{0} \implies \forall i, c_i = 0
\\]

for any finite collection of vectors $\b{v}_1, \cdots, \b{v}_n$ in $S$ and scalars $c_1, \cdots, c_n$ in $F$.
If $S$ is not linearly independent, then it is called **linearly dependent**.
It means that there exists a nonzero coefficient $c_i$ such that the linear combination of vectors in $S$ equals the zero vector.

* $\emptyset$ is linearly independent.
* $\b{0}\in S$ implies that $S$ is linearly dependent.
* A singleton set $\\{\b{v}\\}$ is linearly independent if and only if $\b{v} \neq \b{0}$.
* For $S_1\subseteq S_2 \subseteq V$, if $S_1$ is linearly dependent, then $S_2$ is also linearly dependent.
* For $S_1\subseteq S_2 \subseteq V$, if $S_2$ is linearly independent, then $S_1$ is also linearly independent.

We can easily verify the first three properties by the definition of linear independence.
The last property is the contrapositive of the third property, so it also holds.
Let's see the following theorem.

Let $S \subset V$ be a linearly independent set and $\b{v} \in V$ be a vector that is not in $S$. Then we have:

> $S \cup \\{\b{v}\\}$ is linearly independent if and only if $\b{v} \notin \span(S)$.

_Proof._

($\Rightarrow$) Assume that $\b{v} \in \span(S)$. Then there exist $c_1, \cdots, c_n \in F$ and $\b{v}\_1, \cdots, \b{v}\_n \in S$ such that $\b{v} = \sum\_{i=1}^n c_i \b{v}_i$. Hence:

\\[
\sum_{i=1}^n c_i \b{v}_i + (-1)\b{v} = \b{0}
\\]

so the set $\\{ \b{v}_1, \cdots, \b{v}_n, \b{v} \\}$ is linearly dependent, and thus $S \cup \\{\b{v}\\}$ is also linearly dependent.

($\Leftarrow$) Assume that $S \cup \\{\b{v}\\}$ is linearly dependent. Then there exist nonzero scalars $c_1, \cdots, c_n \in F$ and $\b{v}\_1, \cdots, \b{v}\_n \in (S \cup \\{\b{v}\\})$ such that
$\sum\_{i=1}^n c_i \b{v}_i = \b{0}$. Since $S$ is linearly independent, at least one of the $\b{v}_i$ must be $\b{v}$. Without loss of generality, assume that $\b{v}_n = \b{v}$. Then we have:

\\[
\b{v} = -c_n^{-1} \sum_{i=1}^{n-1} c_i \b{v}_i = \sum\_{i=1}^{n-1} (-c_n^{-1} c_i) \b{v}_i
\\]

so $\b{v} \in \span(S)$.

### Essentially unique representation

Let $S \subset V$ be a nonempty se. To say that a nonzero vector $\b{v} \in V$
is an **essentially unique** linear combination of vectors in $S$ means that,
up to order of terms, there is only one way to express $\b{v}$ as a linear combination of vectors in $S$.

\\[
\b{v} = \sum_{i=1}^n c_i \b{v}_i
\\]

where $c_i$ are nonzero coefficients and $\b{v}\_i$ are distinct vectors.
More explicitly, if $\b{v} = \sum\_{i=1}^n c_i \b{v}_i = \sum\_{j=1}^m d_j \b{w}_j$,
then $n = m$ and there exists a permutation $\sigma \in \mathcal{S}_n$ such that $c\_i = d\_{\sigma(i)}$ and $\b{v}\_i = \b{w}\_{\sigma(i)}$ for all $i$.

We may characterize linear independence as follows.
For $\emptyset \neq S \subset V$, the following are equivalent:
* $S$ is linearly independent.
* Every nonzero vector $\b{v} \in \span(S)$ is an essentially unique linear combination of vectors in $S$.
* No vector in $S$ is a linear combination of the other vectors in $S$.

This can be proved cyclically by the definition of linear independence and the properties of linear combinations.