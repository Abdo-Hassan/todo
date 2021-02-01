const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');
const invalidMessage = document.querySelector('.invalid');

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
    <i class="far fa-circle done" onclick='done()'></i>
    ${todoValue}
    </li>`;
    invalidMessage.style.display = 'none';
  }
  // reset form value
  form.reset();
}

function done() {
  console.log('done');
}
