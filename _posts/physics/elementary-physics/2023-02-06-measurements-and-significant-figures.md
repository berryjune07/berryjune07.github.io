---
layout: post
title: "Measurements and Significant Figures"
subtitle: "eph2"
classification: "Elementary Physics 2"
categories: physics
tags: elementary-physics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Measurements

**Measurements** are the process of obtaining the value of a physical quantity.
Measurements are made with _instruments_, which are calibrated to a standard unit of measurement.
The value of a measurement is expressed as a number and a unit.

## Significant Figures

**Significant figures** are the digits in a number that carry meaningful information about its precision.
The number of significant figures in a measurement indicates the **precision** of the measurement.
When measuring a physical quantity, it is important to report the result with the correct number of significant figures to reflect the precision of the measurement.
We often read up to the minimum scale of the measuring instrument,
and then estimate by eye measurement to 1/10th of the minimum scale.
For example, if a ruler has a minimum scale of $1 \, \text{cm}$, we might read a length of $5.3 \, \text{cm}$,
where the "5" is from the scale and the "3" is an estimated digit.

Significant figures are important in scientific calculations because they help convey the uncertainty in measurements.
When performing calculations, the result should be reported with the same number of significant figures as the measurement with the least number of significant figures.
The rules for determining significant figures are as follows:

1. All non-zero digits are significant.
2. Any zeros between significant digits are significant.
3. Leading zeros (zeros before the first non-zero digit) are not significant.
4. Trailing zeros (zeros after the last non-zero digit) are significant only if measured with a decimal point.
   - For example, $1500$ has two significant figures, while $1500.0$ has five significant figures.
   - If a number is written in scientific notation, all digits in the coefficient are significant.
   - For example, $1.50 \times 10^3$ has three significant figures.
5. In calculations, the result should be reported with the same number of significant figures as the measurement with the least number of significant figures.
6. When rounding numbers, if the digit to be removed is less than 5, the last retained digit remains unchanged; if it is 5 or greater, the last retained digit is increased by one.

The **most significant digit** is the leftmost non-zero digit in a number, and the **least significant digit** is the rightmost digit that is significant.

![Significant Figures](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/SigFigs.svg/800px-SigFigs.svg.png){: width="40%"}
{:.centered}
Digits in light blue are significant figures; those in black are not.
{:.figcaption}

## Scientific Notation

**Scientific notation** is a way of expressing numbers that are too large or too small to be conveniently written in decimal form, besides using the SI prefixes.
In scientific notation, a number is expressed as the product of a number between 1 and 10 and a power of 10.
For example, the number $1500$ can be expressed in scientific notation as $1.5 \times 10^3$.
Scientific notation is useful for expressing very large or very small numbers in a compact form and for maintaining significant figures.
When converting a number to scientific notation, the coefficient should have the correct number of significant figures.

## Example

Let's consider an example of a measurement and how to express it with significant figures.
Suppose we measure the size of a table and find it to be $82.5\,\text{cm} \times 124.3\,\text{cm}$,
using a ruler with a minimum scale of $1\,\text{cm}$.
The measurement has three significant figures in the first dimension and four significant figures in the second dimension.
When calculating the area of the table, we multiply the two measurements:

\\[
\text{Area} = 82.5\,\text{cm} \times 124.3\,\text{cm} = 10254.75\,\text{cm}^2 \approx 1.03 \times 10^4\,\text{cm}^2
\\]

Since the first measurement has three significant figures, we rounded the result to three significant figures.