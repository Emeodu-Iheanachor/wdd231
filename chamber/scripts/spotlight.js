// ===============================
// MEMBER SPOTLIGHTS (3 MEMBERS)
// ===============================
async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch members");

    const members = await response.json();

    // ✅ Filter only Gold (3) and Silver (2)
    const qualified = members.filter(member =>
      member.membership === 2 || member.membership === 3
    );

    // ✅ Shuffle randomly
    const shuffled = qualified.sort(() => Math.random() - 0.5);

    // ✅ Select EXACTLY 3 members
    const selected = shuffled.slice(0, 3);

    // ✅ Target DOM container
    const container = document.getElementById("spotlights");
    container.innerHTML = "";

    // ✅ Create and display cards
    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership ${member.membership === 3 ? "gold" : "silver"}">
          ${member.membership === 3 ? "Gold Member" : "Silver Member"}
        </p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
    document.getElementById("spotlights").textContent =
      "Unable to load member spotlights.";
  }
}