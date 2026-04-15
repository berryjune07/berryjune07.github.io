---
layout: post
title: "Ordered Bases and Coordinate Matrices"
subtitle: "la1.5"
classification: "Linear Algebra 1.5"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Ordered Basis

Let $V$ be a vector space of dimension $n$ on a field $F$. An **ordered basis** for $V$ is an ordered $n$-tuple of vectors $(\b{v}_1, \dots, \b{v}_n)$
such that $\Set{\b{v}_1, \dots, \b{v}_n}$ is a basis of $V$.
If $\mathcal{B} = (\b{v}_1, \dots, \b{v}_n)$ is an ordered basis of $V$, then for each vector $\b{v} \in V$,
there exist unique ordered $n$-tuples of scalars $(a_1, \dots, a_n)$ such that

\\[
\b{v} = \sum_{i=1}^n a_i \b{v}_i
\\]

## Coordinate Map and Coordinate Matrix

Accordingly, we can define the **coordinate map** $\phi_\mathcal{B} : V \to F^n$ by

\\[
\phi_\mathcal{B}(\b{v}) = \[\b{v}\]_\mathcal{B} = \begin{bmatrix}
a_1 \nl \vdots \nl  a_n
\end{bmatrix}
\\]

where the column matrix $\[\b{v}\]\_\mathcal{B}$ is called the **coordinate matrix** of $\b{v}$ relative to $\mathcal{B}$.
Clearly, knowing $\mathcal{B}$ and $\[\b{v}\]\_\mathcal{B}$ allows us to reconstruct $\b{v}$.

Furthermore, it is easy to see that the coordinate map $\phi_\mathcal{B}$ is bijective and preserves the vector space operations, that is:

\\[
\phi_\mathcal{B}(\b{v} + \b{w}) = \phi_\mathcal{B}(\b{v}) + \phi_\mathcal{B}(\b{w}) \nl
\phi_\mathcal{B}(c \b{v}) = c \phi_\mathcal{B}(\b{v})
\\]