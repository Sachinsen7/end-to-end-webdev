// example 1

let hold = document.getElementById("changeTextButton");

console.log(hold);

hold.addEventListener("click", function () {
  let para = document.getElementById("myParagraph");
  para.textContent = "the paragraph is changed";
});

//example 2

let button = document.getElementById("highlightFirstCity");
button.addEventListener("click", function () {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
});

//example 3

let butt = document.getElementById("change0rder");

butt.addEventListener("click", function () {
  let coffee = document.getElementById("coffeeType");
  coffee.innerText = "Espresso";
  coffee.style.backgroundColor = "red";
  coffee.style.padding = "5px";
});

//example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6

// document.addEventListener("mouseover")
document
  .getElementById("clickToChange")
  .addEventListener("mouseover", function () {
    document.getElementById("name").textContent = "My name is also a Karan sen";
    document.getElementById("goal").style.backgroundColor = "purple";
  });

// example 7

document.getElementById("teaList").addEventListener("click", function (e) {
  if (e.target) {
    alert("You submitted: " + e.target.textContent);
  }
});

//Example 8

document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let feedback = document.getElementById("inputForm").value;
  console.log(feedback);
  document.getElementById(
    "feedbackdisplay"
  ).textContent = `Feedback is ${feedback} `;
});

// Example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("DomDisplay").textContent = " Dom fully loaded";
});

// example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.add("highlight");
    // descriptionText.classList.toggle("highlight");  // this will do the same thing difference is that it switches if the value is there it will returns true or false
  });
