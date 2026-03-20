// output.mjs
export function setTitle(course) {
  document.querySelector("#courseTitle").textContent = course.title;
}

export function renderSections(sections) {
  const container = document.querySelector("#sections");
  container.innerHTML = "";
  sections.forEach(section => {
    const tr = document.createElement("tr");

    const tdSection = document.createElement("td");
    tdSection.textContent = section.section;
    tdSection.setAttribute("data-label", "Section");

    const tdEnrolled = document.createElement("td");
    tdEnrolled.textContent = section.enrolled;
    tdEnrolled.setAttribute("data-label", "Enrolled");

    const tdInstructor = document.createElement("td");
    tdInstructor.textContent = section.instructor;
    tdInstructor.setAttribute("data-label", "Instructor");

    tr.appendChild(tdSection);
    tr.appendChild(tdEnrolled);
    tr.appendChild(tdInstructor);
    container.appendChild(tr);
  });
}