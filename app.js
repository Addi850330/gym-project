const snip1 = document.querySelector(".snip1");
const snip2 = document.querySelector(".snip2");
const snip3 = document.querySelector(".snip3");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
snip1.onclick = () => {
  console.log("y1");
  snip1.classList.add("check");
  snip2.classList.remove("check");
  snip3.classList.remove("check");
  c1.classList.remove("setL", "setR");
  c2.classList.remove("setL", "setR");
  c3.classList.remove("setL", "setR");
  c2.classList.add("setR");
  c3.classList.add("setL");
};
snip2.onclick = () => {
  console.log("y2");
  snip1.classList.remove("check");
  snip2.classList.add("check");
  snip3.classList.remove("check");
  c2.classList.remove("setL", "setR");
  c1.classList.remove("setL", "setR");
  c3.classList.remove("setL", "setR");
  c3.classList.add("setR");
  c1.classList.add("setL");
};
snip3.onclick = () => {
  console.log("y3");
  snip1.classList.remove("check");
  snip2.classList.remove("check");
  snip3.classList.add("check");
  c3.classList.remove("setL", "setR");
  c2.classList.remove("setL", "setR");
  c1.classList.remove("setL", "setR");
  c1.classList.add("setR");
  c2.classList.add("setL");
};

const navbutton = document.querySelector(".hidden-link-button");
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const hiddenLink = document.querySelector(".hidden-link");
navbutton.onclick = () => {
  row1.classList.toggle("row1-click");
  row2.classList.toggle("row2-click");
  row3.classList.toggle("row3-click");
  hiddenLink.classList.toggle("hidden-link-move");
};

// ---------------
let like = document.querySelector(".like");
let add = document.querySelector(".heart");
let delet = document.querySelector(".redheart");
add.addEventListener("click", (e) => {
  // let creatHeart = document.createElement("div");
  // creatHeart.classList.add("redheart");
  // like.appendChild(creatHeart);
  console.log(e.target);
});
