function randomNumberGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max - min + 1)) + min
}

function getComputerChoice(randomNumber){
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

let userChoice = getUserChoice()
console.log(userChoice);


// Prompt user to type either rock, paper or scissors 
// Get either rock, paper or scissors choice from the user
    // If user types rock and 
//
//
