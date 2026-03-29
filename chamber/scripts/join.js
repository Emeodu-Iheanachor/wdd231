// ===============================
// DOM READY (SAFE START)
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // TIMESTAMP (HIDDEN FIELD)
  // =========================
  const timestampField = document.querySelector("#timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // =========================
  // MENU TOGGLE (ACCESSIBLE)
  // =========================
  const menuBtn = document.getElementById("menu");
  const nav = document.querySelector("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      menuBtn.textContent = isOpen ? "✖" : "☰";
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  // =========================
  // FOOTER DATES
  // =========================
  const year = document.querySelector("#year");
  const lastModified = document.querySelector("#lastModified");

  if (year) year.textContent = new Date().getFullYear();
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }

  // =========================
  // MODALS (ACCESSIBLE)
  // =========================
  const modalButtons = document.querySelectorAll("[data-modal]");
  const dialogs = document.querySelectorAll("dialog");

  modalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modal);
      if (modal) {
        modal.showModal();
        modal.querySelector("button.close")?.focus();
      }
    });
  });

  dialogs.forEach(dialog => {
    const closeBtn = dialog.querySelector(".close");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }

    // Click outside closes modal
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        dialog.close();
      }
    });
  });

  // ESC closes modal
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dialogs.forEach(dialog => dialog.open && dialog.close());
    }
  });

  // =========================
  // FORM + ACCESSIBILITY
  // =========================
  const form = document.querySelector("#joinForm");
  const inputs = document.querySelectorAll("input, textarea, select");

  // SAFE BACKUP TITLES (HTML should already have them)
  inputs.forEach(input => {
    if (!input.hasAttribute("title")) {
      const label = document.querySelector(`label[for="${input.id}"]`);
      const labelText = label
        ? label.textContent.trim()
        : (input.name || "this field");

      input.setAttribute(
        "title",
        `Please enter ${labelText.toLowerCase()} correctly`
      );
    }
  });

  // REAL-TIME VALIDATION RESET
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
    });
  });

  // =========================
  // FORM SUBMIT VALIDATION
  // =========================
  if (form) {
    form.addEventListener("submit", (e) => {
      let isValid = true;

      inputs.forEach(input => {
        const value = input.value.trim();

        // REQUIRED
        if (input.required && value === "") {
          input.setCustomValidity("This field is required.");
          isValid = false;
          return;
        }

        // EMAIL
        if (input.type === "email") {
          const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
          if (!pattern.test(value)) {
            input.setCustomValidity("Enter a valid email address.");
            isValid = false;
            return;
          }
        }

        // NIGERIAN PHONE
        if (input.type === "tel") {
          const pattern = /^(\+234|0)[789][01]\d{8}$/;
          if (!pattern.test(value)) {
            input.setCustomValidity(
              "Enter valid Nigerian number (08012345678 or +2348012345678)"
            );
            isValid = false;
            return;
          }
        }

        // ORG TITLE
        if (input.id === "orgtitle" && value && value.length < 7) {
          input.setCustomValidity("Minimum 7 characters required.");
          isValid = false;
          return;
        }

        input.setCustomValidity("");
      });

      if (!isValid) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  }

  // =========================
  // CARD ANIMATION
  // =========================
  const cards = document.querySelectorAll(".animate");

  window.addEventListener("load", () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });
  });

});