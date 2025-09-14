---
layout: post
title: "Order Statistics"
subtitle: "stat5.3"
classification: "Statistics 5.3"
categories: mathematics
tags: statistics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Order Statistics

The **order statistics** of a random sample $X_1,\ldots,X_n$ are the random variables obtained by arranging the sample values in increasing order.
We denote the order statistics by $X_{(1)},\ldots,X_{(n)}$, where $X_{(1)}$ is the smallest value in the sample, $X_{(2)}$ is the second smallest value, and so on, with $X_{(n)}$ being the largest value.

\\[
X_{(i)} = \min \left( \bigcup_{i=1}^n \\{ X_i \\} \setminus \bigcup_{j=1}^{i-1} \\{ X_{(j)} \\} \right)
\\]

which are defined recursively.
Since they are random variables, we can discuss their distributions.

### Discrete Case

Let $X_1,\ldots, X_n$ be a random sample from a discrete distribution with pmf $f_X(x_i)=p_i$ where $x_1<x_2<\cdots$ are the
support points of the distribution. Define

\\[
P_i = P(X \leq x_i) = \sum_{j=1}^i p_j
\\]

with $P_0=0$. Then the event $X_{(k)} \leq x_i$ occurs if at least $k$ of the $X_j$'s are less than or equal to $x_i$.
The event $X_j \leq x_i$ has probability $P_i$, and the number of $X_j$'s that are less than or equal to $x_i$ has a binomial distribution with parameters $n$ and $P_i$.
Thus,

\\[
P(X_{(k)} \leq x_i) = \sum_{j=k}^n \binom{n}{j} P_i^j (1-P_i)^{n-j}
\\]

The pmf of $X_{(k)}$ is therefore

\\[
P(X_{(k)} = x_i) = \sum_{j=k}^n \binom{n}{j} \left\[ P_i^j (1-P_i)^{n-j} - P_{i-1}^j (1-P_{i-1})^{n-j} \right\]
\\]

### Continuous Case

Let $X_1,\ldots,X_n$ be a random sample from a continuous distribution with pdf $f_X(x)$ and cdf $F_X(x)$.
Then with a similar argument as in the discrete case, we have

\\[
F_{X_{(k)}}(x) = \sum_{j=k}^n \binom{n}{j} F_X(x)^j (1-F_X(x))^{n-j}
\\]

and

\\[
f_{X_{(k)}}(x) = \frac{n!}{(k-1)!(n-k)!} f_X(x) F_X(x)^{k-1} (1-F_X(x))^{n-k}
\\]

which is just obtained by differentiating $F_{X_{(k)}}(x)$.

### Joint Distribution of Order Statistics

Let $X_1,\ldots,X_n$ be a random sample from a continuous distribution with pdf $f_X(x)$ and cdf $F_X(x)$.
Then the joint pdf of $X_{(i)}$ and $X_{(j)}$ for $1 \leq i < j \leq n$ is given by:

\\[
f_{X_{(i)},X_{(j)}}(x_i,x_j) = \begin{cases}
\dps \frac{n!}{(i-1)!(j-i-1)!(n-j)!} f_X(x_i) f_X(x_j) F_X(x_i)^{i-1} (F_X(x_j)-F_X(x_i))^{j-i-1} (1-F_X(x_j))^{n-j} &;  x_i < x_j \nt
0 &; \text{otherwise}
\end{cases}
\\]

This is also derived similarly as the marginal case, only differing in that we need to consider three regions so that required to use the multinomial distribution.
We can easily calculate the joint pdf of all the order statistics as follows:

\\[
f_{X_{(1)},\cdots,X_{(n)}}(x_1,\cdots,x_n) = \begin{cases}
\dps n! \prod_{i=1}^n f_X(x_i) &; x_1 < \cdots < x_n \nt
0 &; \text{otherwise}
\end{cases}
\\]

## Miscellaneous Statistics

### Sample Range

The **sample range** is defined as the difference between the largest and smallest values in a sample:

\\[
R = X_{(n)} - X_{(1)}
\\]

The pdf of the sample range is given by:

\\[
f_R(r) = n(n-1) \int_{-\infty}^{\infty} f_X(x) f_X(x+r) [F_X(x+r)-F_X(x)]^{n-2} \, \dd{x}, \quad r > 0
\\]

which can be derived by using the joint pdf of $X_{(1)}$ and $X_{(n)}$. The cdf of the sample range is given by:

\\[
F_R(r) = n \int_{-\infty}^{\infty} f_X(x) [F_X(x+r)-F_X(x)]^{n-1} \, \dd{x}, \quad r > 0
\\]

### Sample Median

The **sample median** is defined as the middle value of a sample when the sample size $n$ is odd, and the average of the two middle values when $n$ is even.

\\[
M = \begin{cases}
X_{((n+1)/2)} &; 2 \nmid n \nl
(X_{(n/2)} + X_{(n/2+1)})/2 &; 2 \mid n
\end{cases}
\\]

Median is a robust measure of central tendency, as it is less affected by outliers and skewed data compared to the mean.

### Sample Percentile

The **sample percentile** is a value below which a certain percentage of the data falls.
For $0 \le p \le 100$, the $p$-th percentile of a sample with size $n$ is defined as:

\\[
P_p = (1-\\{L\\}) X_{(\lfloor L \\rfloor)} + \\{L\\} X_{(\lceil L \rceil)}
\\]

where $L = \dfrac{(n-1)p}{100} + 1$, and $\\{L\\}=L - \lfloor L \rfloor$ is the fractional part of $L$.
When $L$ is an integer, the $p$-th percentile is simply the $L$-th order statistic $X_{(L)}$.
Linear interpolation is used when $L$ is not an integer to estimate the percentile value.
There is no universal agreement on the method for calculating percentiles, and different software packages may use different algorithms.
However, by the sample size $n$ increases, the differences between these methods become negligible.

In addition to the median, other commonly used percentiles include the **quartiles** (25th, 50th, and 75th percentiles) and the **deciles** (10th, 20th, ..., 90th percentiles).
The _first quartile_ ($Q_1$) is the 25th percentile $P_{25}$, the _second quartile_ ($Q_2$) is the 50th percentile $P_{50}$ (which is also the median),
and the _third quartile_ ($Q_3$) is the 75th percentile $P_{75}$.
$Q_0$ and $Q_4$ are sometimes defined as the minimum and maximum values of the sample, or the 0th and 100th percentiles $P_0$ and $P_{100}$, respectively.
The _interquartile range_ (IQR) is defined as the difference between the third and first quartiles: $\text{IQR} = Q_3 - Q_1$.