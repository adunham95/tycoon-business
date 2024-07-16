export function rollDice(number = 1, diceSize = 6, advantage = false) {
	// Roll 1
	const roll1 = Math.floor(Math.random() * diceSize) + 1;
	let roll = roll1;

	//Roll 2
	if (advantage) {
		const roll2 = Math.floor(Math.random() * diceSize) + 1;
		roll = Math.max(roll1, roll2);
	}

	const isBeat = roll > number;
	console.log(roll, number, isBeat);
	return { roll, isBeat };
}
