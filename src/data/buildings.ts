export const streetList = [
	{ number: 123, streetName: 'Maple Street', traffic: 53, quality: 8 },
	{ number: 456, streetName: 'Oak Avenue', traffic: 27, quality: 5 },
	{ number: 789, streetName: 'Pine Boulevard', traffic: 85, quality: 6 },
	{ number: 1012, streetName: 'Elm Drive', traffic: 64, quality: 3 },
	{ number: 345, streetName: 'Birch Lane', traffic: 72, quality: 9 },
	{ number: 678, streetName: 'Cedar Court', traffic: 14, quality: 4 },
	{ number: 910, streetName: 'Aspen Road', traffic: 93, quality: 7 },
	{ number: 1123, streetName: 'Spruce Terrace', traffic: 48, quality: 2 },
	{ number: 4567, streetName: 'Willow Way', traffic: 79, quality: 6 },
	{ number: 8901, streetName: 'Redwood Circle', traffic: 33, quality: 8 },
	{ number: 234, streetName: 'Chestnut Street', traffic: 58, quality: 5 },
	{ number: 567, streetName: 'Magnolia Avenue', traffic: 11, quality: 7 },
	{ number: 8910, streetName: 'Sycamore Boulevard', traffic: 92, quality: 9 },
	{ number: 1234, streetName: 'Poplar Drive', traffic: 21, quality: 4 },
	{ number: 5678, streetName: 'Hawthorn Lane', traffic: 66, quality: 3 },
	{ number: 9101, streetName: 'Dogwood Court', traffic: 35, quality: 6 },
	{ number: 1213, streetName: 'Sequoia Road', traffic: 87, quality: 7 },
	{ number: 1415, streetName: 'Alder Terrace', traffic: 44, quality: 5 },
	{ number: 1617, streetName: 'Juniper Way', traffic: 29, quality: 8 },
	{ number: 1819, streetName: 'Fir Circle', traffic: 75, quality: 4 },
	{ number: 2021, streetName: 'Cypress Street', traffic: 56, quality: 9 },
	{ number: 2223, streetName: 'Palm Avenue', traffic: 13, quality: 6 },
	{ number: 2425, streetName: 'Olive Boulevard', traffic: 81, quality: 7 },
	{ number: 2627, streetName: 'Hickory Drive', traffic: 42, quality: 3 },
	{ number: 2829, streetName: 'Locust Lane', traffic: 98, quality: 10 },
	{ number: 3031, streetName: 'Walnut Court', traffic: 63, quality: 5 },
	{ number: 3233, streetName: 'Myrtle Road', traffic: 54, quality: 6 },
	{ number: 3435, streetName: 'Beech Terrace', traffic: 16, quality: 2 },
	{ number: 3637, streetName: 'Maplewood Way', traffic: 91, quality: 9 },
	{ number: 3839, streetName: 'Grove Circle', traffic: 74, quality: 8 },
	{ number: 3839, streetName: 'First Street', traffic: 99, quality: 10 },
	{ number: 3839, streetName: 'Dead End Ave', traffic: 2, quality: 1 },
	{ number: 101, streetName: 'Binary Boulevard', traffic: 47, quality: 6 },
	{ number: 808, streetName: 'Pixel Parkway', traffic: 50, quality: 7 },
	{ number: 909, streetName: 'Bandwidth Boulevard', traffic: 95, quality: 8 },
	{ number: 1010, streetName: 'Debug Drive', traffic: 38, quality: 6 },
	{ number: 2525, streetName: 'Array Loop', traffic: 71, quality: 6 }
];

export const buildingTypes = [
	{ name: 'm1', size: 200, storage: 5, baseRent: 1 },
	{ name: 'm2', size: 500, storage: 25, baseRent: 5 },
	{ name: 'm2', size: 750, storage: 30, baseRent: 6 },
	{ name: 'r1', size: 2000, storage: 100, baseRent: 10 },
	{ name: 'r1', size: 2000, storage: 100, baseRent: 10 },
	{ name: 'r2', size: 4000, storage: 200, baseRent: 20 },
	{ name: 'r3', size: 8000, storage: 400, baseRent: 50 },
	{ name: 'r4', size: 12000, storage: 650, baseRent: 50 },
	{ name: 'r5', size: 20000, storage: 800, baseRent: 100 },
	{ name: 'r6', size: 30000, storage: 1000, baseRent: 150 }
];

export function generateBuildings(numberRows = 5) {
	const buildings = [];

	while (buildings.length < numberRows) {
		const street = streetList[Math.floor(Math.random() * streetList.length)];
		const type = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
		const rent = parseFloat(((type.baseRent + street.traffic) * (street.quality / 2)).toFixed(0));
		buildings.push({
			streetNumber: getStreetAddress(street.number),
			street: street,
			buildingType: type,
			rent
		});
	}

	return buildings.sort((a, b) => a.rent - b.rent);
}

function getStreetAddress(max = 9999, min = 100) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
