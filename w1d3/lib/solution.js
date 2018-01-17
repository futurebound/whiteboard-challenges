'use strict';

const solution = module.exports = {};

solution.traverse = (car) => {
  let total = 0;
  while (car.next !== null) {
    console.log('passengers: ', car.passengers);
    total += car.passengers;
    car = car.next;
  }
  console.log('final car passengers: ', car.passengers);
  return total + car.passengers;
};