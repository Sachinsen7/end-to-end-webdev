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
