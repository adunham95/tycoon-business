import { gamePlayDB, openGameDB } from '$lib/database';

export async function getCurrentDay() {
	const db1 = await openGameDB();
	return db1.get(gamePlayDB.tables.player.name, 'currentDay');
}

export async function setNextDay() {
	const db1 = await openGameDB();
	const currentDay = await db1.get(gamePlayDB.tables.player.name, 'currentDay');
	db1.put(gamePlayDB.tables.player.name, currentDay + 1, 'currentDay');
	return currentDay + 1;
}

export async function setDay(day: number) {
	const gameDB = await openGameDB();
	return gameDB.put(gamePlayDB.tables.player.name, day, 'currentDay');
}
