const key = 'bankAccount';

export async function updateMoney(delta: number) {
	const money = localStorage.setItem(key, String(delta));
	return money;
}

export async function getMoney() {
	const money = localStorage.getItem(key);
	return money || 0;
}

export function purchaseAmount(amount: number) {
	const money = localStorage.getItem(key);
	if (money && parseInt(money) >= amount) {
		localStorage.setItem(key, String(parseFloat(money) - amount));
	}
}
