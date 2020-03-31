import Paddle from "/src/paddle";
import InputHandler from "/src/input";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

let imgBall = document.getElementById("imgBall");

new InputHandler(paddle);

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);
  if (paddle.position.x > GAME_WIDTH) {
    paddle.position.x = -paddle.width;
  }
  paddle.draw(ctx);

  ctx.drawImage(imgBall, 10, 10);

  requestAnimationFrame(gameLoop);
}

gameLoop();
