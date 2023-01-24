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
    console.log(playerPlay);
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

//initiate round
let computerPlay = getComputerChoice();
let playerPlay = getPlayerChoice();
let winner = round(computerPlay, playerPlay);
console.log(winner);
console.log(playerPlay.toLowerCase());

if (winner === "player" && playerPlay.toLowerCase() === "rock") { alert("You win! Rock beats scissors!");
} else if (winner === "player" && playerPlay.toLowerCase() === "paper") { alert("You win! Paper beats rock!");
} else if (winner === "player" && playerPlay.toLowerCase() === "scissors") { alert("You win! Scissors beats paper!");
} else if (winner === "tie") { alert("A cat's game ;)");
} else alert("Tragic. AI is on its way to taking over.")
