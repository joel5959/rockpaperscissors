


function randomNumberGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getComputerChoice() {
    randomNumber = randomNumberGenerator(1, 3);

    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else if (randomNumber == 3) {
        return "scissors";
    } else {
        return "invaild!";
    }
}


function getUserChoice() {
    choice = prompt("Type in rock, paper, or scissors: ");
    return choice;
}


function playGame() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        userSelection = getUserChoice();
        computerSelection = getComputerChoice();


        if (userSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You lose! Paper beats rock.");
        } else if (userSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You lose! Scissors beats paper.");
        } else if (userSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You lose! Rock beats scissors.");
        } else if (computerSelection == "rock" && userSelection == "paper") {
            userScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You win! Paper beats rock.");
        } else if (computerSelection == "paper" && userSelection == "scissors") {
            userScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You win! Scissors beats paper.");
        } else if (computerSelection == "scissors" && userSelection == "rock") {
            userScore++;
            console.log("Human Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            console.log("You win! Rock beats scissors.");

        } else {
            console.log("It's a TIE!");
        }
    }
    console.log("Final Score!");
    console.log("Human Score: " + userScore);
    console.log("Computer Score: " + computerScore);
}





playGame();



// Prompt user to type either rock, paper or scissors 
// Get either rock, paper or scissors choice from the user
// If user types rock and
//
//
