


    // these are the functional blocks to get the game to do something based on the interactive mechanism
    function getComputerChoice() {
    let stringArray = ["rock", "paper", "scissors"]
    let randomString = Math.floor(Math.random() * stringArray.length) 
    return stringArray[randomString]
    
}
    getComputerChoice()
    
    function playRound (playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose!, Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win!, Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "A draw!, Try Again"

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win!, Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose!, Scissors beats Paper"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "A draw!, Try Again"

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win!, Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose!, Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {

        return "A draw!, Try Again"
    } else return "Whoopsy, something went wrong, try again!" }
     



let playerScore = 0
let computerScore = 0
let winnerOfRound = ""
let finalWinner = "";

async function game() {
// this is the interactive mechanism 
    
for (let i = 0; i < 5; i++) {
    
    const playerInput = await window.prompt("Choose Rock, Paper or Scissors")
    const playerChoice = playerInput.toLowerCase()
    const computerChoice = getComputerChoice()
    const roundResult = playRound(playerChoice,computerChoice)

        if (roundResult == "You Win!, Rock beats Scissors" || 
            roundResult == "You Win!, Paper beats Rock" || 
            roundResult == "You Win!, Scissors beats Paper") {
            winnerOfRound = "Player Wins!"
            playerScore += 1;

        } else if (roundResult == "You Lose!, Paper beats Rock" || 
               roundResult == "You Lose!, Scissors beats Paper" || 
               roundResult == "You Lose!, Rock beats Scissors") {
                winnerOfRound = "Computer Wins!"
                computerScore += 1;

        } else winnerOfRound = "Must be a draw!, try again"
    
        console.log(winnerOfRound)
        console.log(playerScore)
        console.log(computerScore)

    }


    if (playerScore > computerScore) {
        finalWinner = "You Win! " + playerScore + computerScore;
    } else if (playerScore < computerScore) {
        finalWinner = "You Lose! " + playerScore + computerScore
    } else finalWinner = "It's draw! try again!"

    console.log(finalWinner)


}


game()







let scissors = document.querySelector('#scissors')

scissors.addEventListener('click', function () {
    game("scissors"); 
});



let rock = document.querySelector('#rock')

rock.addEventListener('click', function () {
    game("rock"); 
});



let paper = document.querySelector('#paper')

paper.addEventListener('click', function () {
    game("paper"); 
});



