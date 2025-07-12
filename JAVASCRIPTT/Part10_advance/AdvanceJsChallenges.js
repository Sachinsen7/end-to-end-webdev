function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 finished");
    }, 1000);
  });
}
function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 finished");
    }, 2000);
  });
}
function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 finished");
    }, 3000);
  });
}

async function kuchbhi4() {
  try {
    let task1 = await func1();
    let task2 = await func2();
    let task3 = await func3();

    console.log(task1);
    console.log(task2);
    console.log(task3);
    //   const [task1, task2, task3] = await Promise.all([
    //     func1(),
    //     func2(),
    //     func3(),
    //   ]);
  } catch (error) {
    console.error("Error");
  }
}

kuchbhi4();

// ☝️ edit

function createCounter() {
  let Counter = 2;
  return function increments() {
    Counter += 1;
    return Counter;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//

function Animal() {}

Animal.prototype.makeSound = function () {
  return "Animal makes sound";
};

function Dog() {
  Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Dog barks";
};

let dog = new Dog();
console.log(dog.makeSound());
console.log(dog.bark());

//

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(width, height, color) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let rect = new Rectangle(10, 20, "red");
console.log(rect.getColor());
console.log(rect.getArea());

function* fibonacciNumber() {
  let a = 0,
    b = 1;

  while (true) {
    yield (a[(a, b)] = [b, a + b]);
  }
}

let fib = fibonacciNumber();
console.log(fib.next().value);
console.log(fib.next().value);

let num = 4;
var result = num * num + num ** 3 - num;
console.log(result);
