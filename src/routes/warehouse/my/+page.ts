import { getMyProductsInWarehouse } from '$lib/database/myProducts';

export async function load() {
	const myProducts = await getMyProductsInWarehouse();

	return { myProducts };
}
