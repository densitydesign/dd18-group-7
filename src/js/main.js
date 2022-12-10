// Import custom CSS
import "../scss/main.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const navbar = document.querySelector(".navbar");
const fullscreenFlexContainerContentAll = document.querySelectorAll(
  ".fullscreen-flex-container-content"
);

// Responsive content layout
fullscreenFlexContainerContentAll.forEach((fullscreenFlexContainerContent) => {
  fullscreenFlexContainerContent.style.height =
    window.innerHeight - navbar.offsetHeight + "px";
});
window.addEventListener("resize", (event) => {
  fullscreenFlexContainerContentAll.forEach(
    (fullscreenFlexContainerContent) => {
      fullscreenFlexContainerContent.style.height =
        window.innerHeight - navbar.offsetHeight + "px";
    }
  );
});
