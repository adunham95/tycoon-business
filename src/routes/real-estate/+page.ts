import { getMyBuildings, getRentableBuildings } from '$lib/database/realEstate';

export async function load() {
	const buildings = await getRentableBuildings();
	const myBuildings = await getMyBuildings();
	console.log(buildings);
	return { buildings, myBuildings };
}
