import {} from '$lib/database';
import { getRentableBuildings } from '$lib/database/realEstate';

export async function load() {
	const buildings = await getRentableBuildings();
	console.log(buildings);
	return { buildings };
}
