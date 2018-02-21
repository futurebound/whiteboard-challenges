# Whiteboard Challenge 28 - Pop

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This challenge is to create a function that accepts a string of words, and from that string identifies the highest scoring word. Letters are assigned points relative to their position in the alphabet, such that: a = 1, b = 2, etc. If two words score the same, the word that appears earliest in the original string should be returned. All letters will be lowercase, so forcing the input is not required.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
**Solution**
The solution module exports a single anonymous function that accepts a single string argument. It determines the score of each word, and keeps track of that word to use as a measure for each following word. Only if a following word scores higher than the current highest will the output be overwritten.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

