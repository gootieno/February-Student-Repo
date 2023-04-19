export const createCommentsContainer = () => {
  const container = document.createElement("div");
  container.style.width = "300px";
  container.style.height = "300px";
  container.style.border = "2px solid black";

  const mainContainer = document.querySelector(".container");
  mainContainer.appendChild(container);
};
