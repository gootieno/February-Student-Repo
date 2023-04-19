// Your code here
const initializePage = async () => {
  const catHeading = document.createElement("h1");

  catHeading.setAttribute("id", "cat-heading");
  catHeading.innerText = "Kitten Pic";

  const imageContainer = document.createElement("div");
  const image = document.createElement("img");

  image.setAttribute("id", "cat-image");
  image.style.height = "100%";
  image.style.width = "100%";

  imageContainer.setAttribute("id", "image-container");
  imageContainer.style.height = "250px";
  imageContainer.style.width = "350px";

  imageContainer.appendChild(image);
  document.body.append(catHeading, imageContainer);
  await fetchImage();
};

const fetchImage = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();

  console.log("data ", data);

  const imageUrl = data[0].url;
  console.log("image url ", imageUrl);

  const image = document.getElementById("cat-image");
  image.setAttribute("src", imageUrl);
};

window.onload = initializePage;
