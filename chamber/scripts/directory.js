const container = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const filter = document.querySelector("#filter");

const url = "data/members.json";

let allMembers = []; // store fetched data

// Fetch Data Once
async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    allMembers = data;
    displayMembers(allMembers);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

// Membership Level
function getLevel(level) {
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

// Display Members (ONLY ONE VERSION)
function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");

    card.innerHTML = `
      <img src="images/${member.image}" 
           alt="${member.name} logo" 
           loading="lazy" width="150" height="150">

      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p><strong>${getLevel(member.level)}</strong></p>
    `;

    container.appendChild(card);
  });
}

// Filter (NO re-fetch)
filter.addEventListener("change", () => {
  let filtered = allMembers;

  if (filter.value !== "all") {
    filtered = allMembers.filter(m => m.level == filter.value);
  }

  displayMembers(filtered);
});

// Grid View
gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");

  document.querySelectorAll("#members img").forEach(img => {
    img.style.display = "block";
  });
});

// List View
listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");

  document.querySelectorAll("#members img").forEach(img => {
    img.style.display = "none";
  });
});

// Footer Info
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// Run
getMembers();




function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");

    card.innerHTML = `
      <img src="images/${member.image}" 
           alt="${member.name} logo" 
           loading="lazy" width="150" height="150">

      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p><strong>${member.level}</strong></p>
    `;

    container.appendChild(card);
  });




filter.addEventListener("change", () => {
  let filtered = allMembers;

  if (filter.value !== "all") {
    filtered = allMembers.filter(member => 
      member.level === filter.value
    );
  }

  displayMembers(filtered);
});








}