const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});


const container = document.getElementById("opportunities-container");

async function loadOpportunities() {
  try {// ===============================
// HAMBURGER MENU
// ===============================
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBtn.textContent = isOpen ? "✖" : "☰";
});

// ===============================
// OPPORTUNITIES DATA (Local)
// ===============================
const opportunities = [
  {
    title: "Frontend Internship",
    company: "TechNova Nigeria",
    location: "Lagos",
    description: "Work with a team building modern web apps.",
    link: "#"
  },
  {
    title: "Backend Developer Role",
    company: "NaijaSoft",
    location: "Remote",
    description: "Node.js & database experience required.",
    link: "#"
  },
  {
    title: "UI/UX Design Bootcamp",
    company: "DesignHub Africa",
    location: "Abuja",
    description: "Learn UI/UX design from experts.",
    link: "#"
  },
  {
    title: "Cybersecurity Training",
    company: "SecureTech NG",
    location: "Online",
    description: "Hands-on cybersecurity training program.",
    link: "#"
  },
  {
    title: "Data Analysis Internship",
    company: "DataWorks",
    location: "Port Harcourt",
    description: "Analyze real-world datasets and build dashboards.",
    link: "#"
  }
];

// ===============================
// DISPLAY OPPORTUNITIES
// ===============================
const container = document.getElementById("opportunities-container");

function displayOpportunities(data) {
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Company:</strong> ${item.company}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Apply</a>
    `;

    container.appendChild(card);
  });
}

// Load on page start
displayOpportunities(opportunities);
    const response = await fetch("data/opportunities.json");
    const data = await response.json();

    displayOpportunities(data);
  } catch (error) {
    container.innerHTML = "<p>Failed to load opportunities.</p>";
  }
}

function displayOpportunities(items) {
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Company:</strong> ${item.company}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Type:</strong> ${item.type}</p>
    `;

    container.appendChild(card);
  });
}

loadOpportunities();