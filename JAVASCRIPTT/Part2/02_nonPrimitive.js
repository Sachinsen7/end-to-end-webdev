let username = {
  nama: "Sachin",
  email: "sachinsen1920@gmail.com",
  isLoggedIn: true,
  "my last name": "Sen",
};

console.log(username.nama);
console.log(typeof username);

username.lastname = "Sen";
console.log(username.lastname);

console.log(username["my last name"]);
console.log(username);

// Array

let names = ["Sachin", "Shubham", "Rahul"];

console.log(names[2]);

// Conversions

console.log("1" + 1);
console.log(1 + "1");

let isTrue = true;
console.log(isTrue + 1);
console.log(Number(isTrue));

let isValue = "1abc";

console.log(Number(isValue));
console.log(Number(null));
console.log(Number(undefined));

for (let i = 0; i < names; i++) {
  const element = array[i];
  console.log(element);
}

//Object


let user = {
  name: "Rahul",
  age: 22,
  "home city": "Bhopal",
  isVerified: false,
};

console.log(user.name); // Rahul
console.log(user["home city"]); // Bhopal
user.country = "India";
console.log(user.country); // India
console.log(typeof user); // object


//Array


let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
console.log(typeof fruits); // object (Yes, arrays are objects!)



console.log("5" + 3); // "53"
console.log(3 + "5"); // "35"
console.log("5" - 2); // 3
console.log("Sachin" + true); // "Sachintrue"

let value1 = false;
console.log(value1 + 1); // 1
console.log(Number(value1)); // 0

let value2 = "hello";
console.log(Boolean(value2)); // true

let value3 = "";
console.log(Boolean(value3)); // false


//Invalid Conversions

console.log(Number("10xyz")); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Boolean(undefined)); // false


//Loop Example (Corrected)
let students = ["Ankit", "Neha", "Vikram"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
