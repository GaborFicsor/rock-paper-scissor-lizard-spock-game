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

const userIcon = document.getElementById("user-icon");
const computerIcon = document.getElementById("computer-icon");

const newGameButton = document.getElementById("new-game");
const restarGameButton = document.getElementById("restart-game");

let modal = document.getElementById("open");
let ins = document.getElementById("instructions");
let close = document.getElementsByClassName("close")[0];

let gameOverMessage = document.getElementById("game-over-message");

ins.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];

}



function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " beats " + computerChoice + ". You win!"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!"
}



function tie(userChoice, computerChoice) {
    message.innerHTML = userChoice + " ties with " + computerChoice + ".";

}


function game(userChoice) {
    let computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
        computerIcon.innerHTML = `<i class="fa-solid fa-hand-back-fist icon-shown"></i>`;
    } else if (computerChoice === "paper") {
        computerIcon.innerHTML = `<i class="fa-solid fa-hand icon-shown"></i>`;
    } else if (computerChoice === "scissors") {
        computerIcon.innerHTML = `<i class="fa-solid fa-hand-scissors icon-shown"></i>`;
    } else if (computerChoice === "lizard") {
        computerIcon.innerHTML = `<i class="fa-solid fa-hand-lizard icon-shown"></i>`;
    } else {
        computerIcon.innerHTML = `<i class="fa-solid fa-hand-spock icon-shown"></i>`;
    }



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


    if (userScore === 10) {
        document.getElementById("game-over").style.display = "block";
        gameOverMessage.innerHTML = "You win!"
    } else if (computerScore === 10) {
        document.getElementById("game-over").style.display = "block";
        gameOverMessage.innerHTML = "Computer wins, better luck next time!"
    }
}



function mainGame() {
    rock.addEventListener("click", function () {
        userIcon.innerHTML = `<i class="fa-solid fa-hand-back-fist icon-shown"></i>`
        game("rock");
    })

    paper.addEventListener("click", function () {
        userIcon.innerHTML = `<i class="fa-solid fa-hand icon-shown"></i>`
        game("paper");
    })

    scissors.addEventListener("click", function () {
        userIcon.innerHTML = `<i class="fa-solid fa-hand-scissors icon-shown"></i>`
        game("scissors");
    })

    lizard.addEventListener("click", function () {
        userIcon.innerHTML = `<i class="fa-solid fa-hand-lizard icon-shown"></i>`
        game("lizard");
    })

    spock.addEventListener("click", function () {
        userIcon.innerHTML = `<i class="fa-solid fa-hand-spock icon-shown"></i>`
        game("spock");
    })

}



function newGame() {
    newGameButton.addEventListener("click", function () {
        userScore = 0;
        computerScore = 0;
        userScoreSpan.innerHTML = userScore;
        computerScoreSpan.innerHTML = computerScore;
        message.innerHTML = "Make your move!";
        userIcon.innerHTML = `<i class=""></i>`;
        computerIcon.innerHTML = `<i class=""></i>`;
    })
}

function restartGame() {
    restarGameButton.addEventListener("click", function() {
        userScore = 0;
        computerScore = 0;
        userScoreSpan.innerHTML = userScore;
        computerScoreSpan.innerHTML = computerScore;
        message.innerHTML = "Make your move!";
        userIcon.innerHTML = `<i class=""></i>`;
        computerIcon.innerHTML = `<i class=""></i>`;
        document.getElementById("game-over").style.display = "none";
    })
}


mainGame();