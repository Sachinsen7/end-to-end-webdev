function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello My Name is ${this.name}`);
};

let me = new Person("Sachin");
me.greet();
