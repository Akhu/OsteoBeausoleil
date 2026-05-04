// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.remove("w-0", "h-0", "opacity-0", "hidden");
    navLinks.classList.add("w-screen", "h-screen", "opacity-100", "block");
  });
}

if (closeMenu && navLinks) {
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("w-screen", "h-screen", "opacity-100", "block");
    navLinks.classList.add("w-0", "h-0", "opacity-0", "hidden");
  });
}
