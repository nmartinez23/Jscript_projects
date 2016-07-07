"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = [
  0,
  // include all items inside numbers array without the enclosing array.
  ...numbers
];

// console.log(newNumbers);


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers2 = [
  ...numbers2,
  10
];

// console.log(newNumbers2);


const person = {
  name: "Nick",
  age: 37,
  status: "active"
};

const accountSettings = {
  ...person,
  status: "inactive",
  mood: "happy"
};

console.log(accountSettings);