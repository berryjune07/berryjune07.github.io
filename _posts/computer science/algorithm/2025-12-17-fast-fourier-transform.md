---
layout: post
title: "Fast Fourier Transform"
subtitle: "fast-fourier-transform"
categories: computer-science
tags: algorithms
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Introduction

The **Fast Fourier Transform** (**FFT**) is an algorithm for computing the **Discrete Fourier Transform** (**DFT**) in $O(n\log n)$ time.
It is usually introduced as a tool for multiplying polynomials quickly, but its main idea is more general:
it evaluates a polynomial at carefully chosen points, namely the roots of unity, and reuses the symmetry of those points.

Suppose that we have a polynomial

\\[
A(x)=a_0+a_1x+\cdots+a_{n-1}x^{n-1}.
\\]

The DFT of the coefficient vector $a=(a_0,\dots,a_{n-1})$ is the vector

\\[
\hat a_k=A(\omega_n^k)=\sum_{j=0}^{n-1}a_j\omega_n^{jk}, \quad 0\le k<n,
\\]

where

\\[
\omega_n=e^{2\pi i/n}.
\\]

In competitive programming, FFT is most commonly used to compute the convolution of two sequences.
If

\\[
A(x)=\sum_{i=0}^{n-1}a_ix^i, \quad B(x)=\sum_{j=0}^{m-1}b_jx^j,
\\]

then their product is

\\[
C(x)=A(x)B(x)=\sum_{k=0}^{n+m-2}\left(\sum_{i+j=k}a_ib_j\right)x^k.
\\]

The coefficient

\\[
c_k=\sum_{i+j=k}a_ib_j
\\]

is exactly the convolution of $a$ and $b$.
A direct computation takes $O(nm)$ time, but FFT reduces this to $O(N\log N)$, where $N$ is a power of two satisfying $N\ge n+m-1$.

## Polynomial Multiplication

The key observation is that polynomials can be represented in two different ways.

1. **Coefficient representation**:

\\[
A(x)=a_0+a_1x+\cdots+a_{n-1}x^{n-1}.
\\]

2. **Point-value representation**:

\\[
\left(x_0,A(x_0)\right),\dots,\left(x_{n-1},A(x_{n-1})\right).
\\]

If $A$ and $B$ are evaluated at the same points, then the product polynomial satisfies

\\[
C(x_i)=A(x_i)B(x_i).
\\]

Thus, polynomial multiplication can be performed by the following three steps.

1. Evaluate $A$ and $B$ at $N$ points.
2. Multiply the corresponding values.
3. Interpolate the product polynomial from those $N$ values.

The difficulty is that ordinary evaluation and interpolation are still too expensive.
FFT solves this by choosing

\\[
1,\omega_N,\omega_N^2,\dots,\omega_N^{N-1}
\\]

as the evaluation points.

## Discrete Fourier Transform

For a vector $a=(a_0,\dots,a_{n-1})$, the DFT is the linear map

\\[
\mathcal{F}_n(a)_k=\sum_{j=0}^{n-1}a_j\omega_n^{jk}.
\\]

Equivalently, it is multiplication by the Vandermonde-type matrix

\\[
F_n=
\begin{pmatrix}
1&1&1&\cdots&1\\
1&\omega_n&\omega_n^2&\cdots&\omega_n^{n-1}\\
1&\omega_n^2&\omega_n^4&\cdots&\omega_n^{2(n-1)}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&\omega_n^{n-1}&\omega_n^{2(n-1)}&\cdots&\omega_n^{(n-1)(n-1)}
\end{pmatrix}.
\\]

The inverse transform is

\\[
a_j=\frac{1}{n}\sum_{k=0}^{n-1}\hat a_k\omega_n^{-jk}.
\\]

Indeed, for $0\le j,l<n$, we have

\\[
\frac{1}{n}\sum_{k=0}^{n-1}\omega_n^{k(l-j)}
=\begin{cases}
1 &; j=l \\ 
0 &; j\ne l.
\end{cases}
\\]

If $j=l$, every term is $1$.
If $j\ne l$, then $\omega_n^{l-j}\ne 1$ and the finite geometric series gives

\\[
\sum_{k=0}^{n-1}\omega_n^{k(l-j)}
=\frac{1-\omega_n^{n(l-j)}}{1-\omega_n^{l-j}}=0.
\\]

Therefore, the inverse formula is correct.

## Divide and Conquer

Assume for simplicity that $n$ is a power of two.
Separate $A(x)$ into its even and odd parts:

\\[
A(x)=A_0(x^2)+xA_1(x^2),
\\]

where

\\[
A_0(x)=a_0+a_2x+a_4x^2+\cdots, \quad
A_1(x)=a_1+a_3x+a_5x^2+\cdots.
\\]

Now evaluate $A$ at $x=\omega_n^k$:

\\[
A(\omega_n^k)=A_0(\omega_n^{2k})+\omega_n^kA_1(\omega_n^{2k}).
\\]

Since

\\[
\omega_n^2=\omega_{n/2},
\\]

the values $A_0(\omega_n^{2k})$ and $A_1(\omega_n^{2k})$ are DFT values of size $n/2$.
Also,

\\[
\omega_n^{k+n/2}=-\omega_n^k,
\\]

so the two outputs corresponding to $k$ and $k+n/2$ are

\\[
\begin{aligned}
A(\omega_n^k)&=A_0(\omega_{n/2}^k)+\omega_n^kA_1(\omega_{n/2}^k),\\
A(\omega_n^{k+n/2})&=A_0(\omega_{n/2}^k)-\omega_n^kA_1(\omega_{n/2}^k).
\end{aligned}
\\]

This is the butterfly operation.
If

\\[
u=A_0(\omega_{n/2}^k), \quad v=\omega_n^kA_1(\omega_{n/2}^k),
\\]

then the two new values are simply

\\[
u+v, \quad u-v.
\\]

{% include_relative includes/fast-fourier-transform.html %}

## Iterative FFT

The recursive derivation naturally leads to an iterative implementation.
First, we reorder the coefficients by the bit-reversal permutation.
Then we repeatedly merge blocks of length

\\[
2,4,8,\dots,n.
\\]

For each block of length $\ell$, we combine its first half and second half using powers of

\\[
\omega_\ell=e^{2\pi i/\ell}.
\\]

The transformation in one block is

\\[
\begin{aligned}
u_j'&=u_j+\omega_\ell^jv_j,\\
v_j'&=u_j-\omega_\ell^jv_j,
\end{aligned}
\\]

for $0\le j<\ell/2$.
The inverse FFT is obtained by using $\omega_\ell^{-1}$ instead of $\omega_\ell$ and dividing every coefficient by $n$ at the end.

## Correctness

We prove that the recursive FFT computes the DFT of the input vector.
Let $A(x)$ be the polynomial represented by the coefficient vector $a=(a_0,\dots,a_{n-1})$.
For $n=1$, the transform consists of the single value $A(1)=a_0$, so the claim is trivial.

Assume now that the claim is true for size $n/2$.
Write

\\[
A(x)=A_0(x^2)+xA_1(x^2).
\\]

By the induction hypothesis, the recursive calls compute

\\[
Y_0(k)=A_0(\omega_{n/2}^k), \quad
Y_1(k)=A_1(\omega_{n/2}^k)
\\]

for $0\le k<n/2$.
Since $\omega_n^2=\omega_{n/2}$, we have

\\[
Y_0(k)=A_0(\omega_n^{2k}), \quad
Y_1(k)=A_1(\omega_n^{2k}).
\\]

For $0\le k<n/2$, the algorithm outputs

\\[
Y(k)=Y_0(k)+\omega_n^kY_1(k)
\\]

and

\\[
Y(k+n/2)=Y_0(k)-\omega_n^kY_1(k).
\\]

The first value is

\\[
Y_0(k)+\omega_n^kY_1(k)
=A_0(\omega_n^{2k})+\omega_n^kA_1(\omega_n^{2k})
=A(\omega_n^k).
\\]

For the second value, use $\omega_n^{k+n/2}=-\omega_n^k$ and

\\[
(\omega_n^{k+n/2})^2=\omega_n^{2k+n}=\omega_n^{2k}.
\\]

Thus

\\[
\begin{aligned}
Y(k+n/2)
&=A_0(\omega_n^{2k})-\omega_n^kA_1(\omega_n^{2k})\\
&=A_0((\omega_n^{k+n/2})^2)+\omega_n^{k+n/2}A_1((\omega_n^{k+n/2})^2)\\
&=A(\omega_n^{k+n/2}).
\end{aligned}
\\]

Therefore every output equals the corresponding DFT value, so the algorithm is correct by induction.

The iterative implementation is merely a bottom-up ordering of the same recursion tree.
The bit-reversal permutation places the leaves of the recursion tree in the order in which they are consumed by the bottom-up butterflies, so every iterative stage computes exactly one level of the recursive divide-and-conquer construction.

## Complexity

Let $T(n)$ be the number of arithmetic operations used by the recursive FFT on an input of length $n$.
At each step, the algorithm solves two subproblems of size $n/2$ and then performs $n/2$ butterfly operations.
Each butterfly uses one multiplication by a root of unity and two additions or subtractions, so the merging step takes $\Theta(n)$ time.
Thus,

\\[
T(n)=2T(n/2)+cn
\\]

for some constant $c>0$.
Assume $n=2^m$ and define

\\[
S(m)=\frac{T(2^m)}{2^m}.
\\]

Then

\\[
\begin{aligned}
S(m)&=\frac{2T(2^{m-1})+c2^m}{2^m}\\
&=\frac{T(2^{m-1})}{2^{m-1}}+c\\
&=S(m-1)+c.
\end{aligned}
\\]

By iterating this recurrence,

\\[
S(m)=S(0)+cm.
\\]

Therefore,

\\[
T(2^m)=2^m(S(0)+cm)=\Theta(2^m m)=\Theta(n\log n).
\\]

The iterative implementation has the same complexity.
For stage length $\ell$, the number of blocks is $n/\ell$, and each block contains $\ell/2$ butterflies.
So the number of butterflies in one stage is

\\[
\frac{n}{\ell}\cdot\frac{\ell}{2}=\frac{n}{2}.
\\]

There are $\log_2 n$ stages, so the total number of butterflies is

\\[
\frac{n}{2}\log_2 n.
\\]

Since each butterfly takes $O(1)$ arithmetic operations, the total arithmetic cost is $O(n\log n)$.
The bit-reversal permutation can be computed in $O(n)$ time using the standard incremental bit-reversal loop, and even a less optimized $O(n\log n)$ bit construction would not change the final asymptotic bound.
Thus, the total time complexity is

\\[
O(n\log n).
\\]

The algorithm stores the array in-place, so apart from the input and output array, the auxiliary memory is

\\[
O(1)
\\]

for the iterative version and

\\[
O(\log n)
\\]

for the recursion stack in the recursive version.

## Code

Let's see the sample code.

```cpp
using cd = complex<double>;
const double PI = acos(-1.0);

void fft(vector<cd> &a, bool inv){
    int n = (int)a.size();

    for(int i=1,j=0;i<n;i++){
        int bit = n >> 1;
        while(j & bit){
            j ^= bit;
            bit >>= 1;
        }
        j ^= bit;
        if(i < j) swap(a[i], a[j]);
    }

    for(int len=2; len<=n; len<<=1){
        double ang = 2 * PI / len * (inv ? -1 : 1);
        cd wlen(cos(ang), sin(ang));

        for(int i=0; i<n; i+=len){
            cd w(1, 0);
            for(int j=0; j<len/2; j++){
                cd u = a[i+j];
                cd v = a[i+j+len/2] * w;
                a[i+j] = u + v;
                a[i+j+len/2] = u - v;
                w *= wlen;
            }
        }
    }

    if(inv){
        for(cd &x : a) x /= n;
    }
}

vector<long long> multiply(vector<long long> a, vector<long long> b){
    vector<cd> fa(a.begin(), a.end()), fb(b.begin(), b.end());
    int n = 1;
    while(n < (int)a.size() + (int)b.size() - 1) n <<= 1;
    fa.resize(n);
    fb.resize(n);

    fft(fa, false);
    fft(fb, false);

    for(int i=0; i<n; i++) fa[i] *= fb[i];

    fft(fa, true);

    vector<long long> res(n);
    for(int i=0; i<n; i++){
        res[i] = llround(fa[i].real());
    }
    return res;
}
```

Floating-point FFT is usually enough when the coefficients and the final answers are not too large.
However, because the computation uses floating-point complex numbers, rounding errors may occur.
For exact modular convolution, one usually uses the **Number Theoretic Transform** (**NTT**), which is the same idea carried out over a finite field.

## Applications

- Polynomial multiplication and convolution
- Big integer multiplication
- String matching by convolution
- Multiplication of formal power series
- Signal processing and frequency analysis
- Fast computation of cyclic convolution