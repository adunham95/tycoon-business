export const companies = {
	aero: {
		name: 'Aero'
	}
};

export const products = [
	{
		id: 'beer-bottles',
		name: 'Beer Bottle',
		price: 100,
		category: 'drinks',
		peakSeasons: ['Fall', 'Summer'],
		unitType: 'bottle',
		priceMin: 100,
		priceMax: 10000
	},
	{
		id: 'beer-barrel',
		name: 'Beer Barrel',
		price: 100,
		category: 'drinks',
		peakSeasons: ['Fall', 'Summer'],
		unitType: 'liquid',
		priceMin: 100,
		priceMax: 10000
	},
	{
		id: 'whiskey-bottle',
		name: 'Whiskey Bottle',
		price: 100,
		category: 'drinks',
		peakSeasons: ['Fall', 'Summer'],
		unitType: 'bottle',
		priceMin: 100,
		priceMax: 10000
	},
	{
		id: 'aero-phone',
		name: 'AeroPhone',
		price: 10000,
		category: 'electronics',
		unitType: 'sm-box',
		priceMin: 10000,
		priceMax: 100000,
		company: companies.aero
	},
	{
		id: 'aero-laptop',
		name: 'AeroBook',
		price: 100000,
		category: 'electronics',
		unitType: 'box',
		priceMin: 100000,
		priceMax: 1000000,
		company: companies.aero
	},
	{
		id: 'aero-watch',
		name: 'AeroWatch',
		price: 100000,
		category: 'electronics',
		unitType: 'box',
		priceMin: 100000,
		priceMax: 1000000,
		company: companies.aero
	},
	{
		id: 'aero-tablet',
		name: 'AeroPad',
		price: 100000,
		category: 'electronics',
		unitType: 'box',
		priceMin: 100000,
		priceMax: 1000000,
		company: companies.aero
	},
	{
		id: 'aero-earbuds',
		name: 'AeroBuds',
		price: 100000,
		category: 'electronics',
		unitType: 'box',
		priceMin: 100000,
		priceMax: 1000000,
		company: companies.aero
	},
	{
		id: 'aero-vision',
		name: 'AeroVision',
		price: 100000,
		category: 'electronics',
		unitType: 'box',
		priceMin: 100000,
		priceMax: 1000000,
		company: companies.aero
	}
];

export function getProduct(id: string) {
	const product = products.find((product) => product.id === id);
	if (!product) {
		return {
			name: 'Product Not Found',
			description: 'Product Not Found',
			price: 0
		};
	}
	return {
		description: product?.category,
		...product
	};
}
