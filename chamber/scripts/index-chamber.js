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

const apiKey = 'api.openweathermap.org'; // 🔑 Replace with your API key
const city = 'Lagos, NG';
const units = 'metric'; // Celsius

const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const forecastEl = document.getElementById('forecast');

// Fetch Current Weather
async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    );
    const data = await response.json();

    tempEl.textContent = `${Math.round(data.main.temp)}°C`;
    descEl.textContent = data.weather[0].description;
    humidityEl.textContent = `${data.main.humidity}%`;
    windEl.textContent = `${data.wind.speed} m/s`;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    tempEl.textContent = 'N/A';
    descEl.textContent = 'N/A';
    humidityEl.textContent = 'N/A';
    windEl.textContent = 'N/A';
  }
}

// Fetch 5-Day Forecast
async function getForecast() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
    );
    const data = await response.json();

    // Clear previous forecast
    forecastEl.innerHTML = '';

    // OpenWeatherMap provides data every 3 hours; pick one forecast per day
    const dailyData = data.list.filter((item) => item.dt_txt.includes('12:00:00'));

    dailyData.forEach((day) => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const temp = Math.round(day.main.temp);
      const condition = day.weather[0].main;

      const card = document.createElement('div');
      card.className = 'forecast-card';
      card.innerHTML = `
        <p>${dayName}</p>
        <p>${temp}°C</p>
        <p>${condition}</p>
      `;
      forecastEl.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching forecast:', error);
    forecastEl.innerHTML = '<p>Forecast not available.</p>';
  }
}

// Initialize
getWeather();
getForecast();
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

// ===== COURSE FILTER BUTTONS =====
document.getElementById("allBtn").addEventListener("click", () => {
  filterCourses("all");
});

document.getElementById("cseBtn").addEventListener("click", () => {
  filterCourses("cse");
});

document.getElementById("wddBtn").addEventListener("click", () => {
  filterCourses("wdd");
});