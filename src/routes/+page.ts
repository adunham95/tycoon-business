import { getBusiness, getCurrentDay, getMoney, initializeDatabase } from '$lib/database';

export async function load() {
	initializeDatabase();
	const business = await getBusiness();
	const money = (await getMoney()) || 0;
	const currentDay = (await getCurrentDay()) || 0;
	return { business, money, currentDay };
}
