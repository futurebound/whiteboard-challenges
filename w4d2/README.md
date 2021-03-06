# Whiteboarding Challenge 17

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge is to create a function that accepts a k-ary tree as its argument, and returns the total sum of all elements in the tree. It is assumed that all elements have a `value` property and all values are numeric.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
**Solution**
The solution module exports a single function, `treeSum(k_ary)`, which functions as described above. If there are no nodes to check, it will return an error with a message describing that. It defines the callback function to be used by the `breadthFirst(callback)` method on the `K_ary` class. The callback verifies that the value of the current node is a number, and if it passes that verification its value is added to the total to be returned upon completion. If there are no numeric values in the tree, the function defaults to returning `null`. If the only numeric value in the tree is `0`, the function will return `0` not `null`.

**Kary-Tree**
This module was given as starter code. It exports a single class, `K_ary`, which is used in the solution and testing modules to construct trees and call the methods on them it needed. The methods used in these modules are `breadthFirst(callback)` and `insert(val, present)`. The latter was used purely to construct test trees.

**Queue**
This module was also given as starter code, and exported itself as class `Queue` to be used by the Kary-Tree module in the `breadthFirst(callback)` traversal method.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/