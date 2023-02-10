//get computer choice
function getComputerChoice() {
    let computerChoiceNumber = Math.random()*3;
    console.log(computerChoiceNumber);
    let computerPlay;
    if (computerChoiceNumber < 1) { computerPlay = "rock";
    } else if (computerChoiceNumber < 2) { computerPlay = "paper";
    } else computerPlay = "scissors";
    const computerChoice = document.createElement("p");
    computerChoice.textContent = 'computer chose ${computerPlay}';
    const fighterButts = document.querySelector('.fighterbutts');
    fighterButts.appendChild(computerChoice);
return computerPlay;
}

//get player choice
function getPlayerChoice() {
    let playerPlay = prompt("Choose your fighter!");
    return playerPlay;
}

//play a round
function round(e) {
    let winner;
    playerPlay = e.target.id;
    console.log(playerPlay);
    computerPlay = getComputerChoice();

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

//up a score by one (location for condensing some of below code in the future)
function upScore(scorie) {
  return scorie + 1;
}

//transition the window display if lost five games
function loss() {
    const body = document.querySelector('body')
    body.innerHTML = '';
    const lose = document.createElement("p");
    lose.textContent = 'TRAGIC';
    body.classList.add('winLose');
    body.appendChild(lose);
    body.addEventListener('transitionend', function(){location.reload()});
}

//transition the window display if won five games
function win() {
    const body = document.querySelector('body')
    body.innerHTML = '';
    const winn = document.createElement("p");
    winn.textContent = 'YAY';
    body.classList.add('winLose');
    body.appendChild(winn);
    body.addEventListener('transitionend', function(){location.reload()});
}



let computerScore = 0;
let playerScore = 0;
const buttons = Array.from(document.querySelectorAll('.butt'));
//plays a round and adds one to the score of the winner on screen, alerts win/loss/tie
buttons.forEach(butt => butt.addEventListener('click', (event) => {
    let winner = round(event);
    console.log(winner);
    if (winner === "player") { 
        alert("You are so so cool. Winner winner.");
        playerScore = playerScore + 1;
        console.log(playerScore);
        scorie = parseInt(document.querySelector('#playerNumber').textContent);
        //is there a way to move this all into upScore function? using someth similar to #${winner}number?
        console.log(scorie);
        let newScore;
        newScore = upScore(scorie);
        document.querySelector('#playerNumber').innerHTML = newScore;
        if (newScore === 5) win();
    } else if (winner === "tie") {alert("Game of the cat!")
    } else {
        let scorie;
        alert("Better luck or something like that :'(");
        computerScore = computerScore + 1;
        console.log(computerScore);
        scorie = parseInt(document.querySelector('#computerNumber').textContent);
        console.log(scorie);
        let newScore;
        newScore = upScore(scorie);
        document.querySelector('#computerNumber').innerHTML = newScore;
        if (newScore === 5) loss();
    }

    //check if either score has reached five
    if (computerScore === 5) loss();
    else if (playerScore === 5) win();
  }));


























