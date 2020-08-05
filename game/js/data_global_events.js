
const DATA_GLOBAL_EVENTS = [
		["Production Targets",
		
		"At least 15 oil are available in the market. <br><b>Success:</b> Every player who traded oil earns an achievement. <br><b>Failure:</b> The player with the most oil in reserves gains a volatility point.",
		
		function() {
			if (game.market.commodities[game.getIndexOfCommodity("Oil")] > 14) {
				return true;
			}
			return false;
		},
		
		function() {
			let moves = gameStack.copy();

			let playersTraded = [];

			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				playersTraded.push(false);
			};
			
			while (!moves.isEmpty() && moves.peek().globalEvent.name === this.name) {
				let lastGameState = moves.pop();
				let latestMove = lastGameState.thisTurn;
				if ((latestMove.search("TRADE") !== -1) && (latestMove.search("OIL") !== -1)) {
					playersTraded[getIndexOfCurrentPlayer(lastGameState)] = true;
				};
			};
		
			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				if (playersTraded[i]) {
					game.players[i].victoryPoints++;
				};
			};

			ui.postNotice("You successfully navigated your global event! Players who traded oil gained a victory point!");
			enableNextButton();
		}, 
		
		function() {
			let indexOfPlayerWithHighestOilHoldings = -1;
			let highestOilHoldings = -1;

			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				if (game.players[i].bank.commodities[OIL] > highestOilHoldings) {
					highestOilHoldings = game.players[i].bank.commodities[OIL];
				};
			};

			for (let i = 0; i < NUMBER_PLAYERS; i++) {
				if (game.players[i].bank.commodities[OIL] === highestOilHoldings) {
					game.players[i].volatility++;
					ui.postNotice("Global event: You failed to reach oil production targets. The player(s) with the most oil in their bank gained volatility!");
					enableNextButton();
				};
			};
		},

		"3"]
	];
