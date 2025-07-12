const circle = document.getElementById("circle");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("start");

let score = 0;
let playing = false;
let gameInterval;

function randomPosition() {
  const gameRect = game.getBoundingClientRect();
  const maxX = game.clientWidth - circle.clientWidth;
  const maxY = game.clientHeight - circle.clientHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  circle.style.left = x + "px";
  circle.style.top = y + "px";
}

function showCircle() {
  if (!playing) return;
  randomPosition();
  circle.style.display = "block";
  setTimeout(() => {
    circle.style.display = "none";
  }, 800);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  playing = true;
  startBtn.disabled = true;

  showCircle();
  gameInterval = setInterval(showCircle, 1000);

  setTimeout(() => {
    playing = false;
    clearInterval(gameInterval);
    circle.style.display = "none";
    startBtn.disabled = false;
    alert("Game Over! Your score: " + score);
  }, 30000); // 30 seconds
}

circle.addEventListener("click", () => {
  if (playing) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    circle.style.display = "none";
  }
});

startBtn.addEventListener("click", startGame);
