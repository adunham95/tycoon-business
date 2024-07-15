import { generateBuildings } from '$data/buildings';
import {} from '$lib/database';

export async function load() {
	const buildings = generateBuildings(40);
	console.log(buildings);
	return { buildings };
}
