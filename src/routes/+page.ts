import { getBusiness, initializeDatabase } from '$lib/database';

export async function load() {
	initializeDatabase();
	const business = await getBusiness();
	return { business };
}
