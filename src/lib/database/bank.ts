const key = 'bankAccount';

export async function updateMoney(delta: number) {
	const money = localStorage.setItem(key, String(delta));
	return money;
}

export function getMoney() {
	const money = localStorage.getItem(key);
	return parseInt(money || '0') || 0;
}

export function purchase(amount: number) {
	const money = getMoney();
	if (money && money >= amount) {
		updateMoney(money - amount);
		return true;
	}
	return false;
}
