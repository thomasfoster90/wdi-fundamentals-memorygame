var cards= ("queen", "queen", "king", "king")
var cardOne= "queen";
var cardTwo= "queen";
var cardThree= "king";
var cardFour= "king";

// if (cardOne === cardTwo) {
// alert("You found a match! (cardOne = cardTwo) " + cardOne + " " + cardTwo);
// } else {
// alert ("Sorry, try again. cardOne <> cardTwo " + cardOne + " " + cardTwo);
// }
// if (cardOne === cardThree) {
// alert("You found a match! (cardOne = cardThree) " + cardOne + " " + cardThree);
// } else {
// alert ("Sorry, try again. cardOne <> cardThree " + cardOne + " " + cardThree);
// }
// if (cardThree === cardFour) {
// alert("You found a match! (cardThree = cardFour) " + cardThree + " " + cardFour);
// } else {
// alert ("Sorry, try again. cardThree <> cardFour " + cardThree + " " + cardFour );
// }
// if (cardTwo === cardThree) {
// alert("You found a match! (cardTwo= cardThree) " + cardTwo + " " + cardThree );
// } else {
// alert ("Sorry, try again. cardTwo <> cardThree " + cardTwo + " " + cardThree );
// }
// if (cardTwo === cardFour) {
// alert("You found a match! (cardTwo= cardFour) " + cardTwo + " " + cardFour );
// } else {
// alert ("Sorry, try again. cardTwo <> cardFour " + cardTwo + " " + cardFour);
// }
// if (cardThree === cardFour) {
// alert("You found a match! (cardThree= cardFour) " + cardThree + " " + cardFour);
// } else {
// alert ("Sorry, try again. cardThree <> cardFour " + cardThree + " " + cardFour);
// }

var board = document.getElementById('game-board');
  function createBoard() {
for (var i=0; i<cards.length; i++) {
  var cardElement = document.createElement('div');
 cardElement.className = 'card';
};
