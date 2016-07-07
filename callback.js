"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#map
  map: (array, callback) => {
    return 'FAIL :(';
  }
}

// Define method that multiplies input by 10
function multiplyBy10(value) {
  return 10 * value;
}

const value = _.map([1, 2, 3], multiplyBy10);

console.log(value);