# Whiteboading Challenge 11

**Author**: Mitchell
**Version**: 1.0.0

## Overview
We were tasked to create a function called `calculateMissing` which accepted an array, with numbers from 1 to 100 albeit a single missing integer. The function needed to identify and return what the missing integer between 1 to 100 was.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
There are two main function in the solution.js file of the lib/ directory, `arrayGenerator()` and `calculateMissing()`.

They are accessed by requiring in the solution module, such that in any new .js file, a user can enter: 
```
const solution = require('../lib/solution');

let test = solution.arrayGenerator(<value>);

solution.calculateMissing(<array, or in this case test>)
```

`arrayGenerator()` expects a single number argument, which is the same number that will be removed from 1-100 to more conveniently create arrays for testing purposes. The number entered into this function should be the same number returned by `calculateMissing()` if passed to said function. If the function is passed a value other than a number, it will return an error message to the user explaining that.

`calculateMissing()` expects a single argument that is an array with a length of 99. The problem domain explicity stated the type of argument passed to this function, so edge case validation (or ensuring all numbers were between 1-100) was not included in the function other than ensuring the passed array has the correct length. If the array is not of the correct length, it will return an error message to the user explaining that.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

