'use strict';

const solution = require('../lib/solution');
const K_ary = require('../lib/kary-tree');
require('jest');

describe('#solution', function () {
  beforeAll(() => {
    this.test = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2);
    this.testTwo = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2).insert(5, 1);

    this.testInvalid = new K_ary();
  });

  describe(`valid input/output`, () => {
    it('should return node with val of 2, 2 childen', () => {
      expect(solution(this.test).val).toEqual(2);
    });
    it('should return node with val of 1, 2 childen since it was encountered first', () => {
      expect(solution(this.testTwo).val).toEqual(1);
    });
  });

  describe(`invalid input/output`, () => {
    it('should return error if not passed argument', () => {
      expect(solution()).toBeInstanceOf(Error);
    });
    it('should return error message if not passed argument', () => {
      expect(solution().message).toContain('please pass a k_ary tree');
    });

    it('should return error if nothing in tree', () => {
      expect(solution(this.testInvalid)).toBeInstanceOf(Error);
    });
    it('should return error message if nothing in tree', () => {
      expect(solution(this.testInvalid).message).toEqual('Invalid input, nothing in tree');
    });

    it('should return error if not passed instance of K-ary tree', () => {
      expect(solution('k-ary tree')).toBeInstanceOf(Error);
    });
    it('should return error message if not passed instance of K-ary tree', () => {
      expect(solution('k-ary tree').message).toContain('please pass a k_ary tree');
    });
  });
});