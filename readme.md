# Snake and Ladder Game

## Overview

This is a **Snake and Ladder** game developed using **HTML**, **CSS**, and **JavaScript**. The game consists of two main pages:

- **Home Page** (`index.html`): Where players can enter their names and start the game.
- **Game Page** (`game.html`): Where the actual game is played, featuring a dynamic board with snakes, ladders, dice, and player tokens.

The game follows the classic **Snake and Ladder** board game, where players roll a dice to move their tokens up and down ladders or snakes, respectively, until one player reaches the last square on the board.

---

## Files

- `index.html`: The homepage where players enter their names to start the game.
- `game.html`: The game page containing the game logic, board, and player actions.
- `style.css`: Contains the styles for the home page and game page to make the game visually appealing.
- `script.js`: The JavaScript file responsible for game logic, dice rolling, player movement, and interaction.

---

## Game Functionality

### Home Screen (`index.html`)

The **Home Screen** serves as an entry point for the game. Here, players can enter their names and start the game. This page includes the following features:

1. **Welcome Message**: A welcoming header with the title of the game.
2. **Tagline**: A short and catchy description of the game.
3. **Player Input Form**: 
   - Players can enter their names in the input fields.
   - There are two text fields: one for **Player 1 Name** and one for **Player 2 Name**.
4. **Start Button**: 
   - After entering their names, players can click the "Start Game" button.
   - Upon clicking, players are redirected to the game page (`game.html`).
   - <img width="902" alt="Screenshot 2025-01-18 at 01 29 04" src="https://github.com/user-attachments/assets/8a3d7c76-b3b1-4f5c-9d4e-31ebd1704e9b" />


---

### Game Page (`game.html`)

The **Game Page** is where the actual gameplay takes place. It includes a variety of interactive features for the players:

1. **Game Board**:
   - The game board is a **10x10 grid** where the players move based on dice rolls.
   - Each square on the board may contain:
     - **Snakes**: When a player lands on a snake, they are moved back.
     - **Ladders**: When a player lands on a ladder, they are moved forward.
   - **Snakes** are represented by a **red background** and the snake emoji 🐍.
   - **Ladders** are represented by a **green background** and the ladder emoji 🪜.
   
2. **Player Tokens**:
   - Each player is represented by a **colored token** that moves across the board according to dice rolls.
   - **Player 1** has a **red token** and **Player 2** has a **blue token**.

3. **Dice Roll**:
   - Players can click the **"Roll Dice"** button to roll a dice.
   - A **random number between 1 and 6** is generated and displayed.
   - The player’s token moves forward based on the dice roll.
   - The dice roll is displayed on the screen as a number (1–6).

4. **Reset Game**:
   - The **"Reset Game"** button allows players to reset the game and start fresh.
   - It clears the board and resets all player positions.

5. **Winning the Game**:
   - The game ends when one player reaches the final square on the board (square 100).
   - A popup appears announcing the winner of the game.
   - The player can then choose to reset the game by clicking the **"Start Again"** button.

<img width="654" alt="Screenshot 2025-01-18 at 01 28 30" src="https://github.com/user-attachments/assets/c152a2d5-73e8-4b59-ae69-88ea3ec64aef" />

----

## Detailed Code Explanation

### 1. **`index.html` (Home Page)**

The homepage provides a clean, user-friendly interface for entering player names and starting the game. Key elements include:

- **Text Inputs**: 
   - The `<input>` elements for entering **Player 1** and **Player 2** names.
- **Start Button**: 
   - A button that, when clicked, redirects the user to the `game.html` page where the actual game is played.

### 2. **`game.html` (Game Page)**

The game page contains the game board, dice roll button, player tokens, and reset functionality.

- **Game Board**:
   - The board is represented as a 10x10 grid using **CSS Grid**.
   - Each square may contain a **snake** or a **ladder**, represented with different background colors and emojis.
- **Dice Roll Button**:
   - When clicked, the dice rolls a random number between 1 and 6 using JavaScript and updates the player's token position on the grid.
- **Reset Game**:
   - The "Reset Game" button clears the board and resets player positions to the starting point.

### 3. **`style.css`**

This file contains the styling for both the home page and the game page.

- **Home Page Styling**: 
   - Background gradient, header, and form styles for a clean, welcoming look.
- **Game Page Styling**: 
   - Board layout, player tokens, snake/ladder styling, and button styles.
   - Interactive elements are styled for better visibility and user experience.

### 4. **`script.js`**

This file manages the game logic, including dice rolls, token movement, and detecting when a player lands on a snake or ladder.

- **Dice Roll**: Generates a random number between 1 and 6.
- **Player Movement**: Moves the player token based on the dice result.
- **Snakes and Ladders Logic**: Checks if a player landed on a snake or ladder and moves their token accordingly.
- **Winning Condition**: Ends the game when a player reaches the last square and displays a popup.

---

## How to Play

1. **Start the Game**: Go to the **Home Page** (`index.html`), enter player names, and click the **Start Game** button.
2. **Roll the Dice**: On the **Game Page** (`game.html`), click the **Roll Dice** button to move your token forward.
3. **Ladders and Snakes**: If your token lands on a ladder, you move forward. If it lands on a snake, you move backward.
4. **Winning the Game**: The first player to reach the 100th square wins the game. A popup will appear to announce the winner.
5. **Reset the Game**: Click the **Reset Game** button to start a new round.

---

