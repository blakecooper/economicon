function Market() {
	this.gold = MARKET_STARTING_NUMBER.GOLD;
	this.currency = [];
	this.commodities = [];
};

function initMarket() {
	let market = new Market();
	
	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		market.currency.push(MARKET_STARTING_NUMBER.CURRENCY);
	};

	for (let i = 0; i < NUMBER_COMMODITIES; i++) {
		market.commodities.push(MARKET_STARTING_NUMBER.COMMODITIES);
	};
	
	return market;
};
