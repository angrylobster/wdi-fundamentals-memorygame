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

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	var flippedCard = cards[cardId];

	console.log("User flipped " + flippedCard.rank);
	console.log(flippedCard.cardImage);
	console.log(flippedCard.suit);

	cardsInPlay.push(flippedCard.rank);

	checkForMatch(cardId);
};

var checkForMatch = function(cardId) {
	var cardImageSrc = cardId.cardImage;
	document.getElementsByTagName('img')[cardId].setAttribute("src", cards[cardId].cardImage);
	//document.getElementById('game-board')[cardId].getAttribute(src);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
		}
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
