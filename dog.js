"use strict";

class Animal {
  eat() {
    console.log("om nom nom");
  }
}

class Dog extends Animal {
  // By extending the class, it inherits methods from Animal
}

const d = new Dog();
d.eat();