const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seededFruits = document.getElementsByClassName("seed");
  console.log("seeded fruits ", seededFruits);
  // 2. Get all seedless fruit elements
  // Your code here

  // 3. Get first seedless fruit element
  // Your code here
  const seedlessFruits = document.querySelectorAll(".seedless");
  console.log("seedless fruits  ", seedlessFruits);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const spans = document.querySelectorAll("span");
  let selectedSpan;
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].innerText === "you") {
      selectedSpan = spans[i];
      break;
    }
  }
  console.log("selected span ", selectedSpan);

  //   const youSpan = document.querySelector("#wrapper > p > span");
  //   console.log("you span ", youSpan);
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapperChildren = document.getElementById("wrapper").children;
  console.log("wrapper children ", wrapperChildren);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddList = document.querySelectorAll(".odd");
  console.log("odd list ", oddList);
  // 7. Get all even number list items in the list
  // Your code here
  //   const listItems = document.querySelectorAll("ol > li:not(.odd)");
  //   console.log("list items ", listItems);
  const listItems = document.querySelector("ol").children;
  let evenListItems = [];
  for (let i = 1; i < listItems.length; i += 2) {
    listItems[i].setAttribute("class", "even");
    evenListItems.push(listItems[i]);
  }
  console.log("even list items ", evenListItems);

  //   const evens = document.querySelectorAll(".even");
  //   console.log("even list items ", evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  //   const companies = document.querySelectorAll("#three > p > a:not([class])");

  const companies = document.querySelectorAll("#three > p > a");
  //   console.log("companies without class", companies);
  const companiesWithoutClass = [];

  companies.forEach((company) => {
    if (company.className === "") companiesWithoutClass.push(company);
  });

  console.log("companies without class name ", companiesWithoutClass);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelector("#three > p > .shopping");
  console.log("amazon ", amazon.innerText);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = document.getElementsByTagName("ul")[1].children;
  console.log("unicorns ", unicorns);
};

window.onload = select;
