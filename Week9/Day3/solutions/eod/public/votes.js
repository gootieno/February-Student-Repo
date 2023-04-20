export const createVotesContainer = () => {
  /*
    select or create elements(s)

    set attributes/innerText/event listeners

    append to an existing element
  */

  const votesContainer = document.createElement("div");
  const mainContainer = document.querySelector(".container");

  votesContainer.setAttribute("id", "votes-container");
  mainContainer.appendChild(votesContainer);

  createVoteContent();
};

const createVoteContent = () => {
  const votesContainer = document.getElementById("votes-container");
  const score = document.createElement("p");

  score.setAttribute("id", "score");
  score.innerText = "Popularity Score 0";

  const voteButtonsContainer = document.createElement("div");
  voteButtonsContainer.setAttribute("id", "vote-buttons-container");

  const upVoteButton = document.createElement("button");
  const downVoteButton = document.createElement("button");

  upVoteButton.innerText = "Up Vote";
  upVoteButton.setAttribute("class", "up-vote vote-buttons");

  downVoteButton.innerText = "Down Vote";
  downVoteButton.setAttribute("class", "down-vote vote-buttons");

  voteButtonsContainer.append(upVoteButton, downVoteButton);
  votesContainer.append(score, voteButtonsContainer);
};

