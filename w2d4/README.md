# Whiteboarding Challenge 9 

**Author**: Mitchell
**Version**: 1.0.0

## Overview
We were tasked to create a function that accepts a number and a singly linked list as its arguments, and should return the node at the given numerical distance away from the end of the linked list.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
In the solution.js file located in the lib/ directory, there is a single function `nthFromLast(n, sll)` expecting two arguments: 
1. Integer to target
2. Singly linked list
If either argument is missing, the function will return an error explaining this.
If `n` is not a number, the function will return an error explaining this.
If there is no `head` property on the SLL passed, the function will assume it's not an SLL and return an error explaining this.
If `n` is greater than the length of the SLL, the function will return an error explaining this.

The output of the function will be the targeted node, as an object containing `value` and `next` properties. This function assumes that by passing `n` of 2, the target is the 2nd from last. If the user wants the last node in the list, they can pass an `n` of 0.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/


