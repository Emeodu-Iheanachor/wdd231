// sections.mjs
export function setSectionSelection(sections) {
  const select = document.querySelector("#sectionNumber");
  select.innerHTML = "";
  sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.section;
    option.textContent = `Section ${section.section}`;
    select.appendChild(option);
  });
}