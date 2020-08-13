function Player(name, nativeCurrency) {
	this.name =  name;
	this.nativeCurrency =  nativeCurrency;
	this.victoryPoints =  STARTING_VICTORY_POINTS;
	this.volatility =  STARTING_VOLATILITY;
	this.mandates =  [];
	this.bank =  [];
};

