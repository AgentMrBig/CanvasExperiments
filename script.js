/*=========== START SETUP CANVAS ===========*/
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: null,
  y: null,
};

function initSetup() {
  window.addEventListener("resize", function () {
    canvas.width = window.innerScrollWidth;
    canvas.height = window.innerSrollHeight;
  });

  ctx.font = "20px Arial";

  canvas.addEventListener("click", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle(25);
  });

  update();
}

initSetup();
/*=========== END SETUP CANVAS ===========*/

// function update() {
//   anim();
//   drawEverything();
// }

/*=========== START ANIMATE CODE ===========*/

function update() {
  drawUI();
  drawCircle();
  requestAnimationFrame(update);
}

// experiment with variable fps for different objects
// by instantiating a new FpsController(callback to move "object", desired fps)
function FpsController(cbf, fps) {
  this.cbf = cbf;
  this.fps = fps;
  this.then = Date.now();
  this.interval = 1000;

  this.animate = () => {
    this.now = Date.now();
    this.difference = this.now = this.then;
    if (this.difference > this.interval / this.fps) {
      this.cbf();
      this.then = this.now();
    }
    requestAnimationFrame(this.animate);
  };

  this.animate();
}

/*=========== END ANIMATE CODE ===========*/

function drawCircle(size) {
  ctx.fillStyle = "rgb(200,200,150)";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, size, 0, Math.PI * 2);
  ctx.fill();
  drawSquare(mouse.x + 10, mouse.y + 10, 5, 5);
}

function drawRect(xPos, yPos, xSize, ySize) {
  ctx.fillStyle = "red";
  ctx.strokeRect(xPos, yPos, xSize, ySize);
}

function drawSquare(xPos, yPos, xSize, ySize) {
  ctx.fillStyle = "rgb(175,50,175)";
  ctx.fillRect(xPos, yPos, xSize, ySize);
}

/*=========== START UI CODE ===========*/

function drawUI() {
  console.log("draw UI");
  drawText(mouse.x + " " + mouse.y);
}
function drawText(txtInput) {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText(txtInput, 90, 40);
}
/*=========== END UI CODE ===========*/

/*=========== START MOVEMENT CODE ===========*/
let x = 100;
let y = 100;
let width = 50;
let height = 50;
function moveRight() {
  x++;
  ctx.fillRect(x, y, width, height);
}

function moveLeft() {}

function moveUp() {}

function moveDown() {}
/*=========== END MOVEMENT CODE ===========*/

/*=========== START GAME TIMING CODE ===========*/

/*=========== END GAME TIMING CODE ===========*/
