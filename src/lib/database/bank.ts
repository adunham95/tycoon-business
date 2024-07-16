import { openGameDB, gamePlayDB } from '$lib/database';

export async function updateMoney(delta: number) {
	const db1 = await openGameDB();
	db1.put(gamePlayDB.tables.player.name, delta, 'bankAccount');
	return db1.get(gamePlayDB.tables.player.name, 'bankAccount');
}

export async function getMoney() {
	const db1 = await openGameDB();
	return db1.get(gamePlayDB.tables.player.name, 'bankAccount');
}
