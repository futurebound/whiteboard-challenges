'use strict';

const SLL = require('../lib/sll');
const Stack = require('../lib/stack');

const solution = module.exports =  {};

solution.dedupe = function(sll) {
  if(!sll.head || !sll.head.value) return new Error('ERROR: Invalid Input');
  if(!sll.head.next) return new Error('ERROR: Only one node in list, cannot check for duplicates');
  let stack = new Stack();
  let sLL = new SLL();

  while(sll.head.next) {
    if(sll.head.value !== sll.head.next.value) {
      stack.push(sll.head.value);
    }
    sll.head = sll.head.next;
  }
  stack.push(sll.head.value); //pushes final value not caught by while loop to stack

  while(stack.size) {
    sLL.insertHead(stack.pop().value); //has to be value since sll method validates numerical value
  }
  return sLL;
};