---
layout: post
title: "PS: Mertens Trick"
subtitle: "ps-mertens-trick"
categories: computer-science
tags: problem-solving
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## [[BOJ 16164] Möbius Madness](https://www.acmicpc.net/problem/16164)

### Task

Compute:

\\[
\sum_{d=1}^{N} \mu(Ld) \left\lfloor \frac{N}{d} \right\rfloor^{K}
\\]

for given integers $N$, $K$, and $L$.

### Solution

First, we observe that if $\mu(L) = 0$, the entire sum becomes zero.
Thus, we only need to consider the case where $\mu(L) \neq 0$.
In this case, we can factor out $\mu(L)$ from the sum:

\\[
\mu(L) \sum_{d=1}^{N} \frac{\mu(Ld)}{\mu(L)} \left\lfloor \frac{N}{d} \right\rfloor^{K}
\\]

Let's denote as:

\\[
\mu_L(d) = \frac{\mu(Ld)}{\mu(L)} = \mu(d) \[ \gcd(d, L) = 1 \]
\\]

Then, our task reduces to computing:

\\[
\mu(L) \sum_{i:d_i \le N} \left( S_{\mu_L}(d_{i+1}-1) - S_{\mu_L}(d_i - 1) \right) a_i^{K}
\\]

where $d_0 = 1$, $a_i = \left\lfloor \frac{N}{d_i} \right\rfloor$, and $d_{i+1} = \left\lfloor \frac{N}{a_i} \right\rfloor + 1$.
To compute this efficiently, we need to find a way to compute $S_{\mu_L}(n) = \sum_{i=1}^{n} \mu_L(i)$ quickly.
Let's use the [**Mertens trick**](/computer-science/mertens-trick.html).
We can verify that $\mu_L(d)$ is a multiplicative function.
Specifically, for a prime $p$:
- If $p \| L$, then $\mu_L(p) = 0$.
- If $p \nmid L$, then $\mu_L(p) = -1$
- $\mu_L(1) = 1$
- $\mu_L(p^k) = 0$ for $k \ge 2$.

Remining that $\mu_L * 1$ is also multiplicative, we have:

\\[
(\mu_L * 1)(n) = \prod_{p^k \| n} (1 + \mu_L(p))
\\]

Let's denote $P(n) = \Set{p \in \mathbb{P} \| p \| n}$.
Then, we can express $(\mu_L * 1)(n)$ as:

\\[
(\mu_L * 1)(n) = \[ P(n) \subseteq P(L) \]
\\]

Thus, the recursion for $S_{\mu_L}(n)$ becomes:

\\[
\begin{align\*}
S_{\mu_L}(n) &= \frac{1}{1(1)} \left( S_{\mu_L * 1}(n) - \sum_{i:2\le d_i \le n} S_{\mu_L}(a_i) \left( S_1(d_{i+1}-1) - S_1(d_i-1) \right) \right) \nl
&= S_{\mu_L * 1}(n) - \sum_{i:2\le d_i \le n} S_{\mu_L}(a_i) \left( d_{i+1}-d_i \right)
\end{align\*}
\\]

We need to compute $S_{\mu_L * 1}(n)$ efficiently.

\\[
S_{\mu_L * 1}(n) = \sum_{i=1}^{n} \[ P(i) \subseteq P(L) \]
\\]

which counts the integers up to $n$ whose prime factors are all in $P(L)$.
We can compute this using a depth-first search (DFS) approach.
Starting from 1, we can multiply by each prime in $P(L)$ and generate all valid integers up to $n$.

\\[
V = \Set{ n \le N \| P(n) \subseteq P(L) }
\\]

After generating these integers, counting integers less than or equal to $n$ can be done using binary search.
Here, we can estimate as $|V| = O\left((\log N)^{c}\right)$ for some small constant $c$.
Computing $S_{\mu_L * 1}$ at each step takes $O(\log |V|) = O(\log \log N)$ time due to binary search.
Precomputing $S_{\mu_L}(n)$ up to $M$ takes $O(M \log \log M)$ time.
Thus, the overall time complexity for computing $S_{\mu_L}(N)$ becomes:

\\[
O\left( M \log \log M + \frac{2N}{\sqrt{M}} + \frac{N}{M} \log \log N \right)
\\]

Choosing $M \approx N^{2/3}$ balances the terms, leading to an optimized complexity of:

\\[
O\left( N^{2/3} \log \log N \right)
\\]

Factorizing $L$ requires $O(L^{1/4})$ time using Pollard's rho algorithm.
Conducting the DFS takes $O(|V| \cdot |P(L)|) < O\left((\log N)^{c} \log L\right)$ time.
Calculating the final sum takes $O(\sqrt{N} \log K)$ time.
Thus, the overall time complexity is:

\\[
O\left( N^{2/3} \log \log N + L^{1/4} + (\log N)^c \log L + \sqrt{N} \log K \right)
\\]

which is efficient enough for the given constraints.

## [[BOJ 19549] 레이저 연구소](https://www.acmicpc.net/problem/19549)

### Task

We have an $N\times M$ grid of unit squares:
- $(N+1)(M+1)$ buildings at grid points
- $2NM + N + M$ walls on edges

A laser is fired between **every pair of buildings** (not parallel to x/y axes).  
Each shot burns:
- all buildings on the line (cost $A$ each)
- all crossed walls (cost $B$ each)

After every shot, everything is repaired.  
Find the **total repair cost** for all valid laser shots.

### Solution

Suppose firing a laser from building $(0,0)$ to $(n,m)$.
- It burns $\gcd(n,m) + 1$ buildings.
- It crosses $(n-\gcd(n,m)) + (m-\gcd(n,m)) = n+m-2\gcd(n,m)$ walls.

Thus, the cost for this shot is:

\\[
A + (n+m)B + \gcd(n,m)(A - 2B)
\\]

To find the total cost, we sum over all pairs of buildings.
There are $(N+1-n)(M+1-m)$ pairs of buildings with relative position $(n,m)$.
Also, we can fire lasers in four distinct ways for each pair, since there are two diagonals and two directions for each rectangle.
Thus, the total cost is:

\\[
4 \sum_{i=1}^{N} \sum_{j=1}^{M} (N+1-i)(M+1-j) \left( A + (i+j)B + \gcd(i,j)(A - 2B) \right)
\\]

We can sum up the first two terms easily.

\\[
4 \sum_{i=1}^{N} \sum_{j=1}^{M} (N+1-i)(M+1-j) A = 4 \sum_{i=1}^{N} \sum_{j=1}^{M} Aij = AN(N+1)M(M+1) \nl
\\]

\\[
\begin{aligned}
& 4 \sum_{i=1}^{N} \sum_{j=1}^{M} (N+1-i)(M+1-j) (i+j)B \nl
= & 4 \sum_{i=1}^{N} \sum_{j=1}^{M} i(N+1-i)jB + 4 \sum_{i=1}^{N} \sum_{j=1}^{M} j(N+1-i)jB \nl
= & 4 \cdot \frac{N(N+1)(N+2)}{6} \cdot \frac{M(M+1)}{2} B + 4 \cdot \frac{M(M+1)(M+2)}{6} \cdot \frac{N(N+1)}{2} B \nl
= & \frac{BN(N+1)M(M+1)(N+M+4)}{3}
\end{aligned}
\\]

To compute the last term, let's define a sum:

\\[
S_{ab} = \sum_{i=1}^{N} \sum_{j=1}^{M} i^a j^b \gcd(i,j)
\\]

Then, we can express the last term as:

\\[
4(A - 2B) \left\[ (N+1)(M+1) S_{00} - (N+1) S_{01} - (M+1) S_{10} + S_{11} \right\]
\\]

Then, the total cost is:

\\[
N(N+1)M(M+1) \left( A + \frac{B(N+M+4)}{3} \right) + 4(A - 2B) \left\[ (N+1)(M+1) S_{00} - (N+1) S_{01} - (M+1) S_{10} + S_{11} \right\]
\\]

Now, we need to compute $S_{ab}$ efficiently.
Let's transform the sum by grouping terms with the same gcd.

\\[
\begin{aligned}
S_{ab} & = \sum_{i=1}^{N} \sum_{j=1}^{M} i^a j^b \gcd(i,j) \nl
& = \sum_{i=1}^N \sum_{j=1}^M i^a j^b \sum_{d=1}^{\min(i,j)} d \cdot \[\gcd(i,j) = d\] \nl
& = \sum_{d=1}^{\min(N,M)} \sum_{i=1}^{\lfloor N/d \rfloor} \sum_{j=1}^{\lfloor M/d \rfloor} (di)^a (dj)^b d \cdot \[\gcd(i,j) = 1\] \nl
& = \sum_{d=1}^{\min(N,M)} \sum_{i=1}^{\lfloor N/d \rfloor} \sum_{j=1}^{\lfloor M/d \rfloor} d^{a+b+1} i^a j^b \sum_{t|i,j} \mu(t) \nl
& = \sum_{d=1}^{\min(N,M)} \sum_{t\ge 1} d^{a+b+1} \mu(t) \sum_{i=1}^{\lfloor N/dt \rfloor} \sum_{j=1}^{\lfloor M/dt \rfloor} (it)^a (jt)^b \nl
& = \sum_{d=1}^{\min(N,M)} \sum_{t\ge 1} d^{a+b+1} t^{a+b} \mu(t) \sum_{i=1}^{\lfloor N/dt \rfloor} i^a \sum_{j=1}^{\lfloor M/dt \rfloor} j^b \nl
& = \sum_{k=1}^{\min(N,M)} \sum_{t|k} \frac{k^{a+b+1}}{t} \mu(t) \sum_{i=1}^{\lfloor N/k \rfloor} i^a \sum_{j=1}^{\lfloor M/k \rfloor} j^b \nl
& = \sum_{k=1}^{\min(N,M)} k^{a+b+1} \cdot \frac{\phi(k)}{k} \cdot S_{\text{Id}\_a}\left(\left\lfloor \frac{N}{k} \right\rfloor\right) S_{\text{Id}\_b}\left(\left\lfloor \frac{M}{k} \right\rfloor\right) \nl
& = \sum_{d=1}^{\min(N,M)} d^{a+b} \phi(d) S_{\text{Id}\_a}\left(\left\lfloor \frac{N}{d} \right\rfloor\right) S_{\text{Id}\_b}\left(\left\lfloor \frac{M}{d} \right\rfloor\right)
\end{aligned}
\\]

where $S_{\text{Id}\_k}(n) = \sum_{d=1}^{n} d^k$.
We can compute $S_{\text{Id}\_k}(n)$ in $O(1)$ time using the formulas for sums of powers.
Grouping by values of $\lfloor N/d \rfloor$ and $\lfloor M/d \rfloor$, we can reduce the
number of terms in the sum to $O(\sqrt{N} + \sqrt{M})$.
By denoting as $d_0 = 1$, $p_i = \lfloor N/d_i \rfloor$, $q_i = \lfloor M/d_i \rfloor$, and

\\[
d_{i+1} = \min\left(\left\lfloor \frac{N}{p_i} \right\rfloor, \left\lfloor \frac{M}{q_i} \right\rfloor\right) + 1
\\]

By defining $f(d) = d^{a+b} \phi(d)$, the sum can be computed as:

\\[
\sum_{i:d_i \le \min(N,M)} \left( S_f(d_{i+1}-1) - S_f(d_i-1) \right) S_{\text{Id}\_a}(p_i) S_{\text{Id}\_b}(q_i)
\\]

Now what remains is to compute $S_f$ efficiently.
By using the [**Mertens trick**](/computer-science/mertens-trick.html), we can compute $S_f(n)$ in $O\left(n^{2/3}\right)$ time.
Using the relationship $f * \text{Id}\_{a+b} = \text{Id}\_{a+b+1}$, we have:

\\[
\begin{aligned}
S_f(n) & = \frac{1}{\text{Id}\_{a+b}(1)} \left( S_{\text{Id}\_{a+b+1}}(n) - \sum_{i:2\le d_i \le n} S_f\left( a_i \right) \left( S_{\text{Id}\_{a+b}}(d_{i+1}-1) - S_{\text{Id}\_{a+b}}(d_i-1) \right) \right) \nl
& = S_{\text{Id}\_{a+b+1}}(n) - \sum_{i:2\le d_i \le n} S_f\left( a_i \right) \left( S_{\text{Id}\_{a+b}}(d_{i+1}-1) - S_{\text{Id}_{a+b}}(d_i-1) \right)
\end{aligned}
\\]

Since $S_{\text{Id}\_k}(n)$ can be computed in $O(1)$ time, we can compute all required $S_f(n)$ values using memoization in $O\left(N^{2/3}+M^{2/3}\right)$ time.
Thus, the overall time complexity is $O\left(N^{2/3}+M^{2/3}+\sqrt{N}+\sqrt{M}\right) = O\left(N^{2/3}+M^{2/3}\right)$, which is efficient enough for the given constraints.

## [[BOJ 32240] 비로소 서로소](https://www.acmicpc.net/problem/32240)

### Task

Compute:

\\[
\sum_{i=1}^{N} \sum_{j=1}^{N} (i+j) \[\gcd(i,j) = 1\]
\\]

for given integer $N$.

### Solution

Computing directly would take more than $O(N^2)$ time, which is too slow for large $N$.
Instead, we transform the sum as follows:

\\[
\begin{align\*}
& \sum_{i=1}^{N} \sum_{j=1}^{N} (i+j) \[\gcd(i,j) = 1\] \nl
=& \sum_{i=1}^{N} \sum_{j=1}^{N} (i+j) \sum_{d \| \gcd(i,j)} \mu(d)
= \sum_{i=1}^{N} \sum_{j=1}^{N} (i+j) \sum_{d=1}^{\min(i,j)} \mu(d) \[d \| i\] \[d \| j\] \nl
=& \sum_{d=1}^{N} \mu(d) \sum_{i=1}^{\lfloor N/d \rfloor} \sum_{j=1}^{\lfloor N/d \rfloor} (di + dj)
= \sum_{d=1}^{N} d \mu(d) \sum_{i=1}^{\lfloor N/d \rfloor} \sum_{j=1}^{\lfloor N/d \rfloor} (i + j) \nl
=& \sum_{d=1}^{N} d \mu(d) \left\lfloor \frac{N}{d} \right\rfloor^2 \left( \left\lfloor \frac{N}{d} \right\rfloor + 1 \right)
\end{align\*}
\\]

Computing this transformed sum takes $O(N \log \log N)$ time to precompute the Möbius function values and $O(N)$ time to
compute the final sum. However, this is not enough for the given constraints.

### Optimization

Let's optimize the summation by grouping terms with the same value of $\left\lfloor \frac{N}{d} \right\rfloor$.
Denote $d_0 = 1$ and $a_i = \left\lfloor \frac{N}{d_i} \right\rfloor$.

\\[
d_{i+1} = \left\lfloor \frac{N}{a_i} \right\rfloor + 1
\\]

Then, we can rewrite the sum as follows:

\\[
\sum_{i:d_i \le N} \left( \sum_{j=d_i}^{d_{i+1}-1} d \mu(d) \right) a_i^2 (a_i + 1)
\\]

This reduces the number of terms in the summation to $O(\sqrt{N})$.
Next, we have to efficiently compute the inner sum $\sum_{j=d_i}^{d_{i+1}-1} d \mu(d)$.
Precomputing $\mu(d)$ naively takes $O(N \log \log N)$ time, which is still too slow.
Instead, we can use the [**Mertens trick**](/computer-science/mertens-trick.html) to compute the inner sum in $O\left(N^{2/3}\right)$ time.
Let $f(n) = n \mu(n)$ and we should compute $S_f(n)$ quickly.
We should find a function $g(n)$ such that $S_g(n)$ and $S_{f * g}(n)$ can be computed in almost $O(1)$ time.
We can choose $g = \text{Id}$, so that $f * g = \varepsilon$.
Then, we have:

\\[
\begin{align\*}
S_f(n) &= \frac{1}{g(1)} \left( S_{f * g}(n) - \sum_{i:2\le d_i \le n} S_f\left( a_i \right) \left( S_g(d_{i+1}-1) - S_g(d_i-1) \right) \right) \nl
&= 1 - \sum_{i:2\le d_i \le n} S_f\left( a_i \right)
\frac{(d_{i+1}-1)d_{i+1}-d_i(d_i-1)}{2}
\end{align\*}
\\]

Using memoization, we can compute $S_f(n)$ in $O\left(N^{2/3}\right)$ time.
The final sum is written as:

\\[
\sum_{i:d_i \le N} \left( S_f(d_{i+1}-1) - S_f(d_i-1) \right) a_i^2 (a_i + 1)
\\]

The overall time complexity is $O\left(N^{2/3}+\sqrt{N}\right)=O\left(N^{2/3}\right)$, which is efficient enough for the given constraints.