import { generateBuildings, getBuildingType, getStreet } from '$data/buildings';
import { gamePlayDB } from '$lib/db';

export async function getRentableBuildings() {
	const rentalBuildingData = await gamePlayDB.realEstate
		.filter((building) => building.status === 'for-rent')
		.toArray();

	const rentalBuildings = rentalBuildingData.map((building) => {
		return {
			...building,
			buildingType: getBuildingType(building.buildingTypeId),
			street: getStreet(building.streetId)
		};
	});

	return rentalBuildings;
}

export async function getMyBuildings() {
	const myBuildingData = await gamePlayDB.realEstate
		.filter((building) => building.status === 'Rented')
		.toArray();

	const myBuildings = myBuildingData.map((building) => {
		return {
			...building,
			buildingType: getBuildingType(building.buildingTypeId),
			street: getStreet(building.streetId)
		};
	});

	return myBuildings;
}
export function saveRentableBuildings(buildingsToAdd: number) {
	const buildings = generateBuildings(buildingsToAdd);
	const buildingDetails = buildings.map((building) => {
		return {
			id: `${building.streetId}-${building.streetNumber}`,
			rent: building.rent,
			deposit: building.rent * 30,
			buildingTypeId: building.buildingTypeId,
			streetId: building.streetId,
			streetNumber: building.streetNumber,
			status: 'for-rent'
		};
	});
	gamePlayDB.realEstate.bulkAdd(buildingDetails);
}

export function clearBuildings() {
	gamePlayDB.realEstate.clear();
}

export async function getBuilding(id: string) {
	const buildingData = await gamePlayDB.realEstate.get(id);

	if (!buildingData) return;

	return {
		...buildingData,
		buildingType: getBuildingType(buildingData.buildingTypeId),
		street: getStreet(buildingData.streetId)
	};
}
