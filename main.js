const inputTask = document.getElementById("input");
const tasksList = document.getElementById("tasks-list");
const btn = document.getElementById("btn");

function addTask() {
  let taskValue = inputTask.value;

  if (!taskValue) {
    alert("You must add task");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = taskValue;
    tasksList.appendChild(li);

    span.innerHTML = "&times;";
    li.appendChild(span);

    inputTask.value = "";
    setItems();
  }
}

btn.addEventListener("click", addTask);

tasksList.addEventListener("click", (element) => {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
    setItems();
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove();
    setItems();
  }
});

inputTask.addEventListener("keydown", (element) => {
  if (element.key === "Enter") {
    addTask();
  }
});

function setItems() {
  localStorage.setItem("lists", tasksList.innerHTML);
}

function addItems() {
  tasksList.innerHTML = localStorage.getItem("lists");
}

addItems();

function delTasks() {}
