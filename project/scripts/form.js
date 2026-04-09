const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");

document.getElementById("output").textContent =
  `Thank you ${name}! We will contact you at ${email}.`;