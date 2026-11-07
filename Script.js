
/* =========================
   Mobile Navigation
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

/* =========================
   Sound Selection
========================= */

const soundCards = document.querySelectorAll(".sound-card");
const currentTrack = document.querySelector("#current-track");
const nowPlaying = document.querySelector(".now-playing");

soundCards.forEach((card) => {
  card.addEventListener("click", () => {
    soundCards.forEach((item) => {
      item.classList.remove("selected");
    });

    card.classList.add("selected");

    currentTrack.textContent = card.dataset.title;
    nowPlaying.classList.add("visible");
  });
});

/* =========================
   Preview Button
========================= */

const previewButton = document.querySelector(".preview-play");

let previewPlaying = false;

previewButton.addEventListener("click", () => {
  previewPlaying = !previewPlaying;

  previewButton.textContent = previewPlaying ? "Ⅱ" : "▶";

  previewButton.setAttribute(
    "aria-label",
    previewPlaying ? "Pause preview" : "Play preview"
  );

  nowPlaying.classList.add("visible");
});
