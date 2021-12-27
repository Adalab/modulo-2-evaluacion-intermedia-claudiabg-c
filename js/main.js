'use strict'

const chooseButton = document.querySelector('.choosebutton');
const playButton = document.querySelector('.play');
const letsPlayMessage = document.querySelector('.letsplay');
const humanScore = document.querySelector('.scorehuman');
const computerScore = document.querySelector('.scorecomputer');
const playAgain = document.querySelector('.playagain');
const counter = document.querySelector('.counter');
const scorePlays = document.querySelector('.scoreplays');

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

        if (userChoice === 'none') {
            console.log('Selecciona una jugada para empezar');
        } else if (userChoice === '1') {
            console.log('El humano escogió piedra');
        } else if (userChoice === '2') {
            console.log('El humano escogió papel');
        } else {
            console.log('El humano escogió tijera');
        }
    }

    function computerChoice() {
        if (userChoice === 'none') {
            console.log('Selecciona una jugada para empezar');
        } else if (randomNum <= 3) {
            console.log('El ordenador elige piedra');
        } else if (randomNum <= 6) {
            console.log('El ordenador elige papel')
        } else {
            console.log('El ordenador elige tijera')
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
        playButton.classList.add('hidden')
        playAgain.classList.remove('hidden')

        if (humanScore.innerHTML > computerScore.innerHTML) {
            letsPlayMessage.innerHTML = '¡Enhorabuena! ¡Has ganado al ordenador!'
        } else if (computerScore.innerHTML > humanScore.innerHTML) {
            letsPlayMessage.innerHTML = 'Oh, vaya... El ordenador te ha ganado.'
        } else {
            letsPlayMessage.innerHTML = 'Habéis empatado'
        }
    }

}

function preventClickSelect() {
    if (chooseButton.value === 'none') {
        numOfClicks = '';
    }
}

function reloadPage() {
    location.reload();
}

chooseButton.addEventListener('change', hidePlay)
playButton.addEventListener('click', preventClickSelect)
playButton.addEventListener('click', makeYourChoice);
playButton.addEventListener('click', clicks);
playButton.addEventListener('click', startOver);
playAgain.addEventListener('click', reloadPage);