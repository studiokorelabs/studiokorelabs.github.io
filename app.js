const projects = [
  {
    name: "AURA",
    type: "Hospitality / Luxury",
    href: "projects/aura.html",
    image: "images/aura.png",
  },
  {
    name: "LOOMA",
    type: "Digital / Immersive",
    href: "projects/looma.html",
    image: "images/looma.png",
  },
  {
    name: "LUMINA",
    type: "Education / Culture",
    href: "projects/lumina.html",
    image: "images/lumina.png",
  },
  {
    name: "NOCTURNE",
    type: "Experimental Web",
    href: "projects/nocturne.html",
    image: "images/nocturne.png",
  },
  {
    name: "NOMA",
    type: "Hospitality / Coastal",
    href: "projects/noma.html",
    image: "images/noma.png",
  },
  {
    name: "SHELTER & FORM",
    type: "Architecture / Modular",
    href: "projects/shelter-form.html",
    image: "images/shelter&form.png",
  },
];

document.getElementById("projects").innerHTML = projects
  .map(
    (p) => `
      <a 
        class="project-card" 
        href="${p.href}" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${p.name} project"
      >
        <div class="project-image">
          <img 
            src="${p.image}" 
            alt="${p.name} project preview" 
            loading="lazy"
          >
          <div class="project-overlay"></div>
        </div>

        <div class="project-meta">
          <div>
            <h3>${p.name}</h3>
            <span>${p.type}</span>
          </div>
          <span class="project-arrow">↗</span>
        </div>
      </a>
    `,
  )
  .join("");

const glow = document.getElementById("cursorGlow");

window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const menuBtn = document.getElementById("menuBtn"),
  mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () =>
  mobileMenu.classList.toggle("open"),
);

mobileMenu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      mobileMenu.classList.remove("open"),
    ),
  );

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("formMessage").textContent =
    "Inquiry prepared. Connect this form to your email/CRM before launch.";
});