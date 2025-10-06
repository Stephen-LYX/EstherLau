// nav: <a> tag clicked will remain ::active for users to know which page they are on

console.log("This is working");
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if(link.getAttribute("href") == currentPage) {
        link.classList.add("active");
    }
});


