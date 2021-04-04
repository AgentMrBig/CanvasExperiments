const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 150, 50);
});

ctx.fillStyle = "white";
ctx.fillRect(10, 10, 150, 50);
