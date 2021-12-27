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
const body = document.querySelector('.body');
const main = document.querySelector('.main');

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

const now = new Date();

if (now.getMonth() === 11) {
    body.style.background = 'url(https://cdn.pixabay.com/photo/2015/12/06/20/10/christmas-bauble-1079926_960_720.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.color = '#B0B8CA'
    main.style.background = 'linear-gradient(to bottom, #f7f8f3, white)';
    chooseButton.style.border = '1px solid #B88975';
    chooseButton.style.backgroundColor = '#b88975b9';
    chooseButton.style.color = '#313847'
    main.style.border = '3px solid #947257'
} else if (now.getMonth() === 1) {
    body.style.background = 'url(https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_960_720.png)';
    body.style.backgroundSize = 'cover';
    body.style.color = '#E5A7B6';
    main.style.background = 'white';
    main.style.border = '3px solid #A4B89F'
} else if (now.getMonth() === 2) {
    body.style.background = 'url(https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_960_720.png)';
    body.style.backgroundSize = 'cover';
    body.style.color = '#E5A7B6';
    main.style.background = 'white';
} else if (now.getMonth() === 3) {
    body.style.background = 'url(https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_960_720.png)';
    body.style.backgroundSize = 'cover';
    body.style.color = '#E5A7B6';
    main.style.background = 'white';
} else if (now.getMonth() === 6) {
    body.style.background = 'url(https://cdn.pixabay.com/photo/2021/07/10/01/11/monstera-6400359_960_720.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.color = '#102D01';
    main.style.background = 'linear-gradient(to bottom, #FFAAC0, #FEEFCC)';
    main.style.border = '3px solid #315D03'
} else {
    body.style.background = 'linear-gradient(to bottom, rgb(253, 214, 221), seashell)';
    body.style.color = 'rgb(252, 144, 211)';
    main.style.background = 'linear-gradient(to bottom, seashell, rgb(253, 214, 221))';
    main.style.border = '3px solid #A4B89F'
}

chooseButton.addEventListener('change', hidePlay)
playButton.addEventListener('click', makeYourChoice);
playButton.addEventListener('click', clicks);
playButton.addEventListener('click', startOver);
playAgain.addEventListener('click', reloadPage);