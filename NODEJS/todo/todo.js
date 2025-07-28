const fs = require("fs");
const filePath = "./task.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};
const addTasks = (task) => {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log("Task Added", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task}`));
};

const removeTask = (index) => {
  const tasks = loadTasks();
  tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log("Task Removed");
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTasks(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
