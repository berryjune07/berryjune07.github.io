---
layout: post
title: "Physical Quantity"
subtitle: "eph1"
classification: "Elementary Physics 1"
categories: physics
tags: elementary-physics
---

<!--more-->
* this unordered seed list will be replaced by the toc
{:toc}

## Physical property

A **physical property** is any property that is _measurable_, whose value describes a state of a physical system.
The changes in the physical properties of a system can be used to describe its changes between momentary states.
A quantifiable physical property is called physical quantity.

## Physical quantity

A **physical quantity** is a physical property of a material or system that can be quantified by measurement.
A physical quantity can be expressed as a value, which is the algebraic multiplication of a
_Numerical value_ and a _Unit_.

A physical quantity possesses at least two characteristics in common.
* Numerical magnitude
  + Scalars
  + Vectors
  + Tensors
* Units

Let's continue talking about units.

## Unit

A **unit** of measurement is a definite magnitude of a quantity, defined and adopted by convention or by law,
that is used as a standard for measurement of the same kind of quantity.
Any other quantity of that kind can be expressed as a multiple of the unit of measurement.

### Base unit

A base unit is a unit adopted for measurement of a base quantity.
A base quantity is one of a conventionally chosen subset of physical quantities,
where no quantity in the subset can be expressed in terms of the others.
Any physical unit can be expressed by the product of base units,
and we define the **dimension** of a physical quantity by its exponents of base units.

### SI unit

The **SI unit** (Système International d'Unités) is the standard system of units used in science and engineering.
It is the modern form of the metric system and is the most widely used system of measurement.
The SI system is based on seven base units, which are defined by specific physical constants.

<center><b> 〈SI defining constants〉 </b></center><br>

| Symbol                | Defining constant                        | Exact Value                                         |
|:----------------------|:-----------------------------------------|:----------------------------------------------------|
| $ \Delta\nu_\ce{Cs} $ | hyperfine transition frequency of Cs-133 | $ 9\,192\,631\,770\,\mathrm{Hz}$                    |
| $ c $                 | speed of light                           | $ 299\,792\,458\,\mathrm{m/s} $                     |
| $ h $                 | Planck constant                          | $ 6.626\,070\,15\times10^{34}\,\mathrm{J\cdot s} $  |
| $ e $                 | elementary charge                        | $ 1.602\,176\,634\times10^{−19}\,\mathrm{C} $       |
| $ k $                 | Boltzmann constant                       | $ 1.380\,649\times10^{−23}\,\mathrm{J/K} $          |
| $ N_\text{A} $        | Avogadro constant                        | $ 6.022\,140\,76\times10^{23}\,\mathrm{mol^{−1}} $  |
| $ K_\text{cd} $       | luminous efficacy of 540 THz radiation   | $ 683\,\mathrm{lm/W} $                              |
{:.stretch-table}

<br>

<center><b> 〈SI base units〉 </b></center><br>

| Quantity                  | SI unit  |                  |                                                                                                                                                                                                                                                     | Dimension symbol    |
| | Name | Symbol | Definition |
|---------------------------|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Time                      | second   | $ \mathrm{s} $   | The duration of $\Delta\nu_{\text{Cs}}$ periods of the radiation corresponding <br> to the transition between the two hyperfine levels of the <br> ground state of the caesium-133 atom.                                                            | $ \mathsf{T} $      |
| Length                    | metre    | $ \mathrm{m} $   | The distance travelled by light in vacuum in $\dfrac{1}{c}$ seconds.                                                                                                                                                                                | $ \mathsf{L} $      |
| Mass                      | kilogram | $ \mathrm{kg} $  | The kilogram is defined by setting the Planck constant $h$, <br> given the definitions of the meter and the second.                                                                                                                                 | $ \mathsf{M} $      |
| Electric current          | ampere   | $ \mathrm{A} $   | The flow of exactly $\dfrac{1}{e}$ times the elementary charge e per second.                                                                                                                                                                        | $ \mathsf{I} $      |
| Thermodynamic temperature | kelvin   | $ \mathrm{K} $   | The kelvin is defined by setting the Boltzmann constant $k$, <br> given the definition of the kilogram, the meter, and the second.                                                                                                                  | $ \mathsf{\Theta} $ |
| Amount of substance       | mole     | $ \mathrm{mol} $ | The amount of substance of exactly $N_{\text{A}}$ elementary entities.                                                                                                                                                                              | $ \mathsf{N} $      |
| Luminous intensity        | candela  | $ \mathrm{cd} $  | The luminous intensity, in a given direction, of a source that <br> emits monochromatic radiation of frequency $5.4\times10^{14} \mathrm{Hz} $ <br> and that has a radiant intensity in that direction of $\dfrac{1}{K_{\text{cd}}} \mathrm{W/sr}$. | $ \mathsf{K} $      |
{:.scroll-table}

There's a slight error in the expression of the SI base units definitions above,
since the SI defining constants actually include the units, therefore we should comprehend those constants as
the numerical values of itselves.
For example, the definition of the meter is actually:
> The distance travelled by light in vacuum in $\dfrac{1}{299\,792\,458}$ seconds.

![SI units](https://upload.wikimedia.org/wikipedia/commons/a/ab/Unit_relations_in_the_new_SI.svg)
{:.centered}
A diagram showing the relationship between SI units
{:.figcaption}

<br>

### SI prefixes

The **SI prefixes** are a set of standard prefixes used to form decimal multiples and submultiples of SI units.
These prefixes are used to express quantities that are either very large or very small,
making it easier to communicate measurements in a more manageable form.

<center><b> 〈SI prefixes〉 </b></center><br>

| Prefix  |                  | Base 10      |
| Name | Symbol |  |
|---------|------------------|--------------|
| quetta  | $ \mathrm{Q} $   | $ 10^{30} $  |
| ronna   | $ \mathrm{R} $   | $ 10^{27} $  |
| yotta   | $ \mathrm{Y} $   | $ 10^{24} $  |
| zetta   | $ \mathrm{Z} $   | $ 10^{21} $  |
| exa     | $ \mathrm{E} $   | $ 10^{18} $  |
| peta    | $ \mathrm{P} $   | $ 10^{15} $  |
| tera    | $ \mathrm{T} $   | $ 10^{12} $  |
| giga    | $ \mathrm{G} $   | $ 10^{9} $   |
| mega    | $ \mathrm{M} $   | $ 10^{6} $   |
| kilo    | $ \mathrm{k} $   | $ 10^{3} $   |
| hecto   | $ \mathrm{h} $   | $ 10^{2} $   |
| deca    | $ \mathrm{da} $  | $ 10^{1} $   |
|         |                  | $ 10^{0} $   |
| deci    | $ \mathrm{d} $   | $ 10^{-1} $  |
| centi   | $ \mathrm{c} $   | $ 10^{-2} $  |
| milli   | $ \mathrm{m} $   | $ 10^{-3} $  |
| micro   | $ \mathrm{\mu} $ | $ 10^{-6} $  |
| nano    | $ \mathrm{n} $   | $ 10^{-9} $  |
| pico    | $ \mathrm{p} $   | $ 10^{-12} $ |
| femto   | $ \mathrm{f} $   | $ 10^{-15} $ |
| atto    | $ \mathrm{a} $   | $ 10^{-18} $ |
| zepto   | $ \mathrm{z} $   | $ 10^{-21} $ |
| yocto   | $ \mathrm{y} $   | $ 10^{-24} $ |
| ronto   | $ \mathrm{r} $   | $ 10^{-27} $ |
| quecto  | $ \mathrm{q} $   | $ 10^{-30} $ |
{:.centered}

### Derived units

A **derived unit** is a unit of measurement that is derived from the base units of a system of measurement.
Below is a table of the SI derived units with specific names and symbols.

| Quantity                                       | Derived unit   |                    |                                                       | Dimension                               |
| | Name | Symbol | Equivalents |
|------------------------------------------------|----------------|--------------------|-------------------------------------------------------|-----------------------------------------|
| Frequency                                      | hertz          | $\mathrm{Hz}$      | $\mathrm{s^{-1}}$                                     | $\mathsf{T^{-1}}$                       |
| Angle                                          | radian         | $\mathrm{rad}$     | $\mathrm{m/m}$                                        | $1$                                     |
| Solid angle                                    | steradian      | $\mathrm{sr}$      | $\mathrm{m^{2}/m^{2}}$                                | $1$                                     |
| Force, weight                                  | newton         | $\mathrm{N}$       | $\mathrm{kg \cdot m \cdot s^{-2}}$                    | $\mathsf{M\,L\,T^{-2}}$                 |
| Pressure, stress                               | pascal         | $\mathrm{Pa}$      | $\mathrm{N/m^{2}}$                                    | $\mathsf{M\,L^{-1}\,T^{-2}}$            |
| Energy, work, heat                             | joule          | $\mathrm{J}$       | $\mathrm{m \cdot N,\ C \cdot V,\ W \cdot s}$          | $\mathsf{M\,L^{2}\,T^{-2}}$             |
| Power, radiant flux                            | watt           | $\mathrm{W}$       | $\mathrm{J/s,\ V \cdot A}$                            | $\mathsf{M\,L^{2}\,T^{-3}}$             |
| Electric charge                                | coulomb        | $\mathrm{C}$       | $\mathrm{s \cdot A,\ F \cdot V}$                      | $\mathsf{T\,I}$                         |
| Voltage, electrical potential difference, emf  | volt           | $\mathrm{V}$       | $\mathrm{W/A,\ J/C}$                                  | $\mathsf{M\,L^{2}\,T^{-3}\,I^{-1}}$     |
| Electrical capacitance                         | farad          | $\mathrm{F}$       | $\mathrm{C/V,\ s/\Omega}$                             | $\mathsf{M^{-1}\,L^{-2}\,T^{4}\,I^{2}}$ |
| Electrical resistance, impedance, reactance    | ohm            | $\mathrm{\Omega}$  | $\mathrm{1/S,\ V/A}$                                  | $\mathsf{M\,L^{2}\,T^{-3}\,I^{-2}}$     |
| Electrical conductance                         | siemens        | $\mathrm{S}$       | $\mathrm{1/\Omega,\ A/V}$                             | $\mathsf{M^{-1}\,L^{-2}\,T^{3}\,I^{2}}$ |
| Magnetic flux                                  | weber          | $\mathrm{Wb}$      | $\mathrm{J/A,\ T \cdot m^{2},\ V \cdot s}$            | $\mathsf{M\,L^{2}\,T^{-2}\,I^{-1}}$     |
| Magnetic induction, flux density               | tesla          | $\mathrm{T}$       | $\mathrm{V \cdot s/m^{2},\ Wb/m^{2},\ N/(A \cdot m)}$ | $\mathsf{M\,T^{-2}\,I^{-1}}$            |
| Electrical inductance                          | henry          | $\mathrm{H}$       | $\mathrm{V \cdot s/A,\ \Omega \cdot s,\ Wb/A}$        | $\mathsf{M\,L^{2}\,T^{-2}\,I^{-2}}$     |
| Temperature (relative to $273.15\ \mathrm{K}$) | degree Celsius | $^\circ\mathrm{C}$ | $\mathrm{K}$                                          | $\mathsf{\Theta}$                       |
| Luminous flux                                  | lumen          | $\mathrm{lm}$      | $\mathrm{cd \cdot sr}$                                | $\mathsf{K}$                            |
| Illuminance                                    | lux            | $\mathrm{lx}$      | $\mathrm{lm/m^{2}}$                                   | $\mathsf{L^{-2}\,K}$                    |
| Radioactivity                                  | becquerel      | $\mathrm{Bq}$      | $\mathrm{s^{-1}}$                                     | $\mathsf{T^{-1}}$                       |
| Absorbed dose (ionizing radiation)             | gray           | $\mathrm{Gy}$      | $\mathrm{J/kg}$                                       | $\mathsf{L^{2}\,T^{-2}}$                |
| Equivalent dose (ionizing radiation)           | sievert        | $\mathrm{Sv}$      | $\mathrm{J/kg}$                                       | $\mathsf{L^{2}\,T^{-2}}$                |
| Catalytic activity                             | katal          | $\mathrm{kat}$     | $\mathrm{mol/s}$                                      | $\mathsf{T^{-1}\,N}$                    |

Below is a table of some common derived units without specific names and symbols.

| Quantity                                                        | Name                                   | Symbol                          | Dimension                                        |
|-----------------------------------------------------------------|----------------------------------------|---------------------------------|--------------------------------------------------|
| Speed, Velocity                                                 | metre per second                       | $\mathrm{m/s}$                  | $\mathsf{L\,T^{-1}}$                             |
| Acceleration                                                    | metre per second squared               | $\mathrm{m/s^{2}}$              | $\mathsf{L\,T^{-2}}$                             |
| Jerk, Jolt                                                      | metre per second cubed                 | $\mathrm{m/s^{3}}$              | $\mathsf{L\,T^{-3}}$                             |
| Snap, Jounce                                                    | metre per second to the fourth         | $\mathrm{m/s^{4}}$              | $\mathsf{L\,T^{-4}}$                             |
| Yank                                                            | kilogram metre per second to the third | $\mathrm{kg \cdot m/s^{3}}$     | $\mathsf{M\,L\,T^{-3}}$                          |
| Angular velocity                                                | radian per second                      | $\mathrm{rad/s}$                | $\mathsf{T^{-1}}$                                |
| Angular acceleration                                            | radian per second squared              | $\mathrm{rad/s^{2}}$            | $\mathsf{T^{-2}}$                                |
| Frequency drift                                                 | hertz per second                       | $\mathrm{Hz/s}$                 | $\mathsf{T^{-2}}$                                |
| Volumetric flow                                                 | cubic metre per second                 | $\mathrm{m^{3}/s}$              | $\mathsf{L^{3}\,T^{-1}}$                         |
| Area                                                            | square metre                           | $\mathrm{m^{2}}$                | $\mathsf{L^{2}}$                                 |
| Volume                                                          | cubic metre                            | $\mathrm{m^{3}}$                | $\mathsf{L^{3}}$                                 |
| Momentum, Impulse                                               | newton-second                          | $\mathrm{N \cdot s}$            | $\mathsf{M\,L\,T^{-1}}$                          |
| Angular Momentum                                                | newton metre second                    | $\mathrm{N \cdot m \cdot s}$    | $\mathsf{M\,L^{2}\,T^{-1}}$                      |
| Torque, Moment of force                                         | newton-metre                           | $\mathrm{N \cdot m}$            | $\mathsf{M\,L^{2}\,T^{-2}}$                      |
| Yank                                                            | newton per second                      | $\mathrm{N/s}$                  | $\mathsf{M\,L\,T^{-3}}$                          |
| Wavenumber, Optical power, Curvature, Spatial frequency         | reciprocal metre                       | $\mathrm{m^{-1}}$               | $\mathsf{L^{-1}}$                                |
| Area Density                                                    | kilogram per square metre              | $\mathrm{kg/m^{2}}$             | $\mathsf{M\,L^{-2}}$                             |
| Density, Mass density                                           | kilogram per cubic metre               | $\mathrm{kg/m^{3}}$             | $\mathsf{M\,L^{-3}}$                             |
| Specific Volume                                                 | cubic metre per kilogram               | $\mathrm{m^{3}/kg}$             | $\mathsf{L^{3}\,M^{-1}}$                         |
| Action                                                          | joule-second                           | $\mathrm{J \cdot s}$            | $\mathsf{M\,L^{2}\,T^{-1}}$                      |
| Specific Energy                                                 | joule per kilogram                     | $\mathrm{J/kg}$                 | $\mathsf{L^{2}\,T^{-2}}$                         |
| Energy Density                                                  | joule per cubic metre                  | $\mathrm{J/m^{3}}$              | $\mathsf{M\,L^{-1}\,T^{-2}}$                     |
| Surface Tension, Stiffness                                      | newton per metre                       | $\mathrm{N/m}$                  | $\mathsf{M\,T^{-2}}$                             |
| Heat Flux Density, Irradiance                                   | watt per square metre                  | $\mathrm{W/m^{2}}$              | $\mathsf{M\,T^{-3}}$                             |
| Kinematic Viscosity, Thermal Diffusivity, Diffusion Coefficient | square metre per second                | $\mathrm{m^{2}/s}$              | $\mathsf{L^{2}\,T^{-1}}$                         |
| Dynamic Viscosity                                               | pascal-second                          | $\mathrm{Pa \cdot s}$           | $\mathsf{M\,L^{-1}\,T^{-1}}$                     |
| Linear Mass Density                                             | kilogram per metre                     | $\mathrm{kg/m}$                 | $\mathsf{M\,L^{-1}}$                             |
| Mass Flow Rate                                                  | kilogram per second                    | $\mathrm{kg/s}$                 | $\mathsf{M\,T^{-1}}$                             |
| Radiance                                                        | watt per steradian square metre        | $\mathrm{W/(sr \cdot m^{2})}$   | $\mathsf{M\,T^{-3}}$                             |
| Radiance (spectral)                                             | watt per steradian cubic metre         | $\mathrm{W/(sr \cdot m^{3})}$   | $\mathsf{M\,L^{-1}\,T^{-3}}$                     |
| Spectral Power                                                  | watt per metre                         | $\mathrm{W/m}$                  | $\mathsf{M\,L\,T^{-3}}$                          |
| Absorbed Dose Rate                                              | gray per second                        | $\mathrm{Gy/s}$                 | $\mathsf{L^{2}\,T^{-3}}$                         |
| Fuel Efficiency                                                 | metre per cubic metre                  | $\mathrm{m/m^{3}}$              | $\mathsf{L^{-2}}$                                |
| Spectral Irradiance, Power Density                              | watt per cubic metre                   | $\mathrm{W/m^{3}}$              | $\mathsf{M\,L^{-1}\,T^{-3}}$                     |
| Energy Flux Density                                             | joule per square metre second          | $\mathrm{J/(m^{2} \cdot s)}$    | $\mathsf{M\,T^{-3}}$                             |
| Compressibility                                                 | reciprocal pascal                      | $\mathrm{Pa^{-1}}$              | $\mathsf{M^{-1}\,L\,T^{2}}$                      |
| Radiant Exposure                                                | joule per square metre                 | $\mathrm{J/m^{2}}$              | $\mathsf{M\,T^{-2}}$                             |
| Moment of Inertia                                               | kilogram square metre                  | $\mathrm{kg \cdot m^{2}}$       | $\mathsf{M\,L^{2}}$                              |
| Specific Angular Momentum                                       | newton metre second per kilogram       | $\mathrm{N \cdot m \cdot s/kg}$ | $\mathsf{L^{2}\,T^{-1}}$                         |
| Radiant Intensity                                               | watt per steradian                     | $\mathrm{W/sr}$                 | $\mathsf{M\,L^{2}\,T^{-3}}$                      |
| Spectral Intensity                                              | watt per steradian metre               | $\mathrm{W/(sr \cdot m)}$       | $\mathsf{M\,L\,T^{-3}}$                          |
| Molarity, amount of substance concentration                     | mole per cubic metre                   | $\mathrm{mol/m^3}$              | $\mathsf{L^{-3}\,N}$                             |
| Molar volume                                                    | cubic metre per mole                   | $\mathrm{m^3/mol}$              | $\mathsf{L^{3}\,N^{-1}}$                         |
| Molar heat capacity, molar entropy                              | joule per kelvin mole                  | $\mathrm{J/(K \cdot mol)}$      | $\mathsf{L^{2}\,M\,T^{-2}\,\Theta^{-1}\,N^{-1}}$ |
| Molar energy                                                    | joule per mole                         | $\mathrm{J/mol}$                | $\mathsf{L^{2}\,M\,T^{-2}\,N^{-1}}$              |
| Molar conductivity                                              | siemens square metre per mole          | $\mathrm{S \cdot m^2/mol}$      | $\mathsf{M^{-1}\,T^{3}\,I^{2}\,N^{-1}}$          |
| Molality                                                        | mole per kilogram                      | $\mathrm{mol/kg}$               | $\mathsf{M^{-1}\,N}$                             |
| Molar mass                                                      | kilogram per mole                      | $\mathrm{kg/mol}$               | $\mathsf{M\,N^{-1}}$                             |
| Catalytic efficiency                                            | cubic metre per mole second            | $\mathrm{m^3/(mol \cdot s)}$    | $\mathsf{L^{3}\,T^{-1}\,N^{-1}}$                 |
| Electric Displacement Field, Polarization Density               | coulomb per square metre               | $\mathrm{C/m^{2}}$              | $\mathsf{L^{-2}\,T\,I}$                          |
| Electric Charge Density                                         | coulomb per cubic metre                | $\mathrm{C/m^{3}}$              | $\mathsf{L^{-3}\,T\,I}$                          |
| Electric Current Density                                        | ampere per square metre                | $\mathrm{A/m^{2}}$              | $\mathsf{L^{-2}\,I}$                             |
| Electrical Conductivity                                         | siemens per metre                      | $\mathrm{S/m}$                  | $\mathsf{L^{-1}\,M^{-1}\,T^{3}\,I^{2}}$          |
| Permittivity                                                    | farad per metre                        | $\mathrm{F/m}$                  | $\mathsf{L^{-1}\,M^{-1}\,T^{4}\,I^{2}}$          |
| Magnetic Permeability                                           | henry per metre                        | $\mathrm{H/m}$                  | $\mathsf{L\,M\,T^{-2}\,I^{-2}}$                  |
| Electric Field Strength                                         | volt per metre                         | $\mathrm{V/m}$                  | $\mathsf{L\,M\,T^{-3}\,I^{-1}}$                  |
| Magnetization, Magnetic Field Strength                          | ampere per metre                       | $\mathrm{A/m}$                  | $\mathsf{L^{-1}\,I}$                             |
| Exposure (X and Gamma Rays)                                     | coulomb per kilogram                   | $\mathrm{C/kg}$                 | $\mathsf{M^{-1}\,T\,I}$                          |
| Resistivity                                                     | ohm metre                              | $\mathrm{\Omega \cdot m}$       | $\mathsf{L\,M\,T^{-3}\,I^{-2}}$                  |
| Linear Charge Density                                           | coulomb per metre                      | $\mathrm{C/m}$                  | $\mathsf{L^{-1}\,T\,I}$                          |
| Magnetic Dipole Moment                                          | joule per tesla                        | $\mathrm{J/T}$                  | $\mathsf{L^{2}\,I}$                              |
| Electron Mobility                                               | square metre per volt second           | $\mathrm{m^{2}/(V \cdot s)}$    | $\mathsf{M^{-1}\,T^{2}\,I}$                      |
| Magnetic Reluctance                                             | reciprocal henry                       | $\mathrm{H^{-1}}$               | $\mathsf{L^{-2}\,M^{-1}\,T^{2}\,I^{2}}$          |
| Magnetic Vector Potential                                       | weber per metre                        | $\mathrm{Wb/m}$                 | $\mathsf{L\,M\,T^{-2}\,I^{-1}}$                  |
| Magnetic Moment                                                 | weber metre                            | $\mathrm{Wb \cdot m}$           | $\mathsf{L^{3}\,M\,T^{-2}\,I^{-1}}$              |
| Magnetic Rigidity                                               | tesla metre                            | $\mathrm{T \cdot m}$            | $\mathsf{L\,M\,T^{-2}\,I^{-1}}$                  |
| Magnetomotive Force                                             | ampere radian                          | $\mathrm{A \cdot rad}$          | $\mathsf{I}$                                     |
| Magnetic Susceptibility                                         | metre per henry                        | $\mathrm{m/H}$                  | $\mathsf{L^{-1}\,M^{-1}\,T^{2}\,I^{2}}$          |
| Luminous Energy                                                 | lumen second                           | $\mathrm{lm \cdot s}$           | $\mathsf{T\,K}$                                  |
| Luminous Exposure                                               | lux second                             | $\mathrm{lx \cdot s}$           | $\mathsf{L^{-2}\,T\,K}$                          |
| Luminance                                                       | candela per square metre               | $\mathrm{cd/m^{2}}$             | $\mathsf{L^{-2}\,K}$                             |
| Luminous Efficacy                                               | lumen per watt                         | $\mathrm{lm/W}$                 | $\mathsf{L^{-2}\,M^{-1}\,T^{3}\,K}$              |
| Heat Capacity, Entropy                                          | joule per kelvin                       | $\mathrm{J/K}$                  | $\mathsf{L^{2}\,M\,T^{-2}\,\Theta^{-1}}$         |
| Specific Heat Capacity, Specific Entropy                        | joule per kilogram kelvin              | $\mathrm{J/(K \cdot kg)}$       | $\mathsf{L^{2}\,T^{-2}\,\Theta^{-1}}$            |
| Thermal Conductivity                                            | watt per metre kelvin                  | $\mathrm{W/(m \cdot K)}$        | $\mathsf{L\,M\,T^{-3}\,\Theta^{-1}}$             |
| Thermal Resistance                                              | kelvin per watt                        | $\mathrm{K/W}$                  | $\mathsf{L^{-2}\,M^{-1}\,T^{3}\,\Theta}$         |
| Thermal Expansion Coefficient                                   | reciprocal kelvin                      | $\mathrm{K^{-1}}$               | $\mathsf{\Theta^{-1}}$                           |
| Temperature Gradient                                            | kelvin per metre                       | $\mathrm{K/m}$                  | $\mathsf{L^{-1}\,\Theta}$                        |