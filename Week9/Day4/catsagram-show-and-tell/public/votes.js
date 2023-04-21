// build votes container for holding votes
export const BuildVotesContainer = () => {
  const transitionContainer = document.querySelector("#transition-container");
  // create a container for holding up votes and down votes
  const votesContainer = document.createElement("div");

  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  // give votes container an id for unique selection
  votesContainer.setAttribute("id", "votes-container");
  // give the container some styles

  votesContainer.style.position = "absolute";
  votesContainer.style.top = "40%";
  votesContainer.style.right = "150px";

  // create a heading for votes container and set the inner html
  const heading = document.createElement("h2");
  heading.setAttribute(
    "class",
    darkMode ? "dark-mode-text" : "light-mode-text"
  );
  heading.innerHTML = "Votes";

  // add some styles to the heading
  heading.style.textAlign = "center";

  // append the heading to the container
  votesContainer.appendChild(heading);

  // append the votes container to the transitionContainer
  transitionContainer.appendChild(votesContainer);

  // render the vote buttons
  voteButtons();
};

// create a function for rendering vote buttons and handling vote logic
const voteButtons = () => {
  // select the vote container to append the buttons to
  const votesContainer = document.getElementById("votes-container");
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  // create upvote and downvote buttons and set inner html
  // NOTE: we can create a container for the buttons for easier styling. For now this is okay
  const upVote = document.createElement("div");
  const downVote = document.createElement("div");

  // give the buttons attributes for grouping and unique selection
  upVote.setAttribute("id", "up-vote");
  upVote.setAttribute("name", "Up");
  upVote.setAttribute("data-name", "upVote");
  upVote.setAttribute(
    "class",
    darkMode
      ? "voting-buttons dark-mode-text"
      : "voting-buttons light-mode-text"
  );

  upVote.style.border = "2px solid gray";
  upVote.style.borderRadius = "5px";
  upVote.style.padding = "6px 5px";
  upVote.style.display = "inline-block";
  upVote.style.width = "100px";
  upVote.style.textAlign = "center";
  upVote.style.cursor = "pointer";

  downVote.setAttribute("id", "down-vote");
  downVote.setAttribute("name", "Down");
  downVote.setAttribute("data-name", "downVote");
  downVote.setAttribute(
    "class",
    darkMode
      ? "dark-mode-text voting-buttons"
      : "light-mode-text voting-buttons"
  );

  downVote.style.border = "2px solid gray";
  downVote.style.borderRadius = "5px";
  downVote.style.padding = "6px 5px";
  downVote.style.display = "inline-block";
  downVote.style.width = "100px";
  downVote.style.textAlign = "center";
  downVote.style.cursor = "pointer";

  // check local storage for any vote counts for handling page reloads
  const upVoteCount = localStorage.getItem("upVote");
  const downVoteCount = localStorage.getItem("downVote");

  // set inner html value to include count value stored in data-count attribute
  // doing an inline conditional to return set as the first value if true or second value if false
  upVote.setAttribute("data-count", upVoteCount ? `${upVoteCount}` : 0);
  downVote.setAttribute("data-count", downVoteCount ? `${downVoteCount}` : 0);

  // set the inner html to the local storage value or dataset value
  upVote.innerText = `Up Vote ${upVote.dataset.count}`;
  downVote.innerText = `Down Vote ${downVote.dataset.count}`;

  // give some styles to the buttons
  upVote.style.marginRight = "10px";
  downVote.style.marginLeft = "10px";
  // append the buttons to the votes container
  votesContainer.append(upVote, downVote);
  handleUpVote();
  // this function doesn't look that dry but its purposes is to help see whats happening with our code
};

// create a helper function vote clicks
export const handleUpVote = () => {
  const upVoteButton = document.getElementById("up-vote");
  const downVoteButton = document.getElementById("down-vote");
  // listen for up vote button click
  upVoteButton.addEventListener("click", () => handleVoteChange(upVoteButton));
  // listen for down vote button click
  downVoteButton.addEventListener("click", () =>
    handleVoteChange(downVoteButton)
  );
};

// create a helper function for handling vote change
const handleVoteChange = (voteButton) => {
  // convert count to number to do math operation
  let count = Number(voteButton.dataset.count);

  const name = voteButton.getAttribute("name");
  console.log("button name ", name);

  if (name === "Up") {
    count += 1;
  } else {
    count -= 1;
  }
  // set the new values to local storage
  localStorage.setItem(voteButton.dataset.name, JSON.stringify(count));
  // set new vote button attribute and inner html
  voteButton.dataset.count = count;
  voteButton.innerText = `${name} Vote ${count}`;
};
