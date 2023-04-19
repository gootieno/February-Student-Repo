// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const shoppingListForm = document.querySelector("form");
  const addButton = document.getElementById("add");
  const shoppingList = document.getElementById("shopping-list");
  const shoppingListItem = document.getElementById("name");
  const type = document.getElementById("type");
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("button was clicked");

    if (!shoppingListItem.value) return;
    const listItem = document.createElement("li");
    // listItem.dataset.type = type.value;
    listItem.setAttribute("data-type", type.value);

    listItem.innerText = shoppingListItem.value;
    console.log("list item ", listItem);

    shoppingList.append(listItem);

    shoppingListItem.value = "";
  });
});
