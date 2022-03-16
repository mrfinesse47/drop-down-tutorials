document.getElementById("menu").addEventListener("click", openMenu);
window.addEventListener("click", () => {
  document.getElementById("drop-down").classList.toggle("active");
});

function openMenu(event) {
  document.getElementById("drop-down").classList.toggle("active");
  event.stopPropagation(); //this is to not have the click on the drop down fire the window event for click
}
