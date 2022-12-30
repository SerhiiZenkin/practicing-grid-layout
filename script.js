const popupButton = document.querySelector(".button");
const body = document.querySelector("body");
const popupClose = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");


popupButton.addEventListener("click", ()=> {
  popup.classList.add("open");
  body.classList.add("lock");
});

popupClose.addEventListener("click", ()=> {
  popup.classList.remove("open");
  body.classList.remove("lock");
});

const menuButton = document.querySelector(".menu");
const menuBody = document.querySelector(".menu-body");
const closeButton = document.querySelector(".closeBtn");

menuButton.addEventListener("click", ()=> {
menuBody.classList.add("reveal");
menuButton.classList.add("hidden");
body.classList.add("lock");
})

closeButton.addEventListener("click", ()=> {
  menuBody.classList.remove("reveal");
  menuButton.classList.remove("hidden");
  body.classList.remove("lock");
})