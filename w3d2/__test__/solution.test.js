'use strict';

const Queue = require('../lib/solution');
require('jest');

describe('#solution', function() {
  describe('valid input/output', () => {
    beforeEach(() => {
      this.test = new Queue().enqueue(1).enqueue(2).enqueue(3);
    });
    
    it('should create a queue', () => {
      expect(this.test).toBeInstanceOf(Queue);
    });
  });
  describe('valid input/output', () => {

  });
});