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
    // checks if cards "rank" value match
    console.log("You found a match!");
    // increase score by 2 then show score in console
    score++;
    console.log("player score is " + score);
  } else {
    // if cards dont macth decrease score by 1
    score--;
    console.log("Sorry, try again.");
    console.log("player score is " + score);
  }
};

// only run if card is clicked, in accordance to the event listener in createBoard()
// flipCard reveals card image
const flipCard = function() {
  let cardId = this.getAttribute("data-id");
  // player is made know of the card rank and suit. Card image address loged also
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  // pushes the flipped card in to cardsInPlay array
  cardsInPlay.push(cards[cardId].rank);
  // sets the clicked card html image src from back image to the cardImage value held in object (face of card)
  this.setAttribute("src", cards[cardId].cardImage);
  // only checks for match if card selected is 2
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

//creates the gameboard
// loops through card array creates a new img element then displays it on html for each card
// each card assigned a datd-id corresponding to its for loop index
const createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    // when card is clicked, flip card function is run
    cardElement.addEventListener("click", flipCard);
    // places card in the element with the Id="game-board"
    document.getElementById("game-board").appendChild(cardElement);
  }
};

createBoard();
