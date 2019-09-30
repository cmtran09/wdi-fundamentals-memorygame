let cards = ["queen", "queen", "queen", "queen"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else alert("Sorry, try again");
}
