const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");
const darkToggle = document.getElementById("dark-toggle");
const header = document.querySelector("header");

/* MOBILE MENU */
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* DARK MODE TOGGLE */
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  darkToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* HEADER SHADOW ON SCROLL */
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

