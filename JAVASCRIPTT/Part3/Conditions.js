let num1 = 10;
let num2 = 20;

if (num2 > num1) {
  console.log("num2 is Grater than num1");
} else {
  console.log("num2 is smaller than num1");
}

// Check if variable is a number or not

let score = "100";

if (typeof score === "number") {
  console.log("score is a number");
} else {
  console.log("NOT a number");
}

let anotherScore = [];

if (typeof anotherScore === "array") {
  console.log("first condition is true");
} else {
  console.log("first condition is false");
}

// Check if Boolean value is true or false

let isActive = true;

if (isActive) {
  console.log("isActive is true");
}

// check if an array is empty or not

let items = ["item1", "item2", "item3"];

if (items.length === 3) {
  console.log("items is empty");
  console.log(items[1]);
} else {
  console.log("items is not empty");
}
