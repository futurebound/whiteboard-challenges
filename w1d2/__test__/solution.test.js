'use strict';

const highestNumber = require('../lib/solution');

test('normal numbers', function () {
  expect(highestNumber.twoHighest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({highest: 10, nextHighest: 9})
})

test('all negatives, and duplicate highest', function () {
  expect(highestNumber.twoHighest([-1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toEqual({highest: -1, nextHighest: -2})
})

test('empty array', function() {
  expect(highestNumber.twoHighest([])).toEqual({highest: null, nextHighest: null})
})

test('only one number in array', function() {
  expect(highestNumber.twoHighest([1])).toEqual({highest: 1, nextHighest: null})
})

test('floating point integers', function() {
  expect(highestNumber.twoHighest([1.234, 1.235, 1.236, 0, 1])).toEqual({highest: 1.236, nextHighest: 1.235})
})

