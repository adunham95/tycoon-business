export function convertToDollars(amount: number) {
	return (amount / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
}
