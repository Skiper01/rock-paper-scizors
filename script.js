function GetComputerChoice() {
    const choices = [`rock`, `paper`, `scissors`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
    let result = '';
    let color = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie!`;
        document.getElementById(`result`).textContent = `Jest remis!`;
        document.getElementById(`result`).style.color = `yellow`;
        color = `yellow`;
    } else if (
        (computerChoice === `rock` && playerChoice === `scissors`) ||
        (computerChoice === `paper` && playerChoice === `rock`) ||
        (computerChoice === `scissors` && playerChoice === `paper`)
    ) {
        result = `You lose!`;
        document.getElementById(`result`).textContent = `Przegrałeś!`;
        document.getElementById(`result`).style.color = `red`;
        color = `red`;
    } else if (
        (computerChoice === `rock` && playerChoice === `paper`) ||
        (computerChoice === `paper` && playerChoice === `scissors`) ||
        (computerChoice === `scissors` && playerChoice === `rock`)
    ) {
        result = `You win!`;
        document.getElementById(`result`).textContent = `Wygrałeś!`;
        document.getElementById(`result`).style.color = `green`;
        color = `green`;
    } else {
        result = `Invalid choice`;
        color = `black`;
        document.getElementById(`result`).textContent = result;
        document.getElementById(`result`).style.color = color;
    }
    return result;
}

document.getElementById(`rock`).addEventListener(`click`, function() {
    const playerChoice = `rock`;
    const computerChoice = GetComputerChoice();
    checkWinner(playerChoice, computerChoice);
});

document.getElementById(`paper`).addEventListener(`click`, function() {
    const playerChoice = `paper`;
    const computerChoice = GetComputerChoice();
    checkWinner(playerChoice, computerChoice);
});

document.getElementById(`scissors`).addEventListener(`click`, function() {
    const playerChoice = `scissors`;
    const computerChoice = GetComputerChoice();
    checkWinner(playerChoice, computerChoice);
});

document.getElementById(`reset`).addEventListener(`click`, function() {
    document.getElementById(`result`).textContent = ``;
    document.getElementById(`result`).style.color = `black`;
    document.getElementById(`rock`).disabled = false;
    document.getElementById(`paper`).disabled = false;
    document.getElementById(`scissors`).disabled = false;
});

