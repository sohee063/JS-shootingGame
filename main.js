// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceShipImage, bulletImage, enemyImage, gameOverImage;

// 우주선 좌표
let spaceshipX = canvas.width / 2 - 30;
let spaceshipY = canvas.height - 60;

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "image/background.jpeg";

  spaceShipImage = new Image();
  spaceShipImage.src = "image/spaceship.png";

  bulletImage = new Image();
  bulletImage.src = "image/bullet.png";

  enemyImage = new Image();
  enemyImage.src = "image/enemy.png";

  gameOverImage = new Image();
  gameOverImage.src = "image/gameover.jpeg";
}

let keysDown = {};

function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
  });
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
  });
}

function update() {
  if (39 in keysDown) {
    spaceshipX += 5;
    if (spaceshipX >= canvas.width - 60) {
      // 우주선이 캔버스 화면에서 벗어나지 않게 범위 지정
      spaceshipX = canvas.width - 60;
    }
  }
  if (37 in keysDown) {
    spaceshipX -= 5;
    if (spaceshipX <= 0) {
      // 우주선이 캔버스 화면에서 벗어나지 않게 범위 지정
      spaceshipX = 0;
    }
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceShipImage, spaceshipX, spaceshipY, 60, 60);
}

function main() {
  update();
  render();
  requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();
// 방향키를 누르면
// 우주선의 x,y좌표가 바뀜
// 다시 render
