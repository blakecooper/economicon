const DATA_MANDATES = [
		["Trade Mandate",
		"Trade at least 5 of any commodity in one action.",
		function() {
			let digits = 0;
			if (game.thisTurn.search("TRADE") !== -1) {
				let numberIndex = 6;
				while (!isNaN(game.thisTurn.charAt(numberIndex))) {
					digits++;
					numberIndex++;
				};

				if (parseInt(game.thisTurn.substr(6,digits)) > 4) {
					return true;
				};
			};
			return false;
		},
		],
	];
