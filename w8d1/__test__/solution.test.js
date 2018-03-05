'use strict';

const BST = require('../lib/binary-search-tree');
const TreeNode = require('../lib/tree-node');
const solution = require('../lib/solution');

describe('#soluton', function() {
  describe('valid input/output', () => {
    const treeOne = new BST();
    const root = new TreeNode(10);
    const node2 = new TreeNode(8);
    const node3 = new TreeNode(7);
    const node4 = new TreeNode(9);
    const node5 = new TreeNode(12);
    const node6 = new TreeNode(11);
    const node7 = new TreeNode(13);
    treeOne.insert(root);
    treeOne.insert(node2);
    treeOne.insert(node3);
    treeOne.insert(node4);
    treeOne.insert(node5);
    treeOne.insert(node6);
    treeOne.insert(node7);

    const treeTwo = new BST();
    const rootTwo = new TreeNode(10);
    const node2Two = new TreeNode(8);
    const node3Two = new TreeNode(7);
    const node4Two = new TreeNode(9);
    const node5Two = new TreeNode(12);
    const node6Two = new TreeNode(11);
    const node7Two = new TreeNode(13);
    treeTwo.insert(rootTwo);
    treeTwo.insert(node2Two);
    treeTwo.insert(node3Two);
    treeTwo.insert(node4Two);
    treeTwo.insert(node5Two);
    treeTwo.insert(node6Two);
    treeTwo.insert(node7Two);

    const treeThree = new BST();
    const rootThree = new TreeNode(10);
    const node2Three = new TreeNode(8);
    const node3Three = new TreeNode(7);
    const node4Three = new TreeNode(9);
    const node5Three = new TreeNode(12);
    const node6Three = new TreeNode(11);
    treeThree.insert(rootThree);
    treeThree.insert(node2Three);
    treeThree.insert(node3Three);
    treeThree.insert(node4Three);
    treeThree.insert(node5Three);
    treeThree.insert(node6Three);

    // console.log('treeOne root.left:', treeOne.root.left);
    // console.log('treeOne root.right:', treeOne.root.right);
    // console.log('treeThree root.left:', treeOne.root.left);
    // console.log('treeThree root.right:', treeOne.root.right);

    it('should return a boolean value as output', () => {
      expect(typeof solution(treeOne, treeTwo)).toEqual('boolean');
    });
    it('should return a boolean true as output if trees are identical', () => {
      expect(solution(treeOne, treeTwo)).toBe(true);
    });
    it('should return a boolean false as output if trees are not identical', () => {
      expect(solution(treeOne, treeThree)).toBe(false);
    });
  });

  describe('invalid input/output', () => {

  });
});