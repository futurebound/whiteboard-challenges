const utils = require('./utils');

let array = [1, 2, 3, 4, 5]
let mapCallback =  i => i * 3;
let filterCallback =  i => i % 2 === 0;
let reduceCallback =  (a, b) => a + b;

console.log('starting array:', array);
console.log('map callback:', mapCallback);
console.log('filter callback:', mapCallback);
console.log('reduce callback:', mapCallback);

console.log('map output:', utils.map(array, mapCallback));
console.log('filter output:', utils.filter(array, filterCallback));
console.log('reduce output:', utils.reduce(array, reduceCallback, 0));