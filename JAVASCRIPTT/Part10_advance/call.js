function User(username) {
  this.username = username;
}

function userProfile(username, email, age) {
  User.call(this, username);

  this.email = email;
  this.age = age;
}

let users = new userProfile("Sachin", "sachin@fb.com", 21);
console.log(users);

/* Next */

function greet(greetings, punctuation) {
  console.log(`${greetings}, ${this.name}${punctuation}`);
}
const person = { name: "sachin" };

greet.call(person, "Hello", "!");

// function greet(greetings, punctuation) {
//     console.log(`${greetings}, ${this.name}${punctuation}`);
// }

// const person = { name: "Sachin" };

// greet.call(person, "Hello", "!"); // Output: "Hello, Sachin!"
