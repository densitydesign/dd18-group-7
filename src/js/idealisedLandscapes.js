import * as p5 from "p5";

//a P5 moire pattern.
let s = (sk) => {
  let privacyStatementP5;
  let privacyStatementJS;
  let privacyStatementBoundingClientRect;
  let privacyStatementBoundingClientRectBottom;
  let difference;
  let posY;

  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight).parent(
      "idealised-landscapes"
    );

    // styling
    sk.noFill();
    sk.rectMode(sk.CENTER);
    sk.strokeWeight(1);
    sk.stroke(255);

    sk.getDivAndCanvas();
  };

  sk.draw = () => {
    sk.clear();
    sk.line(0, 0, sk.width, sk.height);
    sk.line(sk.width, 0, 0, sk.height);

    privacyStatementP5 = sk.select(".privacyStatement");

    // div animation
    if (sk.width > sk.height) {
      // horizontal viewport
      posY = difference * Math.pow(sk.sin((sk.frameCount / sk.width) * 4), 2);
    } else {
      // vertical viewport
      posY = difference * Math.pow(sk.sin(sk.frameCount / sk.height / 2), 2);
    }
    privacyStatementP5.position(0, -posY);
  };

  sk.windowResized = () => {
    resizeCanvas(sk.windowWidth, sk.windowHeight);

    // reset the position of #privacyStatement
    privacyStatementP5.position(0, 0);

    sk.getDivAndCanvas();
  };

  sk.getDivAndCanvas = () => {
    privacyStatementJS = document.getElementById("privacyStatement");
    privacyStatementBoundingClientRect =
      privacyStatementJS.getBoundingClientRect();
    privacyStatementBoundingClientRectBottom =
      privacyStatementBoundingClientRect.bottom;
    difference = privacyStatementBoundingClientRectBottom - sk.height;
  };
};

const P5 = new p5(s);
