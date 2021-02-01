const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');

console.log(listOfTodos);

// add new todo
form.addEventListener('submit', addNewTodo);
function addNewTodo(e) {
  e.preventDefault();
  let todoValue = todo.value;
  listOfTodos.innerHTML += `<li class='list-group-item'>${todoValue}</li>`;
  form.reset();
}
