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
    expect(solution.traverse(engine)).toEqual('total passengers: ' + 13);
  })
})

describe('this is a test to determine whether the function will respond appropriately to a non-object data type', function(){
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
  const engine = 'hello';

  test('test should return undefined', function() {
    expect(solution.traverse(engine)).toEqual('error, incorrect data type');
  })
})

describe('this is a test to determine whether the function will respond appropriately to a piece of data not having the required properties', function(){
  const car4 = {
    passengers: 1,
    next: null
  };
  const car3 = {
    passengers: 2
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
    passengers: 1,
    next: car1
  }

  test('test should return undefined', function() {
    expect(solution.traverse(engine)).toEqual(`current total: ${9}, data entry error`);
  })
})