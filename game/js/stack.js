class Stack {
	constructor() {
		this.items = [];
	};

	push(element) {
		this.items.push(element);
	};

	pop() {
		if (this.items.length == 0) {
			return "underflow";
		};
		return this.items.pop();
	};

	peek() {
		return this.items[this.items.length-1];
	};

	isEmpty() {
		return this.items.length == 0;
	};
	
	copy() {
		let newCopy = new Stack();
		let key;
		
		for (key of this) {
			newCopy[key] = this[key];
		};

		return newCopy;
	};
};
