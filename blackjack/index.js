let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

let player = {
    Name : "Eldar",
    Chips : 145
}

playerEl.innerHTML = player.Name + ": $" + player.Chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }

}

function startGame() {
    renderGame();
}

function renderGame() {

    cardsEl.innerHTML = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";    
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}