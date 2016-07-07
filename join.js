"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    return 'FAIL :(';
  }
}

const value = _.join(["hello", "goodbye"], ", ")

console.log(value);