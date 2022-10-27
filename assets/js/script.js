let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const message = document.querySelector(".message > p");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");


function getComputerChoice() {
    const choices = ["rock","paper","scissors","lizard","spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    message.innerHTML = userChoice + " loses to " + computerChoice + ". Computer wins!"
}

function tie(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " ties with " + computerChoice + ". It's a draw!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockscissors":
        case "spockrock":
            win(userChoice, computerChoice)
            break;
        
        case "rockspock":
        case "rockpaper":
        case "paperlizard":
        case "paperscissors":
        case "scissorsrock":
        case "scissorsspock":
        case "lizardscissors":
        case "lizardrock":
        case "spocklizard":
        case "spockpaper":
            lose(userChoice, computerChoice)
            break;
        
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
            tie(userChoice, computerChoice)
            break;
        
    }
}


function mainGame() {
    rock.addEventListener("click", function(){ 
        game("rock");
    })

    paper.addEventListener("click", function(){ 
        game("paper");
    })

    scissors.addEventListener("click", function(){ 
        game("scissors");
    })

    lizard.addEventListener("click", function(){ 
        game("lizard");
    })

    spock.addEventListener("click", function(){ 
        game("spock");
    })

}

mainGame();