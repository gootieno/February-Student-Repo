export const createCommentsContainer = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "comments-container");

  container.style.width = "500px";
  container.style.height = "300px";
  container.style.marginTop = "30px";

  container.style.display = "flex";
  container.style.flexDirection = "column";

  const mainContainer = document.querySelector(".container");
  mainContainer.appendChild(container);
  commentBox();
};

const commentBox = () => {
  const commentsContainer = document.getElementById("comments-container");
  const commentBox = document.createElement("div");

  commentBox.setAttribute("id", "comment-box");
  commentBox.style.border = "2px solid black";
  commentBox.style.height = "90%";
  commentBox.style.marginBottom = "10px";
  commentsContainer.appendChild(commentBox);
  createCommentInput();
};

const createCommentInput = () => {
  const commentsContainer = document.getElementById("comments-container");
  const commentInputContainer = document.createElement("div");

  const commentInput = document.createElement("input");
  commentInput.setAttribute("id", "input");
  commentInput.style.width = "70%";
  commentInput.style.marginRight = "10px";
  commentInput.style.marginBottom = "40px";

  const commentButton = document.createElement("button");
  commentButton.setAttribute("id", "comment-button");
  commentButton.innerText = "Submit Comment";

  commentInputContainer.append(commentInput, commentButton);
  commentsContainer.appendChild(commentInputContainer);
};
