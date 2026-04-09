const container = document.getElementById("resources-container");

async function load() {
  try {
    const res = await fetch("data/resources.json");
    const data = await res.json();

    container.innerHTML = data.map(item => `
      <div class="card">
        <h3>${item.name}</h3>
        <p>${item.type}</p>
        <p>${item.level}</p>
        <a href="${item.link}" target="_blank">Visit</a>
      </div>
    `).join("");

  } catch {
    container.textContent = "Error loading";
  }
}

load();