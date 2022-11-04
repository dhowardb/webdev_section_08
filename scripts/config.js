function openPlayerConfig(event) {
  //   const selectedPlayerId = event.target.dataset.playerid; //if data is playerid
  //   const clickedButtonTest = event.target.dataset.player['player-id'];  //if data is player-id //dash is not allowed with '.'

  editedPlayer = +event.target.dataset.playerid; // + to convert to number
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";

  formElement.playername.value = players[editedPlayer - 1].name; //test
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  clearPlayerConfigState();
  formElement.playername.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  //   console.log(event.target.playername.value);
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // '  Max => Max // '    '=> '' // '   Max sss ' => 'Maxsss'

  if (!enteredPlayername) {
    // enteredPlayername === ' '
    // event.target.firstElementChild.classList.add("error");

    playerNameErrorWarningElement.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";

    return; //return as exit function // next lines within the function will not be executed
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  //   console.log(enteredPlayername);

  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlayername;
  //   } else {
  //     players[1].name = enteredPlayername;
  //   }
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}

function clearPlayerConfigState() {
  errorsOutputElement.textContent = "";
  playerNameErrorWarningElement.classList.remove("error");
}
