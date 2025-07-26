document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector("#todo_input");
  const addTask = document.querySelector(".addTask");
  const ul = document.querySelector(".OrderList");

  let todoTasks = JSON.parse(localStorage.getItem("task")) || [];

  todoTasks.forEach((task) => renderTask(task));

  addTask.addEventListener("click", () => {
    const todoValue = todoInput.value.trim();
    if (todoValue === "") return;

    const todoObject = {
      id: Date.now(),
      text: todoValue,
      completed: false,
    };

    todoTasks.push(todoObject);
    saveTasks();
    renderTask(todoObject);
    todoInput = "";
    console.log(todoTasks);
  });

  function renderTask(task) {
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
      todoTasks = todoTasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    ul.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("task", JSON.stringify(todoTasks));
  }
});
