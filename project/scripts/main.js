const nav = document.getElementById("nav-menu");
document.getElementById("menu-btn").onclick = () => {
  nav.classList.toggle("open");
};

// DARK MODE (LOCAL STORAGE)
const toggle = document.getElementById("dark-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
};

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}



