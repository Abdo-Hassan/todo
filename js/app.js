const form = document.querySelector('form');
const todo = document.querySelector('form').todo;
const listOfTodos = document.querySelector('.list-of-todos');
const invalidMessage = document.querySelector('.invalid');
const doneWrapper = document.querySelector('.done-wrapper');
const listOfDone = document.querySelector('.done-wrapper ul');
const savedTodos = localStorage.getItem('todos');
const clearListButton = document.getElementById('clear-list');
const clearDoneButton = document.getElementById('clear-done');
const newDate = new Date().toISOString().split('T')[0];

let todos = [
  { id: 1, todo: 'have breakfast', date: newDate },
  { id: 2, todo: 'go to work', date: newDate },
  { id: 3, todo: 'sleep well', date: newDate },
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
    let newTodo = { id: ++newId, todo: todoValue, date: newDate };
    todos.push(newTodo);
    // save to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
    // add to todos list
    listOfTodos.innerHTML += `<li class='list-group-item'>
    <i class="far fa-circle done" onclick='doneTodo("${newTodo.todo}-${newTodo.id}/${newTodo.date}")'></i>
    <span>${todoValue}</span>
    <span class='todo-date'>${newTodo.date}</span>
    <i class="far fa-edit edit" onclick='editTodo("${newTodo.todo}-${newTodo.id}/${newTodo.date}")'></i>
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
          <i class="far fa-circle done" onclick='doneTodo("${todo.todo}-${todo.id}/${todo.date}")'></i>
           <span>${todo.todo}</span>
           <span class='todo-date'>${todo.date}</span>
          <i class="far fa-edit edit" onclick='editTodo("${todo.todo}-${todo.id}/${todo.date}")'></i>
          <i class="far fa-trash-alt remove" onclick='removeTodo("${todo.id}")'></i>
        </li>`;
  });
}

// show done todos
function doneTodo(todoInfo) {
  // -todo id
  let idTodo = todoInfo.split('-')[1];
  // -todo value
  let valueTodo = todoInfo.split('-')[0];
  // -todo Date
  let toodDate = todoInfo.split('/')[1];
  console.log('idTodo', idTodo);
  console.log('valueTodo', valueTodo);
  console.log('toodDate', toodDate);
  // save to localStorage
  // localStorage.setItem('done', JSON.stringify(todos));
  // get todo id index
  let idIndex = todos
    .map((todo) => {
      return todo.id;
    })
    .indexOf(+idTodo);
  todos.splice(idIndex, 1);

  //remove todo from original list
  // listOfTodos.removeChild(listOfTodos.childNodes[idIndex]);
  console.log(idIndex);
  console.log(listOfTodos.childNodes);
  //show done todos section
  doneWrapper.style.display = 'block';
  // add done todos to done todos list
  listOfDone.innerHTML += `
  <li class='list-group-item'>
  <span>${valueTodo}</span>
  <span class='todo-date-done'>${toodDate}</span>
  </li>
  `;
}

// edit todo
function editTodo(todoInfo) {
  let valueTodo = todoInfo.split('-')[0];
  let editInput = document.createElement('input');
  editInput.setAttribute('value', valueTodo);
  editInput.className = 'form-control';
  listOfTodos.appendChild(editInput);
}

// remove todos
function removeTodo(id) {
  let idIndex = todos
    .map((todo) => {
      return todo.id;
    })
    .indexOf(+id);
  todos.splice(idIndex, 1);
  listOfTodos.removeChild(listOfTodos.childNodes[idIndex]);
}

window.onload = () => {
  showTodos();
};

// delete all todo list
clearListButton.addEventListener('click', clearList);
function clearList() {
  todos = [];
  listOfTodos.innerHTML = '';
  localStorage.removeItem('todos');
}

// delete all todo list
clearDoneButton.addEventListener('click', clearDone);
function clearDone() {
  listOfDone.innerHTML = '';
  doneWrapper.style.display = 'none';
  // localStorage.removeItem('done');
}
