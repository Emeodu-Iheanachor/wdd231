// ===== HAMBURGER MENU TOGGLE =====
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.display = 'block';
    menuBtn.textContent = '✖'; // ☰ -> X
  } else {
    nav.style.display = 'none';
    menuBtn.textContent = '☰'; // X -> ☰
  }
});