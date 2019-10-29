const definitions = [
		[
			"currencyPeg",
			"<p>Each turn, you may 'peg' your currency to another unit by declaring one unit of your currency to be worth one unit of your chosen peg: gold, a commodity, or another player's currency. Currency doesn't have to pegged to another unit, however. If your currency has no peg, its value is determined by its own scarcity in the market.",
				"<p>Each peg has its own advantages, and risks:<p><b>Pegging to gold</b> makes your currency's value more stable, since gold can only be produced by mining. But, since gold is a universal currency, you gain no unique advantage to using it to pay for purchases.<b>Pegging to commodities like wheat, oil or tech</b> allows you to spend that commodity from your reserves as though it were your native currency, giving you more buying power. But the value of commodities can be unpredictable, because other players can produce, buy and sell commodities at will, causing shortages or surpluses that dramatically affect supply and demand.<p><b>Pegging to another nation's currency</b> gives you the added security of tying your value to another player with a vested interest in maintaining its value and stability, effectively creating a de facto partnership, if not an official one. You also have the powerful benefit of trading directly with that nation: you may buy sell directly with that nation, without trading on the market (although you still pay market value). However, this subjugates your currency's value to the actions of another player. If they devalue or inflates their currency, deliberately or otherwise, you will indirectly suffer the consequences.<p><b>Removing your currency peg altogether</b> is the only way to unlock one useful feature of the game: manipulating your currency's value by creating and destroying it at will. With no currency peg, you may at any time add new units of your currency to the marketplace, or remove them from the game. This powerful control on supply and demand gives you acute control over the value of your currency, but it can be its own downside, as you may unintentionally introduce inflation or deflation, crippling your economy in the process.<p>If you change your peg in any round where you also changed your peg in the previous round, you immediately gain a volatility token."
		],
		[
			"globalEvents",
			"<p>Global event cards are drawn once at the beginning of each round, and stay in effect for the rest of the round. Global event cards describe conditions that take effect this round, a common goal for all players to meet, and consequences if the goal is or is not met by the final phase of the round.",
				""
		],
		[
			"laws",
			"<p>Law cards, under normal circumstances, are drawn once by players during rounds 1, 3 and 6 and remain in play for the remainder of the game. They describe conditions, representing laws passed in your country, to which you must adhere. If you fail to comply with one or more of your nation's laws in a given round, gain a volatility token.",
				""
		],
		[
			"production",
			"<p>During the production phase of each round, players may produce commodities by paying an amount equal to 1/2 the relative market value of that commodity.",
				"<p>Nations may produce commodities all at once, or follow the standard order of play, as agreed upon by the group. All nations set their commodities aside until the trading round before placing them in the market. Players may also choose to hide the number and type of commodities produced from other players until the trading phase.<p>Production requirements state that each nation must produce at least one of all three commodities (grain, oil and tech) to maintain their nation's low unemployment rate. If they fail to do so, they gain a volatility token later in the round."
		],
		[
			"reserveBank", 
			"<p>A nation's central reserve bank is where all gold, commodities and currencies belonging to the nation are kept.",
				"<p>The amount of gold held by players in their reserves determines the play order. The player whose nation has the most gold gets to go first whenever the order of play matters.<p>Bankers use gold and native currency in their reserves to make purchases in the market. When they do, they determine the relative value of their purchase and place that amount of gold or native currency in the market from their reserves.<p>At the end of the game, players count up the value of all gold, commodities and currency in their reserve, relative to gold (that is, the amount of gold in the market is the numerator in the value formula). If a player has the most valuable reserves, without having three or greater volatility tokens, that player wins the game."
		],
		[
			"rounds",
			"<p>The game of Economicon takes place over ten rounds. During each round, in order:</p><ul class='list-group'><li class='list-group-item'><b>1. Gold is mined.</b><br>Each player rolls a d6, and adds that amount of gold to their nation's reserves.</li><li class='list-group-item'><b>2. A global event occurs.</b><br>One global event card is placed face up in the play area. It remains in effect until resolved <br>(see phase 10, 'Resolve the global event').</span></li><li class='list-group-item'><b>3. Bankers may change their peg.</b><br>If a player changes their nation's peg two rounds in a row, they immediately gain a volatility token.</li><li class='list-group-item'><b>5. Laws are ratified (turns 1, 3, 6 and 10).</b><br>Each player draws a law card and places it face up in their play area. Unless otherwise directed, it remains in effect for the rest of the game.</li><li class='list-group-item'><b>6. Goods are produced.</b><br>Each player mandates a certain amount of each of the game's three commodities to be produced by their nation for sale on the market. You nation must be able to pay all production costs from reserves.<br>Failure to meet production requirements may result in gaining a volatility token.</li><li class='list-group-item'><b>7. Trade is conducted.</b><br>Players send any commodities produced by their nation to the marketplace, in order based on the amount of gold in reservess. When placing commodities in the marketplace, place them in a 'stack' so that the last commodities sent to the marketplace are on top. <p>Next, players take turns purchasing available commodities, currency or gold in the market. A player may purchase one type of unit per turn, and may purchase as much as they can afford. Bankers pay for market purchases from their reserves, using either gold or their native currency. To pay for a market purchase, determine the value of a unit in your native currency using the value formula. If purchasing gold or currency, place your payment in the market. If purchasing commodities, remove the desired number of commodities from the top of the stack, paying the player who produced each commodity its market value directly.<p>Trading is complete when each player passes.</li><li class='list-group-item'><b>8. Goods are consumed.</b><br>The people of your nation consume a number of each of the three commodities from your reserves equal to the number of laws currently in effect for your nation.</li><li class='list-group-item'><b>9. Rewards and penalties are distributed.</b><br>If during this round you complied with both your nation's production and consumption requirements, and its laws, you may add one gold to your reserves and remove one volatility token. Otherwise, gain a volatility token.</li><li class='list-group-item'><b>10. Resolve the global event.</b><br>The outcome will be specific to the event, and determined by whether the players were successful or failed in meeting their goal.</li></ul>",
			""
		],
		[
			"trading",
			"<p>Producing commodities for sale on the open market, and purchasing commodities, currency and gold on the open market, is the primary way value circulates in a game of Economicon.",
				"<p>At the beginning of the trading phase, players begin by adding, in the standard order of play, any commodities they produced during the production phase to their assigned locations in the market, increasing the counter for each unit they add. They may also add any commodities held in reserves to the global market, at the same time and using the same process.<p>After this step, players continue taking turns purchasing gold, commodities or currency from the market. Each turn, a player may purchase any available number of a single type of unit, provided that one unit of each commodity or currency remains in the market at all times. Gold, on the other hand, can be depleted by trading. If this happens, each player mines more immediately and sends it directly to the market.<p>When determining how much to pay from reserves for your purchase, use the following formula:<p><b>The number of payment units available in the market [divided by] The number of purchase units available in the market</b><p>Payment units refer to the unit you're using to pay for the purchase, most often gold or your nation's currency. If your currency is pegged to another unit, count that unit in the marketplace instead of your currency when using the value formula. Purchase units refer to the units you are purchasing on the open market.<p>If the amount you're purchasing requires you to spend a fraction of your currency, round to the nearest whole number (zero excluded; you must always pay at least one unit of currency for a purchase).Trading continues until all players have passed."
		],
		[
			"value",
			"<p>As in real life, the value of a gold, commodities and currency in Economicon is relative, based on supply and demand. The more scarce something is, the more you can expect to pay for it.",
			"<p>Using a currency peg is a way to assign a value for your currency other than its inherent scarcity. When using a peg, your currency is exactly as valuable as the unit you have pegged it to.<p>When determining how much a commodity costs in Economicon, use the following formula:<p><b>The number of payment units available in the market [divided by] The number of purchase units available in the market</b><p>Payment units refer to the unit you're using to pay for the purchase, most often gold or your nation's currency. If your currency is pegged to another unit, count that unit in the marketplace instead of your currency when using the value formula. Purchase units refer to the units you are purchasing on the open market.<p>Rounding: If the amount you're purchasing requires you to spend a fraction of your currency, round to the nearest whole number (excluding zero; you must always pay at least one unit of currency for a purchase).<p>Example: your nation is on the gold standard, and you want to buy five units of grain. There are five gold and 20 grain on the market, so the cost of grain in your currency is 5/20 = 1/4, so you may purchase four grain for one unit of your currency. Therefore your purchase of five grain would cost 1.25, which you would round down to 1."
		],
		[
			"volatilityTokens",
			"<p>There are three situations in which you may earn a volatility token:<p>1. If your nation fails to meet the production or consumption requirement<br>2. If you fail to comply with your nations laws<br>3. Based on your response to global events<p>You can remove one volatility token per round during your upkeep phase if you comply with all requirements and laws. Certain global events can also result in the removal of volatility tokens.",
			""
		]
];

loadDefinitions();

function loadDefinitions()
{
	for (let i = 0; i < definitions.length; i++)
	{
		let definitionID = definitions[i][0];

		let fullDefinition = definitions[i][1] + definitions[i][2];
		document.getElementById(definitionID).innerHTML = fullDefinition;
		definitionID = "popover_" + definitions[i][0];
		if (document.getElementById(definitionID) !== null)
			{
		
					document.getElementById(definitionID).setAttribute("data-content",definitions[i][1]);
		};
			};
};
