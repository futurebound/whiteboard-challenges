# Whiteboard Challenge 26

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge is to create a function that accepts a single argument, an instance of a `K-ary` tree. It will determine what node has the highest amount of children in the given tree, and return that node as its output. If there are two or more nodes with the same amount of children, the function will reference the 1st node it encountered with the highest amount of children.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
**Solution**
The solution module exports a single anonymous function which functions as described above. If there are no nodes to check, it will return an error with a message describing that. It defines the callback function to be used by the `breadthFirst(callback)` method on the `K_ary` class. It declares a variable to hold the node with the most children, `mostChildren`, which is set equal to the root of the passed `K_ary` tree. The callback determines whether the current node during traversal has more children than the node assigned to `mostChildren`. If so, it will reassign the value of `mostChildren` to the current node. After traversing the entire tree, the function will return a reference to the node with the most children. If the function isn't passed an instance of a `K_ary` tree or it is not passed any arguments, the function will return an error with a message asking the user to pass a `K_ary` tree. If the function is passed an empty `K_ary` tree, the function will return an error alerting the user to having been passed an empty tree.

**Kary-Tree**
This module was given as starter code. It exports a single class, `K_ary`, which is used in the solution and testing modules to construct trees and call the methods on them it needed. The methods used in these modules are `breadthFirst(callback)` and `insert(val, present)`. The latter was used purely to construct test trees.

**Queue**
This module was also given as starter code, and exported itself as class `Queue` to be used by the Kary-Tree module in the `breadthFirst(callback)` traversal method.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

