function Bank() {
	this.gold = PLAYER_STARTING_NUMBER.GOLD;
	this.currency = [];
	this.commodities = [];
};

function initBank(playerNumber) {
	let bank = new Bank();

	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		bank.currency.push(PLAYER_STARTING_NUMBER.CURRENCY);
	};

	for (let i = 0; i < NUMBER_COMMODITIES; i++) {
		bank.commodities.push(PLAYER_STARTING_NUMBER.COMMODITIES);
	};

	bank.currency[playerNumber] = PLAYER_STARTING_NUMBER.NATIVE_CURRENCY;	
	
	return bank;
};
