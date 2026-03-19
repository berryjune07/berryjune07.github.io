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
We often denote them as $\mathrm{Sym}_n(F)$ and $\mathrm{Skew}_n(F)$, respectively.

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

## Direct sum

Given two nonempty subsets $S_1,S_2 \subset V$, the **sum** of $S_1$ and $S_2$ is defined as:

\\[
S_1 + S_2 = \Set{ \b{v}_1 + \b{v}_2 \| \b{v}_1 \in S_1, \b{v}_2 \in S_2 }
\\]

For the family of subsets $\mathcal{F} = \Set{ S_i \| i \in I }$, the sum can be notated as:

\\[
\sum \mathcal{F} = \sum_{i \in I} S_i
\\]

If $S_1$ and $S_2$ are linear subspaces of $V$ such that $S_1 \cap S_2 = \\{\b{0}\\}$ and $S_1 + S_2 = V$,
then $V$ is called the **direct sum** of $S_1$ and $S_2$, denoted as:

\\[
V = S_1 \oplus S_2
\\]

For the family of subspaces $\mathcal{F} = \Set{ S_i \| i \in I }$, the direct sum can be notated as:

\\[
\bigoplus \mathcal{F} = \bigoplus_{i \in I} S_i
\\]

It is defined if and only if for every $i \in I$,

\\[
S_i \cap \left( \sum_{j \in I, j \neq i} S_j \right) = \\{\b{0}\\}
\\]

This condition is equivalent to the following condition: for every $\b{v} \in \sum \mathcal{F}$,

* there exist unique $\b{s}\_i \in S_i$ for $i \in I$ such that $\b{v} = \sum\_{i \in I} \b{s}_i$

and it is also equivalent to the following condition:

* $\b{0} = \sum_{i \in I} \b{s}_i$ implies $\b{s}_i = \b{0}$ for every $i \in I$

Proof is omitted.

### Complementary subspace

If $W$ is a linear subspace of $V$, then a **complementary subspace** of $W$ in $V$ is a linear subspace $U$ of $V$ such that:

* $V = W \oplus U$

For example, we have:

* $\mathcal{M}_n(F) = \mathrm{Sym}_n(F) \oplus \mathrm{Skew}_n(F)$

It can be shown that for every linear subspace $W$ of $V$, there exists a complementary subspace of $W$ in $V$ (though it may not be unique).
Its proof requires the knowledge of the basis of a vector space, so it will be covered in the next section.

### External direct sum

The direct sum defined above is occasionally called the **internal direct sum** to distinguish it from the **external direct sum**.
Given vector spaces $V_1,\dots,V_n$ over $F$, the external direct sum of $V_1,\dots,V_n$ is the vector space defined as:

\\[
V_1 \boxplus \cdots \boxplus V_n = \Set{ (\b{v}_1,\dots,\b{v}_n) \| \b{v}_i \in V_i, 1 \le i \le n }
\\]

with componentwise addition and scalar multiplication.
In common, for the family of vector spaces $\mathcal{F} = \Set{ V_i \| i \in I }$, the external direct sum can be defined as:

\\[
\bigoplus {}^\text{ext} \mathcal{F} = \bigoplus_{i \in I} {}^\text{ext} V_i
= \Set{ f : I \to \bigcup_{i \in I} V_i \| f(i) \in V_i, \abs{ \supp f } < \infty }
\\]

_Direct product_ or _cartesian product_ is a more general construction that doesn't require the finiteness condition on the support of $f$.

\\[
\prod \mathcal{F} = \prod_{i \in I} V_i
= \Set{ f : I \to \bigcup_{i \in I} V_i \| f(i) \in V_i }
\\]

For finite family of vector spaces, the external direct sum and the cartesian product are identical, but for infinite family of vector spaces, the external direct sum is a proper subspace of the cartesian product.

## Coset and quotient space

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

If $V = W \oplus U$ for some linear subspace $U$ of $V$, then we can show that $V/W$ is isomorphic to $U$.
We will cover the concept of isomorphism later, but for now, we can understand that $V/W$ and $U$ are "the same" vector space in the sense that they have the same structure as vector spaces.

## Lattice of subspaces

The set $\mathcal{S}(V)$ of all linear subspaces of $V$ is partially ordered by set inclusion.
The zero subspace is the least element of $\mathcal{S}(V)$, and $V$ itself is the greatest element of $\mathcal{S}(V)$.
If we consider $(\mathcal{S}(V),\le)$ as a poset(partially ordered set),
then we can show that for $S_1,S_2\in\mathcal{S}(V)$:

* $S_1 + S_2 = \sup(S_1,S_2)$
* $S_1 \cap S_2 = \inf(S_1,S_2)$

where the supremum and infimum are taken with respect to the partial order $\le$, and return the element of $\mathcal{S}(V)$.
Thus, $(\mathcal{S}(V),+,\cap)$ is a _lattice_, where the _join_ operation is the sum of subspaces and the _meet_ operation is the intersection of subspaces.
