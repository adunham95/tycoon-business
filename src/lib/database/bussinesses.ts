import { gamePlayDB, type BusinessDB } from '$lib/db';

export async function createBusiness(business: BusinessDB) {
	console.log('createBusiness', business);
	const id = await gamePlayDB.business.add({
		color: business.color,
		name: business.name,
		type: business.type
	});
	return id;
}

export async function getBusiness() {
	return await gamePlayDB.business.toArray();
}
