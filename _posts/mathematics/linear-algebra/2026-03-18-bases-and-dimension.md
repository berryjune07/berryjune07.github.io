---
layout: post
title: "Bases and Dimension"
subtitle: "la1.4"
classification: "Linear Algebra 1.4"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Basis of a Vector Space

For $S \subset V$, the following are equivalent:

1. $S$ is linearly independent and spans $V$.
2. Every nonzero vector $\b{v} \in V$ is an essentially unique linear combination of vectors in $S$.
3. $S$ is a **minimal spanning set** of $V$, that is, $S$ spans $V$ but no proper subset of $S$ spans $V$.
4. $S$ is a **maximal linearly independent set**, that is, $S$ is linearly independent but no proper superset of $S$ is linearly independent.

A set of vectors satisfying any of the above equivalent conditions is called a **basis** of $V$.

_Proof._

We've seen that (1) and (2) are equivalent.

(1) $\Rightarrow$ (3): If some proper subset $S^\prime \subset S$ spans $V$, then any vector in $S \setminus S^\prime$ can be written as a linear combination of vectors in $S^\prime$, contradicting the linear independence of $S$.

(3) $\Rightarrow$ (1): If $S$ is not linearly independent, then some vector $\b{v} \in S$ can be written as a linear combination of other vectors in $S$. Then $S \setminus \Set{\b{v}}$ still spans $V$, contradicting the minimality of $S$.

(1) $\Rightarrow$ (4): If some proper superset $S^\prime \supset S$ is linearly independent, then any vector in $S^\prime \setminus S$ can be written as a linear combination of vectors in $S$, contradicting the linear independence of $S^\prime$.

(4) $\Rightarrow$ (1): If $S$ does not span $V$, then there exists a vector $\b{v} \in V \setminus \span(S)$. Then $S \cup \Set{\b{v}}$ is still linearly independent, contradicting the maximality of $S$.

### Standard Basis

A finite set $S=\Set{\b{v}_1, \dots, \b{v}_n}\subset V$ is a basis of $V$ if and only if:

\\[
V = \bigoplus_{i=1}^n \span \\{ \b{v}_i \\}
\\]

The most common example of a basis is the **standard basis** of $\mathbb{R}^n$.
The $i$-th standard basis vector $\b{e}_i$ is the vector in $\mathbb{R}^n$ with a $1$ in the $i$-th coordinate and $0$ in all other coordinates.

\\[
e_1 = (1, 0, \dots, 0) \nl
e_2 = (0, 1, \dots, 0) \nl
\vdots \nl
e_n = (0, 0, \dots, 1)
\\]

The set $\Set{\b{e}_1, \dots, \b{e}_n}$ is a standard basis of $\mathbb{R}^n$.

## Existence of a Basis

Now, let's prove that every nontrivial vector space has a basis.
