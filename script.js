function randomNumberGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max - min + 1)) + min
}

function getComputerChoice(){
    randomNumber = randomNumberGenerator(1,3);

    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else if (randomNumber == 3){
        return "scissors";
    } else {
        return "invaild!";
    }
}


function getUserChoice(){
    choice = prompt("Type in rock, paper, or scissors: ");
    return choice;
}


function playRound(humanChoice, computerChoice){
    const userChoice = humanChoice.toLowerCase();

    if (userChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You lose! Paper beats rock.");
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You lose! Scissors beats paper."); 
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You lose! Rock beats scissors.");
    } else if (computerChoice == "rock" && userChoice == "paper") {
        userScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You win! Paper beats rock.");
    } else if (computerChoice == "paper" && userChoice == "scissors") {
        userScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You win! Scissors beats paper."); 
    } else if (computerChoice == "scissors" && userChoice == "rock") {
        userScore++;
        console.log("Human Score: " + userScore);
        console.log("Computer Score: " + computerScore);
        console.log("You win! Rock beats scissors.");

    } else {
        return "It's a TIE!"
    }
}

function playGame(){
    let userScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    if (roundNumber < 5){
        
    } 

}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice(); 


playRound(userSelection, computerSelection);
// Prompt user to type either rock, paper or scissors 
// Get either rock, paper or scissors choice from the user
    // If user types rock and 
//
//
