# Whiteboard Challenge 32

**Author**: Mitchell

**Version**: 1.0.0

# Overview
This challenge is to write two functions that return the `nth` entry in the fibonacci series, both iteratively and recursively. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two, such that:
```
fibonacci series: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... ]

<iteratively || recursively>(4);
=> 3
```

### Note
Although it is possible, it is inadvisable to use the recursive approach to this solution. The recursive approach in this repository has an exponential time complexity, although this is not the main issue. The main reason to avoid recursion is due to the fact that the call stack has a limit, and exceeding this limit will essentially break the ability to of a recursive approach to determine the correct value after a certain point. Some of these limits are:
* IE6 ~ 1120, IE10 ~ 20677
* Google Chrome 51 ~ 41753
* Safari 9 ~ 63444
Although these are still obviously large numbers, it doesn't make since to use an approach that has these limits when alternatives are available that don't.


# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

# Description
## lib/solution
This module exports a single object with two functions attached to it, `iterative()` and `recursive()` for the two different implementations. 
* **`solution.iterative()`** Expects a single `index` argument and validates for a few factors: whether the argument is an integer, and whether that integer is less than 0. If the argument isn't an integer or is less than 0, the function returns an error with a message asking the user for valid input. The function uses ES6 deconstruction syntax to decrement the passed `index`, and reassigns values to an array that represents two numbers of the fibonacci series through a while loop. Once the `index` hits 0, the function returns whichever number is in the 1st index of the array.
* **`solution.recursive()`** Expects a single `index` argument and validates for a few factors: whether the argument is an integer, and whether that integer is less than 0. If the argument isn't an integer or is less than 0, the function returns an error with a message asking the user for valid input. The function checks for a few base conditions, whether the `index` is 0 or 1, and if not will return `solution.recursive(index - 1) + solution.recursive(index - 2)`. The breaking condition occurs when `solution.recursive(1) + solution.recursive(0)`.


# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>