'use strict';

const solution = require('../lib/solution');
const K_ary = require('../lib/kary-tree');
const SLL = require('../lib/sll');
require('jest');

describe('#solution', function () {
  beforeAll(() => {
    this.test = new K_ary().insert(1).insert(2, 1).insert(3, 2).insert(4, 2);
    this.testTwo = new K_ary().insert(1).insert('crayon', 1).insert('pencil', 'crayon').insert(4, 1).insert(5, 4);
    this.testThree = new K_ary().insert(1).insert(11, 1).insert(2, 1).insert(4, 2).insert(5, 1).insert(3, 2).insert(7, 3).insert(8, 3);

    this.testInvalid = new K_ary();
  });

  describe(`valid input/output`, () => {
    it('should return a SLL instance', () => {
      console.log(solution(this.test));
      expect(solution(this.test)).toBeInstanceOf(SLL);
    });
    it('should return a SLL with a head, and value/next properties on the head', () => {
      expect(solution(this.test)).toHaveProperty('head');
      expect(solution(this.test).head).toHaveProperty('value');
      expect(solution(this.test).head).toHaveProperty('next');
    });
    it('should return SLL with length of 4', () => {
      expect(solution(this.test).length).toEqual(4);
    });

    it('should ignore strings and ouput SLL of only numbers', () => {
      expect(solution(this.testTwo).head.value).toEqual(1);
      expect(solution(this.testTwo).head.next.value).toEqual(4);
      expect(solution(this.testTwo).head.next.next.value).toEqual(5);
      expect(solution(this.testTwo).head.next.next.next).toBeNull();
      expect(solution(this.testTwo).length).toEqual(3);
    });
    it('should return with sorted numerican values, including doubles', () => {
      expect(solution(this.testThree).length).toEqual(8);
      expect(solution(this.testThree).head.value).toEqual(1);
      expect(solution(this.testThree).head.next.value).toEqual(2);
      expect(solution(this.testThree).head.next.next.value).toEqual(3);
      expect(solution(this.testThree).head.next.next.next.value).toEqual(4);
      expect(solution(this.testThree).head.next.next.next.next.value).toEqual(5);
      expect(solution(this.testThree).head.next.next.next.next.next.value).toEqual(7);
      expect(solution(this.testThree).head.next.next.next.next.next.next.value).toEqual(8);
      expect(solution(this.testThree).head.next.next.next.next.next.next.next.value).toEqual(11);
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