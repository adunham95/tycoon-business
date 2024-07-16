import { getMoney } from '$lib/database/bank';

export async function load() {
	const money = (await getMoney()) || 0;
	return { money };
}
