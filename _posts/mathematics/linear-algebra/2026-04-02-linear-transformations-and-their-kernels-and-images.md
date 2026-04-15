---
layout: post
title: "Linear Transformations and their Kernels and Images"
subtitle: "la2.1"
classification: "Linear Algebra 2.1"
categories: mathematics
tags: linear-algebra
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Linear Transformations

Let $V$ and $W$ be vector spaces over a field $F$. A function $T: V \to W$ is called a **linear transformation** if for all $\mathbf{u}, \mathbf{v} \in V$ and all scalars $c \in F$, the following properties hold:
- **Additivity**: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
- **Homogeneity**: $T(c\mathbf{u}) = cT(\mathbf{u})$

Then we naturally have the following properties:

- $T(\mathbf{0}_V) = \mathbf{0}_W$
- $T\left( \sum\_{i=1}^n c_i \mathbf{v}\_i \right) = \sum\_{i=1}^n c_i T(\mathbf{v}\_i)$ for any finite collection of vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ in $V$ and scalars $c_1, c_2, \ldots, c_n$ in $F$.

We have so many examples of linear transformations, such as rotations, reflections, projections, and scaling transformations in geometry, as well as differentiation and integration in calculus.
Especially, we define the following special linear transformations:
- **identity transformation**: $\iota_V: V \to V$ defined by $\iota_V(\mathbf{v}) = \mathbf{v}$ for all $\mathbf{v} \in V$.
- **zero transformation**: $0\_{V,W}: V \to W$ defined by $0\_{V,W}(\mathbf{v}) = \mathbf{0}_W$ for all $\mathbf{v} \in V$.

### Vector Space of Linear Transformations

The set of all linear transformations from $V$ to $W$ is denoted by $\mathcal{L}(V, W)$.
We can define addition and scalar multiplication on $\mathcal{L}(V, W)$ as follows.
For $T_1, T_2 \in \mathcal{L}(V, W)$ and $c \in F$, we define:
- $(T_1 + T_2)(\mathbf{v}) = T_1(\mathbf{v}) + T_2(\mathbf{v})$
- $(cT_1)(\mathbf{v}) = c(T_1(\mathbf{v}))$

With these operations, $\mathcal{L}(V, W)$ forms a _vector space_ over $F$ where
the zero vector in $\mathcal{L}(V, W)$ is the zero transformation $0\_{V,W}$, and the additive inverse of a linear transformation $T$ is given by $-T$.

A linear transformation from $V$ to $V$ is called a **linear operator** on $V$, and the set of all linear operators on $V$ is denoted by $\mathcal{L}(V) = \mathcal{L}(V, V)$.
Especially, linear operators on a real vector space is called a _real operator_ and linear operators on a complex vector space is called a _complex operator_.
Also, a linear transformation from $V$ to the base field $F$ is called a **linear functional** on $V$, and specifically the set of all linear functionals on $V$ is
called the **dual space** of $V$, denoted by $V^\ast = \mathcal{L}(V, F)$.

The following terms are also employed in the context of linear transformations:
- **Homomorphism**: A linear transformation. Their set is denoted by $\mathrm{Hom}(V, W) = \mathcal{L}(V, W)$.
- **Endomorphism**: A linear operator. Their set is denoted by $\mathrm{End}(V) = \mathcal{L}(V)$.
- **Monomorphism**: An injective linear transformation, olso called an **embedding**.
- **Epimorphism**: A surjective linear transformation.
- **Isomorphism**: A bijective linear transformation.
- **Automorphism**: A bijective linear operator. Their set is denoted by $\mathrm{Aut}(V)$.