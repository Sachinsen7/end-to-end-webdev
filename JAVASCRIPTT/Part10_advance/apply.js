//call

let name = {
  firstname: "sachin",
  lastname: "sen",
};

const printFullName = function (origin, email, age) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " From " +
      " " +
      origin +
      " " +
      email,
    age
  );
};

printFullName.call(name, "MadhyaPradesh", "Sachinsen192@fc", 21);

let name2 = {
  firstname: "albus",
  lastname: "severus",
};

//apply

printFullName.apply(name2, ["London", "snape", 22]);

//bind

let printThis = printFullName.bind(name2, "howgwards", "harry", 22);
console.log(printThis);
printThis();

// 1. Reusing Function Across Multiple Objects

function greet(greeting) {
  console.log(`${greeting}, ${this.firstname}!`);
}

let user1 = { firstname: "Sachin" };
let user2 = { firstname: "Kishan" };

greet.call(user1, "Hello"); // Hello, Sachin!
greet.call(user2, "Hi"); // Hi, Kishan!

// 2. Borrowing Array Method with call()

let arrayLike = {
  0: "Sachin",
  1: "Sen",
  length: 2,
};

const result = Array.prototype.join.call(arrayLike, " ");
console.log(result); // Sachin Sen

// 3. Math.max using apply() on array

let nums = [4, 2, 9, 1, 5];
let maxNum = Math.max.apply(null, nums);
console.log(maxNum); // 9

// 4. bind() for Delayed Execution (setTimeout)

let person = {
  name: "Sachin",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

let greetLater = person.greet.bind(person);
setTimeout(greetLater, 1000); // Hello Sachin (after 1s)

// 5. Using bind() to pre-set parameters

function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2); // preset a = 2
console.log(double(5)); // 10

// 6. Using call() inside constructor chaining

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // inherit from Animal
  this.breed = breed;
}

let dog = new Dog("Bruno", "Labrador");
console.log(dog); // { name: "Bruno", breed: "Labrador" }

// 7. apply() with custom context and dynamic args

function intro(lang1, lang2) {
  console.log(`${this.name} knows ${lang1} and ${lang2}`);
}

let dev = { name: "Sachin" };

intro.apply(dev, ["JavaScript", "Python"]);
