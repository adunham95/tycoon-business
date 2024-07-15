import { setNextDay } from '$lib/database';

export async function goToNextDay() {
	const nextDay = await setNextDay();
	return { nextDay };
}
