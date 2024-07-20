import { gamePlayDB } from '$lib/db';

export async function addSupply(
	items: { id: string; buildingID: string; productID: string; count: number }[]
) {
	console.log('ADD ITEMS', { items });
	for (let index = 0; index < items.length; index++) {
		const item = items[index];
		console.log({ item });
		const dbItem = await gamePlayDB.myProducts
			.where({ buildingID: item.buildingID, productID: item.productID })
			.first();
		if (dbItem) {
			await gamePlayDB.myProducts.update(dbItem.id, { count: dbItem.count + item.count });
		} else {
			await gamePlayDB.myProducts.add(item);
		}
	}
}
