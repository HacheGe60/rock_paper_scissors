document.addEventListener("DOMContentLoaded", function () {
    // Define constants and elements
    const elements = {
        btnRock: document.querySelector('#rock'),
        btnPaper: document.querySelector('#paper'),
        btnScissors: document.querySelector('#scissors'),
        playerEl: document.querySelector('#player'),
        computerEl: document.querySelector('#computer'),
        msg_1El: document.querySelector('#msg_1'),
        msg_2El: document.querySelector('#msg_2'),
        overEl: document.querySelector('#over'),
        againEl: document.querySelector('#again')
    };

    // Initialize scores
    let scoreC = 0;
    let scoreP = 0;

    // Event listener setup
    function chooseBtn(callback) {
        elements.btnRock.addEventListener('click', () => callback('rock'));
        elements.btnPaper.addEventListener('click', () => callback('paper'));
        elements.btnScissors.addEventListener('click', () => callback('scissors'));
    }

    // Get computer's choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Update score UI elements
    function updateScoreUI() {
        elements.playerEl.textContent = `Player: ${scoreP}`;
        elements.computerEl.textContent = `Computer: ${scoreC}`;
    }

    // Reset game state and UI elements
    function resetGame() {
        scoreC = 0;
        scoreP = 0;
        elements.playerEl.textContent = `Player: ${scoreP}`;
        elements.computerEl.textContent = `Computer: ${scoreC}`;
        elements.msg_1El.textContent = 'The player who gets 5 points wins.';
        elements.msg_1El.style.color = 'black';
        elements.msg_2El.textContent = 'Please click your option';
        elements.againEl.style.display = 'none';
        elements.overEl.innerHTML = '<a href="#" id="rock"><img src="rock.png" alt="rock"></a><a href="#" id="paper"><img src="paper.png" alt="paper"></a><a href="#" id="scissors"><img src="scissors.png" alt="scissors"></a>';
        chooseBtn(game);
    }

    // Handle game logic
    function game(playerChoice) {
        const computerSelection = getComputerChoice();
        const result = determineResult(playerChoice, computerSelection);

        updateScoreUI();
        updateGameMessages(result);

        if (scoreC >= 5 || scoreP >= 5) {
            handleGameEnd();
        }
    }

    function determineResult(playerChoice, computerSelection) {
        if (
            (playerChoice === 'rock' && computerSelection === 'scissors') ||
            (playerChoice === 'paper' && computerSelection === 'rock') ||
            (playerChoice === 'scissors' && computerSelection === 'paper')
        ) {
            scoreP += 1;
            return `You win! ${playerChoice} beats ${computerSelection}`;
        } else if (computerSelection === playerChoice) {
            return `Draw! Both choose ${playerChoice}`;
        } else {
            scoreC += 1;
            return `You lose! ${computerSelection} beats ${playerChoice}`;
        }
    }

    function updateGameMessages(result) {
        elements.msg_1El.textContent = result;
        elements.msg_2El.textContent = 'Try again';
    }

    function handleGameEnd() {
        const isPlayerWin = scoreP >= 5;
        elements.msg_1El.style.color = isPlayerWin ? 'green' : 'red';
        elements.msg_1El.textContent = isPlayerWin ? 'YOU WIN!' : 'YOU LOSE!';
        elements.msg_2El.textContent = 'Game over!';
        elements.againEl.style.display = 'flex';
        elements.overEl.innerHTML = '<img src="rock.png" alt="rock"><img src="paper.png" alt="paper"><img src="scissors.png" alt="scissors">';
        elements.againEl.addEventListener('click', resetGame);
    }


    // Event listeners
    chooseBtn(playerChoice => {
        game(playerChoice);
    });
});