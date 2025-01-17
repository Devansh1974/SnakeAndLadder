// Fetch player names from localStorage
const player1Name = localStorage.getItem("player1") || "Player 1";
const player2Name = localStorage.getItem("player2") || "Player 2";

// Display player names on the game page
document.getElementById("player1-name").textContent = player1Name;
document.getElementById("player2-name").textContent = player2Name;

// Initialize the board
const board = document.getElementById("game-board");
const diceResult = document.getElementById("dice-result");
const rollDiceButton = document.getElementById("roll-dice");
const winnerPopup = document.getElementById("winner-popup");
const winnerMessage = document.getElementById("winner-message");
const playAgainButton = document.getElementById("play-again");

// Create snakes and ladders mapping
const snakesAndLadders = {
  16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 87: 24, 93: 73, // Snakes
  3: 22, 5: 8, 15: 25, 18: 45, 25: 46, 36: 44, 48: 66, 60: 82, 69: 90 // Ladders
};

// Game state
let playerPositions = { player1: 1, player2: 1 };
let currentPlayer = "player1";

// Create the board grid
const cells = [];
for (let i = 100; i >= 1; i--) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.position = i;
  cell.textContent = i;

  // Add ladder or snake indicators
  if (snakesAndLadders[i] && snakesAndLadders[i] > i) {
    cell.classList.add("ladder");
  } else if (snakesAndLadders[i] && snakesAndLadders[i] < i) {
    cell.classList.add("snake");
  }

  board.appendChild(cell);
  cells.push(cell);
}

// Add player tokens
const player1 = document.createElement("div");
player1.id = "player1";
player1.classList.add("player1");
player1.style.backgroundColor = "red";
player1.style.border = "3px solid darkred";
player1.style.width = "20px";
player1.style.height = "20px";
player1.style.borderRadius = "50%";

const player2 = document.createElement("div");
player2.id = "player2";
player2.classList.add("player2");
player2.style.backgroundColor = "blue";
player2.style.border = "3px solid navy";
player2.style.width = "20px";
player2.style.height = "20px";
player2.style.borderRadius = "50%";

// Place players at the start
cells[99].appendChild(player1);
cells[99].appendChild(player2);

// Show winner popup
function showWinnerPopup(winner) {
  winnerMessage.textContent = `${winner} wins the game!`;
  winnerPopup.classList.remove("hidden");
}

// Move a player
function movePlayer(player, steps) {
  const currentPosition = playerPositions[player];
  let newPosition = currentPosition + steps;

  // Ensure new position doesn't exceed 100
  if (newPosition > 100) {
    newPosition = currentPosition;
  }

  // Check for snakes or ladders
  if (snakesAndLadders[newPosition]) {
    const oldPosition = newPosition;
    newPosition = snakesAndLadders[newPosition];

    // Display snake or ladder message
    if (oldPosition > newPosition) {
      diceResult.textContent = `${player} hit a snake! Sliding down to ${newPosition}`;
    } else {
      diceResult.textContent = `${player} climbed a ladder! Moving up to ${newPosition}`;
    }
  }

  // Update player position
  playerPositions[player] = newPosition;

  // Update token position on the board
  const token = player === "player1" ? player1 : player2;
  cells.forEach(cell => {
    if (cell.contains(token)) cell.removeChild(token);
  });
  cells[100 - newPosition].appendChild(token);

  // Check for win condition
  if (newPosition === 100) {
    diceResult.textContent = `${player} wins the game!`;
    rollDiceButton.disabled = true; // Disable rolling after win
    showWinnerPopup(player === "player1" ? player1Name : player2Name);
  }
}

// Roll Dice
rollDiceButton.addEventListener("click", () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1; // Roll between 1 and 6
  diceResult.textContent = `${currentPlayer} rolled a ${diceRoll}`;

  // Move current player
  movePlayer(currentPlayer, diceRoll);

  // Switch turn
  currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
});

// Reset button
document.getElementById("reset-game").addEventListener("click", () => {
  playerPositions = { player1: 1, player2: 1 };
  currentPlayer = "player1";
  diceResult.textContent = "Game Reset. Roll the dice to start!";
  rollDiceButton.disabled = false;

  // Reset player tokens
  cells.forEach(cell => {
    if (cell.contains(player1)) cell.removeChild(player1);
    if (cell.contains(player2)) cell.removeChild(player2);
  });
  cells[99].appendChild(player1);
  cells[99].appendChild(player2);

  // Hide winner popup
  winnerPopup.classList.add("hidden");
});

// Play Again button
playAgainButton.addEventListener("click", () => {
  winnerPopup.classList.add("hidden");
  document.getElementById("reset-game").click();
});
