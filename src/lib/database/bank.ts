const key = 'bankAccount';

export async function updateMoney(delta: number) {
	const money = localStorage.setItem(key, String(delta));
	return money;
}

export async function getMoney() {
	const money = localStorage.getItem(key);
	return money || 0;
}
