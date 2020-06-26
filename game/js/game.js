function Game() {
	this.mandates = initCards(MANDATE);
	this.globalEventsDeck = initCards(GLOBAL_EVENT);
	this.numberGlobalEvents = 0;
	this.globalEvent = this.globalEventsDeck[0];
//	this.globalEvent = this.globalEventsDeck[Math.floor(Math.random() * this.globalEventsDeck.length)];

	this.players = initPlayers(NUMBER_PLAYERS,this.mandates);
	this.player = this.players[Math.floor(Math.random() * NUMBER_PLAYERS)];

	this.market = initMarket();

	this.commodityNames = initCommodityNames();

	this.phase = DRAW;
	this.numberTurns = 0;
};

function getValueCount(unit) {
	if (market[unit] < 5) {
		return 1;
	} else {
		return 1 + (market[unit] / 5);
	};
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

function getIndexOfCurrentPlayer(game) {
	for (let i = 0; i < game.players.length; i++) {
		if (game.players[i].name === game.player.name) {
			return i;
		};
	};

	return -1;
};

function getIndexOfCommodity(commodity) {
	commodity = commodity.toUpperCase();

	for (let i = 0; i < game.commodityNames; i++) {
		if (commodity === game.commodityNames[i].toUpperCase()) {
			return i;
		};
	};
	
	return -1;
};

function getNextPlayer(game) {
	let nextPlayerIndex = getIndexOfCurrentPlayer(game) + 1;

	if (nextPlayerIndex > 3) {
		nextPlayerIndex = 0;
	};

	return nextPlayerIndex;
};

function init() {
	UI.refresh(game);

	turn();
};

function advance() {
	if (game.phase === ACTION2 && numberTurns < globalEvent.turns) {
		game.player = getNextPlayer(game);
		game.phase = ACTION1;
	} else if (game.phase === ACTION2 && numberTurns >= globalEvent.turns) {
		game.player = getNextPlayer(game);
		game.phase = RESOLVE;
	} else {
		game.phase++;
	};

	UI.refresh(game);
	turn();
};

function enableGenerateButtons() {
	$("produce").disabled = false;
	$("mine").disabled = false;
	$("print").disabled = false;
	$("draw").disabled = false;
};

function enableTradingButtons() {
	$("tradeCommodities").disabled = false;
	$("tradeCurrency").disabled = false;
};

function disableTurnButtons() {
	$("produce").disabled = true;
	$("mine").disabled = true;
	$("print").disabled = true;
	$("draw").disabled = true;
	$("tradeCommodities").disabled = true;
	$("tradeCurrency").disabled = true;
};

function turn() {

	if (game.numberGlobalEvets >= NUMBER_EVENTS_PER_GAME) {
		winner = getWinner();
	} else {
		$("advanceButton").disabled = true;
		if (game.phase === DRAW) {
			game.globalEvent = drawCard(game.globalEventsDeck);
			updateGlobalEvent(game);
		} else if (game.phase === ACTION1) {
			enableGenerateButtons();
		} else if (game.phase === ACTION2) {
			enableTradingButtons();
		} else if (game.phase === RESOLVE) {
			disableTurnButtons();
		} else {
		};
		$("advanceButton").disbled = false;
	};
};

function updateProductionCost(numberProduced) {
	let valueCountOfPayment = getValueCount($("producePayment").value);
	let numberOfCommodityToProduce = parseInt($("produceNumber").innerHTML);
	let cost = (numberOfCommodityToProduce/parseInt(getValueCount($("produceCommodity").value))) * valueCountOfPayment;
	$("produceCost").innerHTML = cost;	
	if ($("producePayment").value === "Gold" && cost > game.player.bank.gold) {
		$("produceCost").style.color= "red";
	} else if ($("producePayment").value === game.player.nativeCurrency && cost > game.player.bank.currency[getIndexOfCurrentPlayer(game)]) {
		$("produceCost").style.color= "red";
	} else {
		$("produceCost").style.color= "black";	
	};
};

function processProduction() {
	let amountOfPaymentInBank = -1;
	let cost = parseInt($("produceCost").innerHTML);
	let amountToProduce = parseInt($("produceNumber"));
	
	if ($("producePayment").value === "Gold") {
		amountOfPaymentInBank = game.player.bank.gold;
	} else {
		amountOfPaymentInBank = game.player.bank.currency[getIndexOfCurrentPlayer(game)];
	};

	if (amountOfPaymentInBank < cost) {
		$("warningProduce").style.display = "inline";
	} else {
		if ($("producePayment").value === "Gold") {
			game.player.bank.gold -= cost;
			game.market.gold += cost;
		} else {
			game.player.bank.currency[getIndexOfCurrentPlayer(game)] -= cost;
			game.market.currency[getIndexOfCurrentPlayer(game)] += cost;
		};
	
		game.player.bank.currency[getIndexOfCommodity($("produceCommodity").value)] += amountToProduce;

	advance();	
	};
};

function getValueCount(item) {
	item = item.toUpperCase();
	let retVal;

	if (item === "GOLD") {
		retVal = Math.floor(game.market.gold / 5) + 1;	
	} else {
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			if (item === game.players[i].nativeCurrency.toUpperCase()) {
				retVal = Math.floor(game.market.currency[i] / 5) + 1;
			};
		};

		for (let i = 0; i < NUMBER_COMMODITIES; i++) {
			if (item === game.commodityNames[i].toUpperCase()) {
				retVal = Math.floor(game.market.commodities[i] / 5) + 1;
			};
		};
	};
	return retVal;
};


let game = new Game();
