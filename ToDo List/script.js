const input = document.getElementById("input");
const todoList = document.getElementById("todoList");
const button = document.getElementById("add");

let todos = [];

window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((element) => {
    display(element);
  });
};

button.addEventListener("click", () => {
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  display(input.value);
  input.value = "";
});

function display(todo) {
  let para = document.createElement("p");
  para.innerText = todo;

  todoList.appendChild(para);

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    para.style.opacity = 0.6;
    remove(todo);
  });

  para.addEventListener("dblclick", () => {
    todoList.removeChild(para);
    remove(todo);
  });
}
function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
