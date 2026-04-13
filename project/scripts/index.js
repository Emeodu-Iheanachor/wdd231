const container = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");

// LOAD CARDS DATA
async function loadData() {
  try {
    const res = await fetch("data/opportunities.json");
    const data = await res.json();

    container.innerHTML = data.slice(0, 6).map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.company}</p>
        <button data-desc="${item.description}">Details</button>
      </div>
    `).join("");

    document.querySelectorAll("button[data-desc]").forEach(btn => {
      btn.onclick = () => {
        modalText.textContent = btn.dataset.desc;
        modal.showModal();
      };
    });

  } catch (error) {
    container.textContent = "Error loading data";
    console.error(error);
  }
}

// WEATHER API
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
    document.getElementById("weather-output").textContent = "Weather unavailable";
    console.error(error);
  }
}

// MODAL CLOSE
document.getElementById("close-modal").onclick = () => modal.close();

// RUN FUNCTIONS
loadData();
weather();

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock();



