// Randomizes the computer's choice //
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return(random, choice[random]);
}

// Global variables that can be used by all functions //
let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 0;

function playRound() {
    // Turns the Player's input into lower case text //
    const playerSelection = prompt("Round " + (roundCounter += 1) + "\nRock, Paper or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    // All the scenarios where the Player wins //
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        // Shows the current Round, the Result and the Points of both competitors //
        alert("Round " + roundCounter + "\nYou win, " + playerSelection + " beats " + computerSelection + "!" + "\n Player: " + (playerPoints += 1) + "\nComputer " + computerPoints)
    // Scenario when the results are tied //
    } else if (playerSelection == computerSelection) {
        alert("Round " + roundCounter + "\nIt's a tie, you both chose " + playerSelection + "!" + "\nPlayer: " + playerPoints + "\nComputer: " + computerPoints)
    // Scenarios where the Player loses //
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        alert("Round " + roundCounter + "\nYou lose, " + computerSelection + " beats " + playerSelection + "!" + "\nPlayer: " + playerPoints + "\nComputer: " + (computerPoints += 1))
    }
}

function game() {
    // Loops the round 5 times //
    for (let i = 0; i < 5; i++) {
        playRound();
    }; 
    // Shows results of the game and the total points of both competitors //
    if (playerPoints > computerPoints) {
        alert("You won!" + "\nPlayer: " + playerPoints + "\nComputer: " + computerPoints);
    } else if (playerPoints == computerPoints) {
        alert("It's a tie!" + "\nPlayer: " + playerPoints + "\nComputer: " + computerPoints);
    } else {
        alert("You lost!" + "\nPlayer: " + playerPoints + "\nComputer: " + computerPoints);
    }
}

// Starts the game
game();