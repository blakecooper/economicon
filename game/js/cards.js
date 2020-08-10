function Card(name, text, satisfied, positive) {
	this.name = name;
	this.text = text;
	this.satisfied = satisfied;
	this.positive = positive;
	this.negative = -1;
	this.turnsLeft = -1;
};

function initCards(type) {
	let cards = [];
	let data;

	if (type === MANDATE) {
		data = DATA_MANDATES;
	} else if (type === GLOBAL_EVENT) {
		data = DATA_GLOBAL_EVENTS;
	} else {};

	for (let i = 0; i < data.length; i++) {
			let card = new Card(
				data[i][NAME],
				data[i][TEXT],
				data[i][SATISFIED],
			);

			if (type === GLOBAL_EVENT) {
				card.positive = data[i][POSITIVE]
				card.negative = data[i][NEGATIVE];
				card.turnsLeft = data[i][TURNS_LEFT];
			};
			cards.push(card);
		};
	return cards;
};

function drawCard(cards) {
	return cards[Math.floor(Math.random() * cards.length)];
};
