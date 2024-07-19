import { getMoney, updateMoney } from '$lib/database/bank';
import { getCurrentDay } from '$lib/database/currentDay';
import { getBuilding } from '$lib/database/realEstate';
import { createSubscription, createTransaction } from '$lib/database/transactions';
import { gamePlayDB } from '$lib/db';
export function purchase(amount: number, title: string) {
	const money = getMoney();
	const currentDay = getCurrentDay();
	if (money && parseInt(money) >= amount) {
		createTransaction(currentDay, title, amount);
		updateMoney(parseFloat(money) - amount);
	}
	return true;
}

export async function rentBuilding(buildingID: string) {
	const money = getMoney();
	const currentDay = getCurrentDay();
	const building = await getBuilding(buildingID);
	const amount = building?.deposit || 0;
	const title = `${building?.streetNumber} ${building?.street?.streetName} `;

	console.log({ building, money, currentDay, amount, title });

	if (money && parseInt(money) >= amount) {
		console.log('can rent');
		await createTransaction(currentDay, `Deposit ${title}`, amount);
		await createSubscription(`Rent ${title}`, amount);
		await updateMoney(parseFloat(money) - amount);
	}

	gamePlayDB.realEstate.update(buildingID, { status: 'Rented' }).then(function (updated) {
		if (updated) console.log('Friend number 2 was renamed to Number 2');
		else console.log('Nothing was updated - there was no friend with primary key: 2');
	});
	return true;
}
