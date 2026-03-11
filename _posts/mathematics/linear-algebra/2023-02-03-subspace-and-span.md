---
layout: post
title: "Linear Subspaces"
subtitle: "la1.2"
classification: "Linear Algebra 1.2"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Linear subspace

If $V$ is vector space over $F$ and $W$ is a subset of $V$, then $W$ is a **linear subspace** of $V$ if 
$W$ is a vector space over $F$ under the operations of $V$.

Equivalently, a nonempty subset $W$ is a subspace of $V$ if arbitrary linear combinations of some vectors of $W$
are also an element of $W$.

* $ \b{0} \in W \subseteq V $
* $ \b{w}_1,\b{w}_2\in W \implies \b{w}_1+\b{w}_2\in W$
* $ \b{w}\in W, c\in F \implies c\b{w}\in W$
* $ \b{w}\in W \implies -\b{w}\in W$

The last condition is redundant, since $-\b{w} = (-1)\b{w}$.
It's sometimes denoted as $W \le V$ when $W$ is a subspace of $V$, but these aren't common enough to be used without
explicitly specifying their meaning first. Especially, if $W$ is a proper subspace of $V$, we can write $W < V$.

As a corollary, all vector spaces are equipped with at least two linear subspaces: 
 - The zero subspace $\\{\b{0}\\}$
 - The vector space itself
 
These are called the **trivial subspaces** of the vector space.

### Properties

Let $\mathcal{C}$ be a collection of subspaces of $V$, and let $W = \bigcap_{U\in\mathcal{C}} U$ be the intersection of all subspaces in $\mathcal{C}$.
It is trivial that $\b{0}\in W$ since $\b{0}$ is in every subspace of $V$.
For $\forall U\in\mathcal{C}$, $\b{w}_1,\b{w}_2\in W \subseteq U$ implies $\b{w}_1+\b{w}_2\in U$, and $c\b{w}\in U$ for $\b{w}\in W \subseteq U$ and $c\in F$.
Thus, $\b{w}_1+\b{w}_2\in W$ and $c\b{w}\in W$.
Since $W$ satisfies the three conditions of being a subspace, $W$ is a subspace of $V$.

## Examples

### Transpose

The **transpose** of a matrix $A \in \mathcal{M}\_{m\times n}(F)$ is the matrix $A^\top \in \mathcal{M}\_{n\times m}(F)$ obtained by interchanging the rows and columns of $A$.

\\[
\left( A^\top \right)\_{ij} = A\_{ji}
\\]

for $1 \le i \le n$ and $1 \le j \le m$. The following properties hold:

* $(aA + bB)^\top = aA^\top$
* $\left( A^\top \right)^\top = A$

### Symmetric and skew-symmetric matrices

A **symmetric matrix** is a square matrix that is equal to its transpose, i.e., $A = A^\top$.
A **skew-symmetric matrix** is a square matrix that satisfies $A^\top = -A$.
The set of all symmetric and skew-symmetric $n \times n$ matrices over $F$ also forms a linear subspace of $\mathcal{M}_{n\times n}(F)$.

* $A+A^\top$ is symmetric
* $A-A^\top$ is skew-symmetric

### Triangular and diagonal matrices

A square matrix $A$ is called **upper triangular** if all entries below the main diagonal are zero, i.e., $A\_{ij} = 0$ for $i > j$.
It is called **lower triangular** if all entries above the main diagonal are zero, i.e., $A\_{ij} = 0$ for $i < j$.
The set of all upper or lower triangular $n \times n$ matrices over $F$ also forms a linear subspace of $\mathcal{M}_{n\times n}(F)$.

A square matrix $M$ is called **diagonal matrix** if all of its non-diagonal entries are zero, i.e., $M\_{ij} = 0$ for $i \neq j$.
The set of all diagonal $n \times n$ matrices over $F$ forms a linear subspace of $\mathcal{M}_{n\times n}(F)$.
Diagonal matrices are symmetric, but not all symmetric matrices are diagonal.

### Trace

The **trace** of a $n \times n$ square matrix $A$ is the sum of its diagonal entries, denoted as:

\\[
\tr(A) = \sum_{i=1}^n A\_{ii}
\\]

Trace is a linear functional on $\mathcal{M}_{n\times n}(F)$.

* $\tr(aA + bB) = a\tr(A) + b\tr(B)$

### Direct sum

Given two nonempty subsets $S_1,S_2 \subset V$, the **sum** of $S_1$ and $S_2$ is defined as:

\\[
S_1 + S_2 = \Set{ \b{v}_1 + \b{v}_2 \| \b{v}_1 \in S_1, \b{v}_2 \in S_2 }
\\]

If $S_1$ and $S_2$ are linear subspaces of $V$ such that $S_1 \cap S_2 = \\{\b{0}\\}$ and $S_1 + S_2 = V$,
then $V$ is called the **direct sum** of $S_1$ and $S_2$, denoted as:

\\[
V = S_1 \oplus S_2
\\]

### Coset and quotient space

Given a linear subspace $W$ of $V$ and a vector $\b{v} \in V$, the **coset** of $W$ containing $\b{v}$ is defined as:

\\[
\\{ \b{v} \\} + W = \Set{ \b{v} + \b{w} \| \b{w} \in W }
\\]

It is customary to denote this coset by $\b{v} + W$ instead of $\\{ \b{v} \\} + W$.
Addition and scalar multiplication on the set of cosets $ S = \Set{ \b{v} + W \| \b{v} \in V } $ can be defined properly,
so that $S$ forms a vector space over $F$, called the **quotient space** of $V$ by $W$, denoted as $V/W$.

\\[
V/W = \\{ \b{v} + W \| \b{v} \in V \\}
\\] 