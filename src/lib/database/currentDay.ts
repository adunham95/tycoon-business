const key = 'currentDay';

export function getCurrentDay() {
	return parseInt(localStorage.getItem(key) || '0') || 0;
}

export function setNextDay() {
	const today = getCurrentDay();
	const nextDay = today + 1;
	setDay(nextDay);
	return nextDay;
}

export function setDay(day: number) {
	return localStorage.setItem(key, String(day));
}
