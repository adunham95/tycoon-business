import { setNextDay } from '$lib/database/currentDay';
import { saveRentableBuildings } from '$lib/database/realEstate';
import { gamePlayDB } from '$lib/db';
import { rollDice } from './rollDice';

export async function goToNextDay() {
	const nextDay = await setNextDay();

	//Remove For Rent Buildings
	await gamePlayDB.realEstate
		.where('type')
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

	return { nextDay };
}
