// NAV TOGGLE
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// TIMESTAMP
document.querySelector("#timestamp").value = new Date().toISOString();

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// MODALS
const buttons = document.querySelectorAll("[data-modal]");
const dialogs = document.querySelectorAll("dialog");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.modal).showModal();
  });
});

dialogs.forEach(dialog => {
  dialog.querySelector(".close").addEventListener("click", () => {
    dialog.close();
  });
});