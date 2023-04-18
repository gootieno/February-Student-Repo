/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log("data from fetch ", data);
    const url = data.message; // URL of new dog image

    const urlParts = url.split("/");
    console.log("url parts ", urlParts);

    const dogBreed = urlParts[4];
    console.log("dog breed ", dogBreed);
    /*
        <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>

    */

    // create elements
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    // give elements values
    figCaption.innerText = dogBreed;
    img.setAttribute("src", url);

    // append elements in order
    figure.append(img, figCaption);
    li.appendChild(figure);

    li.style.border = "2px solid red";

    console.log("list item ", li);
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("li");

  if (firstDog) firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const lastDog = document.querySelector(".gallery > ul").lastElementChild;

  if (lastDog) lastDog.remove();
});
