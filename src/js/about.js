// Import main.js
import "./main";

const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

// Responsive content layout
main.style.marginTop = navbar.offsetHeight + "px";
window.addEventListener("resize", (event) => {
  main.style.marginTop = navbar.offsetHeight + "px";
});
