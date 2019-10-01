let cards = [
  { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
];

let cardsInPlay = [];
let score = 0;

const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    score++;
    console.log("player score is " + score);
  } else {
    console.log("Sorry, try again.");
  }
};

const flipCard = function() {
  let cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

const createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
};

createBoard();
