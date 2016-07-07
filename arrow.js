"use strict";

class Hello {
  constructor() {
    this.num = 2;
  }

  addTwo() {
    const addIt = () => {
      // arrow function locks value of 'this'
      this.num = this.num + 2;
    }
    addIt();
  }
}

const h = new Hello();
h.addTwo();
console.log(h.num);


  // non-arrow function loses value of 'this'
  // addTwo() {
  //   const addIt = function() {
  //     this.num = this.num + 2;
  //   }
  // }