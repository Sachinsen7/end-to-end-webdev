const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, cont) {
  console.log(cont);
}); //asynchrounously

console.log("done");
