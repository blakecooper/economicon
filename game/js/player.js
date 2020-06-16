function Player(name, nativeCurrency) {
	this.name: name;
	this.nativeCurrency: nativeCurrency;
	this.victoryPoints: STARTING_VICTORY_POINTS;
	this.volatility: STARTING_VOLATILITY;
	this.mandates: [];
	this.bank: [];
};

function initPlayers(numberPlayers, mandatesDeck) {
	let players = [];

	for (let i = 0; i < numberPlayers; i++) {
		let player = new Player(
			RANDOM.GET("NATION");
			RANDOM.GET("CURRENCY");
		);

	 	for (let j = 0; j < STARTING_MANDATES; j++) {
			player.mandates.push(drawCard(mandatesDeck));
		};

		player.bank = initBank(i);

		players.push(player);
	};

	return players;
};
