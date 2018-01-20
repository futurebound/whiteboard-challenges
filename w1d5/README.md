To run this code, clone the repository and open in your favorite editor. Running 'npm install' in the terminal will install the required packages, and upon completion 'npm test' will run the tests included for the code. 

Solution.js is home to one function, 'middleNode', which expects an single linked list (nested objects) in the form of: 
```
{value: number, next: {val, next}}

```
The function will return an an array at the targeted middle node, depending on the number of nested objects. For odd numbers, the exact middle node will be targeted and its information returned. For even numbers, the rounded up middle will be returned (i.e. if six, the targeted node will be the 4th of 6). The function expects and input of objects, other inputs will return 'invalid input'.