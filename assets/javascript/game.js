//Array for computer to choose from a-z
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Computer chooses from array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// Creating variables to hold the number of wins, losses, and guesses. They start at 0 while guesses starts at 9.
var winsCounter = 0;
var lossesCounter = 0;
var guessesCounter = 9;
var userGuesses = [];

//Displays wins, losses and guesses counter at start of game
lossesText.textContent = "losses: " + lossesCounter;
winsText.textContent = "wins: " + winsCounter;
guessesText.textContent = "guesses remaining: " + guessesCounter;


alert("Guess a letter to start the game!")

//Game logic
function winning() {
    winsCounter++;
    winsText.textContent = "wins: " + winsCounter;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    guessesCounter = 9;
    guessesText.textContent = "Guesses remaining: " + guessesCounter;
    userGuesses.length = 0
    userGuesses.textContent = "You chose: ";

    //Computer chooses from array
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
}
function guessWrong() {
    guessesCounter--;
    guessesText.textContent = "Guesses remaining: " + guessesCounter;
}
function losing() {
    alert("You didn't guess the letter I was thinking of! HAHA");
    lossesCounter++;
    lossesText.textContent = "losses: " + lossesCounter;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    guessesCounter = 9
    guessesText.textContent = "Guesses remaining: " + guessesCounter;
    userGuesses.length = 0;
    userChoiceText.textContent = "You chose: " + userGuesses;



}

// Runs whenever the user presses a key. 
document.onkeyup = function (event) {

    // Stores key input. Must be after .onkeyup handler
    var userGuess = event.key;

    //stores user guesses in an array
    userGuesses.push(userGuess);
    //displays user entries
    userChoiceText.textContent = "You chose: " + userGuesses;
    computerChoiceText.textContent = "The computer chose: ";




    // If userguess is computerGuess, wins increases by one
    if (userGuess == computerGuess) {
        winning();
    }
    else if (guessesCounter === 1) {
        losing();
    }
    else {
        guessWrong();
    }
}

