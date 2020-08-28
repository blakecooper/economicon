/* These are functions that operate between objects, usually updating the UI based on the Game object and vice-versa. */

function advance() {
	if (game.phase === ACTION2 && game.turnsRemainingInCurrentGlobalEvent > 0) {
		game.player = game.players[getNextPlayer()];
		if (game.player === game.firstPlayer) {
			game.turnsRemainingInCurrentGlobalEvent--;
		};
		game.phase = ACTION1;
	} else if (game.phase === ACTION2 && game.turnsRemainingInCurrentGlobalEvent < 1 && (game.player !== game.firstPlayer)) {
		game.player = game.players[getNextPlayer()];
		if (game.player === game.firstPlayer) {
			game.phase = RESOLVE;
		};
	} else if (game.phase === RESOLVE) {
		if (game.currentGlobalEventsCompleted < NUMBER_EVENTS_PER_GAME) {
			game.phase = DRAW;
		} else {
			ui.postNotice("The winner is: " + getWinningPlayer());
			ui.disableNextButton();
		};
	} else {
		game.lastTurn = game.phase;
		game.phase++;
	};

	ui.refresh(game);
	turn();
};

function checkGlobalEventAndDisplayResult() {
	if (game.currentGlobalEvent.satisfied()) {
		game.currentGlobalEvent.positive();
		game.currentGlobalEventSatisfied.push(true);
	} else {
		game.currentGlobalEvent.negative();
		game.currentGlobalEventSatisfied.push(false);
	};
	game.currentGlobalEventsCompleted++;
};
	
function checkPlayerMandates() {
	let satisfiedMandates = [];
	for (let i = 0; i < game.player.mandates.length; i++) {
		if (game.player.mandates[i].satisfied()) {
			satisfiedMandates.push(game.player.mandates[i]);
		};
	};
	
	if (satisfiedMandates.length > 0) {
		ui.updateMandatesModal(game, satisfiedMandates);
		jQuery('#claimMandateModal').modal({ show: true });
	};
};

function claimAchievement() {
	game.player.victoryPoints++;
	ui.postNotice(game.player.name + " claimed an achievement!");
};


function copyGame() {
	let newCopy = new Game();
	let key;

	for (key in game) {
		newCopy[key] = game[key];
	};

	return newCopy;
	};

function copyGameStack() {
	let newCopy = new Stack();

	for (let i = 0; i < gameStack.items.length; i++) {
		newCopy.items[i] = gameStack.items[i];
	};

	return newCopy;
};

function discardMandate() {
	for (let i = 0; i < ui.drawRadioButtons.children.length; i++) {
		if ($("mandateRadio" + i).checked) {
			game.player.mandates.splice(i,1);
		};
	};

	ui.updateAfterAction();
};
	
function draw() {
	game.player.mandates.splice(0,0,drawMandate());
	ui.updateDiscardModal(game);
	game.thisTurn = "DRAW";
	checkPlayerMandates();
	gameStack.push(copyGame());
};

function drawGlobalEvent() {
	let randomIndex = Math.floor(Math.random() * game.globalEventsDeck.length);
	let newGlobalEvent = game.globalEventsDeck[randomIndex];
	
	if (game.globalEventsDeck.length > 1) {
		game.globalEventsDeck.splice(randomIndex,1);
	};
	
	return newGlobalEvent;
};

function drawMandate() {
	let randomIndex = Math.floor(Math.random() * game.mandatesDeck.length);
	let newMandate = game.mandatesDeck[randomIndex];
	
	if (game.mandatesDeck.length > 1) {
		game.mandatesDeck.splice(randomIndex,1);
	};
	
	return newMandate;
};

function drawMandatesForEachPlayer() {
	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		game.players[i].mandates.push(drawMandate());
	};
};

function getIndexOfCommodity(commodity) {
	for (let i = 0; i < game.commodityNames.length; i++) {
		if (commodity.toUpperCase() === game.commodityNames[i].toUpperCase()) {
			return i;
		};
	};
	return -1;
};

function getIndexOfCurrentPlayer() {
	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		if (game.players[i] === game.player) {
			return i;
		};
	};
	return -1;
};
	
function getNextPlayer() {
	return (getIndexOfCurrentPlayer() + 1) % NUMBER_PLAYERS;
};
	
function getTypeOfResourceFromName(name) {
	if (name.toUpperCase() === "GOLD") {
		return "Gold";
	} else {
		for (let i = 0; i < COMMODITIES.length; i++) {
			if (name.toUpperCase() === game.commodityNames[i].toUpperCase()) {
				return COMMODITY;
			};
		};

		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			if (name.toUpperCase() === game.players[i].currency.toUpperCase()) {
				return CURRENCY;
			};
		};
	};
	return -1;
};

function getValueCount(unit) {	
	unit = unit.toUpperCase();
	let retVal;

	if (unit === "GOLD") {
		retVal = Math.floor(game.market.gold / 5) + 1;	
	} else {
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			if (unit === game.players[i].currency.toUpperCase()) {
				retVal = Math.floor(game.market.currency[i] / 5) + 1;
			};
		};

		for (let i = 0; i < COMMODITIES.length; i++) {
			if (unit === game.commodityNames[i].toUpperCase()) {
				retVal = Math.floor(game.market.commodities[i] / 5) + 1;
			};
		};
	};
	return retVal;
};

function getWinner(players) {
	let winningScore = 0;
	let winningPlayer;

	for (let i = 0; players.length; i++) {
		if (players[i].victoryPoints > winningScore && players[i].volatility < MAX_VOLATILITY) {
			winningScore = players[i].victoryPoints;
			winningPlayer = players[i];
		};
	};
	return winningPlayer;
};

function init() {
	game.init();
	gameStack.push(copyGame());
	
	ui.init();

	turn();
};

function isCommodity(unit) {
	for (let i = 0; i < COMMODITIES.length; i++) {
		if (game.commodityNames[i] === unit) {
			return true;
		};
	};

	return false;
};

function isCurrency(unit) {
	for (let i = 0; i < NUMBER_PLAYERS; i++) {
		if (game.players[i].currency === unit) {
			return true;
		};
	};

	return false;
};

function mine() {
		game.player.bank.gold += 2;
		game.thisTurn = "MINE";
		
		gameStack.push(copyGame());
		
		ui.postNotice("You mined 2 gold.");
		ui.updateAfterAction()		
		checkPlayerMandates();	
};

function print() {
	let gold = game.player.bank.gold;
	let currency = game.player.bank.currency[getIndexOfCurrentPlayer()];

	if (gold < 1) {
		ui.postNotice("You cannot afford to print (requires 1 gold).");
	} else {
		if (gold <=currency) {
			ui.postNotice("Printing requires more gold than native currency.");
		} else {
			let difference = gold - currency;
			game.player.bank.currency[getIndexOfCurrentPlayer()] += difference;
			game.player.gold -= 1;
			ui.postNotice("You printed " + difference + " " + game.player.currency + ".");
			game.thisTurn = "PRINT";
			checkPlayerMandates();
			gameStack.push(copyGame());
			ui.updateAfterAction();
		};
	};
};

function produce() {
	let amountOfPaymentInBank = -1;
	let cost = parseInt(ui.produceCost.innerHTML);
	let amountToProduce = parseInt(ui.produceNumber.innerHTML);
	
	if (ui.producePayment.value === "Gold") {
		amountOfPaymentInBank = game.player.bank.gold;
	} else {
		amountOfPaymentInBank = game.player.bank.currency[getIndexOfCurrentPlayer()];
	};

	if (amountOfPaymentInBank < cost) {
		ui.warningProduce.style.display = "inline";
	} else {
		if (ui.producePayment.value === "Gold") {
			game.player.bank.gold -= cost;
			game.market.gold += cost;
		} else {
			game.player.bank.currency[getIndexOfCurrentPlayer()] -= cost;
			game.market.currency[getIndexOfCurrentPlayer()] += cost;
		};
	
		game.player.bank.commodities[getIndexOfCommodity(ui.produceCommodity.value)] += amountToProduce;

	game.thisTurn = "PRODUCE " + 
		amountToProduce + " " +
		game.commodityNames[getIndexOfCommodity(ui.produceCommodity.value)] + " WITH " +
		cost + " " + ui.producePayment.value;

		checkPlayerMandates();
		gameStack.push(copyGame());
	
	ui.updateAfterAction();
	ui.postNotice("You produced " + amountToProduce + " " + game.commodityNames[getIndexOfCommodity(ui.produceCommodity.value)] + " for " + cost + " " + ui.producePayment.value);
	};
};

function trade() {
	let tradeProcessed = false;
	if (isCommodity($('tradeWithSelect').value)) {
		for (let i = 0; i < COMMODITIES.length; i++) {
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
						for (let j = 0; i < COMMODITIES.length; j++) {
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
			if (game.players[i].currency === $("tradeWithSelect").value) {
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
							if ($("tradeForSelect").value === game.players[j].currency) {
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
				for (let i = 0; i < COMMODITIES.length; i++) {
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
					if ($("tradeForSelect").value === game.players[i].currency) {
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

		checkPlayerMandates();
		gameStack.push(copyGame());
		
		ui.updateAfterAction();	
	};
};

function removeVolatility() {
	game.player.volatility--;
	ui.postNotice(game.player.name + " removed volatility!");
};
		
function turn() {
	if (game.numberGlobalEvets >= NUMBER_EVENTS_PER_GAME) {
		winner = getWinner();
	} else {
		ui.advanceButton.disabled = true;
		if (game.phase === DRAW) {
			game.currentGlobalEvent = drawGlobalEvent();
			ui.updateGlobalEvent(game);
			ui.advanceButton.disabled = false;
		} else if (game.phase === ACTION1) {
			ui.enableGenerateButtons();
		} else if (game.phase === ACTION2) {
			ui.enableGenerateButtons();
			ui.enableTradingButton();
		} else if (game.phase === RESOLVE) {
			ui.disableGenerateButtons();
			ui.disableTradingButton();
			ui.disableNextButton();
			checkGlobalEventAndDisplayResult();
			drawMandatesForEachPlayer();
			ui.enableNextButton();
		} else {
		};
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

function updateProductionCost(numberProduced) {
	let valueCountOfPayment = getValueCount(ui.producePayment.value);
	let numberOfCommodityToProduce = parseInt(ui.produceNumber.innerHTML);
	let cost = (numberOfCommodityToProduce/parseInt(getValueCount(ui.produceCommodity.value))) * valueCountOfPayment;
	ui.produceCost.innerHTML = cost;	
	if (ui.producePayment.value === "Gold" && cost > game.player.bank.gold) {
		ui.produceCost.style.color= "red";
	} else if (ui.producePayment.value === game.player.currency && cost > game.player.bank.currency[getIndexOfCurrentPlayer()]) {
		ui.produceCost.style.color= "red";
	} else {
		ui.produceCost.style.color= "black";	
	};
};
