import { getMoney, updateMoney } from '$lib/database/bank';
import { getCurrentDay } from '$lib/database/currentDay';
import { getBuilding } from '$lib/database/realEstate';
import { createLoanItem, createSubscription, createTransaction } from '$lib/database/transactions';
import { gamePlayDB } from '$lib/db';
export function purchase(amount: number, title: string, recipt?: string[]) {
	const money = getMoney();
	const currentDay = getCurrentDay();
	if (money && money >= amount) {
		createTransaction(currentDay, title, amount, recipt);
		updateMoney(money - amount);
	} else {
		throw new Error('Not enough money');
	}
	return true;
}

export async function rentBuilding(buildingID: string) {
	const money = getMoney();
	const currentDay = getCurrentDay();
	const building = await getBuilding(buildingID);
	const amount = building?.deposit || 0;
	const title = `${building?.streetNumber} ${building?.street?.streetName}`;

	console.log({ building, money, currentDay, amount, title });

	if (money && money >= amount) {
		console.log('can rent');
		await createTransaction(currentDay, `Deposit ${title}`, amount);
		await createSubscription(`Rent ${title}`, amount);
		await updateMoney(money - amount);
	} else {
		console.log('cant rent');
		return false;
	}

	gamePlayDB.realEstate.update(buildingID, { status: 'Rented' });
	return true;
}

export async function createLoan(loanAmount: number, loanLength: number, loanPayment: number) {
	const money = getMoney();
	const currentDay = getCurrentDay();
	const endDay = currentDay + loanLength;

	await createTransaction(currentDay, 'Loan', loanAmount * -1);
	await updateMoney(money + loanAmount);
	await createLoanItem(loanAmount, loanPayment, loanLength, endDay);

	console.log({ money, currentDay, loanAmount, loanLength });
}
