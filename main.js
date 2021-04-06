//create array
let array = [];

//get HTML Ele
const content = document.getElementById("content");
const deleteBtn = document.getElementById("delete");
const createBtn = document.getElementById("create");

//create imgTag

const createImgTag = (imgPath) => {
  const first = document.createElement("img");
  first.src = imgPath;
  first.setAttribute("id", "animals");
  content.appendChild(first);
  array.push(first);
};

createBtn.addEventListener("click", () => {
  createImgTag("./img/horse.png");
  createImgTag("./img/sheep.png");
});

deleteBtn.addEventListener("click", () => {
  console.log("clicked delete button");
  for (let i = content.childNodes.length - 1; i >= 0; i--) {
    content.removeChild(content.childNodes[i]);
  }
});
