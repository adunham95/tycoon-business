import { getCompanyType } from '$data/bussiness';
import { gamePlayDB, type BusinessDB } from '$lib/db';
import { getCompanyBuildings } from './realEstate';

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

export async function getSingleBusiness(id: number) {
	if (!id || id === 0) return;
	const business = await gamePlayDB.business.get(id);
	if (!business) return;
	return {
		...business,
		companyType: getCompanyType(business.type),
		buildings: await getCompanyBuildings(id)
	};
}
