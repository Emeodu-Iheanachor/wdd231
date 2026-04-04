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
  card.classList.add("card");

  card.style.gridArea = `card${index + 1}`;

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


// VISIT MESSAGE (LOCAL STORAGE ✅)
const message = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);