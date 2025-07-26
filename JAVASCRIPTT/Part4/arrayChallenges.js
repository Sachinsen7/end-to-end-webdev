/* 1. Declare an array named 'teaFlavors that contains "black tea" and '"oolong the strings '"green tea" tea" Access the first element of the array and store it in a variable named 'firstTea' */

let teaFlavors = ["green tea", "black tea", "oolong tea"];

// let firstTea = [];

// firstTea.push(teaFlavors[0]);

// console.log(firstTea);
const firstTea = teaFlavors[0];

// 2. Declare an array named 'cities' that contains "Toronto", "Montreal", "Vancouver", "Calgary". Access the second element of the array and store it in a variable named 'favoriteCity'

let cities = ["Toronto", "Montreal", "Vancouver", "Calgary"];

const favoriteCity = cities[2];
console.log(favoriteCity);

// 3. You have an array teaTypes containing "Earl Gray", "Green Tea", "Oolong", "Black Tea" Change the second element to jashmine tea

let teaTypes = ["Earl Gray", "Green Tea", "Oolong", "Black Tea"];
teaTypes[1] = "jasmine tea";

console.log(teaTypes);

// 4. Deaclare an array named citiesVisited containing "Mumbai" and "Sydney" Add Berlin to the array using the push method

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); //best way
citiesVisited[2] = "Berlin";

console.log(citiesVisited);

// 5. You have an array named teaOrders with "chai", "iced Tea", "matcha", "earl gray". Remove the last element

let teaOrders = ["chai", "iced Tea", "matcha", "earl gray"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);

// 6.  You have an array named popularTeas containig "chai", "iced Tea", "matcha", "earl gray. Create a Soft Copy of this array named softCopyTeas

let popularTeas = ["chai", "iced Tea", "matcha", "earl gray"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

// 7. You have an array named topCities containing "berlin", "paris", "amsterdam", "new york". Creat a HardCopy of that

let topCities = ["berlin", "paris", "amsterdam", "new york"];
// let hardCopyCities = [...topCities]; //another way to do it
let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);
console.log([...hardCopyCities]);

// 8. You have wo array of cities first one is europeanCities and second one is asianCities. Merge these two array into a new array named "worldCities"

let europeanCities = ["berlin", "paris", "amsterdam", "new york"];
let asianCities = ["tokyo", "shanghai", "beijing"];
// let worldCities = europeanCities + asianCities;
// let worldCities = [europeanCities, asianCities];
// let worldCities = europeanCities.concat(asianCities);
let worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);

// 9. You have an array named teaFlavors that contains "green tea", "black tea", "oolong tea". Find the length of the array and store it in a variable named 'teaFlavorsLength'

let teaFlavorss = ["green tea", "black tea", "oolong tea"];

const teaFlavorsLength = teaFlavorss.length;

// 10.  You have an array named cityBucketList "abc" and Check if London in it or not

let cityBucketList = ["kyoto", "London", "Voncouver", "Calgary"];

// let isLondonInList = cityBucketList.includes("London");
let isLondonInList = cityBucketList.includes("london");
console.log(isLondonInList);

const firstElement = cityBucketList.shift();
const unshiftElement = cityBucketList.unshift("Kirantal");

console.log(firstElement);
console.log(cityBucketList);

const myElement = cityBucketList.filter((element) => element === "London");
console.log(myElement);
