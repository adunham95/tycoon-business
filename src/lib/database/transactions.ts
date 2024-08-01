import { gamePlayDB } from '$lib/db';

export async function createTransaction(
	day: number,
	title: string,
	amount: number,
	items?: string[]
) {
	console.log({ day, title, amount });
	const id = await gamePlayDB.bankTransactions.add({
		day,
		title,
		amount,
		items
	});

	return id;
}

export async function createSubscription(title: string, amount: number) {
	await gamePlayDB.subscriptions.add({
		title,
		amount
	});
}

export async function createLoanItem(
	amount: number,
	payment: number,
	length: number,
	endDay: number
) {
	await gamePlayDB.loans.add({
		amount,
		length,
		payment,
		endDay,
		paid: 0
	});
}

export async function getSubscriptions() {
	return gamePlayDB.subscriptions.toArray();
}

export async function clearTransactions() {
	await gamePlayDB.bankTransactions.clear();
	await gamePlayDB.subscriptions.clear();
}
