const btnAddTodo = document.querySelector('.add-todo');
btnAddTodo.addEventListener('click', addTodo);
const todoTextInput = document.querySelector('.todo-text');
todoTextInput.addEventListener('keypress', inputKeyPress);

function inputKeyPress(event) {
    if (event.keyCode === 13) {
        addTodo();
    }
}

function addTodo() {
    const todoTextInput = document.querySelector('.todo-text');
    const text = todoTextInput.value;
    const list = document.querySelector('.todolist');
    list.innerHTML += `<li>${text}</li>`;
    todoTextInput.value = '';
}

