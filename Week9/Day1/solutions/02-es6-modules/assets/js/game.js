import { getIndex } from "./utilities.js";
import { mrPotatoHeadQuotes as mrQuotes } from "./quotes/mrPotatoHead.js";
import mrsPotatoHeadQuotes  from "./quotes/mrsPotatoHead.js";

export default class Game {
  start() {
    document.getElementById("hello").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = mrQuotes["hello"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["hello"];
      }
    });

    document.getElementById("bye").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = mrQuotes["bye"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["bye"];
      }
    });

    document.getElementById("swap").addEventListener("click", () => {
      const index = getIndex();
      const image = document.getElementById("image");
      const messageContainer = document.getElementById("message");
      const wrapper = document.getElementById("wrapper");
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    });
  }
}

// navigation.js
// const navBar = () => {
//   // create navbar element as a container
// };

// const createNavElements = () => {
//   // elements that go in navbar
// };

// export default navBar

// // utilities.js

// const createId = () => {

// }

// export const createClassNames = (classNamesArray, element) => {
//   // iterates through class names array and creates a class for some element
// }
