// Import main.js
import "./main";

const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const headingAll = document.querySelectorAll(".t-sticky-1");
const indexLine = document.getElementById("index-line");
const indexAligner = document.getElementById("index-aligner");

// Responsive content layout
main.style.marginTop = navbar.offsetHeight + "px";
headingAll.forEach((heading) => {
  heading.style.top = navbar.offsetHeight + "px";
});
indexLine.style.height = indexAligner.offsetHeight + "px";

window.addEventListener("resize", (event) => {
  main.style.marginTop = navbar.offsetHeight + "px";
  headingAll.forEach((heading) => {
    heading.style.top = navbar.offsetHeight + "px";
  });
  indexLine.style.height = indexAligner.offsetHeight + "px";
});
