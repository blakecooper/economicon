const MARKET_STARTING_NUMBER = {
	"GOLD": 4,
	"COMMODITIES": 1,
	"CURRENCY": 1,
};

const PLAYER_STARTING_NUMBER = {
	"GOLD": 10,
	"NATIVE_CURRENCY": 8,
	"CURRENCY": 0,
	"COMMODITIES": 0,
};

const STARTING_VICTORY_POINTS = 0;

const STARTING_VOLATILITY = 0;

const STARTING_MANDATES = 2;

const NUMBER_PLAYERS = 4;

const NUMBER_EVENTS_PER_GAME = 5;

const NUMBER_STARTING_MANDATES_PER_PLAYER = 2;

const NUMBER_COMMODITIES = 3;

const RANDOM = {
	"NATION": [
		"USA",
		"USSR",
		"China",
		"Brazil",
		"UK",
		"Egypt",
		"Sweden",
		"Australia",
		"Japan",
		"Canada",
		"Spain",
		"Norway",
		"France",
		"Italy",
		"Greece",
		"Germany",
	],
	"CURRENCY": [
		"Loon",
		"Dollar",
		"Yen",
		"Coin",
		"Pound",
		"Mark",
		"Credit"
	],
	"COMMODITY": [
		"Oil",
		"Steel",
		"Corn",
		"Wheat",
		"Laptops",
		"Smartphones",
		"Natural Gas",
		"Tulips",
		"Limestone"
	],
	"GET": function(noun) {
		return this.noun[Math.random(this.noun.length)];
	},
};

const NAME = 0;
const TEXT = 1;
const SATISFIED = 2;
const OUTCOME = 3;

const MANDATE = 0;
const GLOBAL_EVENT = 1;

const DRAW = 0;
const TURN = 1;
const RESOLVE = 2;
