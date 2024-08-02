export const businessCategories = [
	{
		id: 'bar',
		name: 'Bar',
		cost: 10000
	},
	{
		id: 'electronics',
		name: 'Electronics Store',
		cost: 5000
	},
	{
		id: 'coffee',
		name: 'Coffee Shop',
		cost: 5000
	},
	{
		id: 'retail',
		name: 'Retail Store',
		cost: 5000
	}
];

export function getCompanyType(id: string) {
	const type = businessCategories.find((category) => category.id === id);
	if (!type) return id;
	return type;
}