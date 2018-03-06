# Whiteboard Challenge 37

**Authors:** Mitchell

**Version:** 1.0.0

***
# Overview
This challenge is to create a function that accepts a single `Binary Tree` as its argument, and returns a `Singly Linked List` as its output of the sorted numeric values present in the `Binary Tree`.

**Example Binary Tree:**
```
          10
         /  \
        7    13
       /     
      5
     / \
    4   6
```
**Example Singly Linked List Output**
```
{head: 
  {value: 4, next: 
    {value: 5, next:
      {value: 6, next:
        {value: 7, next:
          {value: 10, next:
            {value: 13, next: null}
          }
        }
      }
    }
  }
} 
```

***
# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

***
# Description
The application consists of three primary modules, all located in the `lib/` directory: `tree-node`, `binary-tree`, and `binary-search-tree`. The latter modules utilize the former to construct the individual nodes within the trees.

## Tree Node
Exports a single class, `TreeNode`, for potential use in the tree modules. Its constructor takes a required `value` argument, as well as two optional arguments `left` and `right`. The optional arguments default to `null` if not provided. It assigns these arguments to the specific `TreeNode` instance.

## Binary Tree
Exports a single class, `BinaryTree`, and various traversal methods. Its constructor takes an optional `root` argument to serve as a reference point to the entire tree, that will default to `null` if not provided. It has 6 methods exported with the class that traverse the tree in various orders. These traversals move through the tree as follows:

**[click to expand below]**

<details>
  <summary>In-Order ~ left => root => right</summary>

  * **`inOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_inOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_inOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then pushes `root.value` to res, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
</details>

<details>
  <summary>Pre-Order ~ root => left => right</summary>

  * **`preOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_preOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_preOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It pushes `root.value` to res, then calls itself recursively and passes `(root.left, res)` as arguments, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
</details>

<details>
  <summary>Post-Order ~ left => right => root</summary>
  
  * **`postOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_postOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_postOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then calls itself recursively and passes `(root.right, res)` as arguments, and then pushes `root.value` to res. This traverses the tree and tracks values in the order specified above.
</details>

**<details>**
  <summary>All Methods</summary>

  * **`inOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_inOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_inOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then pushes `root.value` to res, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
  * **`preOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_preOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_preOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It pushes `root.value` to res, then calls itself recursively and passes `(root.left, res)` as arguments, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
  * **`postOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_postOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_postOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then calls itself recursively and passes `(root.right, res)` as arguments, and then pushes `root.value` to res. This traverses the tree and tracks values in the order specified above.
</details>

## Solution

***
# Credits 
**<details>**
  <summary>Tools and Libraries</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>

