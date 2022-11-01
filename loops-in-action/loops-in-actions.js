//Calculator


// const userInput = document.getElementById('user-number');
const calculateButtonElement = document.querySelector('#calculator button');

calculateButtonElement.addEventListener('click', calculateSum)

function calculateSum() {

    const userNumberInput = document.getElementById('user-number');
    // console.log(event);
    // console.log(userNumberInput.value);
    
    const enteredNumber = userNumberInput.value;
    let calculatedSum = 0;

    for( let i = 0; i <= enteredNumber; i++) {
        calculatedSum = calculatedSum + i; 
    }
    // const outputResultElement = document.getElementById('calculated-sum');
    
    // outputResultElement.textContent = calculatedSum;
    // outputResultElement.style.display = 'block';
    outputCalculatedSum(calculatedSum);                                                 
}

function outputCalculatedSum(outputSum) {
    const outputResultElement = document.getElementById('calculated-sum');
    
    outputResultElement.textContent = outputSum;
    outputResultElement.style.display = 'block';
}


//Highlight Links

const highlightButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const listAnchorElements of anchorElements) {
        listAnchorElements.classList.add('highlight');
    }
}

highlightButtonElement.addEventListener('click', highlightLinks);

//Display User Data

const dummyUserData = { firstName : 'Howard', lastName: 'King', age:26};
const userDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = ''; //clear list items

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;

        outputDataElement.append(newUserDataListItemElement);
    }
}

userDataButtonElement.addEventListener('click', displayUserData);

//Statistics / Roll the dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function deriveNumberOfDiceRolls() {
    const userTargetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = userTargetNumberInputElement.value;

    diceRollsListElement.innerHTML = ''; //clear
    
    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();

        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;

        // const newRollListItemElement = document.createElement('li');
        // const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
        // newRollListItemElement.textContent = outputText;

        // diceRollsListElement.append(newRollListItemElement);
        appendCreatedListItems(numberOfRolls, rolledNumber);

        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1); //Math floor(): 5.64 =>5
}

function appendCreatedListItems(rolls, rolled) {
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll' + rolls + ': ' + rolled;
    newRollListItemElement.textContent = outputText;

    const diceRollsListElement = document.getElementById('dice-rolls');
    diceRollsListElement.append(newRollListItemElement);
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
