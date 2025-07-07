// 1. Write a function named makTea that makes parameter typeOfTea and returns "I love ${typeOfTea} tea."Store the result in a variable named myTea

function maketea(typeOfTea) {
  return `I love ${typeOfTea} tea.`;
}

let myTea = maketea("Green Tea");
console.log(myTea);

// 2, Create a function named orderTea that makes one parameter teaType Inside this function    create another function ConfirmOrder  that returns a message like "Order confirmed for chai" Call confirmOrder from within orderTea and returns  the result

function orderTea(teaType) {
  function confirmOrder() {
    return `Order Confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let Confirmed = orderTea("chai");
console.log(Confirmed);

// 3. Write an Arrow function named calculateTotal that takes two parameters "price" and quantity The function  should return the total cost by multiplying the "price" and "quantiy" Store the result in a varibale named totalCost

// let calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

// let result = calculateTotal(120, 3);
// console.log(result);

let calculateTotal = (price, quantity) => price * quantity;
let result = calculateTotal(120, 3);
console.log(result);

// 4. Write a function named process TeaOrder that takes a another function makeTea as parameter and call it with the argumrnt "earl grey" Return the result of calling makeTea

/* Its a wrong method*/

// function TeaOrder(tea) {
//   function makeTea() {
//     return `${tea}`;
//   }

//   return makeTea();
// }

// let order = TeaOrder("earl grey");
// console.log(order);
function makeTea(typeOfTea) {
  return `${typeOfTea}`;
}
function ProcessTeaOrder(TeaFunction) {
  return TeaFunction("earl grey");
}

let order = ProcessTeaOrder(makeTea);
console.log(order);

// high Order function
// return a function
// passing a function as parameter

// 5. write a function names createTeaMaker that returns another function The returned function should take one parameter teaType and return a message like "Making Green Tea"
// Store the returned function in a variable named teaMaker and call it with "green tea"

function createTeaMaker() {
  return function (teaType) {
    return `${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let results = teaMaker("green tea");
console.log(results);

function createTeaMakers(name) {
  return function (teaTypes) {
    return `Making ${teaTypes} by ${name}`;
  };
}

let orders = createTeaMakers("Sachin");
let orderRes = orders("herbal tea");
console.log(orderRes);

// 1. Practice Sets

function flipBoolean(input) {
  let convertedBool = Boolean(input);
  return !convertedBool;
}

let Result = flipBoolean("sachin");
console.log(Result);

let Result2 = flipBoolean(0);
console.log(Result2);

// 2.

function whatAmI(input) {
  if (typeof input === "number") {
    return `Its a number`;
  } else if (typeof input === "string") {
    return `Its a string`;
  } else {
    return `Then it's something else`;
  }
}

let value = whatAmI("Sachin");
console.log(value);

let value2 = whatAmI(143541);
console.log(value2);

// 3.

function isItTruthy(input) {
  if (input) {
    return `It's truthy`;
  } else {
    return `It's falsey`;
  }
}

let val = isItTruthy("Karan");
console.log(val);

let val2 = isItTruthy(0);
console.log(val2);

// 4.

function stringToNumber(input) {
  if (!isNaN(input)) {
    return Number(input);
  } else {
    return `Not a number`;
  }
}
let resultt = stringToNumber("123");
console.log(resultt);

let resultt2 = stringToNumber("sachin");
console.log(resultt2);

// 5.

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}

let addition = add();
console.log(addition);

// 6

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

let array = ["a", 1, "b", 2, "c", 3];
let filteredArray = filterNumbers(array);
console.log(filteredArray);

// 7.
function ReversdArray(arr) {
  return arr.reverse();
}

let arrayy = ["One", "Two", "Three", "Four"];
let ReversedArray = ReversdArray(arrayy);
console.log(ReversedArray);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let longest = numbers[0];
function findMax(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > longest) {
      longest = arr[i];
    }
  }
  return longest;
}

let rest = findMax(numbers);
console.log(rest);

// 8.
function removeDuplicates(arr) {
  let obj = {};
  let uniqueArray = [];

  for (let o = 0; o < arr.length; o++) {
    const item = arr[o];

    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }

  for (const key in obj) {
    uniqueArray.push(key);
  }

  return uniqueArray;
}

let arrayyy = [1, 2, 4, 3, 2, 3, 4, 5, 6, 4];
let sum = removeDuplicates(arrayyy);
console.log(sum);

// 9. Write a nested function
function flattenarray(arr) {
  result = [];

  for (let f = 0; f < arr.length; f++) {
    if (Array.isArray(arr[f])) {
      result = result.concat(flattenarray(arr[f]));
    } else {
      result.push(arr[f]);
    }
  }
  return result;
}

let nestArray = [1, [2, 3, 4], [5, [6, 7]]];
console.log(flattenarray(nestArray));

// 10.

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

let natural = sumOfN(10);
console.log(natural);

// 11.

function printMultiplicationTables(n) {
  let tables = [];

  for (let t = 1; t <= 10; t++) {
    tables.push(`${n} * ${t} = ${n * t}`);
  }
  return tables;
}

let table = printMultiplicationTables(2);
console.log(table);

// 12.

function countVowels(str) {
  let alpha = "aeiouAEIOU";
  let count = 0;

  for (let a = 0; a < str.length; a++) {
    if (alpha.includes(str[a])) {
      count++;
    }
  }
  return count;
}

let alphabets = countVowels("Hello Sachin");
console.log(alphabets);

// 13

const sqaureNumbers = (arr) => arr.map((num) => num * num);
let nums = sqaureNumbers([1, 2, 3, 4, 5]);
console.log(nums);

// 14.

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

let mine = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(mine);

// 15.

const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((a, b) => a + b);
let reduced = sumPositiveNumbers([2, 4, 6, 4, 3, 9, 8]);
console.log(reduced);

// 16.

const getNames = (arr) => arr.map((user) => user.name);
let names = [{ name: "sachin" }, { name: "kishan" }, { name: "rahul" }];
let final = getNames(names);
console.log(final);

// 17

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? longest : current),
    ""
  );
let call = findLongestWord(["sachin", "kishan", "rahul"]);
console.log(call);

const obj = {
  name: "Hitesh",
  age: 19.5,
  Introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  },
};

obj.Introduce();

// 18. Count Occurrences of Each Character

function countChars(str) {
  let result = {};
  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}
console.log(countChars("hello"));


//  19. Capitalize First Letter of Each Word

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello sachin from india"));


// 20. Chunk Array Into Pieces

function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));


// 21. Validate Email

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("test@gmail.com")); // true
console.log(isValidEmail("sachin")); // false


// 22. Generate Random Password

function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
console.log(generatePassword(10));


// 23. Find Average of Array

function average(arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => a + b) / arr.length;
}
console.log(average([10, 20, 30, 40]));

// 24. Create a Custom Map Function

function customMap(arr, callback) {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}
console.log(customMap([1, 2, 3], (x) => x * 2));


// 25. Delay Function with setTimeout

function delayMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}
delayMessage("Hello after 2 seconds", 2000);


// 26. Count Words in a Sentence

function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}
console.log(countWords("Hey Sachin, how are you today?"));



// 27. Count Duplicates in Array

function findDuplicates(arr) {
  let map = {};
  let result = [];

  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] === 2) result.push(item);
  }

  return result;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));


// 28. Convert CamelCase to Snake_case


function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
console.log(camelToSnake("myFunctionName"));


// 29. Find Common Elements in Two Arrays

function commonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(commonElements([1, 2, 3, 4], [2, 4, 5, 6]));


// 30. Check if Array is Sorted

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([5, 3, 1]));   // false
