const popupButton = document.querySelector(".button");
const body = document.querySelector("body");
const popupClose = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");


let unlock = true;
const timeTransition = 600;

popupButton.addEventListener("click", function(event) {
popup.classList.add("open");
bodyLock();
popup.addEventListener("click", function(event) {
  if (!event.target.closest(".popup-content")) {
    popupClose(event.target.closest(".popup"));
  }
})
})

function bodyLock() {
  const lockPaddingValue = window.innerWidth
}