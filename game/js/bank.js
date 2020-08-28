function Bank() {
	this.gold = PLAYER_STARTING_NUMBER.GOLD;
	this.currency = [];
	this.commodities = [];

	this.init = () => {
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			this.currency.push(PLAYER_STARTING_NUMBER.CURRENCY);
		};

		for (let i = 0; i < COMMODITIES.length; i++) {
			this.commodities.push(PLAYER_STARTING_NUMBER.COMMODITIES);
		};	
	};
};

