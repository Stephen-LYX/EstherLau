// nav: <a> tag clicked will remain ::active for users to know which page they are on

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g., "about.html"
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});