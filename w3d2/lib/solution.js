'use strict';

const Stack = require('../lib/stack');

module.exports = class {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.size = null;
  }

  enqueue(val) {
    while(this.outStack.size) {
      this.inStack.push(this.outStack.pop());
    }
    this.inStack.push(val);
    this.size++;
    return this;
  }

  dequeue() {
    while(this.inStack.size) {
      this.outStack.push(this.inStack.pop());
    }
    console.log(this.outStack);
    this.size--;
    return this.outStack.pop();
  }
};
