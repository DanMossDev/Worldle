import { COUNTRIES } from "./countries.js";

const keyboardArray = document.getElementsByClassName("keyboard-button");
const keyboard = document.getElementById("keyboard");
const guessString = document.getElementById("guess-string");
const playAgain = document.getElementById("playagain");
var userInput = document.getElementById("user-input");
var guess = document.getElementById("guess");
var hint = document.getElementById("hint");
var feedback = document.getElementById("feedback");

let country;
let hintIndex = 0;

userInput.addEventListener("keydown", function(e) {if (e.code === "Enter") {makeGuess()}});
playAgain.addEventListener("click", function() {location.reload()});

function randomCountry() { //Randomly selects a country - once on page launch
    let i = Math.floor(Math.random() * COUNTRIES.length);
    country = COUNTRIES[i];
    console.log(country.name);
}

function eventListener() { //adds event listeners to each button in the keyboardArray array - once on page launch
    for (let i = 0; i < keyboardArray.length; i++) {
        keyboardArray[i].addEventListener("click", function(){buttonPress(keyboardArray[i].textContent)})
    }
}

function updateHint() { //adds the next hint to the screen while keeping the previous hint
    hint.innerHTML +=  `${country.hint[hintIndex]}<br><br>`;
}

function buttonPress(key) {
    if (key === 'Enter') {
        makeGuess();
    }
    else if (key === 'Space') {
        updateInput(' ');
    }
    else {
        updateInput(key);
    }
}

function updateInput(key) {
    if (key === 'Del') {userInput.value = userInput.value.slice( 0, userInput.value.length -1 )}
    else {
     userInput.value += key;
    }
}

function makeGuess() { //compare current input to the randomly selected country
    if (userInput.value.toLowerCase() === country.name.toLowerCase()) {
        victorySequence();
    }
    else {
        hintIndex++;
        updateGuess();
    }
}

function updateGuess() {
    if (eval(guess.textContent) >= 4) { //if out of guesses, display a loss screen and remove the rest of the elements
        guess.textContent = 'YOU LOSE - The correct answer was: ' + country.name;
        playAgain.style.visibility = 'visible';
        feedback.textContent = '';
        guessString.textContent = '';
        userInput.value = '';
        hint.innerHTML = '';
        keyboard.style.display = 'none';
        userInput.style.display = 'none';
    }
    else { //if not, update the guess total, feedback to the player, and show new hint
        guess.textContent = eval(guess.textContent) + 1;
        feedback.innerHTML = `<br> ${userInput.value} isn't correct, try again!`;
        userInput.value = '';
        updateHint();
    }
}

function victorySequence() {
    guess.textContent = `YOU WIN! - It took you ${eval(guess.textContent)} tries.`;
    playAgain.style.visibility = 'visible';
    feedback.textContent = '';
    guessString.textContent = '';
    userInput.value = '';
    hint.textContent = '';
    keyboard.style.display = 'none';
    userInput.style.display = 'none';
    
    setTimeout(relaunchSequence, 200);
}

function relaunchSequence() {
    document.addEventListener("keydown", function(e) {if (e.code === "Enter") {location.reload()}});
}

randomCountry();
updateHint();
eventListener();