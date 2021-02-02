const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');
const invalidMessage = document.querySelector('.invalid');
const doneWrapper = document.querySelector('.done-wrapper');
const listOfDone = document.querySelector('.done-wrapper ul');

let newTodo;

// add new todo
form.addEventListener('submit', addNewTodo);
function addNewTodo(e) {
  e.preventDefault();
  let todoValue = form.todo.value;
  // if submit without value
  if (todoValue === '') {
    // show alert message
    invalidMessage.style.display = 'block';
  } else {
    // add new todo to the list
    newTodo = document.createElement('li');
    newTodo.textContent = todoValue;
    newTodo.className = 'list-group-item';
    newTodo.innerHTML = `<i class="far fa-circle done" onclick='doneTodo("${todoValue}")'></i>
      ${todoValue}
      <i class="far fa-trash-alt remove" onclick='removeTodo()'></i>`;
    console.log(newTodo);
    listOfTodos.appendChild(newTodo);
    invalidMessage.style.display = 'none';
  }
  // reset form value
  form.reset();
}

function doneTodo(value) {
  console.log(value);
  listOfDone.innerHTML += `<li class='list-group-item'>${value}</li>`;
  newTodo.remove();
  doneWrapper.style.display = 'block';
}

function removeTodo() {
  newTodo.remove();
}
