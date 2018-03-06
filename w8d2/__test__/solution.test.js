'use strict';

const SLL = require('../lib/sll');
const BT = require('../lib/binary-tree');
const TN = require('../lib/tree-node');
const solution = require('../lib/solution');

describe('#solution', function() {
  let bt = new BT();
  let rootTn = new TN(2);
  bt.root = rootTn;
  bt.root.left = new TN(7);
  bt.root.right = new TN(10);
  bt.root.left.left = new TN(1);
  bt.root.left.right = new TN(16);
  bt.root.right.left = new TN(6);
  bt.root.right.right = new TN(4);

  describe('valid input/output', () => {
    it('should return an SLL as output', () => {
      expect(solution(bt)).toBeInstanceOf(SLL);
    });
    it('should return an ordered SLL as output', () => {
      let output = solution(bt);
      expect(output.head.value).toEqual(1);
      expect(output.head.next.value).toEqual(2);
      expect(output.head.next.next.value).toEqual(4);
      expect(output.head.next.next.next.value).toEqual(6);
      expect(output.head.next.next.next.next.value).toEqual(7);
      expect(output.head.next.next.next.next.next.value).toEqual(10);
      expect(output.head.next.next.next.next.next.next.value).toEqual(16);
    });
    it('should return an ordered SLL as output if floating point integers are added', () => {
      let btDecimal = bt;
      btDecimal.root.right.left.left = new TN(1.5);
      btDecimal.root.right.left.right = new TN(6.5);
      let output = solution(btDecimal);
      expect(output.head.value).toEqual(1);
      expect(output.head.next.value).toEqual(1.5);
      expect(output.head.next.next.value).toEqual(2);
      expect(output.head.next.next.next.value).toEqual(4);
      expect(output.head.next.next.next.next.value).toEqual(6);
      expect(output.head.next.next.next.next.next.value).toEqual(6.5);
      expect(output.head.next.next.next.next.next.next.value).toEqual(7);
      expect(output.head.next.next.next.next.next.next.next.value).toEqual(10);
      expect(output.head.next.next.next.next.next.next.next.next.value).toEqual(16);
    });
    it('should return an ordered SLL as output with only numbers in case strings or objects are the value of BT nodes', () => {
      let btNonNumeric = bt;
      btNonNumeric.root.right.left.left = new TN('twenty two');
      btNonNumeric.root.right.left.right = new TN({value: 26});
      let output = solution(btNonNumeric);
      expect(output.head.value).toEqual(1);
      expect(output.head.next.value).toEqual(2);
      expect(output.head.next.next.value).toEqual(4);
      expect(output.head.next.next.next.value).toEqual(6);
      expect(output.head.next.next.next.next.value).toEqual(7);
      expect(output.head.next.next.next.next.next.value).toEqual(10);
      expect(output.head.next.next.next.next.next.next.value).toEqual(16);
    });
  });
  describe('invalid input/output', () => {
    // it('should return error if not passed instance of binary tree', () => {
    //   expect(solution('binary tree')).toBeInstanceOf(Error);
    // });
  });
});