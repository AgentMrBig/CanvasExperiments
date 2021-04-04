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
}

function gameLoop(timeStamp) {
  // Update game objects in the loop
  update();

  drawRect(10, 10, 200, 500);
  drawText();

  window.requestAnimationFrame(gameLoop);
}

initSetup();

function update() {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
}

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

function test() {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
}

const drawText = function () {
  // normal, italic, bold
  // px pt cm in rem em
  // any installed or imported font
  let fontFamily = "Allerta Stencil";
  ctx.font = `normal 40px xyz, ${fontFamily}, Helvetica, Arial, monospace`;
  ctx.fillStyle = "cornflowerblue";
  ctx.strokeStyle = "#bada55";
  //textAlign center, left, right, end, start
  ctx.textAlign = "start";
  //textBaseline top, hanging, middle, bottom,ideographic, alphabetic
  ctx.textBaseline = "alphabetic";
  //direction ltr, rtl, inherit
  ctx.direction = "ltr";

  let txt = document.getElementById("msg").value;
  let metrics = ctx.measureText(oldTxt);
  let w = metrics.width;
  ctx.clearRect(50, 110, w, -50);

  if (txt == "") {
    txt = "Please give me a message.";
  }
  ctx.strokeText(txt, 50, 100);
  oldTxt = txt;

  ctx.fillStyle = "#999";
  ctx.font = "italic 20px Arial";
  let m = `Message is ${w}px wide`;
  ctx.clearRect(50, 310, 500, -30);
  ctx.fillText(m, 50, 300);
};
