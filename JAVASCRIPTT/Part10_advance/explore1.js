console.log("my name is sachin");

function name() {
  console.log("my name is also Qaran");
}

setTimeout(() => {
  // this is asynchrounous
  name();
}, 4000);

var R = 355;

let area = Math.ceil((4 * Math.PI * Math.pow(R, 3)) / 3);
console.log(area);
