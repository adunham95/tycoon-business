import { getMoney } from '$lib/database/bank';
import { getBusiness } from '$lib/database/bussinesses';
import { getCurrentDay } from '$lib/database/currentDay';

export async function load() {
	const business = await getBusiness();
	const money = (await getMoney()) || 0;
	const currentDay = (await getCurrentDay()) || 0;
	return { business, money, currentDay };
}
