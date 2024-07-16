import { gamePlayDB, openGameDB } from '$lib/database';
import { updateMoney } from '$lib/database/bank';
import { setDay } from '$lib/database/currentDay';

export async function setInitialDay() {
	const gameDB = await openGameDB();
	updateMoney(50000);
	setDay(1);

	gameDB.clear(gamePlayDB.tables.business.name);
}
