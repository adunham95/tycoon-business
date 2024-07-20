import { updateMoney } from '$lib/database/bank';
import { setDay } from '$lib/database/currentDay';
import { clearBuildings, saveRentableBuildings } from '$lib/database/realEstate';
import { clearTransactions } from '$lib/database/transactions';

export async function setInitialDay() {
	updateMoney(50000);
	setDay(1);

	//Remove Current For Rent Buildings
	clearBuildings();
	saveRentableBuildings(10);

	clearTransactions();

	return { day: 1 };
}
