'use strict';

const solution = module.exports = {};

solution.traverse = (car) => {
  if (typeof (car) !== 'object') return 'error, incorrect data type';
  let total = 0;
  while (car.next !== null) {
    if (!car.passengers || !car.next) return `current total: ${total}, data entry error`;
    console.log('passengers: ', car.passengers);
    total += car.passengers;
    car = car.next;
  }
  console.log('final car passengers: ', car.passengers);
  return `total passengers: ${total + car.passengers}`;
};