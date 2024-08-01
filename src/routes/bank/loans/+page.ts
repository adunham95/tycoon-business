import { gamePlayDB } from '$lib/db';

export async function load() {
	const myLoans = (await gamePlayDB.loans.toArray()) || [];
	return { myLoans };
}
