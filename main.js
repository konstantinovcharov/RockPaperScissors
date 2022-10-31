const choices = ["rock", "paper", "scissors"]
let winners = [];


function resetGame(){
    winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
    
   let imgs = document.querySelectorAll('img')
   imgs.forEach((img) =>
   img.addEventListener(('click'), () => {
    if(img.id){
        playRound(img.id)
    }    
   }))
}


function playRound(playerSelection) {

    let wins = checkWins();
    if(wins >= 5){
        return;
    }
    
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if(wins == 5){
        displayEnd()
    }
}

function displayEnd(){
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector('.winner').textContent = 'You won 5 times. Congrats!'
    } else {
        document.querySelector('.winner').textContent = 'The Computer won 5 times. Too bad.'
    }
    document.querySelector('.reset').style.display = "flex";

}

function displayRound(playerSelection, computerSelection, winner){
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;

}

function displayRoundWinner(winner){
    if (winner == "Player") {
        document.querySelector('.winner').textContent = "You won the Round!";
    } else if (winner == "Computer") {
        document.querySelector('.winner').textContent = "Computer won the Round!";
    } else {
        document.querySelector('.winner').textContent = "The Round is a tie";
    }
}

function tallyWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function computerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add('active');

    setTimeout(() =>{
        document.querySelector(`.${choice}`).classList.remove('active');
    }, 700);

    return choice;
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins,computerWins)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
     ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    
}

startGame();



