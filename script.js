let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return (Math.floor((Math.random() * 10)))
}

const compareGuesses = ( user, computer, target) => {
    if (Math.abs(target - user) < Math.abs(target - computer)) {
        return true
    } else if (Math.abs(target - user) > Math.abs(target - computer)){
        return false    
    } else {
        return true
    }
}

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++
    } else {
        computerScore++
    } 
}

const advanceRound = () => currentRoundNumber++;