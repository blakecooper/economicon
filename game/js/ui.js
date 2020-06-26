function UI() {
	this.currentPhase = $('currentPhase').innerHTML;
	this.currentPlayer = $('currentPlayer').innerHTML;
	
	this.globalEventName = $("globalEventName").innerHTML;
	this.globalEventText = $("globalEventText").innerHTML;
	this.globalEventTurnsLeft = $("globalEventTurnsLeft").innerHTML;	
	
	this.commodity1 = $("commodity1").innerHTML;
	this.commodity2 = $("commodity2").innerHTML;
	this.commodity3 = $("commodity3").innerHTML;
	this.goldValues = $("goldValues").innerHTML;
	this.commodity1Values = $("commodity1Values").innerHTML;
	this.commodity2Values = $("commodity2Values").innerHTML;
	this.commodity3Values = $("commodity3Values").innerHTML;
	this.currency1 = $("currency1").innerHTML;
	this.currency2 = $("currency2").innerHTML;
	this.currency3 = $("currency3").innerHTML;
	this.currency4 = $("currency4").innerHTML;
	this.currency1Values = $("currency1Values").innerHTML;
	this.currency2Values = $("currency2Values").innerHTML;
	this.currency3Values = $("currency3Values").innerHTML;
	this.currency4Values = $("currency4Values").innerHTML;
	
	this.bottomPlayerName = $("bottomPlayerName").innerHTML;
	this.bottomMandates = $("bottomMandates").innerHTML;
	this.bottomCommodity1 = $("bottomCommodity1").innerHTML;
	this.bottomCommodity2 = $("bottomCommodity2").innerHTML;
	this.bottomCommodity3 = $("bottomCommodity3").innerHTML;
	this.bottomGoldValues = $("bottomGoldValues").innerHTML;
	this.bottomCommodity1Values = $("bottomCommodity1Values").innerHTML;
	this.bottomCommodity2Values = $("bottomCommodity2Values").innerHTML;
	this.bottomCommodity3Values = $("bottomCommodity3Values").innerHTML;
	this.bottomCurrency1Values = $("bottomCurrency1Values").innerHTML;
	this.bottomCurrency2Values = $("bottomCurrency2Values").innerHTML;
	this.bottomCurrency3Values = $("bottomCurrency3Values").innerHTML;
	this.bottomCurrency4Values = $("bottomCurrency4Values").innerHTML;

	this.0PlayerName = $("0PlayerName").innerHTML;
	this.0Mandates = $("0Mandates").innerHTML;
	this.0Commodity1 = $("0Commodity1").innerHTML;
	this.0Commodity2 = $("0Commodity2").innerHTML;
	this.0Commodity3 = $("0Commodity3").innerHTML;
	this.0GoldValues = $("0GoldValues").innerHTML;
	this.0Commodity1Values = $("0Commodity1Values").innerHTML;
	this.0Commodity2Values = $("0Commodity2Values").innerHTML;
	this.0Commodity3Values = $("0Commodity3Values").innerHTML;
	this.0Currency1Values = $("0Currency1Values").innerHTML;
	this.0Currency2Values = $("0Currency2Values").innerHTML;
	this.0Currency3Values = $("0Currency3Values").innerHTML;
	this.0Currency4Values = $("0Currency4Values").innerHTML;
	
	this.1PlayerName = $("1PlayerName").innerHTML;
	this.1Mandates = $("1Mandates").innerHTML;
	this.1Commodity1 = $("1Commodity1").innerHTML;
	this.1Commodity2 = $("1Commodity2").innerHTML;
	this.1Commodity3 = $("1Commodity3").innerHTML;
	this.1GoldValues = $("1GoldValues").innerHTML;
	this.1Commodity1Values = $("1Commodity1Values").innerHTML;
	this.1Commodity2Values = $("1Commodity2Values").innerHTML;
	this.1Commodity3Values = $("1Commodity3Values").innerHTML;
	this.1Currency1Values = $("1Currency1Values").innerHTML;
	this.1Currency2Values = $("1Currency2Values").innerHTML;
	this.1Currency3Values = $("1Currency3Values").innerHTML;
	this.1Currency4Values = $("1Currency4Values").innerHTML;
		
	this.2PlayerName = $("2PlayerName").innerHTML;
	this.2Mandates = $("2Mandates").innerHTML;
	this.2Commodity1 = $("2Commodity1").innerHTML;
	this.2Commodity2 = $("2Commodity2").innerHTML;
	this.2Commodity3 = $("2Commodity3").innerHTML;
	this.2GoldValues = $("2GoldValues").innerHTML;
	this.2Commodity1Values = $("2Commodity1Values").innerHTML;
	this.2Commodity2Values = $("2Commodity2Values").innerHTML;
	this.2Commodity3Values = $("2Commodity3Values").innerHTML;
	this.2Currency1Values = $("2Currency1Values").innerHTML;
	this.2Currency2Values = $("2Currency2Values").innerHTML;
	this.2Currency3Values = $("2Currency3Values").innerHTML;
	this.2Currency4Values = $("2Currency4Values").innerHTML;
			
	this.updateBanner = function(game) {
		let phaseName = '';

		if (game.phase === DRAW) {
			phaseName = "Draw";
		} else if (game.phase === ACTION1) {
			phaseName = "Generate";
		} else if (game.phase === ACTION2) {
			phaseName = "Trade";
		} else if (game.phase === RESOLVE) {
			phaseName = "Resolve";
		} else {};

		this.currentPhase = "Phase: " + phaseName;
		this.currentPlayer = "Player: " + game.player.name;
	};
	
	this.updateCurrentPlayer = function(game) {
		this.bottomPlayerName = game.player.name;
		this.bottomMandates = "Mandates: " + game.player.mandates.length;
		this.bottomCommodity1 = game.commodityNames[0];
		this.bottomCommodity2 = game.commodityNames[1];
		this.bottomCommodity3 = game.commodityNames[2];
		this.bottomGoldValues = game.player.bank.gold;
		this.bottomCommodity1Values = game.player.bank.commodities[0];
		this.bottomCommodity2Values = game.player.bank.commodities[1];
		this.bottomCommodity3Values = game.player.bank.commodities[2];
		this.bottomCurrency1Values = game.player.bank.currency[0];
		this.bottomCurrency2Values = game.player.bank.currency[1];
		this.bottomCurrency3Values = game.player.bank.currency[2];
		this.bottomCurrency4Values = game.player.bank.currency[3];
	};
	
	this.updateOtherPlayers = function(game) {
		let playerIndex = getNextPlayer(game);
		for (let i = 0; i < (game.players.length - 1); i++) {
			this[i + "playerName"] = game.player.name;
	
			this[i + "Mandates"] = "Mandates: " + game.player.mandates.length;
	
			this[i + "Commodity1"] = game.commodityNames[0];
			this[i + "Commodity2"] = game.commodityNames[1];
			this[i + "Commodity3"] = game.commodityNames[2];
			this[i + "GoldValues"] = game.players[playerIndex].bank.gold;
			this[i + "Currency1"] = game.players[0].nativeCurrency;
			this[i + "Currency2"] = game.players[1].nativeCurrency;
			this[i + "Currency3"] = game.players[2].nativeCurrency;
			this[i + "Currency4"] = game.players[3].nativeCurrency;
			this[i + "Commodity1Values"] = game.players[playerIndex].bank.commodities[0];
			this[i + "Commodity2Values"] = game.players[playerIndex].bank.commodities[1];
			this[i + "Commodity3Values"] = game.players[playerIndex].bank.commodities[2];
			this[i + "Currency1Values"] = game.players[playerIndex].bank.currency[0];
			this[i + "Currency2Values"] = game.players[playerIndex].bank.currency[1];
			this[i + "Currency3Values"] = game.players[playerIndex].bank.currency[2];
			this[i + "Currency4Values"] = game.players[playerIndex].bank.currency[3];
		
			playerIndex = getNextPlayer(game);
		};
	};

	this.updateMarket = function(game) {
		this.commodity1 = game.commodityNames[0];
		this.commodity2 = game.commodityNames[1];
		this.commodity3 = game.commodityNames[2];
		this.goldValues = game.market.gold;
		this.commodity1Values = game.market.commodities[0];
		this.commodity2Values = game.market.commodities[1];
		this.commodity3Values = game.market.commodities[2];
		this.currency1 = game.players[0].nativeCurrency;
		this.currency2 = game.players[1].nativeCurrency;
		this.currency3 = game.players[2].nativeCurrency;
		this.currency4 = game.players[3].nativeCurrency;
		this.currency1Values = game.market.currency[0];
		this.currency2Values = game.market.currency[1];
		this.currency3Values = game.market.currency[2];
		this.currency4Values = game.market.currency[3];
	};
	
	this.updateGlobalEvent = function(game) {	
		$("globalEventName").innerHTML = game.globalEvent.name;
		$("globalEventText").innerHTML = game.globalEvent.text;
		$("globalEventTurnsLeft").innerHTML = game.globalEvent.turnsLeft;	
	};

	this.refresh = function(game) {
		this.updateBanner(game);
		this.updateCurrentPlayer(game);
		this.updateOtherPlayers(game);
		this.updateMarket(game);
		this.updateGlobalEvent(game);
		this.updateProduceModal(game);
	};

	this.resetModal = function(modal) {
	};
};


function getNumberFromInnerHTML(object) {
	return parseInt(this[object]);
};



function updateProduceModal(game) {
	for (let i = 0; i < NUMBER_COMMODITIES; i++) {
		let option = document.createElement("OPTION");
		let optionName = document.createTextNode(game.commodityNames[i]);
		option.appendChild(optionName);
		$("produceCommodity").appendChild(option);
	};

	let playerCurrencyOption = document.createElement("OPTION");
	let playerCurrency = document.createTextNode(game.player.nativeCurrency);

	playerCurrencyOption.appendChild(playerCurrency);
	$("producePayment").appendChild(playerCurrencyOption);
};

function decrementAndGetProductionCost(element) {
	let previous = $(element).innerHTML;
	let updated = parseInt(previous);
	
	if (parseInt(previous) > getValueCount($("produceCommodity").value)) {
		for (let i = 0; i < getValueCount($("produceCommodity").value); i++) {
			updated--;
		};
	
	} else if (parseInt(previous) === getValueCount($("produceCommodity").value)) {
		updated = 0;
	} else if (parseInt(previous) === 0) {
	} else {};

	$(element).innerHTML = updated;
	updateProductionCost(updated);
	
};

function incrementAndGetProductionCost(element) {
	let previous = $(element).innerHTML;
	let updated = parseInt(previous);
	
	for (let i = 0; i < getValueCount($("produceCommodity").value); i++) {
			updated++;
	};
	
	$(element).innerHTML = updated;
	updateProductionCost(updated);
	
};

function resetProduceNumber() {
	$("produceNumber").innerHTML = "0";
};
