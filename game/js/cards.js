function Card(name, text, satisfied, outcome) {
	this.name = name;
	this.text = text;
	this.satisfied = satisfied;
	this.outcome = outcome;
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
				data[i][OUTCOME]
			);

			if (type === GLOBAL_EVENT) {
				card.turnsLeft = data[i][TURNS_LEFT];
			};
			cards.push(card);
		};
	return cards;
};

function drawCard(cards) {
	return cards[Math.floor(Math.random() * cards.length)];
};
