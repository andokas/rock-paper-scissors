// script.js

console.log("Hello World");
console.log("=================================");
console.log("Welcome to Rock, Paper, Scissors!");
console.log("=================================\n");

// Step 2: Function to get computer choice
function getComputerChoice() {
    const randomNum = Math.random();
    
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Function to get human choice
function getHumanChoice() {
    let choice = prompt("Choose: rock, paper or scissors");
    
    // Validate input
    while (choice !== null && choice.toLowerCase() !== "rock" && 
           choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
        console.log(`"${choice}" is not a valid choice. Please try again.`);
        choice = prompt("Choose: rock, paper or scissors");
    }
    
    // If user cancels, return null
    if (choice === null) {
        return null;
    }
    
    return choice.toLowerCase();
}

// Step 6: Main game function
function playGame() {
    // Step 4: Declare score variables
    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            computerScore++;
        }
        
        console.log(`Score - You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        
        // If user cancels, end the game
        if (humanSelection === null) {
            console.log("Game cancelled by user.");
            return;
        }
        
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare final winner
    console.log("=================================");
    console.log("GAME OVER!");
    console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 YOU WIN THE GAME! 🎉");
    } else if (computerScore > humanScore) {
        console.log("💻 COMPUTER WINS THE GAME!");
    } else {
        console.log("🤝 IT'S A TIE GAME!");
    }
    console.log("=================================");
}

// Start the game
playGame();