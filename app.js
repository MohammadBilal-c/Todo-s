// Selector
const todoinput = document.querySelector('.todo-input')
const todobutton = document.querySelector('.todo-button')
const todolist = document.querySelector('.todo-list')
// EventListener
todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deletecheck);

// function
function addTodo(event) {
    event.preventDefault();

    const tododiv = document.createElement('div');
    tododiv.classList.add("todo");

    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item")
    tododiv.appendChild(newtodo);

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check-square"></i>'
    completedbutton.classList.add("complete-btn")
    tododiv.appendChild(completedbutton)


    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    tododiv.appendChild(trashButton)

    todolist.appendChild(tododiv)
    todoinput.value = "";
}

function deletecheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        // todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

