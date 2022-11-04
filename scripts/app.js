let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "", //player 1
    symbol: "X",
  },
  { name: "", symbol: "O" }, //player2
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const gameBannerElement = document.getElementById("game-over");
const gameBannerH2Element = document.querySelector("#game-over h2");

// //temporary holder of h2 elements
// let tmpBannerH2Element = "";
// if (!tmpBannerH2Element) {
//   tmpBannerH2Element = gameBannerH2Element;
// }

const playerWinnerElement = document.getElementById("winner-name");

const errorsOutputElement = document.getElementById("config-errors");
const playerNameErrorWarningElement =
  document.getElementById("player-name-config");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

//if using orderedlists *issue when gap is clicked, validation needed
const gameBoardElement = document.getElementById("game-board");
gameBoardElement.addEventListener("click", selectGameField);
