document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // MENU TOGGLE
  // ===============================
  const menuBtn = document.getElementById("menu");
  const nav = document.querySelector(".navigation");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      menuBtn.textContent = isOpen ? "✖" : "☰";
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  // ===============================
  // IMPORT DATA
  // ===============================
  import("../data/places.mjs").then(module => {
    const places = module.places;

    const container = document.getElementById("cards");

    if (container) {
      places.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("discover-card");

        card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;

        container.appendChild(card);
      });
    }
  });

  // ===============================
  // VISIT MESSAGE
  // ===============================
  const message = document.getElementById("visit-message");

  if (message) {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
      message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

      message.textContent =
        days < 1
          ? "Back so soon! Awesome!"
          : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }

    localStorage.setItem("lastVisit", now);
  }

});