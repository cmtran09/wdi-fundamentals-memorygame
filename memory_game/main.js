let cards = [
  {
    rank: "king",
    suit: "hearts",
    cardImage: "./cards/hearts/King_of_hearts.svg"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "./cards/hearts/Queen_of_hearts.svg"
  },
  {
    rank: "Jack",
    suit: "hearts",
    cardImage: "./cards/hearts/Jack_of_hearts.svg"
  },
  {
    rank: "ace",
    suit: "hearts",
    cardImage: "./cards/hearts/Ace_of_hearts.svg"
  },
  {
    rank: "king",
    suit: "spades",
    cardImage: "./cards/spades/King_of_spades.svg"
  },
  {
    rank: "queen",
    suit: "spades",
    cardImage: "./cards/spades/Queen_of_spades.svg"
  },
  {
    rank: "Jack",
    suit: "spades",
    cardImage: "./cards/spades/Jack_of_spades.svg"
  },
  {
    rank: "ace",
    suit: "spades",
    cardImage: "./cards/spades/Ace_of_spades.svg"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "./cards/diamonds/King_of_diamonds.svg"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "./cards/diamonds/Queen_of_diamonds.svg"
  },
  {
    rank: "Jack",
    suit: "diamonds",
    cardImage: "./cards/diamonds/Jack_of_diamonds.svg"
  },
  {
    rank: "ace",
    suit: "diamonds",
    cardImage: "./cards/diamonds/Ace_of_diamonds.svg"
  },
  {
    rank: "king",
    suit: "clubs",
    cardImage: "./cards/clubs/King_of_clubs.svg"
  },
  {
    rank: "queen",
    suit: "clubs",
    cardImage: "./cards/clubs/Queen_of_clubs.svg"
  },
  {
    rank: "Jack",
    suit: "clubs",
    cardImage: "./cards/clubs/Jack_of_clubs.svg"
  },
  {
    rank: "ace",
    suit: "clubs",
    cardImage: "./cards/clubs/Ace_of_clubs.svg"
  }
];

let cardsInPlay = [];
let score = 0;

const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    // checks if cards "rank" value match
    console.log("You found a match!");
    // increase score by 2 then show score in console
    score += 2;
    console.log("player score is " + score);
    document.getElementById("scoreCounter").textContent = score;
  } else {
    // if cards dont macth decrease score by 1
    console.log("Sorry, try again.");
    score -= 1;
    console.log("player score is " + score);
    document.getElementById("scoreCounter").textContent = score;
  }
  //empties out card in play array
  cardsInPlay = [];
};

// only run if card is clicked, in accordance to the event listener in createBoard()
// flipCard reveals card image
const flipCard = function() {
  let cardId = this.getAttribute("data-id");
  // player is made know of the card rank and suit. Card image address loged also
  console.log(
    "User flipped " + cards[cardId].rank + " of " + cards[cardId].suit
  );
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

// shuffles the cards
// random number is generated and used to pick a card in the array
// this fuction will be run before the board is created
const shuffle = array => {
  let currentIndex = array.length;
  let temp;
  let randomIndex;

  // keeps looping untill there are no cards left
  while (currentIndex !== 0) {
    // random interger between 0 and currentIndex (number of cards in the deck) generated
    randomIndex = Math.floor(Math.random() * currentIndex);
    // current index is decremented; subtracted by one and returned as value since card has been removed
    currentIndex--;
    // the random card is swapped with current element
    // working from the end of the array to the front
    // card of currentIndex assiged to temp
    temp = array[currentIndex];
    // current card being shuffled swaps it's index with a random number between 0 and the current index (i value)
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

//creates the gameboard
// loops through card array creates a new img element then displays it on html for each card
// each card assigned a datd-id corresponding to its for loop index
const createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "./cards/Card_backs_grid_blue.svg");
    cardElement.setAttribute("data-id", i);
    // when card is clicked, flip card function is run
    cardElement.addEventListener("click", flipCard);
    // places card in the element with the Id="game-board"
    document.getElementById("game-board").appendChild(cardElement);
  }
};

// cards are shuffled before boead created
const reset = () => {
  let button = document.getElementById("reset");
  button.addEventListener("click", () => {
    //resets score and counter back to 0
    score = 0;
    document.getElementById("scoreCounter").textContent = 0;
    console.log("game reset");
    // suffle cards and crete board again
    shuffle(cards);
    createBoard();
  });
};

shuffle(cards);
createBoard();
reset();
