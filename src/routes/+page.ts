import { getBusiness, initializeDatabase } from '$lib/database';
import { getMoney } from '$lib/database/bank';
import { getCurrentDay } from '$lib/database/currentDay';

export async function load() {
	initializeDatabase();
	const business = await getBusiness();
	const money = (await getMoney()) || 0;
	const currentDay = (await getCurrentDay()) || 0;
	return { business, money, currentDay };
}
