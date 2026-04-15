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

### Existence of a Basis

Now, let's prove that every nontrivial vector space has a basis.

Let $V$ be a nontrivial vector space and $I\subset V$ be a linearly independent set.
Let $S \supset I$ be a spanning set of $V$; $\span(S) = V$.
Then there exists a subset basis $\mathcal{B}$ for $V$ which $I \subseteq \mathcal{B} \subseteq S$. In particular,

* Any vector space, except the trivial vector space, has a basis.
* Any linearly independent set in $V$ is contained in some basis of $V$.
* Any spanning set of $V$ contains some basis of $V$.

_Proof._

Consider the collection $\mathcal{A} = \Set{ A \subseteq S \| I \subseteq A, A \text{ is linearly independent} }$.
Then $\mathcal{A}$ is nonempty since $I \in \mathcal{A}$. Consider the partial order on $\mathcal{A}$ given by set inclusion.
Let $\mathcal{C} \subseteq \mathcal{A}$ be a chain in $\mathcal{A}$ and $U = \bigcup_{A \in \mathcal{C}} A$.
$U$ is an upper bound of $\mathcal{C}$ since $I \subseteq U$ and $U$ is linearly independent.
Then according to [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma), $\mathcal{A}$ has a maximal element $\mathcal{B}$, which is linearly independent.

Now let's show that $\mathcal{B}$ is a basis of $V$. By the definition of $\mathcal{A}$, we have $\mathcal{B} \subseteq S$, so $\span(\mathcal{B}) \subseteq \span(S)$.
Also, if any $\b{s}\in S$ is $\b{s} \notin \span(\mathcal{B})$, then $\mathcal{B} \cup \Set{\b{s}}$ is linearly independent, contradicting the maximality of $\mathcal{B}$.
Hence, $\b{s} \in \span(\mathcal{B})$ for all $\b{s} \in S$, so $\span(S) \subseteq \span(\mathcal{B})$.
Therefore, $\span(\mathcal{B}) = \span(S) = V$, so $\mathcal{B}$ is a basis of $V$.

---

We can show that any subspace of a vector space has a complementary subspace using this theorem,
which was introduced [here](/mathematics/subspace-and-span.html#complementary-subspace).

## Dimension of a Vector Space

### Replacement Theorem

> If $V$ be a vector space and assume that the vectors $\b{v}_1,\dots,\b{v}_n$ are linearly independent
and the vectors $\b{s}_1,\dots,\b{s}_m$ span $V$. Then $n \leq m$.

_Proof._

Suppose $n > m$. Denote $S = \Set{ \b{s}_1, \dots, \b{s}_m }$,
then $\b{v}_1\in V=\span(S)$, so:

\\[
\b{v}\_1 = \sum_{i=1}^m a_i \b{s}_i
\\]

with at least one coefficient, WLOG $a_1 \neq 0$.
Then we can express $\b{s}_1$ as a linear combination of $\b{v}_1$ and the other $\b{s}_i$'s:

\\[
\b{s}\_1 = a_1^{-1} \left( \b{v}\_1 - \sum_{i=2}^m a_i \b{s}_i \right)
\\]

Therefore, $\b{s}_k \in \span((S\cup \Set{\b{v}_1}) \setminus \Set{\b{s}_k})$.
Since $\span(S\cup \Set{\b{v}_1}) = V$, we have $\span((S\cup \Set{\b{v}_1}) \setminus \Set{\b{s}_k}) = V$.
Then we can repeat the above process for $\b{v}_2, \cdots$ until we get a spanning set without vectors in $S$.

\\[
\b{v}\_j = \sum_{i=1}^{j-1} a_i \b{v}\_i + \sum_{i=j}^m a_i \b{s}_i
\\]

If $\forall i \geq j, a_i = 0$, then $\b{v}\_j \in \span(\Set{\b{v}\_1, \dots, \b{v}\_{j-1}})$, contradicting the linear independence of $\b{v}\_1,\dots,\b{v}\_n$.
Therefore, there exists some $i \geq j$ such that $a_i \neq 0$, WLOG $a_j \neq 0$, which guarantees the repeatability of the above process.
Finally, we get a spanning set $\Set{\b{v}\_1, \dots, \b{v}\_m}$ of $V$, contradicting the linear independence.
Thus, $n \leq m$.

---

By the corollary of the replacement theorem, if any vector space has a finite spanning set, then all its bases have the same number of vectors.
Suppose that $V$ has two bases $\mathcal{B}$ and $\mathcal{C}$.
Then $\mathcal{B}$ is a linearly independent set and $\mathcal{C}$ is a spanning set, so $|\mathcal{B}| \leq |\mathcal{C}|$.
Similarly, $\mathcal{C}$ is a linearly independent set and $\mathcal{B}$ is a spanning set, so $|\mathcal{C}| \leq |\mathcal{B}|$.
Therefore, $|\mathcal{B}| = |\mathcal{C}|$.

### Infinite-Dimensional Vector Spaces

A vector space is called **finite-dimensional** if it has a finite spanning set, and **infinite-dimensional** otherwise.
For infinite-dimensional cases, we can also show that all bases have the same cardinality.
Let $\mathcal{B} = \Set{ \b{b}_i \| i \in B}$ and $\mathcal{C} = \Set{ \b{c}_j \| j \in C}$ be two bases of $V$.
Then any vector $\b{c} \in \mathcal{C}$ can be written as a finite linear combination of vectors in $\mathcal{B}$, where all of the coefficients are nonzero, say:

\\[
\b{c} = \sum_{i \in U_\b{c}} r_i \b{b}_i
\\]

But because $\mathcal{C}$ is a basis, we must have:

\\[
\bigcup_{\b{c} \in \mathcal{C}} U_\b{c} = B
\\]

for if the vectors in $\mathcal{C}$ can be expressed as finite linear combinations of a proper subset $\mathcal{B}^\prime \subset \mathcal{B}$,
then $\mathcal{B}^\prime$ would also span $V$, which is contradictory.
Then since $U_\b{c} < \aleph_0$ for all $\b{c} \in \mathcal{C}$, we have:

\\[
|\mathcal{B}| = |B| \le \aleph_0 \cdot |\mathcal{C}| = |\mathcal{C}|
\\]

By reversing the role of $\mathcal{B}$ and $\mathcal{C}$, we also have $\|\mathcal{C}\| \le \|\mathcal{B}\|$, so $\|\mathcal{B}\| = \|\mathcal{C}\|$.

---

The common cardinality of all bases of a vector space $V$ is called the **dimension** of $V$, denoted by $\dim(V)$.
If $\dim(V) = \kappa$ for some cardinal $\kappa$, then we say that $V$ is **$\kappa$-dimensional**.
A vector space is finite-dimensional if and only if its dimension is finite, and infinite-dimensional otherwise.
We can easily verify the following properties of dimension:

* If $\dim(V)=n<\infty$, then any finite generating set of $V$ has at least $n$ vectors, and any linearly independent set in $V$ has at most $n$ vectors. If any of these sets has exactly $n$ vectors, then it is a basis for $V$.
* Every linearly independent subset of $V$ can be extended to a basis for $V$.
* If $W$ is a subspace of $V$, then $\dim(W) \leq \dim(V)$, and if $\dim(W) = \dim(V) < \infty$, then $W = V$.

Let's see some examples of dimensions of vector spaces. For any field $F$,

* $\dim( \\{ \b{0} \\}) = 0$
* $\dim(F^n) = n$
* $\dim(\mathcal{M}_{m \times n}(F)) = mn$
* $\dim(\mathrm{Sym}_n(F)) = \frac{n(n+1)}{2}$
* $\dim(\mathrm{Skew}_n(F)) = \frac{n(n-1)}{2}$
* $\dim(\mathcal{P}_n(F)) = n+1$
* $\dim(F[x]) = \aleph_0$
* $\dim(\mathcal{F}(X, F)) = \|F\|^{\|X\|}$

Specifying the base field is important when determining the dimension of a vector space.
For example, $\mathbb{C}^n$ can be regarded as a vector space over $\mathbb{C}$ or $\mathbb{R}$, and we have $\dim_\mathbb{C}(\mathbb{C}^n) = n$ but $\dim_\mathbb{R}(\mathbb{C}^n) = 2n$.

Also, let's see the following theorems. Let $V$ be a vector space.
- If $\mathcal{B}$ is a basis of $V$ and $\mathcal{B} = \mathcal{B}_1 \sqcup \mathcal{B}_2$, then

\\[
V = \span(\mathcal{B}_1) \oplus \span(\mathcal{B}_2)
\\]

- Let $V = S_1 \oplus S_2$ and $\mathcal{B}_i$ be a basis of $S_i$, then $\mathcal{B}_1 \sqcup \mathcal{B}_2$ is a basis of $V$.
- Let $S_1$ and $S_2$ be subspaces of vector space $V$. Then

\\[
\dim(S_1) + \dim(S_2) = \dim(S_1 + S_2) + \dim(S_1 \cap S_2)
\\]

In particular, if they are complementary,

\\[
\dim(S_1 \oplus S_2) = \dim(S_1) + \dim(S_2)
\\]

We omit the proofs here.