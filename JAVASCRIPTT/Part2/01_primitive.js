// Number

let balance = 100;
let anotherBalance = new Number(100);

console.log(1);
console.log(typeof 1);
console.log(typeof anotherBalance2);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true);

console.log(isActive);
console.log(typeof isActive);
console.log(typeof isReallyActive);

// undefind and null

let myName;
let myAnotherName = null;
console.log(myName);
console.log(typeof myName);
console.log(typeof myAnotherName);

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



// Number

let balance1 = 100;
let anotherBalance2 = new Number(100);

console.log(1); // 100
console.log(typeof 1); // "number"
console.log(typeof anotherBalance2); // "object"
console.log(1 === anotherBalance2); // false


// Boolean

console.log(isActive); // true
console.log(typeof isActive); // "boolean"
console.log(typeof isReallyActive); // "object"
console.log(isReallyActive == true); // true
console.log(isReallyActive === true); // false


//Undefined And Null


console.log(myName); // undefined
console.log(typeof myName); // "undefined"
console.log(typeof myAnotherName); // "object" (this is a known JS quirk)


// String


let fullName = `My names are ${firstName} ${secondName} ${thirdName}`;
console.log(fullName); // My names are Sachin Qaran Ishwar

let stringObject = new String("Hello");
console.log(typeof stringObject); // "object"
console.log(stringObject == "Hello"); // true
console.log(stringObject === "Hello"); // false




// Symbol

let sym1 = Symbol("Sachin");
let sym2 = Symbol("Sachin");

console.log(sym1 === sym2); // false (Symbols are always unique)
console.log(typeof sym1); // "symbol"


// bigint

let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBig = BigInt("1234567890123456789012345678901234567890");

console.log(bigNumber); // 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // "bigint"


// Never use new for primitives

let x = 10; // ✅
let y = new Number(10); // ❌


