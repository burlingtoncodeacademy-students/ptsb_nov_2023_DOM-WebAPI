// Importing default todos+emojis from external file
import { toDosArray, todoEmojis } from "./todo.js";

let newArr = toDosArray.reverse();

const todosList = document.getElementById("todos");
const todosAddButton = document.getElementById("todo-add_button");
const todosInputField = document.getElementById("todo-add_text");
const emojiSelector = document.getElementById("emoji-selector");
const todoForm = document.getElementById("todo-form");

todoEmojis.forEach((i) => {
  // Creating our option element
  let option = document.createElement("option");
  // Populating the value to be the data for our option tag
  option.textContent = i;
  option.style.textAlign = "left";
  // Appending our option tag to our select element
  emojiSelector.appendChild(option);
});

function createTodos(filterArr) {
  while (todosList.firstChild) {
    todosList.removeChild(todosList.firstChild);
  }

  filterArr.forEach((item, idx) => {
    console.log(item);
    // Randomizing values for background color of the todo
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    let randomColor1 = random(100, 255);
    let randomColor2 = random(100, 255);
    let randomColor3 = random(100, 255);

    // Create HTML Elements
    let listItem = document.createElement("li");
    let emoji = document.createElement("p");
    let toDoText = document.createElement("p");
    let deleteButton = document.createElement("button");

    // Populating the values for our elements
    toDoText.textContent = item.name;
    emoji.textContent = item.icon;
    deleteButton.textContent = "❌";

    // Adding classnames to our elements
    listItem.classList.add("todo");
    emoji.classList.add("emoji");
    toDoText.classList.add("todo-text");

    listItem.style.backgroundColor = `rgba(${randomColor1},${randomColor2},${randomColor3})`;

    listItem.appendChild(emoji);
    listItem.appendChild(toDoText);
    listItem.appendChild(deleteButton);

    todosList.appendChild(listItem);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  createTodos(newArr);
});
