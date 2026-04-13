// ===============================
// INITIALIZE APP
// ===============================
function init() {
  setupMenu();
  setupDarkMode();
  setupHeaderScroll();
  setCurrentYear();
}

// ===============================
// MOBILE MENU
// ===============================
function setupMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav-menu");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

// ===============================
// DARK MODE TOGGLE
// ===============================
function setupDarkMode() {
  const darkToggle = document.getElementById("dark-toggle");

  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // Toggle icon
      darkToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }
}

// ===============================
// HEADER SCROLL EFFECT
// ===============================
function setupHeaderScroll() {
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    });
  }
}


// Footer Info
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
// ===============================
// RUN APP
// ===============================
init();