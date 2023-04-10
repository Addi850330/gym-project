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

// ------localStorage---------
const heart1 = document.querySelector("#heart1");

let getmode = localStorage.getItem("mode");

if (getmode && getmode === "redheart") {
  heart1.classList.add("redheart");
}
heart1.addEventListener("click", () => {
  heart1.classList.toggle("redheart");
  if(!heart1.classList.contains("redheart")){
    return localStorage.setItem("mode","heart")
  }
  localStorage.setItem("mode","redheart")
});


const heart2 = document.querySelector("#heart2");

let getmode2 = localStorage.getItem("mode2");

if (getmode2 === "redheart") {
  heart2.classList.add("redheart");
}
heart2.addEventListener("click", () => {
  heart2.classList.toggle("redheart");
  if(!heart2.classList.contains("redheart")){
    return localStorage.setItem("mode2","heart")
  }
  localStorage.setItem("mode2","redheart")
});


const heart3 = document.querySelector("#heart3");

let getmode3 = localStorage.getItem("mode3");

if (getmode3 === "redheart") {
  heart3.classList.add("redheart");
}
heart3.addEventListener("click", () => {
  heart3.classList.toggle("redheart");
  if(!heart3.classList.contains("redheart")){
    return localStorage.setItem("mode3","heart")
  }
  localStorage.setItem("mode3","redheart")
});



const heart4 = document.querySelector("#heart4");

let getmode4 = localStorage.getItem("mode4");

if (getmode4 === "redheart") {
  heart4.classList.add("redheart");
}
heart4.addEventListener("click", () => {
  heart4.classList.toggle("redheart");
  if(!heart4.classList.contains("redheart")){
    return localStorage.setItem("mode4","heart")
  }
  localStorage.setItem("mode4","redheart")
});



const heart5 = document.querySelector("#heart5");

let getmode5 = localStorage.getItem("mode5");

if (getmode5 === "redheart") {
  heart5.classList.add("redheart");
}
heart5.addEventListener("click", () => {
  heart5.classList.toggle("redheart");
  if(!heart5.classList.contains("redheart")){
    return localStorage.setItem("mode5","heart")
  }
  localStorage.setItem("mode5","redheart")
});


const heart6 = document.querySelector("#heart6");

let getmode6 = localStorage.getItem("mode6");

if (getmode6 === "redheart") {
  heart6.classList.add("redheart");
}
heart6.addEventListener("click", () => {
  heart6.classList.toggle("redheart");
  if(!heart6.classList.contains("redheart")){
    return localStorage.setItem("mode6","heart")
  }
  localStorage.setItem("mode6","redheart")
});


const heart7 = document.querySelector("#heart7");

let getmode7 = localStorage.getItem("mode7");

if (getmode7 === "redheart") {
  heart7.classList.add("redheart");
}
heart7.addEventListener("click", () => {
  heart7.classList.toggle("redheart");
  if(!heart7.classList.contains("redheart")){
    return localStorage.setItem("mode7","heart")
  }
  localStorage.setItem("mode7","redheart")
});

// --------------------------
