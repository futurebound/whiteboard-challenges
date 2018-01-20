'use strict';

const solution = module.exports = {};

solution.middleNode = (list) => {
  if(typeof(list) !== 'object') {
    return 'invalid input';
  }
  let listNodes = [];
  let obj = list;
  while (obj) {
    listNodes.push(obj);
    obj = obj.next;
  }
  let targetNode = Math.floor(listNodes.length / 2);
  return [listNodes[targetNode].value, listNodes[targetNode].next];
};