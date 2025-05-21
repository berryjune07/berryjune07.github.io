---
layout: post
title: "A Limit of a Function"
subtitle: "cal2.1"
classification: "Calculus 2.1"
categories: mathematics
tags: calculus
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Definition of Limit

Suppose we are watching the values of a function $f(x)$ as $x$ approaches a number $a$,
without actually reaching $a$. This is the basic idea of a limit.
We can define the limit of a function preciselt using the **epsilon-delta definition**.

Let $f$ be a function defined on an open interval $I$ containing $a$ (except possibly at $a$ itself).
We say that the limit of $f(x)$ as $x$ approaches $a$ is $L$, and we write

\\[
\lim_{x \to a} f(x) = L
\\]

if for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that

\\[
0 < |x - a| < \delta \implies |f(x) - L| < \epsilon
\\]

This means that we can make the values of $f(x)$ as close to $L$ as we want by making $x$ sufficiently close to $a$.

## Limit Laws

If $L,M,c,k$ are real numbers, $n$ is a positive integer, and
\\[
\lim_{x \to a} f(x) = L, \quad \lim_{x \to a} g(x) = M
\\]
then the following limit laws hold:

\\[
\begin{align\*}
\bullet \;& \lim_{x \to a} (f(x) + g(x)) = L + M \nl
\bullet \;& \lim_{x \to a} (f(x) - g(x)) = L - M \nl
\bullet \;& \lim_{x \to a} kf(x) = kL \nl
\bullet \;& \lim_{x \to a} f(x)g(x) = LM \nl
\bullet \;& \lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \neq 0) \nl
\bullet \;& \lim_{x \to a} f(x)^n = L^n \nl
\bullet \;& \lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L} \quad (2\mid n \rightarrow L \geq 0)
\end{align*}
\\]

### Proof of Limit Laws

The proof of the limit laws is based on the epsilon-delta definition of limits.

\1. $ \lim_{x \to a} (f(x) \pm g(x)) = L \pm M $
<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
& \forall \varepsilon>0, \exists \delta_1,\delta_2>0 \quad \text{s.t.} \quad
\begin{cases}
\dps 0<|x-a|<\delta_1 \implies |f(x)-L|<\frac{\varepsilon}{2} \nl \nl
\dps 0<|x-a|<\delta_2 \implies |g(x)-M|<\frac{\varepsilon}{2} 
\end{cases} \nl
& \delta = \min(\delta_1,\delta_2) \nl\nl
& \begin{aligned} 0<|x-a|<\delta \implies |f(x)\pm g(x) - (L\pm M)| &\leq |f(x)-L| + |g(x)-M| \nl
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned} \nl
& \therefore \lim_{x \to a} (f(x) \pm g(x)) = L \pm M
\end{align\*}
\\]
</details> <br>

\2. $ \lim_{x \to a} f(x)g(x) = LM $
<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
& \forall \varepsilon>0, \exists \delta_1,\delta_2,\delta_3>0 \quad \text{s.t.} \quad
\begin{cases}
\dps 0<|x-a|<\delta_1 \implies |g(x)-M|<\frac{\varepsilon}{2(|L|+1)} \nl \nl
\dps 0<|x-a|<\delta_2 \implies |g(x)-M|<1 \implies |g(x)|<|M|+1 \nl \nl
\dps 0<|x-a|<\delta_3 \implies |f(x)-L|<\frac{\varepsilon}{2(|M|+1)}
\end{cases} \nl
& \delta = \min(\delta_1,\delta_2,\delta_3) \nl\nl
& \begin{aligned} 0<|x-a|<\delta \implies |f(x)g(x) - LM| &\leq |f(x)g(x) - Lg(x)| + |Lg(x) - LM| \nl
&= |f(x) - L||g(x)| + |L||g(x) - M| \nl
&< \frac{\varepsilon}{2(|M|+1)}(|M|+1) + |L|\frac{\varepsilon}{2(|L|+1)} \nl
&\leq \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned} \nl
& \therefore \lim_{x \to a} f(x)g(x) = LM
\end{align\*}
\\]
</details> <br>

\3. $ \lim_{x \to a} 1/f(x) = 1/L \quad (L \neq 0) $
<details markdown="1"> <summary> Proof </summary>
\\[
\begin{align\*}
& \forall \varepsilon>0, \exists \delta_1,\delta_2>0 \quad \text{s.t.} \quad
\begin{cases}
\dps 0<|x-a|<\delta_1 \implies |f(x)-L|<\frac{|L|}{2} \implies |f(x)|>\frac{|L|}{2} \nl \nl
\dps 0<|x-a|<\delta_2 \implies |f(x)-L|<\frac{|L|^2}{2}\varepsilon
\end{cases} \nl
& \delta = \min(\delta_1,\delta_2) \nl\nl
& \begin{aligned} 0<|x-a|<\delta \implies \left|\frac{1}{f(x)} - \frac{1}{L}\right| &= \left|\frac{f(x) - L}{f(x)L}\right| \nl
&< \frac{|f(x) - L|}{\frac{|L|}{2}|L|} = \frac{2|f(x) - L|}{|L|^2} \nl
&< \frac{2\varepsilon}{|L|^2} \cdot \frac{|L|^2}{2} = \varepsilon \end{aligned} \nl
& \therefore \lim_{x \to a} \frac{1}{f(x)} = \frac{1}{L}
\end{align\*}
\\]
</details> <br>

We can prove the other limit laws using the above equations already proved.
The last limit law, $ \lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L} $, is only the exception.
Knowledge about continuous functions is required to prove it, so we will not prove it here.


### Limits of Polynomials

Let $f(x)\in \mathbb{R}[x]$ be a polynomial function.

\\[
\lim_{x \to a} f(x) = f(a)
\\]

We can prove this by a simple induction.

### Limits of Rational Functions

Let $P(x)$ and $Q(x)$ be polynomials such that $Q(a) \neq 0$.

\\[
\lim_{x \to a} \frac{P(x)}{Q(x)} = \frac{P(a)}{Q(a)}
\\]

It is trivial by the quotient law.

### Sandwich Theorem

Suppose that $g(x) \leq f(x) \leq h(x)$ for all $x$ in some open interval containing $a$, except possibly at $a$ itself.
Then the following holds:

\\[
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L \implies \lim_{x \to a} f(x) = L
\\]

It is called the **sandwich theorem** because the function $f(x)$ is caught between $g(x)$ and $h(x)$ just like a ham between two slices of bread.
Thus, it is also called the **squeeze theorem**. Lets' prove it.

\\[
\begin{align\*}
& \forall \varepsilon>0, \exists \delta_1,\delta_2>0 \quad \text{s.t.} \quad
\begin{cases}
\dps 0<|x-a|<\delta_1 \implies |g(x)-L|<\varepsilon \implies L-\varepsilon<g(x)<L+\varepsilon \nl
\dps 0<|x-a|<\delta_2 \implies |h(x)-L|<\varepsilon \implies L-\varepsilon<h(x)<L+\varepsilon
\end{cases} \nl
& \delta = \min(\delta_1,\delta_2) \nl\nl
& 0<|x-a|<\delta \implies L-\varepsilon < g(x) \le f(x) \le h(x)<L+\varepsilon
\implies |f(x) - L| < \varepsilon \nl
& \therefore \lim_{x \to a} f(x) = L
\end{align\*}
\\]

Sandwich theorem is very useful to find the specific limit of a function.