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
  let todoValue = form.todo.value;
  // if submit without value
  if (todoValue === '') {
    // show alert message
    invalidMessage.style.display = 'block';
  } else {
    // create li
    let newTodo = document.createElement('li');
    newTodo.className = 'list-group-item';
    // create done todo button
    let doneButton = document.createElement('i');
    doneButton.className = 'far fa-circle done';
    doneTodo(doneButton, newTodo);

    // create delete todo button
    let removeButton = document.createElement('i');
    removeButton.className = 'far fa-trash-alt remove';
    removeTodo(removeButton, newTodo);

    // create todo value
    let newTodoValue = document.createElement('span');
    newTodoValue.textContent = todoValue;

    // organize todo item
    newTodo.appendChild(newTodoValue);
    newTodo.insertBefore(doneButton, newTodoValue);
    newTodo.appendChild(removeButton);

    // add todo item to list of todos
    listOfTodos.appendChild(newTodo);
    invalidMessage.style.display = 'none';
  }
  // reset form value
  form.reset();
}

function doneTodo(doneButton, item) {
  doneButton.addEventListener('click', () => {
    item.remove();
    doneWrapper.style.display = 'block';
    listOfDone.innerHTML += `<li class='list-group-item'>${item.textContent}</li>`;
  });
}

function removeTodo(removeButton, item) {
  removeButton.addEventListener('click', () => {
    item.remove();
  });
}
