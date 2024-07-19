import { getMoney } from '$lib/database/bank';
import { gamePlayDB } from '$lib/db';

export async function load() {
	const money = (await getMoney()) || 0;
	const transactions = await gamePlayDB.bankTransactions.toArray();
	console.log({ money, transactions });
	return { money, transactions };
}
