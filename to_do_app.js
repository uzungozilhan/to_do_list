const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const newToDo = document.getElementById("new-task-box");
const addButton = document.getElementById("add-btn");
const toDoList = document.querySelector(".task-list");
const clearButton = document.getElementById("clear-btn");

function addToDo() {
    if (newToDo.value == "") {
        alert("Please enter a new To Do!");
    } else {
        let list_item = document.createElement("li");
        list_item.innerHTML = newToDo.value;
        toDoList.appendChild(list_item);
    
    list_item.addEventListener("click", function () {
        list_item.style.textDecoration = "line-through"
    })
    list_item.addEventListener("dblclick", function () {
        list_item.remove()
    })
}
}


addButton.addEventListener("click", addToDo);

function clearTask() {
    let choice = confirm("Are you sure that you want to clear all tasks 🗑")

    const clearAll = document.querySelectorAll("li");
    for (i = 0; i < clearAll.length; i++){
        clearAll[i].remove();
    } 
}
clearButton.addEventListener("click", clearTask)
