function startNewGame() {
  //check if valid usernames or input names

  //   if (players[0].name === "" && players[1].name === "") {  // Lecture
  //     alert("Please set custom player names for both players!");
  //     return;
  //   }
  //   gameAreaElement.style.display = "block";
  if (!userValidations()) {
    alert("Please set custom player names for both players!");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";

  if (currentRound > 1) {
    resetGameStatus(); //reset if current round not equal to 1
  }
  // resetGameStatus();
}

function resetGameStatus() {
  editedPlayer = 0;
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  //if we used fields(li) instead of board(ol)
  // for (const gameFieldElement of gameFieldElements) {
  //   gameFieldElement.textContent = "";
  //   gameFieldElement.classList.remove("disabled");
  // }

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameBannerElement.style.display = "none";
  gameBannerH2Element.innerHTML =
    // '<h2>You won! <span id="winner-name">PLAYER NAME</span>!</h2>';
    // 'You won! <span id="winner-name">PLAYER NAME</span>!';
    "You won!";

  ////**********use this logic for span **************
  // ///use gameOverElement.firstElementChild.innerHTML =
  // 'You won, <span id="winner-name">PLAYER NAME</span>!';
  // gameOverElement.style.display = 'none';
}

function selectGameField(event) {
  //if ol is used, we need validation
  if (event.target.tagName !== "LI") {
    return;
  }

  if (gameIsOver) {
    return;
  }

  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn]) {
    alert("Select an empty field!");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol; //initially activePlayer = 0
  selectedField.classList.add("disabled");

  // gameData[selectedRow][selectedColumn] = players[activePlayer].symbol;
  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  console.log(gameData);
  const winnerId = checkForGameOver();
  console.log(winnerId);

  // if (!(winnerId > 0)) {
  //   //draw
  //   callDraw();
  // } else {
  //   //function to call winner
  //   callGameWinner(winnerId);
  // }

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function switchPlayer() {
  activePlayer = +!activePlayer;
  //   if (activePlayer === 0) {
  //     activePlayer = 1;
  //   } else {
  //     activePlayer = 0;
  //   }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function checkForGameOver() {
  //checking rows for equality
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking the columns for equality
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // 1st diagonal top left to btm right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] &&
    gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // 2nd diagonal btm left to top right
  if (
    // !gameData[2][0] &&
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] &&
    gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1; //draw
  }
  return 0;
  // for (const gameCheckWinner of gameData) {
  //   for (let i = 0; i < gameData.length; i++) {
  //     console.log(gameCheckWinner);
  //     console.log(i);
  //   }
  // }
}

// function userValidations() {
//   let isPlayerNameValid = false;
//   for (const player of players) {
//     if (player.name) {
//       isPlayerNameValid = true;
//     } else {
//       isPlayerNameValid = false;
//     }
//   }
//   return isPlayerNameValid;
// }

function endGame(winnerId) {
  if (winnerId > 0) {
    callGameWinner(winnerId);
    gameIsOver = true;
  } else if (winnerId === -1) {
    callDraw();
  }
}
function callGameWinner(winner) {
  console.log(players);
  console.log(players[winner - 1].name);
  gameBannerElement.style.display = "block";
  const winnerName = players[winner - 1].name;
  playerWinnerElement.textContent = winnerName;
}

function callDraw() {
  // console.log("Draw!");
  gameBannerH2Element.textContent = "Draw!";
  gameBannerElement.style.display = "block";
}

function userValidations() {
  for (const player of players) {
    if (!player.name) {
      return;
    }
  }
  return true;
}
