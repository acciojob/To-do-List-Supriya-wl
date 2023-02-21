//your code herevar todoValue = document.getElementById("newTodoInput").value;
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo() {
  if (todoValue) {
    // we need to create a li
    var li = document.createElement("li");
    li.textContent = todoValue;
    ol.appendChild(li);
  }
}

btn.addEventListener("click", addTodo);

