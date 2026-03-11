---
layout: post
title: "Vector Spaces"
subtitle: "la1.1"
classification: "Linear Algebra 1.1"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

In mathematics and physics, a vector space is a set whose elements, often called vectors,
may be added together and multiplied by numbers called scalars.
Scalars are often real numbers, but can be complex numbers or, more generally, elements of any field.


## Vector space

A **vector space** is a _module_ whose ring is a _field_.
More specifically, if we have a field $F$, then a vector space over $F$ is a set $V$ together
with two binary operations that satisfy the eight axioms(i.e. _vector axioms_) listed below.
In this context, the elements of $V$, an _$F$-vector space_, are commonly called **vectors**,
and the elements of $F$ are called **scalars**.
* $ \forall \b{u},\b{v},\b{w}\in V $
* $ \forall a,b\in F $

| Axiom                                                                   | Description                                                  |
|-------------------------------------------------------------------------|--------------------------------------------------------------|
| Associativity of vector addition                                        | $ \b{u}+(\b{v}+\b{w})=(\b{u}+\b{v})+\b{w} $                  |
| Commutativity of vector addition                                        | $ \b{u}+\b{v}=\b{v}+\b{u} $                                  |
| Identity element of vector addition                                     | $ \exist\b{0}\in V \;\text{s.t.}\; \b{v}+\b{0}=\b{v} $       |
| Inverse elements of vector addition                                     | $ \exist(-\b{v})\in V \;\text{s.t.}\; \b{v}+(-\b{v})=\b{0} $ |
| Compatibility of scalar multiplication with field multiplication        | $ a(b\b{v})=(ab)\b{v} $                                      |
| Identity element of scalar multiplication                               | $ 1\b{v}=\b{v} $                                             |
| Distributivity of scalar multiplication with respect to vector addition | $ a(\b{u}+\b{v})=a\b{u}+a\b{v} $                             |
| Distributivity of scalar multiplication with respect to field addition  | $ (a+b)\b{v}=a\b{v}+b\b{v} $                                 |

## Vectors and Matrices

An object of the form $(a_1,\cdots,a_n)$, where $a_i\in F$ for $i=1,\cdots,n$, is called an **$n$-tuple**.
The set of all n-tuples of elements of $F$ is denoted by $F^n$.
Two $n$-tuples $(a_1,\cdots,a_n)$ and $(b_1,\cdots,b_n)$ are equal if and only if $a_i=b_i$ for all $i=1,\cdots,n$.
There are several ways to express an $n$-tuple, but the most common way is to write it as a column vector:

\\[
\begin{bmatrix}
a_1 \nl \vdots \nl a_n
\end{bmatrix}
\\]

or as a row vector:

\\[
\begin{bmatrix}
a_1 & \cdots & a_n
\end{bmatrix}
\\]

Also, we can express a $mn$-tuple as an $m\times n$ **matrix** as follows:

\\[
\begin{bmatrix}
a_{11} & \cdots & a_{1n} \nl
\vdots & \ddots & \vdots \nl
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
\\]

The entries $a_{i1},\cdots,a_{in}$ of the $i$-th row of the matrix, and the entries $a_{1j},\cdots,a_{mj}$ of the $j$-th column of the matrix,
are called the **row vectors** and **column vectors** of the matrix, respectively.
We call the entries $a_{ij}$ with $i=j$ the **diagonal entries** of the matrix, and the other entries the _off-diagonal entries_.
If the number of rows and columns of a matrix are equal, then the matrix is called a **square matrix**.
The set of all $m\times n$ matrices with entries in $F$ is denoted by $\mathcal{M}_{m\times n}(F)$.
The matrix whose entries are all zero is called the **zero matrix** and is denoted by $O$.

Column vectors and row vectors can be regarded as matrices with one column and one row, respectively.
$\mathcal{M}\_{m\times n}(F)$ can be regarded as a vector space over $F$ with matrix addition and scalar multiplication defined as follows.
For $A,B\in \mathcal{M}\_{m\times n}(F)$ and $c\in F$,

* $(A+B)\_{ij}=A\_{ij}+B\_{ij}$
* $(cA)\_{ij}=cA\_{ij}$

for $i=1,\cdots,m$ and $j=1,\cdots,n$.

## Properties of Vector Spaces

For a vector space $V$ and $\b{x},\b{y},\b{z}\in V$, the following holds:

\\[
\b{x}+\b{z} = \b{y}+\b{z} \;\implies\; \b{x}=\b{y}
\\]

<details markdown="1">
<summary>Proof</summary>
\\[
\begin{align\*}
\b{x} &= \b{x}+\b{0} = \b{x}+(\b{z}+(-\b{z})) = (\b{x}+\b{z})+(-\b{z}) \nl
& = (\b{y}+\b{z})+(-\b{z}) = \b{y}+(\b{z}+(-\b{z})) = \b{y}+\b{0} = \b{y}
\end{align\*}
\\]
</details>

From the property above, we can conclude that the identity element of vector addition (i.e. the zero vector) is unique, and the inverse element of vector addition (i.e. the negative of a vector) is also unique.
This enables us to denote the zero vector by $\b{0}$ and the negative of a vector $\b{v}$ by $-\b{v}$ without ambiguity.
Also, then we can denote $\b{a}+(-\b{b})$ by $\b{a}-\b{b}$ for conciseness.

In addition, next results contains some of the elementary properties of scalar multiplication.
For $\b{v}\in V$ and $a\in F$:

* $ 0\b{v}=\b{0} $
* $ a\b{0}=\b{0} $
* $ (-a)\b{v}=-(a\b{v}) = a(-\b{v}) $

## Examples

- Matrix spaces
- Polynomial spaces
- Function spaces
- Sequence spaces