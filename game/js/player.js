function Player(name, currency, symbol, color) {
	this.name =  name;
	this.currency = currency;
	this.currencySymbol = symbol;
	this.currencyColor = color;
	this.victoryPoints =  STARTING_VICTORY_POINTS;
	this.volatility =  STARTING_VOLATILITY;
	this.mandates =  [];
	this.bank =  [];
};

