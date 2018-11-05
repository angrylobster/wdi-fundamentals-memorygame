var cards = ["queen", "king", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
};

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
		}
	}
};

flipCard(0);
flipCard(2);
