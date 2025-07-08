// this => <= new

function Car(name, model) {
  this.name = name;
  this.model = model;
}

let myCar = new Car("Toyota", "camry");
console.log(myCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${type}`;
  };
}

let lemonType = new Tea("lemon tea");
console.log(lemonType.describe());

// Prototype * constructor Function

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

//

function Drink(name) {
  if (!new.target) {
    throw new Error("this is throwing an error");
  }
  this.name = name;
}

let tea = new Drink("tea");
console.log(tea);

let coffee = Drink("coffee");
console.log(coffee);
