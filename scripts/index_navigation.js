// Toggle nav menu on mobile and switch ☰ ↔ ✕
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open"); // show/hide menu

  // Switch icon
  if (nav.classList.contains("open")) {
    menuButton.textContent = "✕"; // show X when menu is open
  } else {
    menuButton.textContent = "☰"; // show hamburger when menu is closed
  }
});

// Close menu when a link is clicked (mobile friendly)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰"; // reset to hamburger
  });
});