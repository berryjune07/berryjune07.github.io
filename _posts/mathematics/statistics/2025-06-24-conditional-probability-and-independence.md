---
layout: post
title: "Conditional Probability and Independence"
subtitle: "stat1.3"
classification: "Statistics 1.3"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Conditional Probability

If $A$ and $B$ are two events (where $B$ is not an empty event), the **conditional probability** of $A$ given $B$ is defined as the probability of $A$ occurring under the condition that $B$ has occurred.
\\[
P(A \| B) = \frac{P(A \cap B)}{P(B)}
\\]
- $ P(A\| A) = 1$
- If $A$ and $B$ are disjoint, $P(A\| B) = P(B\| A) = 0$

We can obtain the following equation.
\\[
P(A \cap B) = P(A \| B) P(B) = P(B \| A) P(A)
\\]

### Bayes' Theorem

Bayes' theorem relates the conditional probabilities of two events $A$ and $B$.
\\[
P(A \| B) = \frac{P(B \| A) P(A)}{P(B)}
\\]

We can also use its extended form. Let $\set{A_i}\_{i\in I}$ be a partition of the sample space, and $B$ be any non-empty event.
Then,
\\[
P(A_i \| B) = \frac{P(B \| A_i) P(A_i)}{\dps \sum_{j \in I} P(B \| A_j) P(A_j)}
\\]
is true. Bayes' theorem is useful when we want to update our beliefs about the probability of an event based on new evidence.

## Independence
Two events $A$ and $B$ are said to be **independent** if the occurrence of one does not affect the probability of the other.
This is mathematically defined as:
\\[
P(A \cap B) = P(A) P(B)
\\]
If $A$ and $B$ are independent, then:
- $P(A \| B) = P(A)$
- $P(B \| A) = P(B)$

Following paris of events are also independent:
- $A$ and $B^\complement$
- $A^\complement$ and $B$
- $A^\complement$ and $B^\complement$

### Mutually Independent Events

A collection of events $\set{A_i}\_{i \in I}$ is said to be **mutually independent**
if for every finite subset $J \subseteq I$,
\\[
P\left(\bigcap_{j \in J} A\_j\right) = \prod_{j \in J} P(A_j)
\\]