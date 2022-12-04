import * as p5 from "p5";

//a P5 moire pattern.
let s = (sk) => {
  let privacyStatementP5 = sk.select(".privacyStatement");
  let privacyStatementJS;
  let privacyStatementBoundingClientRect;
  let privacyStatementBoundingClientRectBottom;
  let difference;
  let posX;

  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight).parent(
      "idealised-landscapes"
    );
    privacyStatementP5.position(0, 0);
    sk.getDivAndCanvas();
  };

  sk.draw = () => {
    sk.clear();

    // div animation
    if (sk.width > sk.height) {
      // horizontal viewport
      posX = difference * Math.pow(sk.sin((sk.frameCount / sk.width) * 4), 2);
    } else {
      // vertical viewport
      posX = difference * Math.pow(sk.sin((sk.frameCount / sk.width) * 2), 2);
    }
    privacyStatementP5.position(-posX, 0);
    // privacyStatementP5.position(0, 0);
  };

  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight);

    // reset the position of #privacyStatement
    privacyStatementP5.position(0, 0);

    sk.getDivAndCanvas();
  };

  sk.getDivAndCanvas = () => {
    privacyStatementJS = document.getElementById("privacyStatement");
    privacyStatementBoundingClientRect =
      privacyStatementJS.getBoundingClientRect();
    privacyStatementBoundingClientRectBottom =
      privacyStatementBoundingClientRect.right;
    console.log(privacyStatementBoundingClientRect);
    difference = privacyStatementBoundingClientRectBottom - sk.width;
    console.log(difference);
  };
};

const P5 = new p5(s);
