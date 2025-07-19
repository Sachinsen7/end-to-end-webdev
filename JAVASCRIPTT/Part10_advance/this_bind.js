const person = {
  name: "sachin",
  greet() {
    console.log(`Hi , My name is ${this.name}`);
  },
};

person.greet();

const greetfunction = person.greet;
greetfunction();

const boundfunction = person.greet.bind({ name: "Sachin" });
boundfunction();

// Regex String

var str = "I'm Adarsh!";
var z = str.search(/adarsh/i);
console.log(z);

var str = "I'm Adarsh";
var z = str.replace(/adarsh/i, "Harshdeep");
console.log(z);

// approach

const person1 = {
  name: "sachin",
  greet() {
    console.log(`Hi, My name is ${this.name}`);
  },
};

person1.greet(); // Works fine

const greetfunction2 = person1.greet;
greetfunction2(); // 'this' lost, prints undefined or throws error in strict mode

const boundfunction2 = person1.greet.bind({ name: "Sachin" });
boundfunction2(); // Fixed using bind()

// Binding with a different name
const anotherBound = person1.greet.bind({ name: "Ananya" });
anotherBound(); // Hi, My name is Ananya

// Using bind on standalone function
function showCity() {
  console.log(`City: ${this.city}`);
}
const boundCity = showCity.bind({ city: "Mumbai" });
boundCity(); // City: Mumbai

// Pre-setting arguments with bind
function intro(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}
const introBound = intro.bind({ name: "Ravi" }, "Hello");
introBound(); // Hello, I am Ravi

//  Binding method from one object to another
const user1 = {
  name: "Priya",
  sayHi() {
    console.log(`Hi from ${this.name}`);
  },
};
const user2 = { name: "Rahul" };

const sayHiFromUser2 = user1.sayHi.bind(user2);
sayHiFromUser2(); // Hi from Rahul

// Binding inside setTimeout
const timerPerson = {
  name: "Sneha",
  greet() {
    console.log(`Hi after delay: ${this.name}`);
  },
};
setTimeout(timerPerson.greet.bind(timerPerson), 1000); // After 1s: Hi after delay: Sneha

// Binding to use inside an event-like function
function Button(label) {
  this.label = label;
}
Button.prototype.click = function () {
  console.log(`Button "${this.label}" clicked`);
};
const clickBtn = new Button("Submit");
const btnClickBound = clickBtn.click.bind(clickBtn);
btnClickBound(); // Button "Submit" clicked
