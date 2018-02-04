'use strict';

const solution = require('../lib/solution');
const SLL = require('../lib/sll');

describe('w2d4 whiteboarding', function () {
  describe('', () => {
    beforeEach(() => {
      this.testSLL = new SLL().insertEnd(1).insertEnd(2).insertEnd(3).insertEnd(4).insertEnd(5).insertEnd(6);
    });

    it('should return the node 2 from last, with value of 4', () => {
      expect(solution.nthFromLast(2, this.testSLL).value).toEqual(4);

    });
    

  });
});