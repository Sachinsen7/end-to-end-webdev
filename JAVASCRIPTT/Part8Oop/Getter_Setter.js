// This is from i learnt from js series by chai aur code

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return `${this._name} is Great`;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return `And his Age is ${this._age} `;
  }

  set age(value) {
    this._age = value;
  }
}

let Finale = new User("Sachin", 21);
console.log(Finale.name);
console.log(Finale.age);

// This is mine code

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  get name() {
    return `${this._name}`;
  }

  set name(value) {
    this._name = value;
  }

  get salary() {
    return `${this._salary}`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Error");
    } else {
      this._salary = value;
    }
  }
}

let final = new Employee("Sachin", -60000);
final.salary = 70000;
console.log(final.name);
console.log(final.salary);

// sir ka code

class Emoploy {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      return `Error`;
    } else {
      this.name = name;
      this.#salary = salary;
    }
  }

  get salary() {
    return `${this.#salary}`;
  }

  set salary(value) {
    if (value < 0) {
      return `Salary bahut kam hai`;
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Emoploy("Rinki", 7000);
console.log(emp.salary);
console.log(emp.name);

// Great Finished 👍

var size_ = parseInt(readLine().trim());
var array_ = [];
for (var i = 0; i < size_; i++) {
  var x = parseInt(readLine().trim());
  array_.push(x);
}


array_.sort(function (a, b) {
  return a - b;
});
