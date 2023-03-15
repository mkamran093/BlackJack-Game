let cards = [];
let sum = 0;
let isAlive = false;
let blackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Kamran",
  chips: 300,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let rand = Math.floor(Math.random() * 13) + 1;
  if (rand === 1) {
    return 11;
  } else if (rand > 10) {
    return 10;
  } else {
    return rand;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = allCards();
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to Draw a new Card?";
  } else if (sum === 21) {
    message = "Woohoo!! You have got a BlackJack";
    blackJack = true;
  } else {
    message = "You are out of the Game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function allCards() {
  let text = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    text += cards[i] + " ";
  }
  return text;
}

function getNewCard() {
  if (isAlive && blackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  } else {
  }
}
