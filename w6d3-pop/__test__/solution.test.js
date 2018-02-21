'use strict';

const solution = require('../lib/solution');
require('jest');

describe('#solution', function () {
  describe(`valid input/output`, () => {
    this.test = 'a c d a b f';
    this.testTwo = 'domo arigato mister roboto';
    this.testThree = 'aaa aaa abc bd';

    it('should return the highest scoring word, f', () => {
      expect(solution(this.test)).toEqual('f');
    });
    it('should return the highest scoring word, roboto', () => {
      expect(solution(this.testTwo)).toEqual('roboto');
    });
    it('should return the first highest scoring word (abc) if two score the same (abc && bd, both 6)', () => {
      expect(solution(this.testThree)).toEqual('abc');
    });
  });
});