function outer() {
  let counter = 5;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());

// ChatGpt Challenges
//01

function createCounter() {
  let count = 4;
  return {
    increment: function () {
      count++;
      return count;
    },

    reset: function () {
      count = 0;
      return count;
    },
  };
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());

// 02

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },

    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

let obj = createSecretHolder(123);
console.log(obj.getSecret());

obj.setSecret(567);
console.log(obj.getSecret());

//03

function createMultiplier(multiplier) {
  return {
    double: function () {
      return multiplier * 2;
    },

    triple: function () {
      return multiplier * 3;
    },
  };
}

let multiply = createMultiplier(5);
console.log(multiply.double());

console.log(multiply.triple());

// 04

function function1(fn) {
  let hasBeenCalled = false;

  return function () {
    if (hasBeenCalled) {
      hasBeenCalled = true;
      return fn.apply(this, arguments);
    }
  };
}

const funcVal = function1(console.log);
funcVal("Hello, World!"); // This will log: "Hello, World!"
funcVal("Hello again!"); // This will do nothing (no output)

const logOnce = (function () {
  let hasBeenCalled = false;

  return function (message) {
    if (!hasBeenCalled) {
      console.log(message);
      hasBeenCalled = true;
    }
  };
})();

logOnce("Hello from Sachin");
logOnce("hello again");
