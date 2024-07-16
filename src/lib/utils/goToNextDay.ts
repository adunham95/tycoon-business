import { setNextDay } from '$lib/database/currentDay';

export async function goToNextDay() {
	const nextDay = await setNextDay();
	return { nextDay };
}
