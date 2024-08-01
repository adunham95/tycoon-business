import { getAppliancesByLocation } from '$lib/database/myAppliances';
import { getMyProductsInWarehouse } from '$lib/database/myProducts';

export async function load() {
	const myProducts = await getMyProductsInWarehouse();
	const myAppliances = await getAppliancesByLocation('warehouse');

	return { myProducts, myAppliances };
}
