export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("body child nodes ", bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]
  console.log("div ", div);
  const divChildNodes = Array.from(div.childNodes); // NodeList [text, span, text]

  for (let i = 0; i < divChildNodes.length; i++) {
    const span = document.createElement("span");
    div.appendChild(span);
    console.log("appending to div ", div);
    if(i ===  50) break
  }

  console.log("div child nodes ", divChildNodes);
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
};
