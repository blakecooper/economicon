
const DATA_GLOBAL_EVENTS = [
		["Production Targets",
		
		"At least 15 oil are available in the market. <br><b>Success:</b> Every player who traded oil earns an achievement. <br><b>Failure:</b> The player with the most oil in reserves gains a volatility point.",
		
		function() {
			if (game.market.commodities[OIL] > 14) {
				return true;
			}
			return false;
		},
		
		function() {
			let moves = gameStack;
			let latestMove = moves.pop();

			let playersWhoTraded = [false,false,false,false];
			
			while (!moves.isEmpty() && latestMove.globalEvent.name === this.name) {
				
			};
			
			return "test";
		}, 
		
		"3"]
	];
