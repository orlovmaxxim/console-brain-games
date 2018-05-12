# Console Brain Games
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
[![Build Status](https://travis-ci.org/orlovmaxxim/project-lvl1-s224.svg?branch=master)](https://travis-ci.org/orlovmaxxim/project-lvl1-s224)

--This project implements a set of mini-games that run from the console. These games are similar to what is commonly called "Brain games".--

### Global Installation
```sh
sudo npm i -g brain-games-orlovmaxxim
```

### Local Installation
```sh
$ cd console-brain-games
$ make install
```
### Games
| Game Name | Description | Local play command | Global play command |
| ------ | ------ | ----- | ----- |
| Balance | You must to balance the number. Examples of balanced numbers: 111, 233, 55, 001, 9999, 0001. Examples of unbalanced numbers: 123. Translate examples: 215 --> 233; 4181 --> 3344; | $ make balance | $ brain-balance
| Calc | Shown a random mathematical expression, such as '42 + 69'. You needs to be calculated and written down the correct answer. | $ make calc | $ brain-calc
| Even | The "integrity test". Shown a random number. You needs to answer 'yes' if the number is even, or 'no' if odd  | $ make even | $ brain-even
| GCD | Greatest Common Divisor.  Shown two random numbers, such as '25 50'. You must calculate and enter the largest common divisor of these numbers. | $ make gcd | $ brain-gcd
| Prime | Prime or not prime number game | $ make prime | $ brain-prime
| Progression | "Arithmetic progression". Shown a series of numbers that form an arithmetic progression, replacing any of the numbers with two points ( 5 7 9 11 13 .. 17 19 21 23 ). You must determine this number. | $ make progression | $ brain-progression