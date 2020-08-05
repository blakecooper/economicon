function Game() {
	this.mandates = initCards(MANDATE);
	this.globalEventsDeck = initCards(GLOBAL_EVENT);
	//TODO: do we need these troubleshooting settings still?
	this.numberGlobalEvents = 0;
	this.globalEvent = this.globalEventsDeck[0];
//	this.globalEvent = this.globalEventsDeck[Math.floor(Math.random() * this.globalEventsDeck.length)];

	this.players = initPlayers(NUMBER_PLAYERS,this.mandates);
	this.player = this.players[Math.floor(Math.random() * NUMBER_PLAYERS)];
	this.firstPlayer = this.player;
	this.market = initMarket();

	this.commodityNames = initCommodityNames();

	this.phase = DRAW;
	this.turnsRemainingInGlobalObjective = this.globalEvent.turnsLeft;
	
	//some things needed for undo/tracking/global event resolution
	this.thisTurn = "";

	this.getIndexOfCommodity = function(commodity) {
		for (let i = 0; i < this.commodityNames.length; i++) {
			if (commodity.toUpperCase() === this.commodityNames[i].toUpperCase()) {
				return i;
			};
		};
		return -1;
	};

	this.copy = function() {
		//TODO: OPTIMIZE THIS so, instead of copying everything, we only copy what we need
		let newCopy = new Game();
		let key;

		for (key in this) {
			newCopy[key] = this[key];
		};

		return newCopy;
	};
		
	this.mine = function() {
		this.player.bank.gold += 2;
		ui.postNotice("You mined 2 gold.");
		this.thisTurn = "MINE";
		gameStack.push(this.copy());
		ui.updateCurrentPlayer(game);
		disableGenerateButtons();
		disableTradingButtons();
		enableNextButton();
	};

	this.print = function() {
		let gold = this.player.bank.gold;
		let nativeCurrency = this.player.bank.currency[getIndexOfCurrentPlayer(game)];

		if (gold < 1) {
			ui.postNotice("You cannot afford to print (requires 1 gold).");
		} else {
			if (gold <= nativeCurrency) {
				ui.postNotice("Printing requires more gold than native currency.");
			} else {
				let difference = gold - nativeCurrency;
				this.player.bank.currency[getIndexOfCurrentPlayer(game)] += difference;
				this.player.gold -= 1;
				ui.postNotice("You printed " + difference + " " + this.player.nativeCurrency + ".");
				this.thisTurn = "PRINT";
		gameStack.push(this.copy());
				ui.updateCurrentPlayer(game);
				disableGenerateButtons();
				disableTradingButtons();
				enableNextButton();
			};
		};
	};
	this.draw = function() {
		this.player.mandates.splice(0,0,drawCard(this.mandates));
		//modal appears that shows new mandate along with existing mandate
		ui.updateDiscardModal(this);
		this.thisTurn = "DRAW";
		gameStack.push(this.copy());
			//player must discard one
			//lights up on click
			//message: "discard this mandate?"
			//proceed button lights up
			//cancel resets the whole thing
	};
	this.discardMandate = function() {
		for (let i = 0; i < ui.drawRadioButtons.children.length; i++) {
			if ($("mandateRadio" + i).checked) {
				this.player.mandates.splice(i,1);
			};
		};
		ui.updateCurrentPlayer(game);
		disableGenerateButtons();
		disableTradingButtons();
		enableNextButton();
	};
	this.checkGlobalEventAndDisplayResult = function() {
		if (this.globalEvent.satisfied()) {
			this.globalEvent.positive();
		} else {
			this.globalEvent.negative();
		};
	};
	this.getTypeOfResourceFromName = function(name) {
		if (name.toUpperCase() === "GOLD") {
			return "Gold";
		} else {
			for (let i = 0; i < NUMBER_COMMODITIES; i++) {
				if (name.toUpperCase() === this.commodityNames[i].toUpperCase()) {
					return COMMODITY;
				};
			};

			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				if (name.toUpperCase() === this.players[i].nativeCurrency.toUpperCase()) {
					return CURRENCY;
				};
			};
		};
		return -1;
	};
};

function unitAlreadyExists(newUnit, unitList) {
	for (let i = 0; i < unitList.length; i++) {
		if (newUnit === unitList[i]) {
			return true;
		};
	};

	return false;
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
			names.push(RANDOM.COMMODITY[i]);
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

	for (let i = 0; i < game.commodityNames.length; i++) {
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
	game.turnsRemainingInGlobalObjective--;
		gameStack.push(game.copy());
	ui.refresh(game);
	disableGenerateButtons();
	disableTradingButtons();
	turn();
};

function advance() {
	if (game.phase === ACTION2 && game.turnsRemainingInGlobalObjective > 0) {
		game.player = game.players[getNextPlayer(game)];
		if (game.player === game.firstPlayer) {
			game.turnsRemainingInGlobalObjective--;
		};
		game.phase = ACTION1;
	} else if (game.phase === ACTION2 && game.turnsRemainingInGlobalObjective < 1 && (game.player !== game.firstPlayer)) {
		game.player = game.players[getNextPlayer(game)];
		if (game.player === game.firstPlayer) {
			game.phase = RESOLVE;
		};
	} else {
		game.lastTurn = game.phase;
		game.phase++;
	};

	ui.refresh(game);
	turn();
};

function enableNextButton() {
	ui.advanceButton.disabled = false;
};

function disableNextButton() {
	ui.advanceButton.disabled = true;
};

function enableGenerateButtons() {
	ui.produce.disabled = false;
	ui.mine.disabled = false;
	ui.print.disabled = false;
	ui.draw.disabled = false;
};

function enableTradingButtons() {
	ui.trade.disabled = false;
};

function disableGenerateButtons() {
	ui.produce.disabled = true;
	ui.mine.disabled = true;
	ui.print.disabled = true;
	ui.draw.disabled = true;
};

function disableTradingButtons() {
	ui.trade.disabled = true;
};

function turn() {

	if (game.numberGlobalEvets >= NUMBER_EVENTS_PER_GAME) {
		winner = getWinner();
	} else {
		ui.advanceButton.disabled = true;
		if (game.phase === DRAW) {
			game.globalEvent = drawCard(game.globalEventsDeck);
			ui.updateGlobalEvent(game);
			ui.advanceButton.disabled = false;
		} else if (game.phase === ACTION1) {
			enableGenerateButtons();
		} else if (game.phase === ACTION2) {
			enableGenerateButtons();
			enableTradingButtons();
		} else if (game.phase === RESOLVE) {
			disableGenerateButtons();
			disableTradingButtons();
			disableNextButton();
			game.checkGlobalEventAndDisplayResult();
		} else {
		};
	};
};

function updateProductionCost(numberProduced) {
	let valueCountOfPayment = getValueCount(ui.producePayment.value);
	let numberOfCommodityToProduce = parseInt(ui.produceNumber.innerHTML);
	let cost = (numberOfCommodityToProduce/parseInt(getValueCount(ui.produceCommodity.value))) * valueCountOfPayment;
	ui.produceCost.innerHTML = cost;	
	if (ui.producePayment.value === "Gold" && cost > game.player.bank.gold) {
		ui.produceCost.style.color= "red";
	} else if (ui.producePayment.value === game.player.nativeCurrency && cost > game.player.bank.currency[getIndexOfCurrentPlayer(game)]) {
		ui.produceCost.style.color= "red";
	} else {
		ui.produceCost.style.color= "black";	
	};
};

function isCommodity(unit) {
	for (let i = 0; i < NUMBER_COMMODITIES; i++) {
		if (game.commodityNames[i] === unit) {
			return true;
		};
	};

	return false;
};

function isCurrency(unit) {
	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		if (game.players[i].nativeCurrency === unit) {
			return true;
		};
	};

	return false;
};

function processTrade() {
	let tradeProcessed = false;
	if (isCommodity($('tradeWithSelect').value)) {
		for (let i = 0; i < NUMBER_COMMODITIES; i++) {
			if (game.commodityNames[i] === $("tradeWithSelect").value) {
				if (game.player.bank.commodities[i] >= ui.getValueFromInnerHTML($("tradeWithNumber"))) {
					if ($("tradeForSelect").value === "Gold") {
						if (game.market.gold >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
							game.player.bank.commodities[i] -= ui.getValueFromInnerHTML($("tradeWithNumber"));
							game.market.commodities[i] += ui.getValueFromInnerHTML($("tradeWithNumber"));

							game.market.gold -= ui.getValueFromInnerHTML($("numberTradedFor"));
							game.player.bank.gold += ui.getValueFromInnerHTML($("numberTradedFor"));
							tradeProcessed = true;
						} else {
							$("warningTrade").style.display = "inline";
						};
					} else {
						for (let j = 0; i < NUMBER_COMMODITIES; j++) {
							if ($("tradeForSelect").value === game.commodityNames[j]) {
								if (game.market.commodities[j] >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
									game.player.bank.commodities[i] -= ui.getValueFromInnerHTML($("tradeWithNumber"));
									game.market.commodities[i] += ui.getValueFromInnerHTML($("tradeWithNumber"));

									game.market.commodities[j] -= ui.getValueFromInnerHTML($("numberTradedFor"));
									game.player.bank.commodities[j] += ui.getValueFromInnerHTML($("numberTradedFor"));
						
									tradeProcessed = true;
								} else {
									$("warningTrade").style.display = "inline";
								};
							};
						};
					};
				} else {
					$("warningTrade").style.display = "inline";
				};
			};
		};
	} else if (isCurrency($('tradeWithSelect').value)) {
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			if (game.players[i].nativeCurrency === $("tradeWithSelect").value) {
				if (game.player.bank.currency[i] >= ui.getValueFromInnerHTML($("tradeWithNumber"))) {
					if ($("tradeForSelect").value === "Gold") {
						if (game.market.gold >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
							game.player.bank.currency[i] -= ui.getValueFromInnerHTML($("tradeWithNumber"));
							game.market.currency[i] += ui.getValueFromInnerHTML($("tradeWithNumber"));

							game.market.gold -= ui.getValueFromInnerHTML($("numberTradedFor"));
							game.player.bank.gold += ui.getValueFromInnerHTML($("numberTradedFor"));
						
							tradeProcessed = true;
						} else {
							$("warningTrade").style.display = "inline";
						};
					} else {
						for (let j = 0; j < NUMBER_PLAYERS; j++) {
							if ($("tradeForSelect").value === game.players[j].nativeCurrency) {
								if (game.market.currency[j] >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
									game.player.bank.currency[i] -= ui.getValueFromInnerHTML($("tradeWithNumber"));
									game.market.currency[i] += ui.getValueFromInnerHTML($("tradeWithNumber"));

									game.market.currency[j] -= ui.getValueFromInnerHTML($("numberTradedFor"));
									game.player.bank.currency[j] += ui.getValueFromInnerHTML($("numberTradedFor"));
						
									tradeProcessed = true;
								} else {
									$("warningTrade").style.display = "inline";
								};
							};
						};
					};
				} else {
					$("warningTrade").style.display = "inline";
				};
			};
		};
	} else if ($("tradeWithSelect").value === "Gold") {
		if (game.player.bank.gold >= ui.getValueFromInnerHTML($("tradeWithNumber"))) {
			if ($("tradeForSelect").value === "Gold") {
				if (game.market.gold >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
					//nothing happens if you trade gold for gold
				} else {
					$("warningTrade").style.display = "inline";
				};
			} else if (isCommodity($("tradeForSelect").value)) {
				for (let i = 0; i < NUMBER_COMMODITIES; i++) {
					if ($("tradeForSelect").value === game.commodityNames[i]) {
						if (game.market.commodities[i] >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
							game.player.bank.gold -= ui.getValueFromInnerHTML($("tradeWithNumber"));
							game.market.gold += ui.getValueFromInnerHTML($("tradeWithNumber"));

							game.market.commodities[i] -= ui.getValueFromInnerHTML($("numberTradedFor"));
							game.player.bank.commodities[i] += ui.getValueFromInnerHTML($("numberTradedFor"));
						
							tradeProcessed = true;
						} else {
							$("warningTrade").style.display = "inline";
						};
					};
				};
			} else if (isCurrency($("tradeForSelect").value)) {
				for (let i = 0; i < NUMBER_PLAYERS; i++) {
					if ($("tradeForSelect").value === game.players[i].nativeCurrency) {
						if (game.market.currency[i] >= ui.getValueFromInnerHTML($("numberTradedFor"))) {
							game.player.bank.gold -= ui.getValueFromInnerHTML($("tradeWithNumber"));
							game.market.gold += ui.getValueFromInnerHTML($("tradeWithNumber"));

							game.market.currency[i] -= ui.getValueFromInnerHTML($("numberTradedFor"));
							game.player.bank.currency[i] += ui.getValueFromInnerHTML($("numberTradedFor"));
						
							tradeProcessed = true;
						} else {
							$("warningTrade").style.display = "inline";
						};
					};
				};
			} else {
			};
		} else {
			$("warningTrade").style.display = "inline";
		};
	} else {
	};

	if (tradeProcessed) {

		game.thisTurn = "TRADE " + 
			ui.getValueFromInnerHTML($("tradeWithNumber")) + " " + 
			$("tradeWithSelect").value + " FOR " + 
			ui.getValueFromInnerHTML($("numberTradedFor")) + " " +
			$("tradeForSelect").value;

		gameStack.push(game.copy());
		
		ui.updateCurrentPlayer(game);
		ui.updateMarket(game);

		disableGenerateButtons();
		disableTradingButtons();
		enableNextButton();	
	};
};

function processProduction() {
	let amountOfPaymentInBank = -1;
	let cost = parseInt(ui.produceCost.innerHTML);
	let amountToProduce = parseInt(ui.produceNumber.innerHTML);
	
	if (ui.producePayment.value === "Gold") {
		amountOfPaymentInBank = game.player.bank.gold;
	} else {
		amountOfPaymentInBank = game.player.bank.currency[getIndexOfCurrentPlayer(game)];
	};

	if (amountOfPaymentInBank < cost) {
		ui.warningProduce.style.display = "inline";
	} else {
		if (ui.producePayment.value === "Gold") {
			game.player.bank.gold -= cost;
			game.market.gold += cost;
		} else {
			game.player.bank.currency[getIndexOfCurrentPlayer(game)] -= cost;
			game.market.currency[getIndexOfCurrentPlayer(game)] += cost;
		};
	
		game.player.bank.commodities[getIndexOfCommodity(ui.produceCommodity.value)] += amountToProduce;

	game.thisTurn = "PRODUCE " + 
		amountToProduce + " " +
		game.commodityNames[getIndexOfCommodity(ui.produceCommodity.value)] + " WITH " +
		cost + " " + ui.producePayment.value;

		gameStack.push(game.copy());
	
	ui.updateCurrentPlayer(game);
	ui.updateMarket(game);

	disableGenerateButtons();
	enableNextButton();	
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
let gameStack = new Stack();
