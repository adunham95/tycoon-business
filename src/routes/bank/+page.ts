import { getMoney } from '$lib/database';

export async function load() {
	const money = (await getMoney()) || 0;
	return { money };
}
