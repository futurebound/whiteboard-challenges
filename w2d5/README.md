# Whiteboarding Challenge 10

**Author**: Mitchell
**Version**: 1.0.0

## Overview
We were given two different challenges to complete today. The first was to write a function, `checkBraces()` to examine whether the pairs and the orders of `{` and `}` in a given string matched and were syntactically correct. Meaning, each opening curly bracket had a matching curly bracket and were properly paired with one another would generate syntacticlly valid code. This was to be implemented using a Stack data structure.

Our second challenge was write a function that accepted two arguments, `n` and a sorted array, and to utilize a binary search tree on the given array using the given `n` value. If the given `n` was found, the function should return the value and its location in the array as an object of key-value pairs such as `{value: n, index: 1}`.

## Getting Started
First, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions.

## Description
`solution1.js` exports a single function `checkBraces(str)` that accepts a string as its argument, and utilizes a stack to determine whether the string contains proper `{` and `}` syntax (i.e. all opening/closing curly braces match in a way that would not cause syntax errors when being run by an interpreter). Examples of proper syntax are: `{}`, `{{}}`, `{{{}{{}}}}`, etc. It will return `true` if the string contains proper syntax, or `false` if it does not. If it is not passed a string, it will return an error explaining that. The output should look like so:
```
solution.checkBraces(`{{}}`);

>>> true <<<
```

`solution2.js` exports a single function, `binarySearch(n, arr)` that expects a number as its first argument and a sorted array as its second. As it was specified in the problem domain to be a sorted array, there is no check for duplicate numbers or unsorted arrays. If it is not passed either of those arguments, they are not of the correct types, the array is empty, or the array does not include the number passed, the function will return an error with a message specific to the unmet condition. It will return an object literal with 2 properties, the value of `n` passed, and the index at which that number is located. The output will look like so:
```
solution.binarySearch(3, [1,2,3,4,5,6,7,8,9,10]);

>>> {value: 3, index: 2} <<<
```

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/
