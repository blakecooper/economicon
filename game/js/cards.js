function Card(name, text, satisfied, positive) {
	this.name = name;
	this.text = text;
	this.satisfied = satisfied;
	this.positive = positive;
	this.negative = -1;
	this.turnsLeft = -1;
};
