const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');
const invalidMessage = document.querySelector('.invalid');
const doneWrapper = document.querySelector('.done-wrapper');
const listOfDone = document.querySelector('.done-wrapper ul');

// add new todo
form.addEventListener('submit', addNewTodo);
function addNewTodo(e) {
  e.preventDefault();
  let todoValue = todo.value;
  // if submit without value
  if (todoValue === '') {
    // show alert message
    invalidMessage.style.display = 'block';
  } else {
    // add new todo to the list
    listOfTodos.innerHTML += `<li class='list-group-item'>
      <i class="far fa-circle done" onclick='doneTodo("${todoValue}")'></i>
      ${todoValue}
    </li>`;
    invalidMessage.style.display = 'none';
  }
  // reset form value
  form.reset();
}

function doneTodo(value) {
  listOfDone.innerHTML += `<li class='list-group-item'>${value}</li>`;
  doneWrapper.style.display = 'block';
}
