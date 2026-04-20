const container = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close-modal");

// ==========================
// LOAD OPPORTUNITIES DATA
// ==========================
async function loadData() {
  try {
    const res = await fetch("data/opportunities.json");

    if (!res.ok) throw new Error("Failed to load opportunities data");

    const data = await res.json();

    container.innerHTML = data.slice(0, 6).map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.company}</p>
        <button data-desc="${item.description}">Details</button>
      </div>
    `).join("");

  } catch (error) {
    console.error(error);
    container.textContent = "Error loading opportunities.";
  }
}

// ==========================
// MODAL (EVENT DELEGATION)
// ==========================
container.addEventListener("click", (e) => {
  if (e.target.dataset.desc) {
    modalText.textContent = e.target.dataset.desc;
    modal.showModal();
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.close();
});

// ==========================
// WEATHER API FUNCTION
// ==========================
async function weather() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=be283d5c82532b6b0bcbd61cbd977777&units=metric"
    );

    if (!res.ok) throw new Error("Weather fetch failed");

    const data = await res.json();

    document.getElementById("weather-output").textContent =
      `${data.main.temp}°C - ${data.weather[0].description}`;

  } catch (error) {
    console.error(error);
    document.getElementById("weather-output").textContent =
      "Weather unavailable";
  }
}

// ==========================
// LIVE CLOCK
// ==========================
function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById("clock").textContent = time;
}

// ==========================
// INIT FUNCTIONS
// ==========================
loadData();
weather();
updateClock();
setInterval(updateClock, 1000);