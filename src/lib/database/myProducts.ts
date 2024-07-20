import { getProduct } from '$data/products';
import { gamePlayDB } from '$lib/db';
import { getBuilding } from './realEstate';

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

export async function getMyProducts() {
	return (await gamePlayDB.myProducts.toArray()).map((item) => {
		return {
			...item,
			building:
				item.buildingID === 'warehouse' ? { name: 'Warehouse' } : getBuilding(item.buildingID),
			product: getProduct(item.productID)
		};
	});
}

export async function getMyProductsInWarehouse() {
	return (await gamePlayDB.myProducts.where({ buildingID: 'warehouse' }).toArray()).map((item) => {
		return {
			...item,
			building:
				item.buildingID === 'warehouse' ? { name: 'Warehouse' } : getBuilding(item.buildingID),
			product: getProduct(item.productID)
		};
	});
}
