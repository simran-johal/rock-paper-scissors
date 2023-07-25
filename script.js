

// MECHANISM TO GENERATE COMPUTERS INPUTS FOR GAME & GAME LOGIC FOR WINNER/LOSER
    
function getComputerChoice() {
let stringArray = ["rock", "paper", "scissors"]
let randomString = Math.floor(Math.random() * stringArray.length) 
return stringArray[randomString]
}
getComputerChoice()
    
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose!, Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win!, Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "A draw! Try Again"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win!, Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose!, Scissors beats Paper"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "A draw! Try Again"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win!, Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose!, Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "A draw! Try Again"
    } else return "Whoopsy, something went wrong, try again!" 
}





// ALL DOM METHODS
let scissors = document.querySelector('#scissors') 
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let roundResultContent = document.querySelector('#round-result-content')
let finalWinnerContent = document.querySelector('#final-winner-content')
let runningScoreContent = document.querySelector('#running-score')
let newGame = document.querySelector('#new-game-button') 

let playerScore = 0
let computerScore = 0
let roundsCompleted = 0

scissors.addEventListener('click', function () { 
    game("scissors"); 
});
    
rock.addEventListener('click', function () {
    game("rock"); 
});  

paper.addEventListener('click', function () {
    game("paper"); 
});


// FUNCTIONALITY FOR BUTTON RESETTING OF GAME COMPLETE
newGame.addEventListener('click', function () { 
    startNewGame()
})


// FINAL WINNER FUNCTION
function displayFinalWinner() {
    if (playerScore > computerScore) {
        finalWinnerContent.textContent = 
        "You Win! Final Score: " + playerScore + " - " + computerScore;
    } else if (playerScore < computerScore) {
        finalWinnerContent.textContent = 
        "You Lose! Final Score: " + playerScore + " - " + computerScore
    } else if (playerScore === computerScore && playerScore > 0 && computerScore > 0) {
        finalWinnerContent.textContent = "It's draw! try again!"
    } else {finalWinnerContent.textContent = ""}
}



// GAME FUNCTION 
function game(choice) {
    
if (roundsCompleted < 5) {
    const playerChoice = choice  
    const computerChoice = getComputerChoice()
    const roundResult = playRound(playerChoice,computerChoice)

        if (roundResult == "You Win!, Rock beats Scissors" || 
            roundResult == "You Win!, Paper beats Rock" || 
            roundResult == "You Win!, Scissors beats Paper") {
            playerScore += 1; 
            roundResultContent.textContent = "Player Wins!"; 
            runningScoreContent.textContent = playerScore + " - " + computerScore 

        } else if (roundResult == "You Lose!, Paper beats Rock" || 
               roundResult == "You Lose!, Scissors beats Paper" || 
               roundResult == "You Lose!, Rock beats Scissors") {
                computerScore += 1;
                roundResultContent.textContent = "Computer Wins!"; 
                runningScoreContent.textContent = playerScore + " - " + computerScore   

        } else if (roundResult == "A draw! Try Again") { 
                roundResultContent.textContent = "A draw! Try Again"; 
                runningScoreContent.textContent = playerScore + " - " + computerScore
           
        } else { 
            roundResultContent.textContent = ""

        }
        roundsCompleted++

        if (roundsCompleted === 5) {
            displayFinalWinner()

        }
    }   
};

function startNewGame() {
    resetGame() 
}

function resetGame () {
    playerScore = 0
    computerScore = 0
    roundsCompleted = 0
    roundResultContent.textContent = ""
    finalWinnerContent.textContent = ""
    runningScoreContent.textContent = "0 - 0"
}


    
    















