export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  const newCatButton = document.createElement("button");

  newCatButton.innerText = "Get New Cat";

  // Create img
  const imageContainer = document.createElement("div");
  imageContainer.style.width = "300px";
  imageContainer.style.height = "250px";

  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.width = "100%";
  img.style.height = "100%";

  const container = document.querySelector(".container");

  imageContainer.appendChild(img);

  container.appendChild(h1);
  container.appendChild(newCatButton);
  container.appendChild(imageContainer);

  fetchImage();
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};
