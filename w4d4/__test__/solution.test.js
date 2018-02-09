'use strict';

const solution = require('../lib/solution');
const K_ary = require('../lib/kary-tree');
const SLL = require('../lib/sll');
require('jest');

describe('#solution', function () {
  beforeAll(() => {
    this.test = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2);
    this.testTwo = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2).insert(5, 1);
    this.testThree = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2).insert(5, 1).insert(6, 3).insert(7, 3).insert(8, 3);

    this.testInvalid = new K_ary();
  });

  describe(`valid input/output`, () => {
    it('should return a SLL instance', () => {
      expect(solution(this.test)).toBeInstanceOf(SLL);
    });
    it('should return a reference to node with val and children properties', () => {
      expect(solution(this.test)).toHaveProperty('head');
      expect(solution(this.test).head).toHaveProperty('value');
      expect(solution(this.test).head).toHaveProperty('next');
    });

    // it('should return node with val of 2, 2 childen', () => {
    //   expect(solution(this.test).val).toEqual(2);
    //   expect(solution(this.test).children.length).toEqual(2);
    // });
    // it('should return node with val of 1, 2 childen since it was encountered first', () => {
    //   expect(solution(this.testTwo).val).toEqual(1);
    //   expect(solution(this.testTwo).children.length).toEqual(2);
    // });
    // it('should return node with val of 3, 3 childen', () => {
    //   expect(solution(this.testThree).val).toEqual(3);
    //   expect(solution(this.testThree).children.length).toEqual(3);
    // });
  });

  // describe(`invalid input/output`, () => {
  //   it('should return error if not passed argument', () => {
  //     expect(solution()).toBeInstanceOf(Error);
  //   });
  //   it('should return error message if not passed argument', () => {
  //     expect(solution().message).toContain('please pass a k_ary tree');
  //   });

  //   it('should return error if nothing in tree', () => {
  //     expect(solution(this.testInvalid)).toBeInstanceOf(Error);
  //   });
  //   it('should return error message if nothing in tree', () => {
  //     expect(solution(this.testInvalid).message).toEqual('Invalid input, nothing in tree');
  //   });

  //   it('should return error if not passed instance of K-ary tree', () => {
  //     expect(solution('k-ary tree')).toBeInstanceOf(Error);
  //   });
  //   it('should return error message if not passed instance of K-ary tree', () => {
  //     expect(solution('k-ary tree').message).toContain('please pass a k_ary tree');
  //   });
  // });
});