function Card(name, text, satisfied, outcome) {
	this.name: name;
	this.text: text;
	this.satisfied: satisfied;
	this.outcome: outcome;
};

function initCards(type) {
	let cards = [];
	let data;

	if (type === MANDATES) {
		data = DATA_MANDATES;
	} else if (type === GLOBAL_EVENT) {
		data = DATA_GLOBAL_EVENTS;
	} else {};

	for (let i = 0; i < data.length; i++) {
			let card = new CARD(
				data[i][NAME],
				data[i][TEXT],
				data[i][SATISFIED],
				data[i][OUTCOME]
			);
			cards.push(card);
		};
	return cards;
};

function drawCard(cards) {
	return cards[Math.random(cards.length)];
};
