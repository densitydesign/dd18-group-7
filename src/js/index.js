// Import main.js
import "./main";

// Import relativeFullscreenSizing
import "./relativeFullscreenSizing";

// Import do-slide's JS
import DoSlide from "do-slide";

// do-slide setup
const slide = new DoSlide(".ds-container", {
  duration: 500,
  listenUserSlide: false,
  timingFunction: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  minInterval: 1000,
  stopPropagation: true,
});

// Sections animations
const fullscreenAnimationThumbnails = document.getElementById(
  "fullscreen-animation-thumbnails"
);
let fullscreenAnimationThumbnailsCounter = 0;
const fullscreenAnimationStrategies = document.getElementById(
  "fullscreen-animation-strategies"
);

slide.onBeforeChange(function (curIndex, tarIndex, cur, tar) {
  if (curIndex == 1 && tarIndex == 2) {
    fullscreenAnimationThumbnailsCounter++;
    console.log(fullscreenAnimationThumbnailsCounter);
    if (fullscreenAnimationThumbnailsCounter < 2) {
      console.log("animation");
      console.log(fullscreenAnimationThumbnailsCounter);
      fullscreenAnimationThumbnails.classList.add("active");
      return false;
    }
  }
  if (curIndex == 2) {
    fullscreenAnimationStrategies.classList.add("active");
    if (tarIndex == 1) {
    }
    if (tarIndex == 3) {
      return false;
    }
  }
});

slide.onChanged(function (curIndex, lastIndex, cur, last) {
  if (curIndex == 0) {
    fullscreenAnimationThumbnails.classList.remove("active");
    fullscreenAnimationThumbnailsCounter = 0;
    console.log(fullscreenAnimationThumbnailsCounter);
  }
  if (curIndex == 1) {
    fullscreenAnimationStrategies.classList.remove("active");
  }
  if (curIndex == 2) {
    fullscreenAnimationThumbnails.classList.remove("active");
    fullscreenAnimationThumbnailsCounter = 0;
    console.log(fullscreenAnimationThumbnailsCounter);
  }
});

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// show
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.remove("t-transparent");
  navbar.classList.remove("difference");
  navbar.classList.add("t-filled");
  navbar.classList.add("navbar-border");
});

// hide
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("t-filled");
  navbar.classList.remove("navbar-border");
  navbar.classList.add("t-transparent");
  navbar.classList.add("difference");
});
