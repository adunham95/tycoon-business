import { getAppliance } from '$data/appliances';
import { defaultWarehouse } from '$data/buildings';
import { gamePlayDB } from '$lib/db';
import { getBuilding } from './realEstate';

export async function addAppliances(items: { buildingID: string; applianceID: string }[]) {
	console.log('ADD ITEMS', { items });

	await gamePlayDB.myAppliances.bulkAdd(items);
}

export async function getAppliancesByLocation(location: string) {
	return (await gamePlayDB.myAppliances.where({ buildingID: location }).toArray()).map((item) => {
		return {
			...item,
			building: item.buildingID === 'warehouse' ? defaultWarehouse : getBuilding(item.buildingID),
			appliance: getAppliance(item.applianceID)
		};
	});
}
