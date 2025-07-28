function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello My Name is ${this.name}`);
};

let me = new Person("Sachin");
me.greet();

// Constructor Function with Prototype

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello My Name is ${this.name}`);
};
let person1 = new Person("Sachin");
person1.greet();

// ES6 Class
class Human {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
let person2 = new Human("Ananya");
person2.greet();

// Factory Function
function createPerson(name) {
  return {
    name,
    greet() {
      console.log(`Hey! This is ${this.name}`);
    },
  };
}
let person3 = createPerson("Ravi");
person3.greet();

// Object Literal
let person4 = {
  name: "Priya",
  greet: function () {
    console.log(`Hello there! I'm ${this.name}`);
  },
};
person4.greet();

// Object.create Method
let proto = {
  greet: function () {
    console.log(`Yo! ${this.name} here`);
  },
};
let person5 = Object.create(proto);
person5.name = "Aman";
person5.greet();
