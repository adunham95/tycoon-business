import { generateBuildings } from '$data/buildings';
import { gamePlayDB, openGameDB } from '$lib/database';
import { updateMoney } from '$lib/database/bank';
import { setDay } from '$lib/database/currentDay';
import { rollDice } from './rollDice';

export async function setInitialDay() {
	const gameDB = await openGameDB();

	updateMoney(50000);
	setDay(1);

	//Remove Current For Rent Buildings
	let buildingsToAdd = 0;
	const tx = gameDB.transaction(gamePlayDB.tables.realEstate.name);

	if ((await tx.store.count()) === 0) {
		buildingsToAdd = 10;
	}

	for await (const cursor of tx.store) {
		if (cursor.value.type === 'for-rent' && rollDice(6, 8).isBeat) {
			buildingsToAdd++;
			gameDB.delete(gamePlayDB.tables.realEstate.name, cursor.key);
		}
	}

	const buildings = generateBuildings(buildingsToAdd);
	for (const building of buildings) {
		console.log(building);
		await gameDB.add(gamePlayDB.tables.realEstate.name, {
			id: `${building.streetId}-${building.streetNumber}`,
			rent: building.rent,
			buildingTypeId: building.buildingTypeId,
			streetId: building.streetId,
			streetNumber: building.streetNumber,
			type: 'for-rent'
		});
	}

	gameDB.clear(gamePlayDB.tables.business.name);

	return { day: 1 };
}
