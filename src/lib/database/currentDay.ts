const key = 'currentDay';

export async function getCurrentDay() {
	return parseInt(localStorage.getItem(key) || '0') || 0;
}

export async function setNextDay() {
	const today = await getCurrentDay();
	const nextDay = today + 1;
	setDay(nextDay);
	return nextDay;
}

export async function setDay(day: number) {
	return localStorage.setItem(key, String(day));
}
