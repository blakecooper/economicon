function Game() {
	this.mandatesDeck = [];
	this.globalEventsDeck = [];
	this.currentGlobalEvent = "";
	this.turnsRemainingInCurrentGlobalEvent = 0;
	this.globalEventsCompleted = 0;
	this.globalEventsSatisfied = [];	
	this.players = [];
	this.player = "";
	this.firstPlayer = "";
	this.commodityNames = [];
	this.market = new Market();
	this.phase = DRAW;
	this.thisTurn = "";	
	this.init = () => {

		for (let i = 0; i < DATA_MANDATES.length; i++) {
			let card = new Card(
				DATA_MANDATES[i][NAME],
				DATA_MANDATES[i][TEXT],
				DATA_MANDATES[i][SATISFIED],
			);

			this.mandatesDeck.push(card);
		};
	
		for (let i = 0; i < DATA_GLOBAL_EVENTS.length; i++) {
			let card = new Card(
				DATA_GLOBAL_EVENTS[i][NAME],
				DATA_GLOBAL_EVENTS[i][TEXT],
				DATA_GLOBAL_EVENTS[i][SATISFIED],
			);

			card.positive = DATA_GLOBAL_EVENTS[i][POSITIVE]
			card.negative = DATA_GLOBAL_EVENTS[i][NEGATIVE];
			card.turnsLeft = DATA_GLOBAL_EVENTS[i][TURNS_LEFT];
			
			this.globalEventsDeck.push(card);
		};
			
		this.currentGlobalEvent = drawGlobalEvent();
		//	After troubleshooting replace the above line with this: this.globalEvent = this.globalEventsDeck[Math.floor(Math.random() * this.globalEventsDeck.length)];
		this.turnsRemainingInCurrentGlobalEvent = this.currentGlobalEvent.turnsLeft;
		this.turnsRemainingInCurrentGlobalEvent--;
		
		let nationNames = [];
		let currencyNames = [];

		let nations = NATIONS;

		for (let i = 0; i < NUMBER_PLAYERS; i++) {
		
		let randomNationIndex = Math.floor(Math.random() * NATIONS.length);
		
			let player = new Player(
				NATIONS[randomNationIndex][0],
				NATIONS[randomNationIndex][1],
				NATIONS[randomNationIndex][2],
				NATIONS[randomNationIndex][3],
			);

			if (unitAlreadyExists(player.name, nationNames)) {
				i--;
			} else {	
				for (let j = 0; j < STARTING_MANDATES; j++) {
					player.mandates.push(drawMandate());
				};

				player.bank = new Bank();
				player.bank.init();
				player.bank.currency[i] = PLAYER_STARTING_NUMBER.NATIVE_CURRENCY;
			
				this.players.push(player);
	
				nationNames.push(player.name);
				currencyNames.push(player.currency);
			};	
		};
			
		this.player = this.players[Math.floor(Math.random() * NUMBER_PLAYERS)];	
		this.firstPlayer = this.player;
	
		this.commodityNames = COMMODITIES;
			
		this.market.init();	
	};
};

let game = new Game();
let gameStack = new Stack();
