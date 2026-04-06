
// ====== HAMBURGER MENU ======
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav");
const navList = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
  const isOpen = navList.classList.contains("open");
  menuBtn.textContent = isOpen ? "✖" : "☰";
});




import { items } from "../data/discover.mjs";

// ============ VISIT LOCALSTORAGE ============
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// ============ INSERT CARDS ============
const cardsContainer = document.getElementById("cards");

items.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </figure>
    <div class="card-content">
      <h2>${item.title}</h2>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noopener">Learn More</a>
    </div>
  `;
  cardsContainer.appendChild(card);
});

// ============ FOOTER DATE ============
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
