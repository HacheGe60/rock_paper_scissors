function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function game() {
    let txt;
    let scoreC = 0;
    let scoreP = 0;

    for (let i = 1; i < 6; i++) {
        const computerSelection = getComputerChoice();
        let playerChoice = prompt('Please select Rock, Paper or Scissors').toLowerCase();

        if ((playerChoice === 'rock' && computerSelection === 'scissors') || (playerChoice === 'paper' && computerSelection === 'rock') || (playerChoice === 'scissors' && computerSelection === 'paper')) {
            txt = `You win! ${playerChoice} beats ${computerSelection}`;
            scoreP += 1
        } else if (computerSelection === playerChoice) {
            txt = 'Draw!';
            i -= 1;
        } else {
            txt = `You lose! ${computerSelection} beats ${playerChoice}`;
            scoreC += 1

        }
        console.log(txt);
        console.log(`Player ${scoreP} - Computer ${scoreC}`);
    }

}

game();



