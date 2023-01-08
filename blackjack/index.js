let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEld = document.querySelector("#cards-el");

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 1;
}

function startGame() {
    renderGame();
}

function renderGame() {

    cardsEld.innerHTML = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEld.innerHTML += cards[i] + " ";    
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohooo! You got a Black Jack!";
    } else {
        message = "You are out of the game!"
        isAlive = false;
    }

    messageEl.innerHTML = message;
    sumEl.innerHTML = "Sum: " + sum;
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}