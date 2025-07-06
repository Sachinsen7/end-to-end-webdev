const fruits = ["Apple", "Banana", "Cherry", "Date"];
//  for loop
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// for of loop
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// 2.

// for loop
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let n = 0; n < numbers.length; n++) {s
  sum += numbers[n];
}

console.log(sum);

// for of loop

for (const num of numbers) {
  if (num < numbers.length) {
    sum += num;
    num++;
  }
}

console.log(sum);

// 3. Find the largest number in an array

const nums = [5, 17, 23, 9, 12];

// for loop

let largest = nums[0];
// console.log(largest);

for (let l = 0; l < nums.length; l++) {
  if (nums[l] > largest) {
    largest = nums[l];
  }
}

console.log(largest);

// forEach

nums.forEach((num) => {
  if (num > largest) {
    largest = num;
  }
});

console.log(largest);

// 4.
// for in

const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};

for (const per in person) {
  console.log(`${per} : ${person[per]}`);
}

// 5. Double the numbers

// for loop
const originalNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let d = 0; d < originalNumbers.length; d++) {
  doubledNumbers.push(originalNumbers[d] * 2);
}

console.log(doubledNumbers);

// for of

for (const origin of originalNumbers) {
  doubledNumbers.push(origin * 2);
}

console.log(doubledNumbers);

// forEach

originalNumbers.forEach((origin) => {
  doubledNumbers.push(origin * 2);
});

console.log(doubledNumbers);

// 6. Filter Even Numvers in an array
//  for loop

const mixedNumbers = [1, 4, 7, 10, 13, 16];
let evenNumbers = [];

for (let e = 0; e < mixedNumbers.length; e++) {
  let reminder = mixedNumbers[e] % 2;
  if (reminder === 0) {
    evenNumbers.push(mixedNumbers[e]);
  }
}
console.log(evenNumbers);

// for of loop

for (const even of mixedNumbers) {
  let remain = even % 2;
  if (remain === 0) {
    evenNumbers.push(even);
  }
}

console.log(evenNumbers);

// 7. Count properties in an Object

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue",
};

let size = Object.keys(car).length;

for (const c in car) {
  let length = Object.keys(car).length;
  console.log(length);
}

// thers no neeed of loop

console.log(`There are ${size} properties in the car object`);

// 8.  Find the longest String in an Array

const words = ["tree", "mountain", "river", "forest", "sky"];
let longest = words[0];

// for loop
for (let w = 0; w < words.length; w++) {
  if (words[w].length > longest.length) {
    longest = words[w];
  }
}

console.log(longest);

// for of loop

for (const word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);

// forEach

words.forEach((word) => {
  if (word.length > longest.length) {
    longest = word;
  }
});

console.log(longest);

// 9.

// 10.

const scores = {
  math: 80,
  science: 90,
  literature: 70,
};

let sqauredvalus = [];

for (const score in scores) {
  let multiply = scores[score] ** 2;
  sqauredvalus.push(multiply);
}

console.log(sqauredvalus);

// Random
let sums = 0;

for (let sum = 0; sum <= 5; sum++) {
  sums += sum;
}

console.log(sums);
