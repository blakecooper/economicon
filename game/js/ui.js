function UI() {
	this.currentPhase = $('currentPhase');
	this.currentPlayer = $('currentPlayer');

	this.notice = $('notice');

	this.globalEventName = $("globalEventName");
	this.globalEventNameModal = $("globalEventNameModal");
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
	this.trade = $("trade");

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
	
	this.currentPlayerName = $("currentPlayerName");
	this.currentMandates = $("currentMandates");
	this.currentAchievements = $("currentAchievements");
	this.currentVolatility = $("currentVolatility");
	this.currentCommodity1 = $("currentCommodity1");
	this.currentCommodity2 = $("currentCommodity2");
	this.currentCommodity3 = $("currentCommodity3");
	this.currentGoldValues = $("currentGoldValues");
	this.currentCommodity1Values = $("currentCommodity1Values");
	this.currentCommodity2Values = $("currentCommodity2Values");
	this.currentCommodity3Values = $("currentCommodity3Values");
	this.currentCurrency1 = $("currentCurrency1");
	this.currentCurrency2 = $("currentCurrency2");
	this.currentCurrency3 = $("currentCurrency3");
	this.currentCurrency4 = $("currentCurrency4");
	this.currentCurrency1Values = $("currentCurrency1Values");
	this.currentCurrency2Values = $("currentCurrency2Values");
	this.currentCurrency3Values = $("currentCurrency3Values");
	this.currentCurrency4Values = $("currentCurrency4Values");

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
	};
	
	this.updateCurrentPlayer = () => {
		$("currentPlayerInfo").style = "background-color: " + game.player.currencyColor;
		this.currentPlayerName.innerHTML = game.player.name;
		this.currentPlayerName.style = "color: white";
		$("currentPlayerCurrencyName").innerHTML = "Currency: the " + game.player.currency + " (" + game.player.currencySymbol + ")";
		$("currentPlayerCurrencyName").style = "color: white";
		this.currentMandates.innerHTML = "Mandates: " + game.player.mandates.length;
		this.currentMandates.style = "color: white";
		this.currentAchievements.innerHTML = "Achievements: " + game.player.victoryPoints;
		this.currentAchievements.style = "color: white";

		this.styleVolatility();
		this.currentVolatility.innerHTML = "Volatility: " + game.player.volatility;
		
		this.currentCommodity1.innerHTML = game.commodityNames[0];
		this.currentCommodity2.innerHTML = game.commodityNames[1];
		this.currentCommodity3.innerHTML = game.commodityNames[2];
		this.currentGoldValues.innerHTML = game.player.bank.gold;
		this.currentCommodity1Values.innerHTML = game.player.bank.commodities[0];
		this.currentCommodity2Values.innerHTML = game.player.bank.commodities[1];
		this.currentCommodity3Values.innerHTML = game.player.bank.commodities[2];
		this.currentCurrency1.innerHTML = game.players[getIndexOfCurrentPlayer()].currency;
		this.currentCurrency2.innerHTML = game.players[(getIndexOfCurrentPlayer() + 1) % NUMBER_PLAYERS].currency;
		this.currentCurrency3.innerHTML = game.players[(getIndexOfCurrentPlayer() + 2) % NUMBER_PLAYERS].currency;
		this.currentCurrency4.innerHTML = game.players[(getIndexOfCurrentPlayer() + 3) % NUMBER_PLAYERS].currency;
		this.currentCurrency1Values.innerHTML = game.player.bank.currency[getIndexOfCurrentPlayer()];
		this.currentCurrency2Values.innerHTML = game.player.bank.currency[(getIndexOfCurrentPlayer() + 1) % NUMBER_PLAYERS];
		this.currentCurrency3Values.innerHTML = game.player.bank.currency[(getIndexOfCurrentPlayer() + 2) % NUMBER_PLAYERS];
		this.currentCurrency4Values.innerHTML = game.player.bank.currency[(getIndexOfCurrentPlayer() + 3) % NUMBER_PLAYERS];
	};
	
	this.updateOtherPlayers = function(game) {
		let playerIndex = getNextPlayer();
		for (let i = 0; i < (game.players.length - 1); i++) {
			let id = "player" + i;
			$(id + "Info").style = "background-color: " + game.players[playerIndex + i].currencyColor;
			$(id + "Name").innerHTML = game.players[playerIndex + i].name;
			$(id + "Name").style = "color: white";
			$(id + "CurrencyName").innerHTML = "Currency: the " + game.players[playerIndex + i].currency + " (" + game.players[playerIndex + i].currencySymbol + ")";
			$(id + "CurrencyName").style = "color: white";
			$(id + "Mandates").innerHTML = "Mandates: " + game.players[playerIndex + i].mandates.length;
			$(id + "Mandates").style = "color: white";
			$(id + "Achievements").innerHTML = "Achievements: " + game.players[playerIndex + i].victoryPoints;
			$(id + "Achievements").style = "color: white";
			$(id + "Volatility").innerHTML = "Volatility: " + game.players[playerIndex + i].volatility;
			$(id + "Volatility").style = "color: white";
			playerIndex = getNextPlayer();
		};
	};

	this.updateMarket = () => {
		this.commodity1.innerHTML = game.commodityNames[0];
		this.commodity2.innerHTML = game.commodityNames[1];
		this.commodity3.innerHTML = game.commodityNames[2];
		this.goldValues.innerHTML = game.market.gold;
		this.commodity1Values.innerHTML = game.market.commodities[0];
		this.commodity2Values.innerHTML = game.market.commodities[1];
		this.commodity3Values.innerHTML = game.market.commodities[2];
		this.currency1.innerHTML = game.players[0].currency;
		this.currency2.innerHTML = game.players[1].currency;
		this.currency3.innerHTML = game.players[2].currency;
		this.currency4.innerHTML = game.players[3].currency;
		this.currency1Values.innerHTML = game.market.currency[0];
		this.currency2Values.innerHTML = game.market.currency[1];
		this.currency3Values.innerHTML = game.market.currency[2];
		this.currency4Values.innerHTML = game.market.currency[3];
	
		let marketElements = $("market").children;

		//TODO: This needs refactoring BADLY!

		for (let j = 0; j < marketElements.length; j++) {
			for (let i = 0; i < marketElements[j].children.length; i++) {
				if (!marketElements[j].children[i].classList.contains("market-border")) {
					marketElements[j].children[i].style.background = "white";
				};
			};
		};
		
		for (let i = 0; i < (game.market.gold + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (GOLD + "_" + i)) {
						marketElements[j].children[k].style.background = GOLD_COLOR;
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.commodities[0] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (COMMODITY1 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = GRAIN_COLOR;
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.commodities[1] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (COMMODITY2 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = OIL_COLOR;
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.commodities[2] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (COMMODITY3 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = TECH_COLOR;
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.currency[0] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (CURRENCY1 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = game.players[0].currencyColor;
						if (i === game.market.currency[0]) {
							marketElements[j].children[k].innerHTML = game.players[0].currencySymbol;
						};
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.currency[1] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (CURRENCY2 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = game.players[1].currencyColor;
						
						if (i === game.market.currency[1]) {
							marketElements[j].children[k].innerHTML = game.players[1].currencySymbol;
						};
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.currency[2] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (CURRENCY3 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = game.players[2].currencyColor;
						if (i === game.market.currency[2]) {
							marketElements[j].children[k].innerHTML = game.players[2].currencySymbol;
						};
					};
				};
			};
		};
		
		for (let i = 0; i < (game.market.currency[3] + 1); i++) {
			for (let j = 0; j < marketElements.length; j++) {
				for (let k = 0; k < marketElements[j].children.length; k++) {
					if (marketElements[j].children[k].id === (CURRENCY4 + "_" + i)) {
						let commodityColor = 
						marketElements[j].children[k].style.background = game.players[3].currencyColor;
						if (i === game.market.currency[3]) {
							marketElements[j].children[k].innerHTML = game.players[3].currencySymbol;
						};
					};
				};
			};
		};
	};
	
	this.updateGlobalEvent = function(game) {	
		this.globalEventName.innerHTML = "Global Event: " + game.currentGlobalEvent.name;
		this.globalEventNameModal.innerHTML = game.currentGlobalEvent.name;
		this.globalEventText.innerHTML = game.currentGlobalEvent.text;
		this.globalEventTurnsLeft.innerHTML = game.turnsRemainingInCurrentGlobalEvent + " turns remaining";	
	};

	this.refresh = () => {
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
			$("produceNumber").innerHTML = "0";
			$("produceCost").innerHTML = "0";
		};
	};

	this.getValueFromInnerHTML = function(object) {
		return parseInt(object.innerHTML);
	};

	this.activateDrawButton = () => {
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

	this.updateTradeModal = function(game) {
		this.resetTradeNumber();
	
		$("warningTrade").style.display = "none";
		this.removeAllChildren($("tradeWithSelect"));
		this.removeAllChildren($("tradeForSelect"));

		let goldOption = document.createElement("OPTION");
		let goldOptionName = document.createTextNode("Gold");
		goldOption.appendChild(goldOptionName);
		$("tradeWithSelect").appendChild(goldOption);
		
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.players[(getIndexOfCurrentPlayer() + i) % 4].currency);
			option.appendChild(optionName);
			$("tradeWithSelect").appendChild(option);
		};

		for (let i = 0; i < COMMODITIES.length; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.commodityNames[i]);
			option.appendChild(optionName);
			$("tradeWithSelect").appendChild(option);
		};

		let goldOption2 = document.createElement("OPTION");
		let goldOptionName2 = document.createTextNode("Gold");
		goldOption2.appendChild(goldOptionName2);
		$("tradeForSelect").appendChild(goldOption2);
		
		for (let i = 0; i < NUMBER_PLAYERS; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.players[(getIndexOfCurrentPlayer() + i) % 4].currency);
			option.appendChild(optionName);
			$("tradeForSelect").appendChild(option);
		};

		for (let i = 0; i < COMMODITIES.length; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.commodityNames[i]);
			option.appendChild(optionName);
			$("tradeForSelect").appendChild(option);
		};
	};
	
	this.updateTradeWithFromFor = function(game) {
		this.resetTradeNumber();

		if (getTypeOfResourceFromName($("tradeWithSelect").value) === COMMODITY) {
			this.removeAllChildren($("tradeForSelect"));

			let goldOption2 = document.createElement("OPTION");
			let goldOptionName2 = document.createTextNode("Gold");
			goldOption2.appendChild(goldOptionName2);
			$("tradeForSelect").appendChild(goldOption2);
		
			let currencyOption = document.createElement("OPTION");
			let currencyOptionName = document.createTextNode(game.player.currency);
			currencyOption.appendChild(currencyOptionName);
			$("tradeForSelect").appendChild(currencyOption);
			
			for (let i = 0; i < COMMODITIES.length; i++) {
				let option = document.createElement("OPTION");
				let optionName = document.createTextNode(game.commodityNames[i]);
				option.appendChild(optionName);
				$("tradeForSelect").appendChild(option);
			};


		} else if (getTypeOfResourceFromName($("tradeWithSelect").value) === CURRENCY) {
			if ($("tradeWithSelect").value !== game.player.currency) {
				this.removeAllChildren($("tradeForSelect"));

				let goldOption2 = document.createElement("OPTION");
				let goldOptionName2 = document.createTextNode("Gold");
				goldOption2.appendChild(goldOptionName2);
				$("tradeForSelect").appendChild(goldOption2);
				
				for (let i = 0; i < NUMBER_PLAYERS; i++) {
					let option = document.createElement("OPTION");
					let optionName = document.createTextNode(game.players[(getIndexOfCurrentPlayer() + i) % 4].currency);
					option.appendChild(optionName);
					$("tradeForSelect").appendChild(option);
				};
			};
		} else {
			this.updateTradeModal(game);
		};
	};
	
	this.updateProduceModal = function(game) {
		this.removeAllChildren(this.produceCommodity);

		for (let i = 0; i < COMMODITIES.length; i++) {
			let option = document.createElement("OPTION");
			let optionName = document.createTextNode(game.commodityNames[i]);
			option.appendChild(optionName);
			this.produceCommodity.appendChild(option);
		};

		this.removeAllChildren(this.producePayment);

		let goldOption = document.createElement("OPTION");
		let goldCurrency = document.createTextNode("Gold");

		let playerCurrencyOption = document.createElement("OPTION");
		let playerCurrency = document.createTextNode(game.player.currency);

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
		
		if (parseInt(previous) > getValueCount($("tradeWithSelect").value)) {
			for (let i = 0; i < getValueCount($("tradeWithSelect").value); i++) {
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
	
		for (let i = 0; i < getValueCount($("tradeWithSelect").value); i++) {
			updated++;
		};
	
		$(element).innerHTML = updated;
		this.updateTradeCost(updated);
	};

	this.resetProduceNumber = () => {
		this.produceNumber.innerHTML = "0";
		this.produceCost.innerHTML = "0";
	};

	this.resetTradeNumber = () => {
		$("tradeWithNumber").innerHTML = "0";
		$("numberTradedFor").innerHTML = "0";
	};
	
	this.updateNumberTradedFor = function(updated) {
		$("numberTradedFor").innerHTML = getValueCount($('tradeForSelect').value) * (getValueCount($("tradeWithSelect").value) * this.getValueFromInnerHTML($("tradeWithNumber")));
	};

	this.updateProductionCost = function(updated) {
		$("produceCost").innerHTML = getValueCount($('producePayment').value) * getValueCount(this.getValueFromInnerHTML($("produceNumber")));
	};
	
	this.updateTradeCost = function(updated) {
		$("numberTradedFor").innerHTML = getValueCount($('tradeForSelect').value) * (this.getValueFromInnerHTML($("tradeWithNumber"))/getValueCount($("tradeWithSelect").value));
	};
	
	this.removeAllChildren = function(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		};
	};

	this.postNotice = function(newNotice) {
		this.notice.innerHTML = newNotice;
	};

	this.updateMandatesModal = function(game, mandates) {
		if (game.player.volatility < 1) {
			$("mandateRemoveVolatilityButton").disabled = true;
		};

		this.removeAllChildren($("mandateRadioButtons"));

		for (let i = 0; i < mandates.length; i++) {
			let mandateLabel = document.createElement("LABEL");
			let mandateInput = document.createElement("INPUT");

			mandateInput.type = "radio";
			mandateInput.name = "mandateRadios";
			mandateInput.id = "mandateRadio" + i;

			mandateLabel.appendChild(mandateInput);
	
			mandateLabel.innerHTML += game.player.mandates[i].name + ": " + game.player.mandates[i].text;

			$("mandateRadioButtons").appendChild(mandateLabel);	
		};
		
	};

	this.enableNextButton = () => {
		this.advanceButton.disabled = false;
	};

	this.disableNextButton = () => {
		this.advanceButton.disabled = true;
	};

	this.enableGenerateButtons = () => {
		this.produce.disabled = false;
		this.mine.disabled = false;
		this.print.disabled = false;
		this.draw.disabled = false;
	};
	
	this.disableGenerateButtons = () => {
		this.produce.disabled = true;
		this.mine.disabled = true;
		this.print.disabled = true;
		this.draw.disabled = true;
	};

	this.enableTradingButton = () => {
		this.trade.disabled = false;
	};

	this.disableTradingButton = () => {
		this.trade.disabled = true;
	};

	this.updateAfterAction = () => {
		this.updateCurrentPlayer();
		this.updateMarket();
		this.disableGenerateButtons();
		this.disableTradingButton();
		this.enableNextButton();		
	};
	
	this.styleVolatility = () => {
		if (game.player.volatility > (MAX_VOLATILITY - 1)) {
			this.currentVolatility.style.color = 'red';
		};
	};
		
	this.init = () => {
		this.refresh();
		this.disableGenerateButtons();
		this.disableTradingButton();
		this.postNotice("");
	};
};

let ui = new UI();
