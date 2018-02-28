# Whiteboard Challenge 33

**Author**: Mitchell

**Version**: 1.0.0

# Overview
This challenge is to create a function that accepts to numeric arguments, a base and exponent, and returns the sum of all values of the output of the base argument to the power of the exponent argument. 
```
solution(2, 15) => 32768 => 26
```

# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

# Description
## lib/solution
This module exports a single anonymous function expecting two integer arguments. If either of the arguments are missing when invoked, or either are not integers, the function will return an error and message asking the user for and describing valid input. It returns an integer that is the sum of all the values of the output of the base argument to the power of the exponent argument.

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>