'use strict';

const Stack = require('../lib/stack');

const solution = module.exports = {};

//O(n)
solution.checkBraces = function(str) {
  if(typeof str !== 'string') return new Error('argument must be string');
  if(!str.includes('{') || !str.includes('}')) return false;
  let strArray = str.split('');
  let stack = new Stack();
  for(let i in strArray) {
    if(strArray[i] === '{') stack.push(strArray[i]);
  }
  for(let i in strArray) {
    if(strArray[i] === '}') {
      if(!stack.size) return false;
      stack.pop();
    }
  }

  return !stack.size ? true : false;
};