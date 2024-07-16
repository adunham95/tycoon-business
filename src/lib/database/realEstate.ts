import { getBuildingType, getStreet } from '$data/buildings';
import { gamePlayDB, openGameDB } from '$lib/database';

export async function getRentableBuildings() {
	const gameDB = await openGameDB();
	const buildings = gameDB.transaction(gamePlayDB.tables.realEstate.name);
	const rentalBuildings = [];

	for await (const cursor of buildings.store) {
		if (cursor.value.type === 'for-rent') {
			rentalBuildings.push({
				...cursor.value,
				buildingType: getBuildingType(cursor.value.buildingTypeId),
				street: getStreet(cursor.value.streetId)
			});
		}
	}

	return rentalBuildings;
}
