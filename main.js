'use strict'

const chooseButton = document.querySelector('.choosebutton');
const playButton = document.querySelector('.play');
const letsPlayMessage = document.querySelector('.letsplay');
const humanScore = document.querySelector('.scorehuman');
const computerScore = document.querySelector('.scorecomputer');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};


function humanChoice() {
    const userChoice = chooseButton.value;

    if (userChoice === '1') {
        console.log('El humano escogió piedra');
    } else if (userChoice === '2') {
        console.log('El humano escogió papel');
    } else {
        console.log('El humano escogió tijera');
    }
}

function computerChoice() {
    const randomNumber = getRandomNumber(9);

    if (randomNumber <= 3) {
        console.log('El ordenador elige piedra');
    } else if (randomNumber <= 6) {
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

function game() {
    
    if(chooseButton.value === '1') {
        if(getRandomNumber(9) <= 3) {
        messageButton('Empate');
        }else if(getRandomNumber(9) <=6) {
        messageButton('¡Has perdido!');
        addComputerScore();
        } else {
        messageButton('¡Has ganado!');
        addHumanScore();
        }} else if(chooseButton.value === '2') {
            if(getRandomNumber(9) <= 3) {
                messageButton('¡Has ganado!');
                addHumanScore();
                }else if(getRandomNumber(9) <=6) {
                messageButton('Empate');
                } else {
                messageButton('¡Has perdido!');
                addComputerScore();
                }} else {
                    if(getRandomNumber(9) <= 3) {
                        messageButton('¡Has perdido!');
                        addComputerScore();
                        }else if(getRandomNumber(9) <=6) {
                        messageButton('¡Has ganado!');
                        addHumanScore();
                        } else {
                        messageButton('Empate');
                        }  
                }

}



function makeYourChoice(event) {
    event.preventDefault();    
    computerChoice();
    humanChoice();
    game();
}

playButton.addEventListener ('click', makeYourChoice);
