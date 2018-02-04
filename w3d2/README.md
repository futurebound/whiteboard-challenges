# Whiteboarding Challenge 12

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge was to implement a Queue using only two Stacks. This means we should be able to use `enqueue(value)` and `dequeue()` Queue methods each with code specifically utilizing two separate Stacks with `push(val)` and `pop()` methods being called within the enqueue/dequeue methods to create the desired behavior.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
The `solution.js` module located in the lib/ directory utilizes the `stack.js` module to create and imitate normal Queue behavior using two stacks. It exports a single class, with a constructor and two methods attached to it. A new 'solution' instance has `inStack`, `outStack` and `size` properties. The size defaults to null. When the `enqueue(val)` method is called and passed a value, it will add that value as a node to the `inStack`. Subsequent `enqueue(val)` calls will place nodes on top of the first one entered, which can be seen as the 'front' of this pseudo-queue. If this method is not passed a value, it will return an error with a message explaining that. The `dequeue()` method moves all nodes from the `inStack` to the `outStack` and then 'pops' to dequeue the front of the stack. If there is nothing in the `inStack`, calling the method will return an error with a message explaining that.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

