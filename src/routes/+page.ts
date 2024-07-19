import { getMoney } from '$lib/database/bank';
import { getBusiness } from '$lib/database/businesses';
import { getCurrentDay } from '$lib/database/currentDay';

export async function load() {
	const business = await getBusiness();
	const money = (await getMoney()) || 0;
	const currentDay = (await getCurrentDay()) || 0;

	console.log(business);
	return { business, money, currentDay };
}
