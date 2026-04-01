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

const apiKey = "be283d5c82532b6b0bcbd61cbd977777"; // Replace with your OpenWeatherMap API key
const lat = "6.5244";
const lon = "3.3792";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
    document.getElementById("condition").textContent = data.weather[0].description;

    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").src = icon;

  } catch (error) {
    console.error("Weather error:", error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    filtered.slice(0, 5).forEach(day => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
        <p>${day.main.temp}°C</p>
      `;
      forecastDiv.appendChild(div);
    });

  } catch (error) {
    console.error("Forecast error:", error);
  }
}

getWeather();
getForecast();



async function getWeather() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      return;
    }

    const data = await response.json();
    console.log("Weather Data:", data); // DEBUG

    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
    document.getElementById("condition").textContent = data.weather[0].description;

    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").src = icon;

  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
}




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