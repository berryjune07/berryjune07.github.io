---
layout: post
title: "Basic Probability Theory"
subtitle: "stat1.2"
classification: "Statistics 1.2"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Axiomatic Foundations of Probability

When an experiment is performed, the realization of the experiment is an outcome in the sample space.
If the experiment is repeated, the outcomes may vary.
The **probability** of an event is a measure of how likely that event is to occur.

### Sigma-Algebra

A collection of subsets, of a sample space $S$ is called a **sigma-algebra**(or _Borel field_), denoted by $\mathscr{B}$, if it satisfies the following properties:
 - $\emptyset \in \mathscr{B}$
 - $A \in \mathscr{B} \implies A^\complement \in \mathscr{B}$
 - $A_i \in \mathscr{B} \; (i \in I) \implies \bigcup_{i \in I} A_i \in \mathscr{B}$

By the second and third properties and the De Morgan's laws, we can also conclude that
- $A_i \in \mathscr{B} \; (i \in I) \implies \bigcap_{i \in I} A_i \in \mathscr{B}$.

Associated with sample space $S$, we can have many different sigma-algebras.
For example, the collection of the two sets $\{\emptyset, S\}$ is a sigma-algebra, called the **trivial sigma-algebra**.
The largest sigma-algebra associated with $S$ is the collection of all subsets of $S$, called the **power set** of $S$, denoted by $\mathcal{P}(S)$.

### Probability Function

A **probability function** is a function $P: \mathscr{B} \to \mathbb{R}$ that satisfies the following properties:
- $\forall A\in \mathscr{B}: \;P(A) \ge 0$
- $P(S) = 1$
- If $\set{A_i}\_{i \in I} \subseteq \mathscr{B}$ are pairwise disjoint, then
  \\[
  P\left(\bigcup_{i \in I} A_i\right) = \sum_{i \in I} P(A_i)
  \\]

The three properties above are called the **Kolmogorov axioms** of probability.
Any funcion $P$ that satisfies these axioms is called a probability function.

## Theorems

### 1

Let $S=\set{s_1, \cdots, s_n}$ be a finite sample space and $\mathscr{B}$ be any sigma-algebra on $S$.
Let $p_1, \cdots, p_n$ be non-negative real numbers such that $\sum_{i=1}^n p_i = 1$.
Then there exists a unique probability function $P: \mathscr{B} \to \mathbb{R}$ such that
\\[
P(A) = \sum_{\set{i \mid s_i \in A}} p_i
\\]
This also remains true if $S$ is countably infinite.

### 2

If $P$ is a probability function on a sigma-algebra $\mathscr{B}$, then for any $A \in \mathscr{B}$, we have:
 - $P(\emptyset) = 0$
 - $P(A) \le 1$
 - $P(A^\complement) = 1 - P(A)$

### 3

If $P$ is a probability function on a sigma-algebra $\mathscr{B}$, then for any $A, B \in \mathscr{B}$, we have:
 - $P(B\cap A^\complement) = P(B) - P(A\cap B)$
 - $P(A\cup B) = P(A) + P(B) - P(A\cap B)$
 - $A \subseteq B \implies P(A) \le P(B)$

### 4

If $P$ is a probability function on a sample space $S$ with a sigma-algebra $\mathscr{B}$, then for any partition
$\set{C_i}\_{i \in I}$ of $S$ and for any events $\set{A_i}\_{i \in I} \subseteq \mathscr{B}$, we have:
1.
\\[
P(A) = \sum_{i \in I} P(A\cap C_i)
\\]
2. Boole's Inequality:
\\[
P\left (\bigcup_{i \in I} A_i\right) \leq \sum_{i \in I} P(A_i)
\\]

<details markdown="1"> <summary> Proof of 1 </summary>
Since $\set{C_i}\_{i \in I}$ is a partition of $S$,
\\[
A = A \cup S = A \cup \left(\bigcup_{i \in I} C_i\right) = \bigcup_{i \in I} (A\cap C_i)
\\]
Thus, by the third property of the probability function,
\\[
P(A) = P\left(\bigcup_{i \in I} (A\cap C_i)\right) = \sum_{i \in I} P(A\cap C_i)
\\]
</details>
<details markdown="1"> <summary> Proof of 2 </summary>
Let $I = \set{1, 2, \cdots, n}$ and here $I$ is countable.
Let's construct a disjoint collection as follows:
\\[
A_1^\ast = A_1, \quad A_i^\ast = A_i \setminus \bigcup_{j=1}^{i-1} A_j
\\]
Then, we have
\\[
P\left(\bigcup_{i=1}^n A_i\right) = P\left(\bigcup_{i=1}^n A_i^\ast\right) = \sum_{i=1}^n P(A_i^\ast)
\\]
Since $A_i^\ast \subseteq A_i$, we have $P(A_i^\ast) \leq P(A_i)$.
Thus,
\\[
P\left(\bigcup_{i=1}^n A_i\right) \leq \sum_{i=1}^n P(A_i)
\\]
</details>

### 5(Bonferroni's Inequality)

\\[
P\left(\bigcup_{i=1}^n A_i\right) \leq \sum_{i=1}^n P(A_i) - (n-1)
\\]

<details markdown="1"> <summary> Proof </summary>
We can use the Boole's Inequality to prove this.
\\[
P\left( \bigcup_{i=1}^n A_i^\complement \right) \leq \sum_{i=1}^n P(A_i^\complement)
\\]
Using the theorem 2, we have
\\[
1 - P\left( \bigcup_{i=1}^n A_i \right) \leq n - \sum_{i=1}^n P(A_i)
\\]
</details>