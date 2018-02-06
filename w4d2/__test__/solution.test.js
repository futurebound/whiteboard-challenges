'use strict';

const K_ary = require('../lib/kary-tree');
const solution = require('../lib/solution');
require('jest');

describe('#solution', () => {
  describe('#treeSum', function () {
    beforeAll(() => {
      //remember that instead of if(next) its if(children.length)
      this.testSingleNode = new K_ary().insert(1);
      this.testSingleNode0 = new K_ary().insert(0);
      this.testTree = new K_ary().insert(1).insert(2, 1).insert(3, 2);
      this.testTreeTwo = new K_ary().insert(1).insert('carrot', 1).insert({carrot: true}, 1).insert(4, 1).insert(['carrot'], 1);
      this.testTreeThree = new K_ary().insert('root').insert('carrot', 'root').insert({carrot: true}, 'root').insert(['carrot'], 'root');
      
      this.testInvalid = new K_ary();
    });
    
    
    describe('Valid input/output', () => {
      it('should return a number', () => {
        expect(typeof(solution.treeSum(this.testSingleNode)) === 'number').toBeTruthy();
      });
      it('should just sum even if only 1 node', () => {
        expect(solution.treeSum(this.testSingleNode)).toEqual(1);
      });
      it('should just sum even if only 1 node with a value of 0, returning 0', () => {
        expect(solution.treeSum(this.testSingleNode0)).toEqual(0);
      });
      it('should return sum of 6', () => {
        expect(solution.treeSum(this.testTree)).toBe(6);
      });  
      it('should return sum of 5, not including values of nodes with value types other than numbers', () => {
        expect(solution.treeSum(this.testTreeTwo)).toBe(5);
      });  
      it('should return null with no numeric values in nodes', () => {
        expect(solution.treeSum(this.testTreeThree)).toBeNull();
      });  
    });

    describe('Invalid input/output', () => {
      it('should return error if not passed argument', () => {
        expect(solution.treeSum()).toBeInstanceOf(Error);
      });
      it('should return error message if not passed argument', () => {
        expect(solution.treeSum().message).toContain('please pass a k_ary tree');
      });
      it('should return error if nothing in tree', () => {
        expect(solution.treeSum(this.testInvalid)).toBeInstanceOf(Error);
      });
      it('should return error message if nothing in tree', () => {
        expect(solution.treeSum(this.testInvalid).message).toEqual('Invalid input, nothing in tree');
      });
      it('should return error if not passed instance of K-ary tree', () => {
        expect(solution.treeSum('k-ary tree')).toBeInstanceOf(Error);
      });
      it('should return error message if not passed instance of K-ary tree', () => {
        expect(solution.treeSum('k-ary tree').message).toContain('please pass a k_ary tree');
      });
    });
  });
});