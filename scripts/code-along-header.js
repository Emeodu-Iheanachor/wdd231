const button = document.querySelector("#nav-button");
const menu = document.querySelector("#nav-menu");

button.addEventListener("click", () => {

button.classList.toggle("open");
menu.classList.toggle("open");

});