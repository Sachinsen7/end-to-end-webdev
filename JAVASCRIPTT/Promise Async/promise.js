function setPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("done");
    }, 1000);
  });
}

function setTimeOustPromisified(duration) {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}

setTimeOustPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeOustPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeOustPromisified(5000);
  })
  .then(() => {
    console.log("hey");
  });

console.log("outside");
