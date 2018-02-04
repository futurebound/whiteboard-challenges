'use strict';

const Stack = require('../lib/stack');

module.exports = class {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.size = null;
  }

  enqueue(val) {
    if(!val) return new Error('no value to enqueue, please pass value');
    while(this.outStack.size) {
      this.inStack.push(this.outStack.pop());
    }
    this.inStack.push(val);
    this.size++;
    return this;
  }

  dequeue() {
    if(!this.inStack.size) return new Error('nothing to dequeue');
    while(this.inStack.size) {
      this.outStack.push(this.inStack.pop());
    }
    this.size--;
    return this.outStack.pop();
  }
};
