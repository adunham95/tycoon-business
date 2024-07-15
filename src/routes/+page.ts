import { getBusiness, getMoney, initializeDatabase } from '$lib/database';

export async function load() {
	initializeDatabase();
	const business = await getBusiness();
	const money = (await getMoney()) || 0;
	return { business, money };
}
