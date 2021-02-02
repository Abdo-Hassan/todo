const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');
const invalidMessage = document.querySelector('.invalid');
const doneWrapper = document.querySelector('.done-wrapper');
const listOfDone = document.querySelector('.done-wrapper ul');
let todos = [
  { id: 1, todo: 'have breafast' },
  { id: 2, todo: 'go to work' },
  { id: 3, todo: 'sleep well' },
];

form.addEventListener('submit', addTodo);
function addTodo(e) {
  e.preventDefault();
  //  input value
  let todoValue = todo.value;
  if (todoValue == '') {
    // show alert message
    invalidMessage.style.display = 'block';
  } else {
    // get last id of todos
    let newId = todos.length ? todos[todos.length - 1].id : 0;
    // add new todo to list of todos
    let newTodo = { id: ++newId, todo: todoValue };
    todos.push(newTodo);
    listOfTodos.innerHTML += `<li class='list-group-item'>
    <i class="far fa-circle done" onclick='doneTodo("${newTodo}")'></i>
    ${todoValue}
    <i class="far fa-trash-alt remove" onclick='removeTodo("${newId}")'></i>
    </li>`;
    invalidMessage.style.display = 'none';
  }
  // reset form
  form.reset();
}

function showTodos() {
  todos.forEach((todo) => {
    listOfTodos.innerHTML += `<li class='list-group-item'>
      <i class="far fa-circle done" onclick='doneTodo("${todo}")'></i>
      ${todo.todo}
      <i class="far fa-trash-alt remove" onclick='removeTodo("${todo.id}")'></i>
    </li>`;
  });
}

window.onload = () => {
  showTodos();
};

// show done todos
function doneTodo(item) {
  // doneWrapper.style.display = 'block';
  // listOfDone.innerHTML += `<li class='list-group-item'>${item.todo}</li>`;
}
// remove todos
function removeTodo(id) {
  console.log(id);
  let idIndex = todos
    .map((todo) => {
      return todo.id;
    })
    .indexOf(+id);
  console.log('index', idIndex);
  todos.splice(idIndex, 1);
  console.log(todos);
  listOfTodos.removeChild(listOfTodos.childNodes[idIndex]);
}
