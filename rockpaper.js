//get computer choice
function getComputerChoice() {
    let computerChoiceNumber = Math.random()*3;
    console.log(computerChoiceNumber);
    let computerPlay;
    if (computerChoiceNumber < 1) { computerPlay = "rock";
    } else if (computerChoiceNumber < 2) { computerPlay = "paper";
    } else computerPlay = "scissors";
return computerPlay;
}

//get player choice
function getPlayerChoice() {
    let playerPlay = prompt("Choose your fighter!");
    return playerPlay;
}

//play a round
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
    return winner;
}

//5 round game
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
    let computerPlay = getComputerChoice();
    let playerPlay = getPlayerChoice();
    let winnerRound = round(computerPlay, playerPlay);

    if (winnerRound === "player" && playerPlay.toLowerCase() === "rock") { alert("You win! Rock beats scissors!");
    } else if (winnerRound === "player" && playerPlay.toLowerCase() === "paper") { alert("You win! Paper beats rock!");
    } else if (winnerRound === "player" && playerPlay.toLowerCase() === "scissors") { alert("You win! Scissors beats paper!");
    } else if (winnerRound === "tie") { alert("A cat's game ;)");
    } else alert("Tragic. AI is on its way to taking over.")

    if (winnerRound === "player") { playerScore++
    } else if (winnerRound === "computer") { computerScore++ }
    }

    if (playerScore > computerScore) {winner = "player"
    } else if (computerScore > playerScore) {winner = "computer"}

    return winner;
}


//ending
let winner;
winner = game();

if (winner === "player") { alert("You are so so cool. Winner winner.");
} else alert("Better luck or something like that :'(");
