function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sceret = true;
      if (sceret) {
        return resolve("Fetched Data");
      } else {
        return reject("fetched data unsiccessfully");
      }
    });
  });
}
fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });


  // Challenge 1: User Login Simulation
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "sachin" && password === "1234") {
        resolve("Login Successful");
      } else {
        reject("Invalid Credentials");
      }
    }, 1000);
  });
}

loginUser("sachin", "1234")
  .then((msg) => {
    console.log(msg);
    return msg.toUpperCase();
  })
  .then((upper) => console.log(upper))
  .catch((err) => console.log(err));


// Challenge 2: Delay Message Printer
function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Message: ${message}`);
    }, delay);
  });
}

delayedMessage("Hello after 2 seconds", 2000)
  .then((msg) => console.log(msg));


// Challenge 3: Random Number Checker
function checkRandom() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num > 5) {
      resolve(`Number ${num} is greater than 5`);
    } else {
      reject(`Number ${num} is not greater than 5`);
    }
  });
}

checkRandom()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));


// Challenge 4: Data Processor
function processData(data) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(data)) {
      resolve(data.map(item => item.toUpperCase()));
    } else {
      reject("Input is not an array");
    }
  });
}

processData(["react", "node", "js"])
  .then((result) => {
    console.log("Processed:", result);
  })
  .catch((err) => console.log(err));


// Challenge 5: Simulated API Call
function fakeAPI(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === "/user") {
        resolve({ name: "Sachin", age: 21 });
      } else {
        reject("404 Not Found");
      }
    }, 1000);
  });
}

fakeAPI("/user")
  .then((res) => {
    console.log("User Info:", res);
    return res.name;
  })
  .then((name) => console.log("Username:", name))
  .catch((err) => console.log(err));

