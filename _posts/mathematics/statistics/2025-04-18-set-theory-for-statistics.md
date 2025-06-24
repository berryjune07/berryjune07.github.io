---
layout: post
title: "Set Theory for Statistics"
subtitle: "stat1.1"
classification: "Statistics 1.1"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

##  Sample Space and Events

In statistics, we often deal with experiments or processes that yield outcomes.
The **sample space** is the set of all possible outcomes of an experiment or process.
An **event** is a subset of the sample space, representing a specific outcome or a group of outcomes that we are interested in.
We can classify sample spaces into two types:
- **Countable Sample Space**: A sample space is countable if it can be put into a one-to-one correspondence with the set of natural numbers.
- **Uncountable Sample Space**: A sample space is uncountable if it cannot be put into a one-to-one correspondence with the set of natural numbers, such as the set of real numbers.

For example, the sample space of rolling a die $S = \set{1, 2, 3, 4, 5, 6 }$ is countable, while the sample space of measuring the height of a person is uncountable (it can take any real value within a certain range).

## Set Relationships and Operations

We first need to define the following two relationships between events (or sets; implying that we are using set theory):

- **Containment**: $A\subset B \iff (\forall x\in A \implies x\in B) $
- **Equality**: $A = B \iff (A\subset B \land B\subset A) $

Also, we have the following elementary set operations:

- **Union**: $A \cup B = \set{x \mid x \in A \lor x \in B}$
- **Intersection**: $A \cap B = \set{x \mid x \in A \land x \in B}$
- **Complementation**: $A^\complement = \set{x \mid x \notin A}$

### Elementary Identities

For any events, $A$, $B$, and $C$, defined on a sample space $S$, the following identities hold:

- **Commutativity**: 
  - $A \cup B = B \cup A$
  - $A \cap B = B \cap A$
- **Associativity**:
  - $(A \cup B) \cup C = A \cup (B \cup C)$
  - $(A \cap B) \cap C = A \cap (B \cap C)$
- **Distributivity**:
  - $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
  - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
- **De Morgan's Laws**:
  - $(A \cup B)^\complement = A^\complement \cap B^\complement$
  - $(A \cap B)^\complement = A^\complement \cup B^\complement$

Proofs of these identities are left as a workout for set theory readers.

### Infinite Unions and Intersections

Since the associativity of union and intersection holds, we can extend these operations to infinite collections of sets.

For any collection of sets $\set{A_i}_{i \in I}$ indexed by some index set $I$, we define:

- **Infinite Union**:
\\[ \bigcup_{i \in I} A_i = \Set{x \mid \exists i \in I, x \in A_i} \\]
- **Infinite Intersection**:
\\[ \bigcap_{i \in I} A_i = \Set{x \mid \forall i \in I, x \in A_i} \\]

Here the index set $I$ can be any set, including infinite sets, and the definitions extend the finite cases to infinite collections of sets.

## Disjoint Events

Two events (or sets) $A$ and $B$ are said to be **disjoint** (or mutually exclusive) they have no elements in common, i.e., $A \cap B = \emptyset$.
The events $A_1, A_2, \ldots, A_n$ are said to be **pairwise disjoint** if for any $i \neq j$, $A_i \cap A_j = \emptyset$.
Disjoint sets are sets that do not overlap, meaning they do not share any elements.

## Partitions

If $\set{A_i}\_{i \in I}$ are pairwise disjoint events such that satisfies,
$\bigcup_{i\in I} A_i = S$, then we say that $ \set{A_i}_{i \in I} $ is a **partition** of the sample space $S$.
