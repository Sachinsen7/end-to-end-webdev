// ChatGpt Challenges

// 01

let hold = document.getElementById("clickToAdd");

hold.addEventListener("click", function () {
  let Newitem = document.createElement("li");
  Newitem.textContent = "task 4";
  document.getElementById("addNewList").appendChild(Newitem);
});

// 02

document.getElementById("button").addEventListener("click", function () {
  let frog = document.getElementById("container");
  frog.style.backgroundColor = "red";
  frog.style.color = "black";
  frog.style.border = "5px solid black";
  frog.style.borderRadius = "10px";
  frog.style.padding = "10px";
  let docs = document.style.backgroundColor;
  docs.addEventListener("click", function () {});
});

//03

document.getElementById("butt").addEventListener("click", function () {
  let home = document.getElementById("show");
  home.style.display = "none";
});

document.getElementById("butt2").addEventListener("click", function () {
  document.getElementById("show").style.display = "block";
});

//04

document.getElementById("submit").addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
  document.getElementById(
    "showsTheDisplay"
  ).textContent = `Your message ${input}`;
});

// 05

document.getElementById("remove-btn").addEventListener("click", function () {
  let image = document.querySelector("#image");
  image.remove();
});
