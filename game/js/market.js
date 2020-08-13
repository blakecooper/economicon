function Market() {
	this.gold = MARKET_STARTING_NUMBER.GOLD;
	this.currency = [];
	this.commodities = [];

	this.init = function() {
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			this.currency.push(MARKET_STARTING_NUMBER.CURRENCY);
		};

		for (let i = 0; i < NUMBER_COMMODITIES; i++) {
			this.commodities.push(MARKET_STARTING_NUMBER.COMMODITIES);
		};	
	};
};

