// Number

let balance = 100;
let anotherBalance = new Number(100);

console.log(balance);
console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true);

console.log(isActive);
console.log(typeof isActive);
console.log(typeof isReallyActive);

// undefind and null

let myName;
let myAmotherName = null;
console.log(myName);
console.log(typeof myName);
console.log(typeof myAmotherName);

// String

let firstName = "Sachin";
let secondName = "Qaran";
let thirdName = "Ishwar";

// let fullname = firstName + " " + secondName + " " + thirdName;
let fullname = `My names are ${firstName} ${secondName} ${thirdName}`;
console.log(fullname);

// Symbol

let mySymbol = Symbol();
let myOtherSymbol = Symbol("Sachin");

console.log(mySymbol == myOtherSymbol);
console.log(mySymbol);

// its create new symbol every time
