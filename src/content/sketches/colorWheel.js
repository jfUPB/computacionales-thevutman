export default `
  let hueSlider, satSlider, brightSlider;
  let hsbColor, rgbColor;
  let colorWheelGraphic;
  let wheelRadius = 150;
  let wheelX = 230, wheelY = 390;

  p.setup = function () {
    let canvas = p.createCanvas(480, 550);
    canvas.parent("p5-container");
    p.colorMode(p.HSB, 255);
    hueSlider = p.createSlider(0, 255, 0);
    hueSlider.position(20, 50);
    satSlider = p.createSlider(0, 255, 255);
    satSlider.position(20, 110);
    brightSlider = p.createSlider(0, 255, 255);
    brightSlider.position(20, 170);
    colorWheelGraphic = createColorWheelGraphic(wheelRadius);
  };

  p.draw = function () {
    p.background(30);
    let h = hueSlider.value();
    let s = satSlider.value();
    let b = brightSlider.value();
    hsbColor = p.color(h, s, b);
    rgbColor = p.color(hsbColor);
    p.fill(hsbColor);
    p.rect(20, 80, 150, 100);
    p.fill(rgbColor);
    p.rect(300, 80, 150, 100);
    drawColorWheelAt(wheelX, wheelY);
  };

  function createColorWheelGraphic(r) {
    let graphic = p.createGraphics(r * 2, r * 2);
    graphic.colorMode(p.HSB, 255);
    graphic.noStroke();
    for (let angle = 0; angle < 360; angle++) {
      for (let radius = 0; radius < r; radius++) {
        let h = (angle / 360) * 255;
        let s = p.map(radius, 0, r, 0, 255);
        let b = 255;
        let c = p.color(h, s, b);
        let angleAdjusted = angle - 90;
        let px = r + p.cos(p.radians(angleAdjusted)) * radius;
        let py = r + p.sin(p.radians(angleAdjusted)) * radius;
        graphic.stroke(c);
        graphic.point(px, py);
      }
    }
    return graphic;
  }

  function drawColorWheelAt(x, y) {
    p.image(colorWheelGraphic, x - wheelRadius, y - wheelRadius);
    let h = hueSlider.value();
    let s = satSlider.value();
    let markerAngle = p.map(h, 0, 255, 0, 360) - 90;
    let markerRadius = p.map(s, 0, 255, 0, wheelRadius);
    let markerX = x + p.cos(p.radians(markerAngle)) * markerRadius;
    let markerY = y + p.sin(p.radians(markerAngle)) * markerRadius;
    p.fill(0);
    p.ellipse(markerX, markerY, 15, 15);
  }
`;
