export const appliances = [
	{
		id: 'bar',
		name: 'Bar',
		description: 'A bar that serves drinks',
		storesType: 'liquid',
		storesUnits: 100,
		price: 10000
	},
	{
		id: 'demo-table',
		name: 'Demo Table',
		description: 'A table that holds demo items',
		storeType: 'sm-box',
		storeUnits: 1,
		price: 500
	},
	{
		id: 'storage-shelves',
		name: 'Storage Shelves',
		description: 'Shelves for storing items',
		storeType: 'box',
		storeUnits: 20,
		price: 200
	},
	{
		id: 'display-shelves',
		name: 'Display Shelves',
		description: 'Shelves for displaying items',
		storeType: 'sm-box',
		storeUnits: 10,
		price: 200
	}
];

export function getAppliance(id: string) {
	return appliances.find((item) => item.id === id);
}
