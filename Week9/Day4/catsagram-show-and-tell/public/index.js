import { buildCommentsContainer, handleCommentSubmit } from "./comments.js";
import { buildImageContainer, getNewCatImage } from "./image.js";
import { buildStorage } from "./storage.js";
import { BuildVotesContainer } from "./votes.js";

const buildTransitionContainer = () => {
  const transitionContainer = document.createElement("div");
  transitionContainer.setAttribute("id", "transition-container");

  const transitionState = JSON.parse(localStorage.getItem("transitionState"));

  transitionState
    ? transitionContainer.setAttribute("class", "transition-active")
    : transitionContainer.setAttribute("class", "transition-inactive");

  document.body.appendChild(transitionContainer);
};

const handleTransition = () => {
  const imageContainer = document.getElementById("cat-image-container");
  const inputFormContainer = document.getElementById("input-form-container");
  const newCatButton = document.getElementById("new-cat");
  const commentsHeading = document.getElementById("comments-heading");

  const transitionContainer = document.getElementById("transition-container");

  imageContainer.addEventListener("click", () => {
    if (!transitionContainer.className.includes("transition-active")) {
      transitionContainer.classList.add("transition-active");
      transitionContainer.classList.remove("transition-inactive");

      newCatButton.classList.add("show-button");
      newCatButton.classList.remove("hide-button");

      inputFormContainer.classList.add("show-form");
      inputFormContainer.classList.remove("hide-form");

      commentsHeading.classList.add("show-comment-title");
      commentsHeading.classList.remove("hide-comment-title");

      localStorage.setItem("transitionState", "true");
    } else {
      transitionContainer.classList.remove("transition-active");
      transitionContainer.classList.add("transition-inactive");

      newCatButton.classList.remove("show-button");
      newCatButton.classList.add("hide-button");

      inputFormContainer.classList.remove("show-form");
      inputFormContainer.classList.add("hide-form");

      commentsHeading.classList.remove("show-comment-title");
      commentsHeading.classList.add("hide-comment-title");

      localStorage.setItem("transitionState", "false");
    }
  });
};

const buildPage = () => {
  // selecting the body element from the DOM to append any newly created elements
  const body = document.querySelector("body");
  // creating the heading element to  render our cat image title
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  const headingContainer = document.createElement("div");
  headingContainer.setAttribute("id", "heading-container");
  body.setAttribute(
    "class",
    darkMode ? "dark-mode dark-mode-text" : "light-mode-text"
  );
  headingContainer.style.display = "flex";
  headingContainer.style.justifyContent = "center";
  headingContainer.setAttribute(
    "class",
    darkMode ? "dark-mode-border" : "light-mode-border"
  );
  headingContainer.style.width = "100%";
  headingContainer.style.borderBottomStyle = "solid";
  headingContainer.style.borderBottomWidth = "2px";

  const heading = document.createElement("h1");
  heading.setAttribute("id", "site-heading");
  heading.setAttribute("class", darkMode ? "dark-mode-text" : "");
  heading.innerText = "Catsagram";
  heading.style.margin = "5px 50px";
  heading.style.cursor = "default";
  heading.style.cursor = "pointer";

  // PHASE 2: create a new cat button for getting new image
  const transitionState = JSON.parse(localStorage.getItem("transitionState"));

  const newCatButton = document.createElement("div");
  newCatButton.setAttribute("id", "new-cat");
  newCatButton.setAttribute(
    "class",
    transitionState ? "show-button" : "hide-button"
  );
  newCatButton.classList.add(darkMode ? "dark-mode-text" : "light-mode-text");

  newCatButton.style.marginTop = "60px";
  newCatButton.style.border = "2px solid gray";
  newCatButton.style.borderRadius = "5px";
  newCatButton.style.padding = "6px 5px";
  newCatButton.style.position = "relative";
  newCatButton.style.zIndex = "4";
  newCatButton.style.cursor = "pointer";
  newCatButton.innerText = "Get New Cat";
  // giving our body some styling
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";
  body.style.margin = "0";
  body.style.overflowX = "hidden";

  // appending the created heading element and cat button to the body
  headingContainer.appendChild(heading);
  body.append(headingContainer, newCatButton);

  // Calling build image container here in the order I want the elements to display (TOP DOWN)
  buildTransitionContainer();
  buildImageContainer();
  BuildVotesContainer();

  buildCommentsContainer();
  buildStorage();

  // add an event listener for new cat image
  newCatButton.addEventListener("click", async () => {
    await getNewCatImage();
    return;
  });
};

const handleDarkMode = () => {
  const darkModeSetting = JSON.parse(localStorage.getItem("darkMode"));
  const siteHeadingContainer = document.getElementById("heading-container");
  const siteHeading = document.getElementById("site-heading");
  const commentBox = document.getElementById("comment-box");
  const commentHeading = document.getElementById("comments-heading");
  const newCatButton = document.getElementById("new-cat");

  console.log("darkmode setting ", darkModeSetting);
  if (!darkModeSetting) {
    document.body.classList.add("dark-mode");
    document.body.classList.add("dark-mode-text");
    siteHeadingContainer.classList.remove("light-mode-border");
    siteHeadingContainer.classList.add("dark-mode-border");
    siteHeading.classList.remove("light-mode-text");
    siteHeading.classList.add("dark-mode-text");
    commentBox.classList.add("dark-mode-text");
    commentBox.classList.remove("light-mode-text");
    commentHeading.classList.remove("light-mode-text");
    commentHeading.classList.add("dark-mode-text");
    newCatButton.classList.remove("light-mode-text");
    newCatButton.classList.add("dark-mode-text");
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("dark-mode-text");
    document.body.classList.add("light-mode-text");
    siteHeadingContainer.classList.remove("dark-mode-border");
    siteHeadingContainer.classList.add("light-mode-border");
    siteHeading.classList.add("light-mode-text");
    siteHeading.classList.remove("dark-mode-text");
    commentBox.classList.remove("dark-mode-text");
    commentBox.classList.add("light-mode-text");
    commentHeading.classList.add("light-mode-text");
    commentHeading.classList.remove("dark-mode-text");
    newCatButton.classList.add("light-mode-text");
    newCatButton.classList.remove("dark-mode-text");
    localStorage.setItem("darkMode", "false");
  }
};

const setDarkMode = () => {
  const pageHeading = document.getElementById("site-heading");

  pageHeading.addEventListener("click", handleDarkMode);
};

// using async to await the fetching of the image before giving content to
// the fetch image function
const loadPage = async () => {
  buildPage();
  //event handling functions are called but don't run the main code until an event is triggered
  handleCommentSubmit();
  handleTransition();
  setDarkMode();
};

window.onload = loadPage;
