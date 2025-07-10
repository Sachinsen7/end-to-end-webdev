// oop or object oriented programming

/*
 * Encapsulation
 * Inheritance
 * Polymorphism
 * Abstraction
 */

function animal(type) {
  this.type = type;
}

animal.prototype.sound = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.Sachin = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 4, 5];
console.log(myArray.Sachin());

let kuchBhi = new animal("cat");
console.log(kuchBhi.type);

let myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myNewArray.Sachin());

// class

// in the classes function is called a method

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  kuchBhii() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// INHERITANCE
// AND THIS IS CALLED INHERITANCE WHEN WE BORROW A CLASS FROM ANOTHER CLASSES

class Car extends Vehicle {
  drive() {
    return `${this.make} is inheritance example`;
  }
}

let myCar = new Car("Honda", "Honda City");
console.log(myCar.kuchBhii());
console.log(myCar.drive());

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  meow() {
    return `${this.name}, the ${this.breed} is barking`;
  }
}

let myDog = new Dog("Tuffy", "Doberman");
console.log(myDog.eat());
console.log(myDog.meow());

// Encapsulation

class Something {
  #balance = 100;

  somet(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let acc = new Something();
console.log(acc.somet(50));
console.log(acc.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    return "Machine started";
  }

  stop() {
    return `Machine stopped`;
  }

  CoffeePressButton() {
    let str = this.start();
    let stp = this.stop();
    return `${str}, ${stp}`;
  }
}

let coffeeready = new CoffeeMachine();
console.log(coffeeready.CoffeePressButton());

// And This is polymorphism

class Bird {
  fly() {
    return `birds can fly`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguin can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let myCalc = new Calculator();
// console.log(myCar.add(3, 4));

console.log(Calculator.add(3, 4));
