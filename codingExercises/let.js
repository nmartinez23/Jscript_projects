"use strict";

for(let i = 0; i < 10; i++) {
  console.log("Hello " + i);
}

console.log("The value of i is: " + i); // ReferenceError: i is not defined


let i;
for(i = 0; i < 10; i++) {
  console.log("Hello " + i);
}

console.log("The value of i is: " + i); // The value of i is: 10
