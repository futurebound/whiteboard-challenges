# Whiteboarding Challenge 14

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge was to write a fuction, `dedupe(head)`, that accepts the head of a linked list as it's argument, and returns a new linked list. To do this, we need to use a stack to identify any consecutive duplications, and remove them from the list (i.e. it's ok for the given linked list to have duplications overall, but if they come one right after another we need to get them outta there).

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
**Stack** 
The Stack module is accessed by other parts of the application by entering const Stack = require('../lib/stack). The class has three methods available to it, `push(value)`, `pop()`, and `peek()`. It has `top`, `maxSize`, and `size` properties once constructed.
* `push(value)` expects a single argument, which can be any value one wants to store. It will return the entirety of the stack upon completion. It will throw an error if the maximum size of the stack would be exceeded by adding another node to the stack.
* `pop()` doesn't expect any arguments, and returns the item removed from the top of the stack upon completion. It will throw an error if there is nothing in the stack to remove.
* `peek()` doesn't expect any arguments either, and returns the entirety of the stack, beginning with the first item in the stack.

**SLL**
The SLL module has 4 methods, `insertHead(value)`, `insertEnd(value)`, `reverse()`, and `remove(offset)` on the SLL prototype.
* `insertHead(value)` expects a single numerical argument, and will create a new node immediately after the head of the SLL with that value and a next of null. Will return an error message otherwise if passed improper argument.
* `insertEnd(value)` expects a single numerical argument, and will create a new node at the end of the SLL with the given value and a next of null. Will return an error message otherwise if passed improper argument.
* `reverse()` reverses the order of the SLL, with the head pointing to the previous end of the SLL.
* `remove(offset)` removes the node in the list specified by the numerical argument. **NOTE** Offset here refers to not the index but of offset within the list from the head (i.e. as opposed to the index as used in array indices where index 0 is the first element in the array, offset here refers to the position of the node in the list such that offset 1 is the first node in the SLL, whereas index 1 would commonly be the second node in the list).

**Solution**
The solution module exports a single function, `dedupe(head)`, and acts as described above. It will return errors if there is no head, no value for the head, or only a single node in which case it would serve no function in checking for duplicates.


## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/