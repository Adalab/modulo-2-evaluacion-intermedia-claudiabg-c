'use strict'

const chooseButton = document.querySelector('.choosebutton');
const playButton = document.querySelector('.play');
const letsPlayMessage = document.querySelector('.letsplay');
const humanScore = document.querySelector('.scorehuman');
const computerScore = document.querySelector('.scorecomputer');
const playAgain = document.querySelector('.playagain');
const counter = document.querySelector('.counter');
const scorePlays = document.querySelector('.scoreplays');
const humanEmoji = document.querySelector('.humanemoji');
const pcEmoji = document.querySelector('.pcemoji');
const mainText = document.querySelector('.maintext');
const gifHapppy = document.querySelector('.gifhappy');
const gifSad = document.querySelector('.gifsad');
const gifTie = document.querySelector('.giftie');

function hidePlay() {
    if (chooseButton.value !== 'none') {
        playButton.classList.remove('hidden')
    }
}

function game() {
    const userChoice = chooseButton.value;

    counter.classList.remove('hidden');

    scorePlays.innerHTML++;

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
    };

    let randomNum = getRandomNumber(9);

    function humanChoice() {

        if (userChoice === '1') {
            humanEmoji.innerHTML = '💎'
        } else if (userChoice === '2') {
            humanEmoji.innerHTML = '📄'
        } else {
            humanEmoji.innerHTML = '✂️'
        }
    }

    function computerChoice() {
        if (randomNum <= 3) {
            pcEmoji.innerHTML = '💎'
        } else if (randomNum <= 6) {
            pcEmoji.innerHTML = '📄'
        } else {
            pcEmoji.innerHTML = '✂️'
        }
    };

    function messageButton(message) {
        letsPlayMessage.innerHTML = message;
    }

    function addHumanScore() {
        humanScore.innerHTML++;
    }

    function addComputerScore() {
        computerScore.innerHTML++;
    }

    if (userChoice === '1') {
        if (randomNum <= 3) {
            messageButton('Empate');
        } else if (randomNum <= 6) {
            messageButton('¡Has perdido!');
            addComputerScore();
        } else {
            messageButton('¡Has ganado!');
            addHumanScore();
        }
    } else if (userChoice === '2') {
        if (randomNum <= 3) {
            messageButton('¡Has ganado!');
            addHumanScore();
        } else if (randomNum <= 6) {
            messageButton('Empate');
        } else {
            messageButton('¡Has perdido!');
            addComputerScore();
        }
    } else if (userChoice === '3') {
        if (randomNum <= 3) {
            messageButton('¡Has perdido!');
            addComputerScore();
        } else if (randomNum <= 6) {
            messageButton('¡Has ganado!');
            addHumanScore();
        } else {
            messageButton('Empate');
        }
    }

    computerChoice();
    humanChoice();
}

function makeYourChoice(event) {
    event.preventDefault();
    game();
}

let numOfClicks = 1;

function clicks(event) {
    if (event.currentTarget) {
        numOfClicks++;
    }
}

function startOver() {
    if (numOfClicks > 10) {
        playButton.classList.add('hidden');
        mainText.classList.add('hidden');
        chooseButton.classList.add('hidden');
        humanEmoji.classList.add('hidden');
        pcEmoji.classList.add('hidden');
        playAgain.classList.remove('hidden');

        if (humanScore.innerHTML > computerScore.innerHTML) {
            letsPlayMessage.innerHTML = '¡Enhorabuena! ¡Has ganado al ordenador!'
            gifHapppy.classList.remove('hidden');
        } else if (computerScore.innerHTML > humanScore.innerHTML) {
            letsPlayMessage.innerHTML = 'Oh, vaya... El ordenador te ha ganado'
            gifSad.classList.remove('hidden');
        } else {
            letsPlayMessage.innerHTML = 'Habéis empatado'
            gifTie.classList.remove('hidden');
        }
    }

}

function reloadPage() {
    location.reload();
}

chooseButton.addEventListener('change', hidePlay)
playButton.addEventListener('click', makeYourChoice);
playButton.addEventListener('click', clicks);
playButton.addEventListener('click', startOver);
playAgain.addEventListener('click', reloadPage);