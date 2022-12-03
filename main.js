const computerOptions = ["rock", "paper", "scissors"];
const computerName = "Wizbuss";
const userName = prompt(`This is a game of rock,paper,scissors of 5 rounds! You will be playing this game against the Computer wizard ${computerName}, please enter your user name.`);
let computerScore = 0;
let userScore = 0;
const winnerString = (round, winner) => `The winner of round ${round} is ${winner}`;

function playAgain() {
    let choiceVariable =  prompt("Do you want to play again: Yes/No","");
    choiceVariable = choiceVariable.trim();
    choiceVariable = choiceVariable ? choiceVariable.toLowerCase() : choiceVariable;
    if(choiceVariable == "yes") resetGame();
    else console.log("Thank you for playing!Bye!");
}

function computerPlay() {
    return computerOptions[Math.floor(Math.random() * 3)].toLowerCase();
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    mainGame();
}

function userPlay() {
    let userChoice = "";
    let validChecker = "";
    do {
        userChoice = prompt(`Enter your choice: Rock, Paper, Scissors. ${validChecker}`, "");
        if(userChoice) {
            userChoice = userChoice.trim();
            userChoice = userChoice.toLowerCase();
        }
        validChecker = computerOptions.indexOf(userChoice)<0 ? "Please enter a valid option" : "";
    } while(computerOptions.indexOf(userChoice)<0);
    return userChoice;
}

let checkResult = function(computerSelect, userSelect, round) {
    if(computerSelect == userSelect) {
        return `It is a Tie for round ${round}`;
    } else if (userSelect == "rock") {
        if(computerSelect == "scissors") {
            userScore++;
            return winnerString(round, userName);
        } else {
            computerScore++;
            return winnerString(round, computerName);
        }
    } else if (userSelect == "paper") {
        if(computerSelect == "rock") {
            userScore++;
            return winnerString(round, userName);
        } else {
            computerScore++;
            return winnerString(round, computerName);
        }
    } else if (userSelect == "scissors") {
        if(computerSelect == "paper") {
            userScore++;
            return winnerString(round, userName);
        } else {
            computerScore++;
            return winnerString(round, computerName);
        }
    }
}

let checkWinner = function(userScore,computerScore) {
    console.log(`The final result is: ${userName}  with ${userScore} points, ${computerName} with ${computerScore} points `)
    if (userScore == computerScore) {
        return "It's a tie!"
    } else if (computerScore > userScore) {
        return `The winner of the game is the ${computerName}!!`
    } else {
        return `The winner of the game is ${userName}!!`;
    }
}

function mainGame() {
    console.clear();
    console.log(`Welcome ${userName} and ${computerName}`);
    for (let i=1; i<=5; i++) {
        playGame(i);
    }
    console.log(checkWinner(userScore,computerScore));
    playAgain();
}

function playGame(round) {
    let userSelection = userPlay();
    console.log(`${userName}'s selection is: `, userSelection);
    const computerSelection = computerPlay();
    console.log(`${computerName}'s selection is: `, computerSelection);
    console.log(checkResult(computerSelection, userSelection, round));
}

mainGame();
