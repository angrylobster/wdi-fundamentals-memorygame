var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var flipCard = function(cardID) {
	var flippedCard = cards[cardID];
	console.log("User flipped " + flippedCard.rank);
	cardsInPlay.push(flippedCard.rank);
	console.log(flippedCard.cardImage);
	console.log(flippedCard.suit);
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
