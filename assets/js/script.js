/**
 * For the game, maingame, win, tie, lose and getcComputerChoice functions 
 * I used (https://www.youtube.com/watch?v=jaVNP3nIAv0) this tutorial video
 * but it is important to mention that my rock paper scissors game is different from
 * the one in the video, so I added value to really make it my own project, and worked really hard 
 * by using the tutorial to enhance my knowledge.
 * 
 * For the modals that appear in the final project I used (https://www.w3schools.com/howto/howto_css_modals.asp)
 * 
 * Also one of the tutors helped me with the part where the icon shows up based on the computer's random generated
 * number.
*/

// variables for the Scores, Scoreboard and Message
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const message = document.querySelector(".message > p");

// variables for the shapes that can be choosen to play the game
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

// variables for the icons that show up based on the user choice and the computer's random generated number
const userIcon = document.getElementById("user-icon");
const computerIcon = document.getElementById("computer-icon");

// variables for the buttons that resets the game
const newGameButton = document.getElementById("new-game");
const restarGameButton = document.getElementById("restart-game");

// variables for the instructions modal
let modal = document.getElementById("open");
let ins = document.getElementById("instructions");
let close = document.getElementsByClassName("close")[0];

// variable for the game over modal
let gameOverMessage = document.getElementById("game-over-message");

// functions for the instructions modal
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

/**
 * the function for the computer to get a random generated number, which 
 * returns a rounded number that corresponds to either one of the list of the
 * choices that can make a computer's move
 */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/**
 * this function triggers when the userChoice and the computerChoice is compared
 * and the result is that the user wins. Then the user's score is incremented
 * and a message shows up based on the game's rules. Additionally a short 
 * glow effect triggers which reinforces the user's victory
 */
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    userIcon.classList.add("green");
    computerIcon.classList.add("red");
    setTimeout(function() {userIcon.classList.remove("green")}, 500);
    setTimeout(function() {computerIcon.classList.remove("red")}, 500);
}

/**
 * this function triggers when the userChoice and the computerChoice is compared
 * and the result is that the computer wins. Then the computer's score is incremented
 * and a message shows up based on the game's rules. Additionally a short 
 * glow effect triggers which reinforces the computer's victory
 */
function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    message.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!";
    userIcon.classList.add("red");
    computerIcon.classList.add("green");
    setTimeout(function() {userIcon.classList.remove("red")}, 500);
    setTimeout(function() {computerIcon.classList.remove("green")}, 500);
}

/**
 * this function triggers when the userChoice and the computerChoice is compared
 * and the result is a draw. The scoreboard does not get updated on either side
 * and a message shows up based on the game's rules. Additionally a short 
 * glow effect triggers which reinforces the draw.
 */
function tie(userChoice, computerChoice) {
    message.innerHTML = userChoice + " ties with " + computerChoice + ".";
    userIcon.classList.add("grey");
    computerIcon.classList.add("grey");
    setTimeout(function() {userIcon.classList.remove("grey")}, 500);
    setTimeout(function() {computerIcon.classList.remove("grey")}, 500);
}

/**
 * this function triggers based on the user's pick with an icon showing up
 * on the screen. Then a switch statement compares the user's and the
 * computer's choice and determines the outcome.
 * If the user or the computer reaches 10 points the game ends with a modal
 * showing up on the screen.
 */
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
        gameOverMessage.innerHTML = "You win!";
    } else if (computerScore === 10) {
        document.getElementById("game-over").style.display = "block";
        gameOverMessage.innerHTML = "Computer wins, better luck next time!";
    }
}

/**
 * the main game function that waits for a click from the user and starts 
 * the game function based on their choice.
 */
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

/**
 * function for a new game button that resets the scoreboard, the icons and 
 * the message.
 */
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

/**
 * function for a new game button that shows up after the game is over and 
 * resets the scoreboard, the icons and the message.
 */
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