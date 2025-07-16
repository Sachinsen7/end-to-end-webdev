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
