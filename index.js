function computerPlay() {
    let move = Math.floor(Math.random() * 3);
    if (move == 0) {
        return("Rock");
    } else if (move == 1) {
        return("Paper");
    } else if (move == 2) {
        return("Scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let winner = 0;
    if (ps == "ROCK" && computerSelection == "Scissors") {
        winner = 1;
    } else if (ps == "PAPER" && computerSelection == "Rock") {
        winner = 1;
    }else if (ps == "SCISSORS" && computerSelection == "Paper") {
        winner = 1;
    } else {
        winner = 0;
    }

    if (winner == 1) {
        return ("You are the winner");
    } else {
        return ("You are the loser");
    }
}


const computerSelection = computerPlay();
for (let i =0; i<5;i++) {
    var playerSelection = prompt("Rock, paper or scissors?");
    console.log(playRound(playerSelection,computerSelection))
}
