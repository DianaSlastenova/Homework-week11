const newTask = document.getElementById("task");
const taskList = document.getElementById("tasklist");

const createTask = () => {
  const newElement = document.createElement("li");
  newElement.textContent = newTask.value;
  taskList.append(newElement);
  newTask.value = "";
};

const buttonAdd = document.querySelector("button");
buttonAdd.addEventListener("click", createTask);

const checkTask = (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("done");
  }
};

taskList.addEventListener("click", checkTask);
