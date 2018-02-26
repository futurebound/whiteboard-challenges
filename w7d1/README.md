# Whiteboard Challenge 31

**Author**: Mitchell

**Version**: 1.0.0

# Overview
This challenge is to create a function that accepts two arrays as arguments, and returns the intersection of those two arrays. This means that input and output should look like:
```
arr1 = [1, 2, 2, 1];
arr2 = [2, 2];

solution(arr1, arr2);
=> [2]
```

# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

# Description
## lib/solution
The solution module exports a single anonymous function that expects two array arguments. If it is passed none or a single argument, it will return an error informing the user of this. If either array argument is empty, it will return an error informing the user of this since it will have nothing to check against. It returns an array with only single instances of duplicates (i.e. if there are multiple values present in either array that are in both arrays, the output will only include one of those values, not both).

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>