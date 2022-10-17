const choices = ["rock", "paper", "scissors"]
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector('button').textContent = 'Play New Game';
    logWins();
}


function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner,round);
}

function playerChoice() {
    let input = prompt('Type Rock, Paper or Scissors')
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors')
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(!check) {
        input = prompt('Type Rock, Paper or Scissors correctly');
        while (input == null) {
            input = prompt('Type Rock, Paper or Scissors')
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }

    return input;

}

function validateInput(choice){
   return choices.includes(choice)
            
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
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
    let playersWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length
    console.log("Results:");
    console.log("Player Wins:", playersWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round')
    console.log('----------------------')

}
