// Top 10 Challenges to learn all kind of loops in javascript

// 1. Write a loop "for" that loops through that array ["green", "black-tea", "chai", "oolong tea"] and stops the loop when it finds "chai", in a new array named selectedTeas

let teas = ["green", "black-tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log(selectedTeas);

// 2. Write a "for" loop that loops through the array ["london", "New york", "Paris", "Berlin"] and skips "Paris" Store the other cities in a New Array named "visitedCities"

let Cities = ["london", "New york", "Paris", "Berlin"];
let visitedCities = [];

for (let c = 0; c < Cities.length; c++) {
  if (Cities[c] === "Paris") {
    continue;
  }
  visitedCities.push(Cities[c]);
}

console.log(visitedCities);

// 3. Use the "for of" loop

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

console.log(smallNumbers);

// 4. Use the "for of" loop

let chais = ["chai", "green tea", "herbal tea", "black tea"];
let preferredChais = [];

for (const chai of chais) {
  if (chai === "herbal tea") {
    continue;
  }
  preferredChais.push(chai);
}

console.log(preferredChais);

// 5. Use a "for in" loop to loop an object containing city populations and stop the loop when the population of Berlin is found and store all previous cities populations in a new array named "citiesPopulations"

let cityPopulations = {
  tokyo: 2000000,
  London: 4000000,
  Berlin: 3000000,
  Paris: 5000000,
};

let citiesPopulations = [];

for (const city in cityPopulations) {
  if (city === "berlin" || city === "Berlin") {
    break;
  }
  citiesPopulations[city] = cityPopulations[city];
}

console.log(citiesPopulations);

// 6. Use a "for in" loop through an object containing city populations
//  Skip any city with a populations below 3 million and store the rest in a new object named largeCities

let worldCities = {
  Paris: 2000000,
  London: 4000000,
  Berlin: 3000000,
  Tokyo: 9000000,
};

let largeCities = [];

for (const pop in worldCities) {
  if (worldCities[pop] < 3000000) {
    continue;
  }

  largeCities[pop] = worldCities[pop];
}

console.log(largeCities);

// 7.  "forEach "
// 7. Write a 'forEach' Loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"] Stop the loop when "chai" IS found, and store all previous tea types in an array named

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaTypes.forEach((tea) => {
  // console.log(tea);
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

console.log(availableTeas);

// let myNumbers = [1, 2, 3, 4, 5];
// let yourNumbers = [];

// myNumbers.forEach((num) => {
//   if (num === 4) {
//     return;
//   }
//   yourNumbers.push(num);
// });

// console.log(yourNumbers);

// 8.  Write a for loop that iterate through the array [2, 5, 7, 9]  Skip the value 7 and multiply the rest by 2 Store the array name "doublenumbers"

let nums = [2, 5, 7, 9];
let doubleNumbers = [];
for (let n = 0; n < nums.length; n++) {
  if (nums[n] === 7) {
    continue;
  }
  doubleNumbers.push(nums[n] * 2);
}

console.log(doubleNumbers);

// 9. Use a "for of " that iterate through the array ["chai", "green tea", "herbal tea", oolong tea]
//              and Stop when length of the current tea name is greater than 10
//                  Store the teas iterated over in an array named "shortTeas"

let myTeas = ["chai", "jasmine teas", "green tea", "herbal tea", "oolong tea"];

let shortTeas = [];

// console.log(myTeas[1].length);
for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }

  shortTeas.push(tea);
}

console.log(shortTeas);
