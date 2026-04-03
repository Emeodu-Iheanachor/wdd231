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


const spotlightContainer = document.querySelector(".spotlight-container");

// === DATA ===
const members = [
  {
    name: "TechNova Ltd",
    address: "12 Marina Road, Lagos",
    phone: "+2348001111111",
    website: "https://technova.com",
    image: "technova.webp",
    level: "Gold"
  },
  {
    name: "GreenFarm Nigeria",
    address: "45 Ikeja Avenue, Lagos",
    phone: "+2348002222222",
    website: "https://greenfarms.com",
    image: "greenfarm.webp",
    level: "Silver"
  },

  {
    "name": "Skyline Properties",
    "address": "8 Lekki Phase 1, Lagos",
    "phone": "+2348003333333",
    "website": "https://skyline.com",
    "image": "skyline.webp",
    "level": "Gold"
  },
  {
    "name": "Ocean Logistics",
    "address": "22 Apapa Port, Lagos",
    "phone": "+2348004444444",
    "website": "https://oceanlogistics.com",
    "image": "ocean.webp",
    "level": "Silver"
  },
  {
    "name": "Bright Education",
    "address": "10 Yaba Tech Road, Lagos",
    "phone": "+2348005555555",
    "website": "https://www.brighteducation.com.au/",
    "image": "education.webp",
    "level": "Bronze"
  },
  {
    "name": "HealthPlus Clinic",
    "address": "5 Surulere Street, Lagos",
    "phone": "+2348006666666",
    "website": "https://www.healthplusutah.com/",
    "image": "health.webp",
    "level": "Gold"
  },
  {
    "name": "Fashion Hub",
    "address": "3 Balogun Market, Lagos",
    "phone": "+2348007777777",
    "website": "https://fashionhubeg.com/collections",
    "image": "fashion.webp",
    "level": "Silver"
  }
]
;

// === FILTER GOLD & SILVER ===
const premiumMembers = members.filter(member =>
  member.level === "Gold" || member.level === "Silver"
);

// === RANDOM FUNCTION ===
function getRandomMembers(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// === SELECT 2–3 MEMBERS ===
const numberToShow = Math.min(
  premiumMembers.length,
  Math.floor(Math.random() * 2) + 2 // gives 2 or 3
);

const selectedMembers = getRandomMembers(premiumMembers, numberToShow);

// === DISPLAY ===
function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership ${member.level.toLowerCase()}">${member.level} Member</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

// === RUN ===
displaySpotlights(selectedMembers);




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