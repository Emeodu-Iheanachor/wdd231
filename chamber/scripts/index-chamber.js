// ===============================
// HAMBURGER MENU (CLEAN VERSION)
// ===============================
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

// ===============================
// FOOTER DATES
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// ===============================
// WEATHER API
// ===============================
const apiKey = "be283d5c82532b6b0bcbd61cbd977777"; // ← PUT YOUR REAL KEY HERE
const lat = "6.5244";
const lon = "3.3792";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// ===== CURRENT WEATHER =====
async function getWeather() {
  try {
    const response = await fetch(weatherURL);

    if (!response.ok) throw new Error("Weather fetch failed");

    const data = await response.json();

    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
    document.getElementById("condition").textContent =
      data.weather[0].description;

    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").src = icon;

  } catch (error) {
    console.error(error);
  }
}

// ===== 3-DAY FORECAST =====
async function getForecast() {
  try {
    const response = await fetch(forecastURL);

    if (!response.ok) throw new Error("Forecast fetch failed");

    const data = await response.json();

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    // Get only 12:00 PM forecasts (one per day)
    const filtered = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    );

    // Take only 3 days
    filtered.slice(0, 3).forEach(day => {
      const div = document.createElement("div");

      div.innerHTML = `
        <p><strong>${new Date(day.dt_txt).toLocaleDateString()}</strong></p>
        <p>${day.main.temp.toFixed(1)}°C</p>
      `;

      forecastDiv.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading forecast:", error);
    document.getElementById("forecast").innerHTML = 
      "<p>Unable to load forecast.</p>";
  }
}


const url = "data/members.json";
const container = document.querySelector(".spotlight-container");

async function getSpotlights() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();

    displaySpotlights(data.members);

  } catch (error) {
    container.innerHTML = "<p>Unable to load member spotlights.</p>";
    console.error(error);
  }
}

function displaySpotlights(members) {

  // ✅ Filter Gold & Silver only
  const filtered = members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  // ✅ Shuffle randomly
  const shuffled = filtered.sort(() => 0.5 - Math.random());

  // ✅ Select 2–3 members
  const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">${member.membership} Member</p>
    `;

    container.appendChild(card);
  });
}

getSpotlights();

// Example functions for weather & forecast (already exist)
getWeather();
getForecast();
getSpotlights();


// ===============================
// COURSES
// ===============================
const courses = [
  { name: "Intro to CSE", credits: 3, type: "cse" },
  { name: "Advanced CSE", credits: 4, type: "cse" },
  { name: "Web Design Basics", credits: 2, type: "wdd" },
  { name: "Full Stack WDD", credits: 4, type: "wdd" },
  { name: "Data Structures", credits: 3, type: "cse" },
  { name: "UX/UI Design", credits: 2, type: "wdd" }
];

function displayCourses(list) {
  const container = document.getElementById('courses');
  container.innerHTML = '';
  let total = 0;

  list.forEach(course => {
    total += course.credits;

    const div = document.createElement('div');
    div.classList.add('course-card');
    div.innerHTML = `<strong>${course.name}</strong> - ${course.credits} credits`;

    container.appendChild(div);
  });

  document.getElementById('totalCredits').textContent = total;
}

function filterCourses(type) {
  if (type === "all") displayCourses(courses);
  else displayCourses(courses.filter(c => c.type === type));
}

displayCourses(courses);

document.getElementById("allBtn").onclick = () => filterCourses("all");
document.getElementById("cseBtn").onclick = () => filterCourses("cse");
document.getElementById("wddBtn").onclick = () => filterCourses("wdd");

// ===============================
// INIT
// ===============================
getWeather();
getForecast();
getSpotlights();