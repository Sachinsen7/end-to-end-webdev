// DSA JAVASCRIPT

let numbers = [];

let char = "naman";

let char2 = "";

for (let c = 0; c < char.length; c++) {
  numbers.push(char[c]);
}

for (let n = 0; n < char.length; n++) {
  char2 += numbers.pop();
}

if (char === char2) {
  console.log(char2 + " is a palindrome");
} else {
  console.log(char2 + " is not a palindrome");
}
