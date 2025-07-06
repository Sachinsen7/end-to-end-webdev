//while loop
// 1. Write a while loop that add all number 1 to 5 and store it in variable called "sum"
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

// 2. Write a while loop that decresing the order to 5 -----> and store in a array named countDown
let coundDown = [];
let j = 5;

while (j > 0) {
  coundDown.push(j);
  j--;
}

// 3. Write a Do while loop that prompts  a user to enter their favorite tea type until they enter "stop" Store each tea type in a array named TeaCollection

// let TeaCollection = [];
// let tea;
// do {
//   // tea = prompt(`Please Enter your favorite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     TeaCollection.push(tea);
//   }
// } while (tea !== "stop");

// console.log(TeaCollection);

// 4. Write a do while loop that adds number from 1 to 3 and store the result in a variable named total

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

console.log(total);

// 5. Write a "for" loop that multiplies each in the array [2, 4, 6] by 2 and stores the results in a new named array multipliedNumbers

let multipliedNumbers = [];
let number = [2, 4, 6];

for (let n = 0; n < number.length; n++) {
  element = number[n] * 2;
  multipliedNumbers.push(element);
  // multipliedNumbers.push(number[n] * 2);
}

console.log(multipliedNumbers);

// 6. Write a "for" loop that lists all the cities in the array ["paris", "New York", "Tokyo", "London"] and stores each city in a new array named cityLists

let cities = ["paris", "New York", "Tokyo", "London"];
let cityLists = [];

for (let c = 0; c < cities.length; c++) {
  const element = cities[c];
  cityLists.push(element);
}

console.log(cityLists.shift());
console.log(cityLists.unshift("kirantal"));
console.log(cityLists);
