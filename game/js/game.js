function getValueCount(unit) {
	if (market[unit] < 5) {
		return 1;
	} else {
		return 1 + (market[unit] / 5);
};

function initCommodityNames() {
	let names = [];
		for (let i = 0; i < NUMBER_COMMODITIES; i++) {
			names.push(RANDOM.GET("COMMODITY"));
		};
	return names;
};

function getWinner(players) {
	let winningScore = 0;
	let winningPlayer;

	for (let i = 0; players.length; i++) {
		if (players[i].victoryPoints > winningScore) {
			winningScore = players[i].victoryPoints;
			winninPlayer = players[i];
		};
	};
	return winningPlayer;
};

let mandates = initCards(MANDATES);

let globalEventsDeck = initCards(GLOBAL_EVENT);
let numberGlobalEvents = 0;
let globalEvent;

let players = initPlayers(NUMBER_PLAYERS);
let player = player[Math.random(NUMBER_PLAYERS)];

let market = initMarket();

let commodityNames = initCommodityNames();

let phase = DRAW;

function play() {
	while (numberGlobalEvents < NUMBER_EVENTS_PER_GAME) {
		if (phase === DRAW) {
			globalEvent = drawCard(globalEventsDeck);

		} else if (phase === TURN) {

		} else if (phase === RESOLVE) {
		} else {
			break;
		};
	};

	winner = getWinner();
};
