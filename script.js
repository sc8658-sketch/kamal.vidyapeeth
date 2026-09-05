const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value.trim();
  const message = document.getElementById("message").value.trim();
  const text =
    `Hello Kamal Vidyapeeth,%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Class/Course: ${encodeURIComponent(course)}%0A` +
    `Message: ${encodeURIComponent(message || "I would like more information about classes.")}`;
  window.open(`https://wa.me/916395516630?text=${text}`, "_blank", "noopener");
});
