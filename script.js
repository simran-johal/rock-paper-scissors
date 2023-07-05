



function getComputerChoice() {
    let stringArray = ["rock", "paper", "scissors"]
    let randomString = Math.floor(Math.random() * stringArray.length) 
    return stringArray[randomString]
    
}
getComputerChoice()




for (let i = 0; i <= 5; i++) {
    
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
    } else return "Whoopsy, something went wrong, try again!"
    }
        if (playRound("You Win!, Rock beats Scissors" || "You Win!, Paper beats Rock" || "You Win!, Scissors beats Paper")) {
            return "Player Wins!"
            let playerScore = ++

        } else if (playRound("You Lose!, Paper beats Rock" || "You Lose!, Scissors beats Paper" || "You Lose!, Rock beats Scissors"))
            return "Computer Wins!"
            let computerScore = ++

        } else return "Must be a draw!, try again"   

let playerScore = 0
let computerScore = 0

    }


const playerInput = "rock"
const playerChoice = playerInput.toLowerCase()
const computerChoice = getComputerChoice()

console.log(playRound(playerChoice, computerChoice))





//use singleRound inside here to play 5 round game (keeping score)
//loop through 5 times & console.log() to display results of each round 
//use prompt() to get input from useer







