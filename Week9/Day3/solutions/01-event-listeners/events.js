// Your code here
window.addEventListener("DOMContentLoaded", () => {
  // alert("DOM has loaded!");

  // select input with id  red-input
  const input = document.getElementById("red-input");
  // get input value from input element
  const changeRed = () => {
    // console.log("event target value", event.target.value);
    // console.log("input value ", input.value);
    // change input element background to red if value is red
    // else remain transparent
    if (input.value.includes("red")) {
      input.style.backgroundColor = "red";
    } else {
      input.style.backgroundColor = "";
    }
  };

  input.addEventListener("input", changeRed);

  const listInput = document.getElementById("list-add");
  const addItemButton = document.getElementById("add-item");
  const listContainer = document.querySelector("ul");

  const buildList = () => {
    console.log("list input value ", listInput.value);

    if (listInput.value) {
      const listItem = document.createElement("li");
      listItem.innerText = listInput.value;

      listContainer.appendChild(listItem);
      listInput.value = "";
    }
  };

  addItemButton.addEventListener("click", buildList);

  const sectionBackground = document.getElementById("section-3");
  const colorSelect = document.getElementById("color-select");

  const changeSectionColor = (event) => {
    sectionBackground.style.backgroundColor = event.target.value;
  };
  colorSelect.addEventListener("change", changeSectionColor);

  const removeEventsButton = document.getElementById("remove-listeners");
  removeEventsButton.addEventListener("click", () => {
    input.removeEventListener("input", changeRed);
    addItemButton.removeEventListener("click", buildList);
    colorSelect.removeEventListener("change", changeSectionColor);
  });
});
