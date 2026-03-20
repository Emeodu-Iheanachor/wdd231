/// ===== HAMBURGER MENU WITH ☰ -> X TOGGLE =====
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    nav.style.display = 'block';
    menuBtn.textContent = '✖'; // Change ☰ to X
  } else {
    nav.style.display = 'none';
    menuBtn.textContent = '☰'; // Change X back to ☰
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// Weather (Demo static data, replace with API if needed)
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');

const demoWeather = {
  temp: '28°C',
  desc: 'Sunny with light clouds'
};

tempEl.textContent = `Temperature: ${demoWeather.temp}`;
descEl.textContent = `Condition: ${demoWeather.desc}`;

// Member Spotlights (demo)
const spotlights = [
  { name: "Company A", desc: "Leading in tech", img: "images/member1.webp" },
  { name: "Company B", desc: "Innovation hub", img: "images/member2.webp" },
  { name: "Company C", desc: "Business consultancy", img: "images/member3.webp" }
];

const spotlightsContainer = document.getElementById('spotlights');
spotlights.forEach(member => {
  const div = document.createElement('div');
  div.classList.add('spotlight-card');
  div.innerHTML = `
    <img src="${member.img}" alt="${member.name}" style="width:100%; border-radius:6px;">
    <h3>${member.name}</h3>
    <p>${member.desc}</p>
  `;
  spotlightsContainer.appendChild(div);
});

// ===== COURSES DATA =====
const courses = [
  { name: "Intro to CSE", credits: 3, type: "cse" },
  { name: "Advanced CSE", credits: 4, type: "cse" },
  { name: "Web Design Basics", credits: 2, type: "wdd" },
  { name: "Full Stack WDD", credits: 4, type: "wdd" },
  { name: "Data Structures", credits: 3, type: "cse" },
  { name: "UX/UI Design", credits: 2, type: "wdd" }
];

// ===== FUNCTION TO DISPLAY COURSES =====
function displayCourses(list) {
  const container = document.getElementById('courses');
  container.innerHTML = ''; // Clear previous list
  let totalCredits = 0;

  list.forEach(course => {
    totalCredits += course.credits;
    const div = document.createElement('div');
    div.classList.add('course-card');
    div.innerHTML = `<strong>${course.name}</strong> - ${course.credits} credits`;
    container.appendChild(div);
  });

  // Show total credits
  document.getElementById('totalCredits').textContent = totalCredits;
}

// ===== FILTER COURSES FUNCTION =====
function filterCourses(type) {
  if (type === 'all') {
    displayCourses(courses);
  } else {
    displayCourses(courses.filter(c => c.type === type));
  }
}

// ===== INITIAL DISPLAY =====
displayCourses(courses);