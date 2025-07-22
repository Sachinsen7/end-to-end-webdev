document.addEventListener("DOMContentLoaded", () => {
  // const container = document.querySelector(".container");
  const todo_input = document.querySelector("#todo_input");
  const addTask = document.querySelector(".addTask");
  const ul = document.querySelector(".OrderList");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach((task) => render(task));

  addTask.addEventListener("click", () => {
    const taskText = todo_input.value.trim();
    if (taskText === "") return;

    const taskObject = {
      id: Date.now(),
      completed: false,
      text: taskText,
    };

    tasks.push(taskObject);
    saveTasks();
    render(taskObject);
    todo_input.value = ""; //clear input
    console.log(tasks);
  });

  function render(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    ul.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
