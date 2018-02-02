'use strict';

const K_ary = require('../lib/kary-tree');
const solution = require('../lib/solution');
require('jest');

describe('#solution', () => {
  describe('#childlessNodes', function () {
    beforeAll(() => {
      //remember that instead of if(next) its if(children.length)
      this.testSingleNode = new K_ary().insert(1, 1);
      this.testTree = new K_ary().insert(1, 1).insert(2, 1).insert(3, 2);
      this.testTreeTwo = new K_ary().insert(1, 1).insert(2, 1).insert(3, 2).insert(4, 2);
      this.testTreeThree = new K_ary().insert(1, 1).insert(2, 1).insert(3, 2).insert(4, 2).insert(5, 1);

      this.testInvalid = new K_ary();
    });

    it('should just return single node if no children', () => {
      expect(solution.childlessNodes(this.testSingleNode).length).toEqual(1);
    });

    describe('Valid input/output with single childess node', () => {
      it('should return an array', () => {
        expect(solution.childlessNodes(this.testTree)).toBeInstanceOf(Array);
      });
      it('should return an array with one node', () => {
        expect(solution.childlessNodes(this.testTree).length).toEqual(1);
      });
      it('should return an array with one node, with a value of 3', () => {
        expect(solution.childlessNodes(this.testTree)[0].val).toEqual(3);
      });
      it('should return an array with one node, with a value of 3, and no children', () => {
        expect(solution.childlessNodes(this.testTree)[0].children.length).toEqual(0);
      });     
    });

    describe('Valid input/output with two childless nodes', () => {
      it('should return an array', () => {
        expect(solution.childlessNodes(this.testTreeTwo)).toBeInstanceOf(Array);
      });
      it('should return an array with two nodes', () => {
        expect(solution.childlessNodes(this.testTreeTwo).length).toEqual(2);
      });
      it('should return an array with two nodes, with values of 3 and 4', () => {
        expect(solution.childlessNodes(this.testTreeTwo)[0].val).toEqual(3);
        expect(solution.childlessNodes(this.testTreeTwo)[1].val).toEqual(4);
      });
      it('should return an array with two nodes, with values of 3 and 4, neither with children', () => {
        expect(solution.childlessNodes(this.testTreeTwo)[0].children.length).toEqual(0);
        expect(solution.childlessNodes(this.testTreeTwo)[1].children.length).toEqual(0);
      });
    });

    describe('Valid input/output with three childless nodes, on multiple branches from root nodes', () => {
      it('should return an array', () => {
        expect(solution.childlessNodes(this.testTreeThree)).toBeInstanceOf(Array);
      });
      it('should return an array with three nodes', () => {
        expect(solution.childlessNodes(this.testTreeThree).length).toEqual(3);
      });
      it('should return an array with three nodes, with values of 3, 4, and 5', () => {
        expect(solution.childlessNodes(this.testTreeThree)[0].val).toEqual(5);
        expect(solution.childlessNodes(this.testTreeThree)[1].val).toEqual(3);
        expect(solution.childlessNodes(this.testTreeThree)[2].val).toEqual(4);
      });
      it('should return an array with three nodes, with values of 3, 4, and 5 none with children', () => {
        expect(solution.childlessNodes(this.testTreeThree)[0].children.length).toEqual(0);
        expect(solution.childlessNodes(this.testTreeThree)[1].children.length).toEqual(0);
        expect(solution.childlessNodes(this.testTreeThree)[2].children.length).toEqual(0);
      });
    });

    describe('Invalid input/output', () => {
      it('should return error if nothing in tree', () => {
        expect(solution.childlessNodes(this.testInvalid)).toBeInstanceOf(Error);
      });
      it('should return error message if nothing in tree', () => {
        expect(solution.childlessNodes(this.testInvalid).message).toEqual('Invalid input, nothing in tree');
      });
    });
  });
});