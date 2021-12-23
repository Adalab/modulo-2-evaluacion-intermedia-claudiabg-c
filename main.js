'use strict'

const chooseButton = document.querySelector('.choosebutton');
const playButton = document.querySelector('.play');
const letsPlayMessage = document.querySelector('.letsplay');
const humanScore = document.querySelector('.scorehuman');
const computerScore = document.querySelector('.scorecomputer');
const selectNoValue = document.querySelector('.none')

function game() {

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
    };

    let randomNum = getRandomNumber(9);

    function humanChoice() {
        const userChoice = chooseButton.value;

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
        if (chooseButton.value === 'none') {
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

    if (chooseButton.value === '1') {
        if (randomNum <= 3) {
            messageButton('Empate');
        } else if (randomNum <= 6) {
            messageButton('¡Has perdido!');
            addComputerScore();
        } else {
            messageButton('¡Has ganado!');
            addHumanScore();
        }
    } else if (chooseButton.value === '2') {
        if (randomNum <= 3) {
            messageButton('¡Has ganado!');
            addHumanScore();
        } else if (randomNum <= 6) {
            messageButton('Empate');
        } else {
            messageButton('¡Has perdido!');
            addComputerScore();
        }
    } else if (chooseButton.value === '3') {
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

let numOfClicks = '';

function clicks(event) {
    if (event.currentTarget) {
        numOfClicks++;
    }
}

function startOver() {
    if (numOfClicks > 10) {
        location.reload();
    }
}

function preventClickSelect() {
    if (chooseButton.value === 'none') {
        numOfClicks = '';
    }
}

playButton.addEventListener('click', preventClickSelect)
playButton.addEventListener('click', makeYourChoice);
playButton.addEventListener('click', clicks);
playButton.addEventListener('click', startOver);