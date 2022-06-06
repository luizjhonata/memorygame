const cards = document.querySelectorAll('.card');
const btnStart = document.getElementsByClassName('.btn');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let counter = 0;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        increase();
        return;
    }
    secondCard = this;
    increase();
    hasFlippedCard = false;
    checkFormath();
}

function checkFormath(){
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() *16);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

/*Funções para habilitar o Start New Game*/ 

function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() *16);
        card.style.order = randomPosition;
    })
}

function hideAll(){
    cards.forEach((card) => {
        if (card.classList.contains('flip')) {
            card.classList.remove('flip')
        };
    })
}

function enableCards(){
    cards.forEach((card) => {
        card.addEventListener('click', flipCard)
    })
}

function novoJogo() {
    hideAll();
    enableCards();
    counter = 0;
    span.textContent = counter;
    setTimeout(() => {
        shuffle();
    }, 900);
}






/* Contador */

function increase() {
    counter ++
    span.textContent = counter
}


