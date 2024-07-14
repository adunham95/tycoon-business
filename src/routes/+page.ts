import { getBusiness } from '$lib/database';

export async function load() {
	const business = await getBusiness();
	return { business };
}
