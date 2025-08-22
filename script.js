// --- Year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Theme (light/dark) with localStorage ---
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");

// initialize from storage or prefers-color-scheme
(function initTheme() {
  const saved = localStorage.getItem("theme"); 
  if (saved) {
    root.classList.toggle("dark", saved === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  }
  swapIcons();
})();

btn.addEventListener("click", () => {
  const willBeDark = !root.classList.contains("dark");
  root.classList.toggle("dark", willBeDark);
  localStorage.setItem("theme", willBeDark ? "dark" : "light");
  swapIcons();
});

function swapIcons() {
  const dark = root.classList.contains("dark");
  iconSun.classList.toggle("hidden", !dark);
  iconMoon.classList.toggle("hidden", dark);
}

// --- Mobile menu toggle ---
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

