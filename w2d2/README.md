# Whiteboard Challenge 7

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge was to write a function accepting a singly linked list as the only arugments. If the passed list is circular (i.e. has no end, no next of null) the function should return true, else it should return false.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
`solution.js` in the lib/ directory exports a single function, `findReapeat(sll)` that takes a singly linked list as its argument. If the SLL is circular, as in the end of the list's `next` property points back to the `head` of the list, the function will return `true`. If the SLL is non-circular, as in it has an end node with a `next` of `null`, the function will return `false`. If the argument passed to the function is not an instance of an SLL, the class exported by the `sll.js` module, the function will return an error with a message explaining to pass a singly linked list. If it is passed an empty SLL instance (an SLL without a `head` value) the function will return an error with a message explaining the user has passed it an empty SLL.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/


