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
The application consists of 5 modules in the `lib/` directory. The primary 3 are `binary-tree`, `sll`, and `solution`. The nodes are utilized to construct individual nodes for the binary tree and singly linked list data structures. 

The solution module imports and utilizes these two modules, and contains an `O(n)` solution to the challenge described in the above overview.

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

## SLL
The SLL module has 4 methods, `insertHead(value)`, `insertEnd(value)`, `reverse()`, and `remove(offset)` on the SLL prototype.

**[click to expand below]**

<details>
  <summary>All Methods</summary>

  * **`insertHead(value)`** Expects a single numerical argument, and will create a new node immediately after the head of the SLL with that value and a next of null. Will return an error message otherwise if passed improper argument.
  * **`insertEnd(value)`** Expects a single numerical argument, and will create a new node at the end of the SLL with the given value and a next of null. Will return an error message otherwise if passed improper argument.
  * **`reverse()`** Reverses the order of the SLL, with the head pointing to the previous end of the SLL.
  * **`remove(offset)`** Removes the node in the list specified by the numerical argument. **NOTE** Offset here refers to not the index but of offset within the list from the head (i.e. as opposed to the index as used in array indices where index 0 is the first element in the array, offset here refers to the position of the node in the list such that offset 1 is the first node in the SLL, whereas index 1 would commonly be the second node in the list).
</details>

## Solution
This module exports an anonymous function expecting a single `binaryTree` argument. It checks whether the argument exists and is an instance of the required in `BT` class. If not, it returns an error to the user describing valid input. It then checks whether the `binaryTree` argument has a root, and if not returns an error to the user describing this requirement.

Once input has been validated, it declares the variable `output` assigned the value of a new `SLL` class instance. It then declares the variable `values` and assigns it the return value of a few chained processes:
1. It first utilizes the `inOrderTraversal()` method of the `BT` class, which returns an array of all values present in the passed `binaryTree` argument.
1. It then calls `.filter()` on that array to remove any value which is non-numeric.
1. It then calls `.sort()` on the output of the prior method to arrange the numeric values in ascending order.
1. It finally maps through the output of the prior method (an array of sorted numeric values) and calls the `.insertEnd()` method of the imported `SLL` class and inserts every value present to the end of the `SLL` assigned to `output`.

The function then returns the current value of `output` as its output.


***
# Credits 
**<details>**
  <summary>Tools and Libraries</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>

