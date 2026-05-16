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

The **discrete Fourier transform(DFT)** changes a sequence from coefficient form to value form at roots of unity.
The **fast Fourier transform(FFT)** is an algorithm which computes the DFT in $O(N\log N)$ time.

Let $n$ be a positive integer and let $\omega_n$ be a primitive $n$-th root of unity.
For a sequence

\\[
a=(a_0,a_1,\cdots,a_{n-1}),
\\]

the DFT is the sequence $\widehat a$ defined by

\\[
\widehat a_k
=\sum_{j=0}^{n-1} a_j\omega_n^{jk}
\qquad (0\le k<n).
\\]

Equivalently, if

\\[
A(x)=\sum_{j=0}^{n-1}a_jx^j,
\\]

then

\\[
\widehat a_k=A(\omega_n^k).
\\]

Thus the DFT is polynomial evaluation at all $n$-th roots of unity.

## Explanation

Assume first that $n=2^m$.
Let

\\[
A(x)=\sum_{j=0}^{n-1}a_jx^j.
\\]

Separate the even and odd coefficients:

\\[
A_0(x)=\sum_{j=0}^{n/2-1}a_{2j}x^j,
\qquad
A_1(x)=\sum_{j=0}^{n/2-1}a_{2j+1}x^j.
\\]

Then

\\[
A(x)=A_0(x^2)+xA_1(x^2).
\\]

For $0\le k<n/2$, we have

\\[
(\omega_n^k)^2=\omega_{n/2}^k,
\qquad
\omega_n^{k+n/2}=-\omega_n^k.
\\]

Therefore

\\[
\begin{align\*}
A(\omega_n^k)
&=A_0(\omega_{n/2}^k)+\omega_n^kA_1(\omega_{n/2}^k), \nl
A(\omega_n^{k+n/2})
&=A_0(\omega_{n/2}^k)-\omega_n^kA_1(\omega_{n/2}^k).
\end{align\*}
\\]

Hence the DFT of length $n$ can be obtained from two DFTs of length $n/2$.
The factor $\omega_n^k$ is called a **twiddle factor**.
Each pair of equations above is called a **butterfly**:

\\[
u=x,\qquad v=\omega_n^k y,
\qquad
(x,y)\mapsto (u+v,u-v).
\\]

In recursive form, this gives the Cooley--Tukey FFT.
In iterative form, we first reorder the sequence by bit reversal.
After this permutation, we merge blocks of length

\\[
2,4,8,\cdots,n.
\\]

For a block of length $\ell$, let $\omega_\ell$ be a primitive $\ell$-th root of unity.
For each block starting at $s$, and for $0\le j<\ell/2$, set

\\[
\begin{align\*}
u&=a_{s+j}, \nl
v&=\omega_\ell^j a_{s+j+\ell/2}, \nl
a_{s+j}&=u+v, \nl
a_{s+j+\ell/2}&=u-v.
\end{align\*}
\\]

After all block lengths have been processed, the array is the DFT.

The visualizer below shows the bit-reversal permutation and the butterfly stages of an iterative length-$8$ transform.

{% include_relative includes/fft.html %}

The inverse transform is obtained by using $\omega_n^{-1}$ instead of $\omega_n$ and then dividing every entry by $n$:

\\[
a_j
=\frac{1}{n}\sum_{k=0}^{n-1}\widehat a_k\omega_n^{-jk}.
\\]

If the original length is not a power of two, we usually pad the sequence with zeroes to the next power of two.
This does not change the represented polynomial below the padded degree.

## Proof of Correctness

First we prove the butterfly recurrence.

_Proof._
For $0\le k<n/2$,

\\[
\begin{align\*}
A(\omega_n^k)
&=A_0((\omega_n^k)^2)+\omega_n^kA_1((\omega_n^k)^2) \nl
&=A_0(\omega_{n/2}^k)+\omega_n^kA_1(\omega_{n/2}^k).
\end{align\*}
\\]

Also,

\\[
\begin{align\*}
A(\omega_n^{k+n/2})
&=A_0((\omega_n^{k+n/2})^2)+\omega_n^{k+n/2}A_1((\omega_n^{k+n/2})^2) \nl
&=A_0(\omega_{n/2}^k)-\omega_n^kA_1(\omega_{n/2}^k),
\end{align\*}
\\]

because $(\omega_n^{k+n/2})^2=\omega_{n/2}^k$ and $\omega_n^{n/2}=-1$.
Thus one length-$n$ DFT is obtained by combining two length-$n/2$ DFTs with the butterfly formulas.

---

Now we prove the correctness of the recursive FFT.

_Proof._
For $n=1$, the DFT is the identity map, so the algorithm is correct.
Assume that the algorithm correctly computes every DFT of length $n/2$.
It recursively computes the DFTs of the even and odd coefficient sequences, i.e.

\\[
A_0(\omega_{n/2}^k),
\qquad
A_1(\omega_{n/2}^k)
\qquad (0\le k<n/2).
\\]

By the butterfly recurrence, these values determine both
$A(\omega_n^k)$ and $A(\omega_n^{k+n/2})$.
Therefore the algorithm computes all values

\\[
A(\omega_n^0),A(\omega_n^1),\cdots,A(\omega_n^{n-1}).
\\]

By induction, the recursive FFT is correct for every power of two.
The iterative algorithm performs the same merges in bottom-up order.
Bit reversal places all length-$1$ subsequences in the order required by these merges, so the iterative algorithm computes the same values.

---

It remains to justify the inverse transform.
For $0\le s<n$,

\\[
\begin{align\*}
\frac{1}{n}\sum_{k=0}^{n-1}\widehat a_k\omega_n^{-ks}
&=\frac{1}{n}\sum_{k=0}^{n-1}
\left(\sum_{j=0}^{n-1}a_j\omega_n^{jk}\right)\omega_n^{-ks} \nl
&=\sum_{j=0}^{n-1}a_j
\left(\frac{1}{n}\sum_{k=0}^{n-1}\omega_n^{k(j-s)}\right).
\end{align\*}
\\]

If $j=s$, the inner sum is $n$.
If $j\ne s$, then $\omega_n^{j-s}\ne1$, and the inner sum is a finite geometric series:

\\[
\sum_{k=0}^{n-1}\omega_n^{k(j-s)}
=\frac{(\omega_n^{j-s})^n-1}{\omega_n^{j-s}-1}
=0.
\\]

Thus only the term $j=s$ remains, and the inverse formula returns $a_s$.

## Complexity

Let $T(n)$ be the time needed to compute a length-$n$ DFT.
The FFT performs two transforms of length $n/2$ and then $O(n)$ butterfly operations, so

\\[
T(n)=2T(n/2)+O(n).
\\]

Therefore

\\[
T(n)=O(n\log n).
\\]

The iterative implementation uses $O(n)$ additional space if the transform is done in place.
The recursive implementation also needs $O(n)$ temporary storage in a careful implementation, together with $O(\log n)$ recursion depth.

For polynomial multiplication, if the output degree is less than $n$, then two forward transforms, one pointwise multiplication, and one inverse transform give time complexity

\\[
O(n\log n).
\\]

## Code

The following implementation computes the DFT over complex numbers.
The input length must be a power of two.

```cpp
using cd = complex<double>;
const double PI = acos(-1.0);

void fft(vector<cd>& a, bool invert) {
    int n = (int)a.size();

    for(int i=1, j=0; i<n; i++) {
        int bit = n >> 1;
        for(; j & bit; bit >>= 1) j ^= bit;
        j ^= bit;
        if(i < j) swap(a[i], a[j]);
    }

    for(int len=2; len<=n; len<<=1) {
        double ang = 2 * PI / len * (invert ? -1 : 1);
        cd wlen(cos(ang), sin(ang));

        for(int l=0; l<n; l+=len) {
            cd w(1);
            for(int j=0; j<len/2; j++) {
                cd u = a[l+j];
                cd v = a[l+j+len/2] * w;
                a[l+j] = u + v;
                a[l+j+len/2] = u - v;
                w *= wlen;
            }
        }
    }

    if(invert) {
        for(cd& x: a) x /= n;
    }
}
```

The recursive implementation follows the even-odd decomposition directly.

```cpp
void fft_recursive(vector<cd>& a, bool invert) {
    int n = (int)a.size();
    if(n == 1) return;

    vector<cd> a0(n / 2), a1(n / 2);
    for(int i=0; i<n/2; i++) {
        a0[i] = a[2*i];
        a1[i] = a[2*i+1];
    }

    fft_recursive(a0, invert);
    fft_recursive(a1, invert);

    double ang = 2 * PI / n * (invert ? -1 : 1);
    cd w(1), wn(cos(ang), sin(ang));

    for(int k=0; k<n/2; k++) {
        cd u = a0[k];
        cd v = w * a1[k];
        a[k] = u + v;
        a[k+n/2] = u - v;

        if(invert) {
            a[k] /= 2;
            a[k+n/2] /= 2;
        }

        w *= wn;
    }
}
```

Polynomial multiplication is obtained by evaluating both polynomials, multiplying values pointwise, and interpolating by the inverse FFT.

```cpp
vector<long long> multiply(vector<long long> a, vector<long long> b) {
    vector<cd> fa(a.begin(), a.end()), fb(b.begin(), b.end());
    int need = (int)a.size() + (int)b.size() - 1;
    int n = 1;
    while(n < need) n <<= 1;
    fa.resize(n);
    fb.resize(n);

    fft(fa, false);
    fft(fb, false);
    for(int i=0; i<n; i++) fa[i] *= fb[i];
    fft(fa, true);

    vector<long long> res(need);
    for(int i=0; i<need; i++) res[i] = llround(fa[i].real());
    return res;
}
```

If exact modular arithmetic is required, one usually uses a number-theoretic transform(NTT) instead of a complex FFT.
The structure of the algorithm is the same, but the roots of unity are taken modulo a prime.

## Applications

The most common application is polynomial multiplication.
Let

\\[
A(x)=\sum_i a_ix^i,
\qquad
B(x)=\sum_i b_ix^i.
\\]

Choose $n$ so that $n>\deg A+\deg B$.
After padding both coefficient arrays to length $n$,

\\[
\operatorname{DFT}(AB)
=\operatorname{DFT}(A)\cdot\operatorname{DFT}(B),
\\]

where the product on the right is pointwise.
Applying the inverse DFT gives the coefficients of $AB$.

* Polynomial multiplication
* Large integer multiplication
* Convolution and correlation
* Multiplication of formal power series
* Number-theoretic transform modulo suitable primes
