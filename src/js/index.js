// Import main.js
import "./main";

// Import navbarBlackTransparent.js
import "./navbarBlackTransparent";

// Import do-slide's JS
import DoSlide from "do-slide";

// do-slide setup
const slide = new DoSlide(".ds-container", {
  duration: 500,
  timingFunction: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  minInterval: 50,
});
