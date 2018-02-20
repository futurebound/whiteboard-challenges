# Whiteboard Challenge 26

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge is focused on implementing the built-in array methods `map()`, `filter()`, and `reduce()` from scratch.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. `npm start` will execute the `solution.js` entry point in the `node` repl, showing console logs of the different callbacks and output of these functions.

## Description
**Solution**
This module imports the `utils` module and logs a few examples to ensure functionality. It contains console logs of a test array, the callbacks passed to the `utils` functions, and the outputs of those functions.

**Utils**
This module exports three functions: `map()`, `filter()`, and `reduce()`.
* `map(array, callback)` expects an array and a callback function to be passed in as arguments. It applies to the callback at every index of the passed array, and returns a new array of the processed values.
* `filter(array, callback)` expects an array and a callback function to be passed in as arguments. It determines whether each index of the passed array meets the condition specified in the callback, and if so pushes the value at the current index to a new array, and returns a new array of the filtered values.
* `reduce(array, callback, initialValue)` expects an array, a callback, and an initialValue. It checks whether an initial value was passed, and if so calls the callback with an accumulator to track the total and then returns that accumulator as output.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

