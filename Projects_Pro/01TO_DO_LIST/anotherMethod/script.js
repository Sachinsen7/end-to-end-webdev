const inputContainer = document.querySelector("#inputBox");
const ListContainer = document.querySelector("#list-container");

function addTask() {
  if (inputContainer.value === "") {
    alert("You have to write something");
    savTask();
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
    <span>${inputContainer.value}</span>
    <button>Delete</button>`;
    ListContainer.appendChild(li);
    savTask();
  }

  inputContainer.value = "";
}

ListContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savTask();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    savTask();
  }
});

function savTask() {
  localStorage.setItem("task", ListContainer.innerHTML);
}

function showTask() {
  ListContainer.innerHTML = localStorage.getItem("task");
}

showTask();

//Done 👍
