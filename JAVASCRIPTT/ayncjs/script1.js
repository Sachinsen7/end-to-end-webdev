const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);

function expensiveOperation() {
  //this is the expensive operation jispe sum calculate krega
  let sum = 0;
  for (let index = 0; index < 1e8; index++) {
    //1e8 is scientific notation for 100,000,000 jiske wajh se loop bhot long tym ke liye chale
    sum = sum + index;
  }
  console.log("Expensive operation completed and its result : ", sum);
}
expensiveOperation();
