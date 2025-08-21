function addTwo(num) {
  return num + 2;
}

addTwo(6);

// fixes

function addTwoo(num: number) {
  return num + 2;
}

// string

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hello");

// fixes

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("sachin", "sachin@123", true);

// arrow function

let loginUser = (email: string, password: string, isPaid: boolean) => {};

loginUser("sachin", "sachin@123", true);

//another example

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

// arrow function

const getHello = (s: string): string => {
  return "";
};

// const heros = ["thor", "ironman", "spiderman"];
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// docs

// void
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//never
function handleError(handleerr: string): never {
  throw new Error(handleerr);
}
