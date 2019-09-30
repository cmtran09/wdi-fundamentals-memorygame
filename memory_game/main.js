let cards = ["queen", "king", "queen", "king"];
let cardsInPlay = [];

const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

const flipCard = cardId => {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
};

flipCard(1);

// let cardOne = cards[0];
// let cardTwo = cards[3];

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

// if (cardsInPlay.length === 2) {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else alert("Sorry, try again");
// }
