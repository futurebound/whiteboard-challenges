# Whiteboard Challenge 27

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge is to rotate an array 90 degrees, given a 2-dimensional square array of numbers. This means that given an input such as:
```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```
The function output should be:
```
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
```

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
**Solution**
The solution module exports a single anonymous function which functions as described above. It expects a single array argument. It checks whether the argument is an array of nested arrays, and whether those nested arrays are of the same length or not. If any of these conditions are not met, the function will return an error asking the user to adjust their input accordingly. The function will run fine as long as those conditions are met, regardless of the content at each index of the nested arrays (floating point integers, strings, etc.).

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

