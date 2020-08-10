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

const MAX_VOLATILITY = 3;

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
		"Grain",
		"Oil",
		"Technology",
	],
	"GET": function(noun) {
		if (noun === NATION) {
			return RANDOM.NATION[Math.floor((Math.random()*RANDOM.NATION.length))];
		} else if (noun === CURRENCY) {
			return RANDOM.CURRENCY[Math.floor((Math.random()*RANDOM.CURRENCY.length))];
		} else {	
			return RANDOM.COMMODITY[Math.floor((Math.random()*RANDOM.COMMODITY.length))];
		};
	
	},
};

const NATION = 0;
const CURRENCY = 1;
const COMMODITY = 2;

const NAME = 0;
const TEXT = 1;
const SATISFIED = 2;
const POSITIVE = 3;
const NEGATIVE = 4;
const TURNS_LEFT = 5;

const MANDATE = 0;
const GLOBAL_EVENT = 1;

const DRAW = 0;
const ACTION1 = 1;
const ACTION2 = 2;
const RESOLVE = 3;

const PRODUCE = 0;
const MINE = 1;
const PRINT = 2;
const DRAWMANDATE = 3;
const TRADECOMMODITIES = 4;
const TRADECURRENCY = 5;

function $(element) {
	return document.getElementById(element);
};
