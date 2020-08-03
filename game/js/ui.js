function UI() {
	this.currentPhase = $('currentPhase');
	this.currentPlayer = $('currentPlayer');

	this.notice = $('notice');

	this.globalEventName = $("globalEventName");
	this.globalEventText = $("globalEventText");
	this.globalEventTurnsLeft = $("globalEventTurnsLeft");	
	
	this.produceCommodity = $("produceCommodity");
	this.producePayment = $("producePayment");
	this.produceNumber = $("produceNumber");
	this.produceCost = $("produceCost");
	this.warningProduce = $("warningProduce");

	this.discardModal = $("discardMandateModal");
	this.drawRadioButtons = $("drawRadioButtons");

	this.produce = $("produce");
	this.mine = $("mine");
	this.print = $("print");
	this.draw = $("draw");
	this.tradeCommodities = $("tradeCommodities");
	this.tradeCurrency = $("tradeCurrency");

	this.advanceButton = $("advanceButton");

	this.commodity1 = $("commodity1");
	this.commodity2 = $("commodity2");
	this.commodity3 = $("commodity3");
	this.goldValues = $("goldValues");
	this.commodity1Values = $("commodity1Values");
	this.commodity2Values = $("commodity2Values");
	this.commodity3Values = $("commodity3Values");
	this.currency1 = $("currency1");
	this.currency2 = $("currency2");
	this.currency3 = $("currency3");
	this.currency4 = $("currency4");
	this.currency1Values = $("currency1Values");
	this.currency2Values = $("currency2Values");
	this.currency3Values = $("currency3Values");
	this.currency4Values = $("currency4Values");
	
	this.bottomPlayerName = $("bottomPlayerName");
	this.bottomMandates = $("bottomMandates");
	this.bottomCommodity1 = $("bottomCommodity1");
	this.bottomCommodity2 = $("bottomCommodity2");
	this.bottomCommodity3 = $("bottomCommodity3");
	this.bottomGoldValues = $("bottomGoldValues");
	this.bottomCommodity1Values = $("bottomCommodity1Values");
	this.bottomCommodity2Values = $("bottomCommodity2Values");
	this.bottomCommodity3Values = $("bottomCommodity3Values");
	this.bottomCurrency1 = $("bottomCurrency1");
	this.bottomCurrency2 = $("bottomCurrency2");
	this.bottomCurrency3 = $("bottomCurrency3");
	this.bottomCurrency4 = $("bottomCurrency4");
	this.bottomCurrency1Values = $("bottomCurrency1Values");
	this.bottomCurrency2Values = $("bottomCurrency2Values");
	this.bottomCurrency3Values = $("bottomCurrency3Values");
	this.bottomCurrency4Values = $("bottomCurrency4Values");

	this.PlayerName0 = $("PlayerName0");
	this.Mandates0 = $("Mandates0");
	this.Commodity10 = $("Commodity10");
	this.Commodity20 = $("Commodity20");
	this.Commodity30 = $("Commodity30");
	this.Currency10 = $("Currency10");
	this.Currency20 = $("Currency20");
	this.Currency30 = $("Currency30");
	this.Currency40 = $("Currency40");
	this.GoldValues0 = $("GoldValues0");
	this.Commodity1Values0 = $("Commodity1Values0");
	this.Commodity2Values0 = $("Commodity2Values0");
	this.Commodity3Values0 = $("Commodity3Values0");
	this.Currency1Values0 = $("Currency1Values0");
	this.Currency2Values0 = $("Currency2Values0");
	this.Currency3Values0 = $("Currency3Values0");
	this.Currency4Values0 = $("Currency4Values0");
	
	this.PlayerName1 = $("PlayerName1");
	this.Mandates1 = $("Mandates1");
	this.Commodity11 = $("Commodity11");
	this.Commodity21 = $("Commodity21");
	this.Commodity31 = $("Commodity31");
	this.Currency11 = $("Currency11");
	this.Currency21 = $("Currency21");
	this.Currency31 = $("Currency31");
	this.Currency41 = $("Currency41");
	this.GoldValues1 = $("GoldValues1");
	this.Commodity1Values1 = $("Commodity1Values1");
	this.Commodity2Values1 = $("Commodity2Values1");
	this.Commodity3Values1 = $("Commodity3Values1");
	this.Currency1Values1 = $("Currency1Values1");
	this.Currency2Values1 = $("Currency2Values1");
	this.Currency3Values1 = $("Currency3Values1");
	this.Currency4Values1 = $("Currency4Values1");
		
	this.PlayerName2 = $("PlayerName2");
	this.Mandates2 = $("Mandates2");
	this.Commodity12 = $("Commodity12");
	this.Commodity22 = $("Commodity22");
	this.Commodity32 = $("Commodity32");
	this.Currency12 = $("Currency12");
	this.Currency22 = $("Currency22");
	this.Currency32 = $("Currency32");
	this.Currency42 = $("Currency42");
	this.GoldValues2 = $("GoldValues2");
	this.Commodity1Values2 = $("Commodity1Values2");
	this.Commodity2Values2 = $("Commodity2Values2");
	this.Commodity3Values2 = $("Commodity3Values2");
	this.Currency1Values2 = $("Currency1Values2");
	this.Currency2Values2 = $("Currency2Values2");
	this.Currency3Values2 = $("Currency3Values2");
	this.Currency4Values2 = $("Currency4Values2");


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

		this.currentPhase.innerHTML = "Phase: " + phaseName;
		this.currentPlayer.innerHTML = "Player: " + game.player.name;
	};
	
	this.updateCurrentPlayer = function(game) {
		this.bottomPlayerName.innerHTML = game.player.name;
		this.bottomMandates.innerHTML = "Mandates: " + game.player.mandates.length;
		this.bottomCommodity1.innerHTML = game.commodityNames[0];
		this.bottomCommodity2.innerHTML = game.commodityNames[1];
		this.bottomCommodity3.innerHTML = game.commodityNames[2];
		this.bottomGoldValues.innerHTML = game.player.bank.gold;
		this.bottomCommodity1Values.innerHTML = game.player.bank.commodities[0];
		this.bottomCommodity2Values.innerHTML = game.player.bank.commodities[1];
		this.bottomCommodity3Values.innerHTML = game.player.bank.commodities[2];
		this.bottomCurrency1.innerHTML = game.players[getIndexOfCurrentPlayer(game)].nativeCurrency;
		this.bottomCurrency2.innerHTML = game.players[(getIndexOfCurrentPlayer(game) + 1) % NUMBER_PLAYERS].nativeCurrency;
		this.bottomCurrency3.innerHTML = game.players[(getIndexOfCurrentPlayer(game) + 2) % NUMBER_PLAYERS].nativeCurrency;
		this.bottomCurrency4.innerHTML = game.players[(getIndexOfCurrentPlayer(game) + 3) % NUMBER_PLAYERS].nativeCurrency;
		this.bottomCurrency1Values.innerHTML = game.player.bank.currency[0];
		this.bottomCurrency2Values.innerHTML = game.player.bank.currency[1];
		this.bottomCurrency3Values.innerHTML = game.player.bank.currency[2];
		this.bottomCurrency4Values.innerHTML = game.player.bank.currency[3];
	};
	
	this.updateOtherPlayers = function(game) {
		let playerIndex = getNextPlayer(game);
		for (let i = 0; i < (game.players.length - 1); i++) {
			this["PlayerName" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].name;
	
			this["Mandates" + i].innerHTML = "Mandates: " + game.players[(playerIndex + i) % NUMBER_PLAYERS].mandates.length;
	
			this["Commodity1" + i].innerHTML = game.commodityNames[0];
			this["Commodity2" + i].innerHTML = game.commodityNames[1];
			this["Commodity3" + i].innerHTML = game.commodityNames[2];
			this["GoldValues" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].bank.gold;
			this["Currency1" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].nativeCurrency;
			this["Currency2" + i].innerHTML = game.players[(playerIndex + i + 1) % NUMBER_PLAYERS].nativeCurrency;
			this["Currency3" + i].innerHTML = game.players[(playerIndex + i + 2) % NUMBER_PLAYERS].nativeCurrency;
			this["Currency4" + i].innerHTML = game.players[(playerIndex + i + 3) % NUMBER_PLAYERS].nativeCurrency;			
			this["Commodity1Values" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].bank.commodities[0];
			this["Commodity2Values" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].bank.commodities[1];
			this["Commodity3Values" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].bank.commodities[2];
			this["Currency1Values" + i].innerHTML = game.players[(playerIndex + i) % NUMBER_PLAYERS].bank.currency[0];
			this["Currency2Values" + i].innerHTML = game.players[playerIndex].bank.currency[1];
			this["Currency3Values" + i].innerHTML = game.players[playerIndex].bank.currency[2];
			this["Currency4Values" + i].innerHTML = game.players[playerIndex].bank.currency[3];
		
			playerIndex = getNextPlayer(game);
		};
	};

	this.updateMarket = function(game) {
		this.commodity1.innerHTML = game.commodityNames[0];
		this.commodity2.innerHTML = game.commodityNames[1];
		this.commodity3.innerHTML = game.commodityNames[2];
		this.goldValues.innerHTML = game.market.gold;
		this.commodity1Values.innerHTML = game.market.commodities[0];
		this.commodity2Values.innerHTML = game.market.commodities[1];
		this.commodity3Values.innerHTML = game.market.commodities[2];
		this.currency1.innerHTML = game.players[0].nativeCurrency;
		this.currency2.innerHTML = game.players[1].nativeCurrency;
		this.currency3.innerHTML = game.players[2].nativeCurrency;
		this.currency4.innerHTML = game.players[3].nativeCurrency;
		this.currency1Values.innerHTML = game.market.currency[0];
		this.currency2Values.innerHTML = game.market.currency[1];
		this.currency3Values.innerHTML = game.market.currency[2];
		this.currency4Values.innerHTML = game.market.currency[3];
	};
	
	this.updateGlobalEvent = function(game) {	
		this.globalEventName.innerHTML = game.globalEvent.name;
		this.globalEventText.innerHTML = game.globalEvent.text;
		this.globalEventTurnsLeft.innerHTML = game.turnsRemainingInGlobalObjective + " turns remaining";	
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
		if (modal === PRODUCE) {
			$("produceActionButton").disabled = true;
		};
	};

	this.getValueFromInnerHTML = function(object) {
		return parseInt(object.innerHTML);
	};

	this.activateDrawButton = function() {
		$("drawActionButton").disabled = false;	
	};

	this.updateDiscardModal = function(game) {
		
		$("drawActionButton").disabled = true;
		
		this.removeAllChildren(this.drawRadioButtons);

		for (let i = 0; i < game.player.mandates.length; i++) {
			let mandateLabel = document.createElement("LABEL");
			let mandateInput = document.createElement("INPUT");

			mandateInput.type = "radio";
			mandateInput.name = "mandateRadios";
			mandateInput.id = "mandateRadio" + i;

			mandateLabel.appendChild(mandateInput);

			if (i === 0) {
				mandateLabel.innerHTML += "NEW: ";
			};
			
			mandateLabel.innerHTML += game.player.mandates[i].name + ": " + game.player.mandates[i].text;

			this.drawRadioButtons.appendChild(mandateLabel);
			
			$("mandateRadio" + i).onclick = this.activateDrawButton;
		};
	};

	this.updateTradeModal = function(game, tradeType) {
		this.resetTradeNumber();
	
		$("warningTrade").style.display = "none";
		this.removeAllChildren($("tradeWithSelect"));
		this.removeAllChildren($("tradeForSelect"));

		if (tradeType === COMMODITY) {
			for (let i = 0; i < NUMBER_COMMODITIES; i++) {
				let option = document.createElement("OPTION");
				let optionName = document.createTextNode(game.commodityNames[i]);
				option.appendChild(optionName);
				$("tradeWithSelect").appendChild(option);
			};

			let goldOption = document.createElement("OPTION");
			let goldOptionName = document.createTextNode("Gold");
			goldOption.appendChild(goldOptionName);
			$("tradeForSelect").appendChild(goldOption);

			let currencyOption = document.createElement("OPTION");
			let currencyOptionName = document.createTextNode(game.player.nativeCurrency);
			currencyOption.appendChild(currencyOptionName);
			$("tradeForSelect").appendChild(currencyOption);

		} else if (tradeType === CURRENCY) {

			let goldOption = document.createElement("OPTION");
			let goldOptionName = document.createTextNode("Gold");
			goldOption.appendChild(goldOptionName);
			$("tradeWithSelect").appendChild(goldOption);

			let goldOption2 = document.createElement("OPTION");
			let goldOptionName2 = document.createTextNode("Gold");
			goldOption2.appendChild(goldOptionName2);
			$("tradeForSelect").appendChild(goldOption2);

			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				let option = document.createElement("OPTION");
				let optionName = document.createTextNode(game.players[i].nativeCurrency);
				option.appendChild(optionName);
				$("tradeWithSelect").appendChild(option);
				
				let option2 = document.createElement("OPTION");
				let optionName2 = document.createTextNode(game.players[i].nativeCurrency);
				option2.appendChild(optionName2);
				$("tradeForSelect").appendChild(option2);
			};
		} else {
		};
	};
		
	this.updateProduceModal = function(game) {
		this.removeAllChildren(this.produceCommodity);

		for (let i = 0; i < NUMBER_COMMODITIES; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.commodityNames[i]);
			option.appendChild(optionName);
			this.produceCommodity.appendChild(option);
		};

		this.removeAllChildren(this.producePayment);

		let goldOption = document.createElement("OPTION");
		let goldCurrency = document.createTextNode("Gold");

		let playerCurrencyOption = document.createElement("OPTION");
		let playerCurrency = document.createTextNode(game.player.nativeCurrency);

		goldOption.appendChild(goldCurrency);
		playerCurrencyOption.appendChild(playerCurrency);
		
		this.producePayment.appendChild(goldOption);
		this.producePayment.appendChild(playerCurrencyOption);
	};
	
	this.decrementAndGetProductionCost = function(element) {
		$("produceActionButton").disabled = false;
		let previous = this[element].innerHTML;
		let updated = parseInt(previous);
		
		if (parseInt(previous) > getValueCount(this.produceCommodity.value)) {
			for (let i = 0; i < getValueCount(this.produceCommodity.value); i++) {
				updated--;
			};
		
		} else if (parseInt(previous) === getValueCount(this.produceCommodity.value)) {
			updated = 0;
		} else if (parseInt(previous) === 0) {
		} else {};

		this[element].innerHTML = updated;
		updateProductionCost(updated);
	};

	this.incrementAndGetProductionCost = function(element) {
		$("produceActionButton").disabled = false;
		let previous = $(element).innerHTML;
		let updated = parseInt(previous);
	
		for (let i = 0; i < getValueCount(this.produceCommodity.value); i++) {
				updated++;
		};
	
		$(element).innerHTML = updated;
		updateProductionCost(updated);
	};
	
	this.decrementAndGetTradeCost = function(element) {
		$("produceActionButton").disabled = false;
		let previous = $(element).innerHTML;
		let updated = parseInt(previous);
		
		if (parseInt(previous) > getValueCount(this.produceCommodity.value)) {
			for (let i = 0; i < getValueCount(this.produceCommodity.value); i++) {
				updated--;
			};
		
		} else if (parseInt(previous) === getValueCount(this.produceCommodity.value)) {
			updated = 0;
		} else if (parseInt(previous) === 0) {
		} else {};

		$(element).innerHTML = updated;
		this.updateTradeCost(updated);
	};

	this.incrementAndGetTradeCost = function(element) {
		$("produceActionButton").disabled = false;
		let previous = $(element).innerHTML;
		let updated = parseInt(previous);
	
		for (let i = 0; i < getValueCount(this.produceCommodity.value); i++) {
				updated++;
		};
	
		$(element).innerHTML = updated;
		this.updateTradeCost(updated);
	};

	this.resetProduceNumber = function() {
		this.produceNumber.innerHTML = "0";
		this.produceCost.innerHTML = "0";
	};

	this.resetTradeNumber = function() {
		$("tradeWithNumber").innerHTML = "0";
		$("numberTradedFor").innerHTML = "0";
	};
	
	this.updateNumberTradedFor = function(updated) {
		$("numberTradedFor").innerHTML = getValueCount($('tradeForSelect').value) * (getValueCount($("tradeWithSelect").value) * this.getValueFromInnerHTML($("tradeWithNumber")));
	};

	this.updateProductionCost = function(updated) {
		$("produceCost").innerHTML = getValueCount($('producePayment').value) * getValueCount(getValueFromInnerHTML($("produceNumber")));
	};
	
	this.updateTradeCost = function(updated) {
		$("numberTradedFor").innerHTML = getValueCount($('tradeForSelect').value) * (getValueCount($("tradeWithSelect").value) * this.getValueFromInnerHTML($("tradeWithNumber")));
	};
	
	this.removeAllChildren = function(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		};
	};

	this.postNotice = function(newNotice) {
		this.notice.innerHTML = newNotice;
	};
};

let ui = new UI();
