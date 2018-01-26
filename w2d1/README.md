# Whiteboard Challenge 6

**Author**: Mitchell
**Version**: 1.0.0

## Getting Started
To get this working properly, anyone seeking to do so would need to clone this repository, and then open in their favorite editor. In their terminial, they would enter `npm install` to install dependencies, followed by `npm test` to iniate the included tests running with the Jest NPM module.

## Description
In the solution.js file, located in the lib/ directory, there is a single function `loop()` that expects two arguments, an integer greater than 0 and itself as a callback, written as `solution.loop()`. The function in its current form will return undefined with proper inputs, or null with inproper inputs. A `console.log` counter can be added to check how many many times the function calls itself recursively while reducing the given numerical value to 0.

