const navbar = document.querySelector(".navbar");
const fullscreenFlexContainerAll = document.querySelectorAll(
  ".fullscreen-flex-container"
);

// Responsive content layout
fullscreenFlexContainerAll.forEach((fullscreenFlexContainer) => {
  fullscreenFlexContainer.style.height =
    window.innerHeight - navbar.offsetHeight + "px";
});
window.addEventListener("resize", (event) => {
  fullscreenFlexContainerAll.forEach((fullscreenFlexContainer) => {
    fullscreenFlexContainer.style.height =
      window.innerHeight - navbar.offsetHeight + "px";
  });
});
