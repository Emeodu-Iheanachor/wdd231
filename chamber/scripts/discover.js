// ===============================
// HAMBURGER MENU TOGGLE
// ===============================
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBtn.textContent = isOpen ? "✖" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});




import { places } from "../data/places.mjs";

const container = document.getElementById("cards");

// CREATE CARDS
places.forEach((place, index) => {
  const card = document.createElement("div");
  card.classList.add("card", `card${index + 1}`);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});

// VISIT MESSAGE (localStorage)
const visitBox = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - lastVisit;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days < 1) {
    visitBox.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitBox.textContent = "You last visited 1 day ago.";
  } else {
    visitBox.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);


const ctaBtn = document.querySelector('.cta-button');

ctaBtn.addEventListener('click', () => {
  window.location.href = 'https://lccnigeria.org/';
});


// ===============================
// HORIZONTAL SCROLL BUTTONS
// ===============================
const scrollContainer = document.querySelector(".scroll-container");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

if (leftBtn && rightBtn && scrollContainer) {
  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  });
}