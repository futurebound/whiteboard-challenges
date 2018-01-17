'use stict';

function arrayProcessor(arr) {
  let highest = Math.max(...arr);
  let lowest = Math.min(...arr);
  let average = ((arr.reduce((a, b) => a + b)) / arr.length);

  return {
    highest: highest,
    lowest: lowest,
    average: average
  }
}