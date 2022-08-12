import  { addTodo, deleteTodo} from "./actions"
import {toDosStore} from "./store"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")



const dispatchAddTodo = (text) => {
  toDosStore.dispatch(addTodo(text))
}

const dispatchDeleteTodo = (event) => {
 const id = event.target.parentNode.id
    toDosStore.dispatch(deleteTodo(id))
 
}

const printTodo = () => {

    const toDos = toDosStore.getState();
    ul.innerHTML= ""
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger"
        li.id = toDo.id
        li.innerText = toDo.text;
        ul.appendChild(li)
        deleteBtn.innerText = "Eliminar"
        li.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", dispatchDeleteTodo)
    });
}

const handleSubmit = (event) =>{
    event.preventDefault()
    const toDo = input.value
    dispatchAddTodo(toDo)
    input.value =""
}

toDosStore.subscribe(printTodo);

form.addEventListener("submit", handleSubmit);