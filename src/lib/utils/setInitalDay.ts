import { updateMoney } from '$lib/database/bank';
import { setDay } from '$lib/database/currentDay';
import { clearBuildings, saveRentableBuildings } from '$lib/database/realEstate';

export async function setInitialDay() {
	updateMoney(50000);
	setDay(1);

	//Remove Current For Rent Buildings
	clearBuildings();
	saveRentableBuildings(10);

	return { day: 1 };
}
