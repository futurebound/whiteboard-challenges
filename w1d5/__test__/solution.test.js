'use strict';

const solution = require('../lib/solution');

describe('w1d5 whiteboarding', function () {
  it('should return the middle index object (i.e. 3rd out of 5) with an odd number of objects in SLL', function (done) {
    const sLL = {
      value: 25,
      next: {
        value: 1,
        next: {
          value: 15,
          next: {
            value: 33,
            next: {
              value: 4,
              next: null
            }}}}};
    expect(solution.middleNode(sLL)).toEqual([15, { value: 33, next: { value: 4, next: null } }]);
    done();
  });

  it('should return the rounded up middle (i.e. 4/6 instead of 3/6) with an even number of objects in SLL', function (done) {
    const sLL = {
      value: 25,
      next: {
        value: 1,
        next: {
          value: 15,
          next: {
            value: 33,
            next: {
              value: 4,
              next: {
                value: 26,
                next: null
              }}}}}};
    expect(solution.middleNode(sLL)).toEqual([33, { value: 4, next: { value: 26, next: null} }]);
    done();
  });

  it(`should return 'invalid input' for input other than an object`, function (done) {
    const sLL = 42;
    expect(solution.middleNode(sLL)).toEqual('invalid input');
    done();
  });
});