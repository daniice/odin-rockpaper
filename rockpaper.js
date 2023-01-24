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