'use strict';

const solution = require('../lib/solution');

describe('this is a test to determine whether our function is able to traverse the desired object literals, and produce the desired output ', function(){
  const car4 = {
    passengers: 1,
    next: null
  };
  const car3 = {
    passengers: 2,
    next: car4
  };
  const car2 = {
    passengers: 6,
    next: car3
  };
  const car1 = {
    passengers: 2,
    next: car2
  };
  const engine = {
    passengers: 2,
    next: car1
  };
  test('determining whether function is able to calculate total passengers on train from each respective car', function() {
    expect(solution.traverse(engine)).toEqual(13);
  })
})