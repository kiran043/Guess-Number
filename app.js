// Game value
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign Min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play agin event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, "red");
  }
  // Check if won
  if (guess === winningNum) {
    // game over -won
    gameOver(true, `${winningNum} is Corret!,YOU WIN!!!!!`, "green");
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft == 0) {
      // game over-lost
      // Disable input
      // guessInput.disable=true;
      // // Change border color
      // guessInput.style.borderColor='red'
      // // set message
      // setMessage(`Game Over,The correct answer is ${winningNum}`, 'red');

      gameOver(false, `Game Over,The correct answer is ${winningNum}`);
    } else {
      // game continues- answer wrong
      // Change border color
      guessInput.style.borderColor = "red";
      // clear input
      guessInput.value = "";
      // Tell user its the wrong number
      setMessage(`${guess} is not correct,${guessesLeft} guesses Left`, "red");
    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disable = true;
  // Change border color
  guessInput.style.borderColor = color;
  // set message
  setMessage(msg);
  //  play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
