const parent = document.getElementById("parent");
const children = document.getElementsByClassName("can-tap");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", () => {
  let len = children.length;
  for (let i = 0; i < len; i++) {
    parent.removeChild(children[0]);
  }
});
