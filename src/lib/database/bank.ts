const key = 'bankAccount';

export async function updateMoney(delta: number) {
	const money = localStorage.setItem(key, String(delta));
	return money;
}

export function getMoney() {
	const money = localStorage.getItem(key);
	return money || 0;
}

export function purchaseAmount(amount: number) {
	const money = getMoney();
	if (money && parseInt(money) >= amount) {
		updateMoney(parseFloat(money) - amount);
	}
}
