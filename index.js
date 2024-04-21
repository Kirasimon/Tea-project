const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, 'tasks.json');

let tasks = [];

const loadTasks = () => {
  try {
    tasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf8'));
  } catch (error) {
    tasks = [];
  }
};
const saveTasks = () => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

const addTask = (task) => {
  loadTasks();
  tasks.push(task);
  saveTasks();
};

const removeTask = (index) => {
  loadTasks();
  tasks.splice(index, 1);
  saveTasks();
};

const listTasks = () => {
  loadTasks();
  console.log(tasks);
};
const main = () => {
  if (process.argv[2] === 'add') {
    addTask(process.argv[3]);
  } else if (process.argv[2] === 'remove') {
    removeTask(parseInt(process.argv[3]));
  } else if (process.argv[2] === 'list') {
    listTasks();
  } else {
    console.log('Usage: node index.js <add|remove|list> [task|index]');
  }
};

main();


