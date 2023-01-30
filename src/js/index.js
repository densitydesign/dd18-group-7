// Import main.js
import "./main";

// Import fullpage.js
import fullpage from "fullpage.js";

// Import relativeFullscreenSizing
import "./relativeFullscreenSizing";

// Sections' animations
const fullscreenAnimationThumbnails = document.getElementById(
  "animation-thumbnails"
);
let fullscreenAnimationThumbnailsCounter = 0;
const fullscreenAnimationStrategies = document.getElementById(
  "animation-strategies"
);
let fullscreenAnimationStrategiesCounter = 0;
let enableScrollingAnimation = false;
// let enableScrollingNextSection = false; //futureproofing

// fullpage.js setup
let fullpageInstance = new fullpage("#fullpage", {
  // License and credits
  licenseKey: "gplv3-license",
  credits: {
    enabled: false,
    label: "Made with fullPage.js",
    position: "right",
  },

  // Scrolling
  css3: true,
  scrollingSpeed: 750,
  easingcss3: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  touchSensitivity: 15,

  // Design
  // todo or totry: paddingTop, paddingBottom

  // Loading
  lazyLoading: false,

  // Events
  beforeLeave: function (origin, destination, direction, trigger) {
    if (origin.index == 1 && direction == "down") {
      fullscreenAnimationThumbnailsCounter++;

      // Wait 250 ms before enabling scrolling to the animation
      setTimeout(() => {
        enableScrollingAnimation = true;
      }, 250);

      // If the scrolling isn't enabled, reset the counter for the animation and return false
      if (enableScrollingAnimation == false) {
        fullscreenAnimationThumbnailsCounter = 0;
        return false;
      } else if (fullscreenAnimationThumbnailsCounter < 2) {
        fullscreenAnimationThumbnails.classList.add("active");
        return false;
      }
    }
    if (origin.index == 2 && direction == "down") {
      fullscreenAnimationStrategiesCounter++;

      // Wait 250 ms before enabling scrolling to the animation
      setTimeout(() => {
        enableScrollingAnimation = true;
      }, 250);

      // If the scrolling isn't enabled, reset the counter for the animation and return false
      if (enableScrollingAnimation == false) {
        fullscreenAnimationStrategiesCounter = 0;
        return false;
      } else if (fullscreenAnimationStrategiesCounter < 2) {
        fullscreenAnimationStrategies.classList.add("active");
      }
      return false;
    }
  },
  onLeave: function (origin, destination, direction, trigger) {},
  afterLoad: function (origin, destination, direction, trigger) {
    if (destination.index == 0) {
      console.log(destination.index);
      fullscreenAnimationThumbnails.classList.remove("active");
      fullscreenAnimationThumbnailsCounter = 0;
      enableScrollingAnimation = false;
      // enableScrollingNextSection = false;
    }
    if (destination.index == 1) {
      console.log(destination.index);
      fullscreenAnimationStrategies.classList.remove("active");
      fullscreenAnimationStrategiesCounter = 0;
      enableScrollingAnimation = false;
      // enableScrollingNextSection = false;
    }
    if (destination.index == 2) {
      console.log(destination.index);
      fullscreenAnimationThumbnails.classList.remove("active");
      fullscreenAnimationThumbnailsCounter = 0;
      enableScrollingAnimation = false;
      // enableScrollingNextSection = false;
    }
  },
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (
    section,
    origin,
    destination,
    direction,
    trigger
  ) {},
  onSlideLeave: function (section, origin, destination, direction, trigger) {},
  onScrollOverflow: function (section, slide, position, direction) {},
});

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// Show navbar
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.remove("t-transparent");
  navbar.classList.remove("difference");
  navbar.classList.add("t-filled");
  navbar.classList.add("navbar-border");
});

// Hide navbar
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("t-filled");
  navbar.classList.remove("navbar-border");
  navbar.classList.add("t-transparent");
  navbar.classList.add("difference");
});
