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


// 1. Basic User Constructor

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  };
}

let user1 = new User("Sachin", 21);
console.log(user1.greet());


//  2. Product with Discount

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.discount = function (percent) {
    return this.price - (this.price * percent) / 100;
  };
}

let product = new Product("Laptop", 50000);
console.log(product.discount(10)); // 45000


// 3. Student with Result Logic

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.hasPassed = function () {
    return this.marks >= 40 ? "Pass" : "Fail";
  };
}

let student = new Student("Ravi", 35);
console.log(student.hasPassed()); // Fail


// 4. Vehicle with Shared Method (via Prototype)

function Vehicle(brand, wheels) {
  this.brand = brand;
  this.wheels = wheels;
}

Vehicle.prototype.info = function () {
  return `${this.brand} has ${this.wheels} wheels`;
};

let bike = new Vehicle("Yamaha", 2);
console.log(bike.info());

//  5. Todo Item Constructor

function Todo(task, isCompleted) {
  this.task = task;
  this.isCompleted = isCompleted;
}

let todo1 = new Todo("Learn JS", false);
console.log(todo1);


// 6. BankAccount with Deposit & Withdraw


function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
  };

  this.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      return "Insufficient funds";
    }
    return this.balance;
  };
}

let account = new BankAccount("Sachin", 1000);
console.log(account.deposit(500));   // 1500
console.log(account.withdraw(300));  // 1200


// 7. Game Player with Level Up


function Player(username, level) {
  this.username = username;
  this.level = level;

  this.levelUp = function () {
    this.level++;
    return `${this.username} is now level ${this.level}`;
  };
}

let player = new Player("SachinSen", 1);
console.log(player.levelUp()); // level 2


