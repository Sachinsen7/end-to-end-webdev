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
