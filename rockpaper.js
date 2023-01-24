//get computer choice
function getComputerChoice() {
    let computerChoiceNumber = Math.random()*3
    console.log(computerChoiceNumber);
    return computerChoiceNumber;
}
    
let computerChoice = getComputerChoice();

let computerPlay
if (computerChoice < 1) { computerPlay = "rock";
    } else if (computerChoice < 2) { computerPlay = "paper";
    } else computerPlay = "scissors";

console.log(computerPlay);

//play rock paper scissors
function round(computerPlay, playerPlay) {
    let winner;
    if (computerPlay === "rock") {
        if (playerPlay === "rock") { winner = "tie"
        } else if (playerPlay === "paper") { winner = "player"
        } else winner = "computer"
    } else if (computerPlay === "paper") {
        if (playerPlay === "rock") { winner = "computer"
        } else if (playerPlay === "paper") { winner = "tie"
        } else winner = "player"
    } else {
        if (playerPlay === "rock") {winner = "player"
        } else if (playerPlay === "paper") {winner = "computer"
        } else winner = "tie"
    }
    console.log(winner);
    return winner;
}