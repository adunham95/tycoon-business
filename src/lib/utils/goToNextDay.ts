import { getMoney, purchase } from '$lib/database/bank';
import { setNextDay } from '$lib/database/currentDay';
import { saveRentableBuildings } from '$lib/database/realEstate';
import { createTransaction, getSubscriptions } from '$lib/database/transactions';
import { gamePlayDB } from '$lib/db';
import { rollDice } from './rollDice';

export async function goToNextDay() {
	const nextDay = await setNextDay();

	//Remove For Rent Buildings
	await gamePlayDB.realEstate
		.where('status')
		.equals('for-rent')
		.modify((value, ref) => {
			console.log({ value, ref });
			if (rollDice(6, 8).isBeat && ref) {
				gamePlayDB.realEstate.delete(value.id);
			}
		});

	let buildingsToAdd = 0;
	const realEstate = await gamePlayDB.realEstate.toArray();

	if (realEstate.length < 10) {
		buildingsToAdd = 10 - realEstate.length;
	}

	saveRentableBuildings(buildingsToAdd);

	const subscriptions = await getSubscriptions();

	for (let index = 0; index < subscriptions.length; index++) {
		const subscription = subscriptions[index];
		await createTransaction(nextDay, subscription.title, subscription.amount);
		await purchase(subscription.amount);
	}

	await gamePlayDB.myLoans.where({ paid: false, endDay: '>=', nextDay }).modify({ paid: true });

	const loans = await gamePlayDB.myLoans.where({ paid: false }).toArray();
	for (let index = 0; index < loans.length; index++) {
		const loan = loans[index];
		await createTransaction(nextDay, `Loan ${loan.id}`, loan.payment);
		await purchase(loan.payment);
	}

	const money = getMoney();

	return { nextDay, money };
}
