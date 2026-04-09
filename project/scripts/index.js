// ===============================
// SELECT ELEMENTS
// ===============================
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const darkToggle = document.getElementById("dark-toggle");
const cardsContainer = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const weatherOutput = document.getElementById("weather-output");

// ===============================
// MENU TOGGLE
// ===============================
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// ===============================
// DARK MODE (WITH STORAGE)
// ===============================
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// ===============================
// DYNAMIC CARDS (SIMULATED DATA)
// ===============================
const opportunities = [
  {
    title: "Frontend Internship",
    company: "TechCorp",
    location: "Remote",
    description: "Work with HTML, CSS, and JavaScript on real projects."
  },
  {
    title: "Backend Developer",
    company: "NaijaSoft",
    location: "Lagos",
    description: "Node.js and database experience required."
  },
  {
    title: "UI/UX Designer",
    company: "DesignPro",
    location: "Abuja",
    description: "Create user-friendly digital experiences."
  },
  {
    title: "Data Analyst",
    company: "Insight Ltd",
    location: "Remote",
    description: "Analyze datasets and generate insights."
  },
  {
    title: "Cybersecurity Trainee",
    company: "SecureIT",
    location: "Lagos",
    description: "Learn ethical hacking and system protection."
  },
  {
    title: "Mobile App Developer",
    company: "AppWorld",
    location: "Remote",
    description: "Build Android and iOS apps."
  },
  {
    title: "Cloud Engineer",
    company: "CloudNet",
    location: "Remote",
    description: "Work with AWS and cloud infrastructure."
  },
  {
    title: "AI Engineer",
    company: "SmartTech",
    location: "Lagos",
    description: "Build machine learning models."
  },
  {
    title: "DevOps Engineer",
    company: "DeployHub",
    location: "Remote",
    description: "Automate deployment pipelines."
  },
  {
    title: "Product Manager",
    company: "InnovateX",
    location: "Abuja",
    description: "Lead product development teams."
  },
  {
    title: "Full Stack Developer",
    company: "StackPro",
    location: "Remote",
    description: "Work on both frontend and backend."
  },
  {
    title: "Tech Support Specialist",
    company: "HelpDesk",
    location: "Lagos",
    description: "Assist users with technical issues."
  },
  {
    title: "Game Developer",
    company: "GameStudio",
    location: "Remote",
    description: "Design and build games."
  },
  {
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "Remote",
    description: "Develop decentralized apps."
  },
  {
    title: "IT Consultant",
    company: "AdvisoryPro",
    location: "Abuja",
    description: "Provide IT solutions for businesses."
  }
];

// ===============================
// DISPLAY CARDS
// ===============================
function displayCards(data) {
  cardsContainer.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>${item.company}</strong> - ${item.location}</p>
      <button class="details-btn">View Details</button>
    `;

    // MODAL EVENT
    card.querySelector(".details-btn").addEventListener("click", () => {
      modalContent.textContent = item.description;
      modal.showModal();
    });

    cardsContainer.appendChild(card);
  });
}

// LOAD CARDS
displayCards(opportunities);

// ===============================
// WEATHER API (OPENWEATHER)
// ===============================
const apiKey = "be283d5c82532b6b0bcbd61cbd977777"; // Replace with your key
const city = "Lagos";

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("Weather fetch failed");

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;

    weatherOutput.textContent = `${city}: ${temp}°C, ${description}`;
  } catch (error) {
    weatherOutput.textContent = "Unable to load weather data.";
    console.error(error);
  }
}

// LOAD WEATHER
getWeather();

// ===============================
// ACCESSIBILITY IMPROVEMENTS
// ===============================
// Close modal with ESC key fallback
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.open) {
    modal.close();
  }
});