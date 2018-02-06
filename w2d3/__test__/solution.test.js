'use strict';

const SLL = require('../lib/sll');

const solution = require('../lib/solution');
require('jest');


describe('#solution', function () {
  beforeAll(() => {
    this.sll1 = new SLL().insertEnd(1).insertEnd(3).insertEnd(5);
    this.sll2 = new SLL().insertEnd(1).insertEnd(2).insertEnd(5);
    console.log('sll1:', this.sll1);
    console.log('sll2:', this.sll2);
  });

  describe(`valid input/output`, () => {
    it('should return an SLL', () => {
      expect(solution.duplicateValues(this.sll1.head, this.sll2.head)).toBeInstanceOf(SLL);
    });
    it('should return an SLL with head value', () => {
      expect(solution.duplicateValues(this.sll1.head, this.sll2.head)).not.toBeNull();
    });
  });

  // describe(`invalid input/output`, () => {
  //   it('', () => {
  //     expect()
  //   });
  // });
});