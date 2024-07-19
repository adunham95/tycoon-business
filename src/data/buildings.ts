export const streetList = [
	{ id: 1, number: 123, streetName: 'Maple Street', traffic: 53, quality: 8 },
	{ id: 2, number: 456, streetName: 'Oak Avenue', traffic: 27, quality: 5 },
	{ id: 3, number: 789, streetName: 'Pine Boulevard', traffic: 85, quality: 6 },
	{ id: 4, number: 1012, streetName: 'Elm Drive', traffic: 64, quality: 3 },
	{ id: 5, number: 345, streetName: 'Birch Lane', traffic: 72, quality: 9 },
	{ id: 6, number: 678, streetName: 'Cedar Court', traffic: 14, quality: 4 },
	{ id: 7, number: 910, streetName: 'Aspen Road', traffic: 93, quality: 7 },
	{ id: 8, number: 1123, streetName: 'Spruce Terrace', traffic: 48, quality: 2 },
	{ id: 9, number: 4567, streetName: 'Willow Way', traffic: 79, quality: 6 },
	{ id: 10, number: 8901, streetName: 'Redwood Circle', traffic: 33, quality: 8 },
	{ id: 11, number: 234, streetName: 'Chestnut Street', traffic: 58, quality: 5 },
	{ id: 12, number: 567, streetName: 'Magnolia Avenue', traffic: 11, quality: 7 },
	{ id: 13, number: 8910, streetName: 'Sycamore Boulevard', traffic: 92, quality: 9 },
	{ id: 14, number: 1234, streetName: 'Poplar Drive', traffic: 21, quality: 4 },
	{ id: 15, number: 5678, streetName: 'Hawthorn Lane', traffic: 66, quality: 3 },
	{ id: 16, number: 9101, streetName: 'Dogwood Court', traffic: 35, quality: 6 },
	{ id: 17, number: 1213, streetName: 'Sequoia Road', traffic: 87, quality: 7 },
	{ id: 18, number: 1415, streetName: 'Alder Terrace', traffic: 44, quality: 5 },
	{ id: 19, number: 1617, streetName: 'Juniper Way', traffic: 29, quality: 8 },
	{ id: 20, number: 1819, streetName: 'Fir Circle', traffic: 75, quality: 4 },
	{ id: 21, number: 2021, streetName: 'Cypress Street', traffic: 56, quality: 9 },
	{ id: 22, number: 2223, streetName: 'Palm Avenue', traffic: 13, quality: 6 },
	{ id: 23, number: 2425, streetName: 'Olive Boulevard', traffic: 81, quality: 7 },
	{ id: 24, number: 2627, streetName: 'Hickory Drive', traffic: 42, quality: 3 },
	{ id: 25, number: 2829, streetName: 'Locust Lane', traffic: 98, quality: 10 },
	{ id: 26, number: 3031, streetName: 'Walnut Court', traffic: 63, quality: 5 },
	{ id: 27, number: 3233, streetName: 'Myrtle Road', traffic: 54, quality: 6 },
	{ id: 28, number: 3435, streetName: 'Beech Terrace', traffic: 16, quality: 2 },
	{ id: 29, number: 3637, streetName: 'Maplewood Way', traffic: 91, quality: 9 },
	{ id: 30, number: 3839, streetName: 'Grove Circle', traffic: 74, quality: 8 },
	{ id: 31, number: 3839, streetName: 'First Street', traffic: 99, quality: 10 },
	{ id: 32, number: 3839, streetName: 'Dead End Ave', traffic: 2, quality: 1 },
	{ id: 33, number: 101, streetName: 'Binary Boulevard', traffic: 47, quality: 6 },
	{ id: 34, number: 808, streetName: 'Pixel Parkway', traffic: 50, quality: 7 },
	{ id: 35, number: 909, streetName: 'Bandwidth Boulevard', traffic: 95, quality: 8 },
	{ id: 36, number: 1010, streetName: 'Debug Drive', traffic: 38, quality: 6 },
	{ id: 37, number: 2525, streetName: 'Array Loop', traffic: 71, quality: 6 },
	{ id: 38, number: 1001, streetName: 'Luxury Lane', traffic: 99, quality: 10 },
	{ id: 39, number: 2020, streetName: 'Prestige Parkway', traffic: 99, quality: 9 },
	{ id: 40, number: 12, streetName: 'Elite Estates', traffic: 99, quality: 20 }
];

export const buildingTypes = [
	{ id: 'm1', type: 'Mini', size: 200, storage: 5, baseRent: 10, breakRoom: false },
	{ id: 'm2', type: 'Mini', size: 500, storage: 25, baseRent: 50, breakRoom: false },
	{ id: 'm3', type: 'Mini', size: 750, storage: 30, baseRent: 60, breakRoom: false },
	{ id: 'r1', type: 'Retail', size: 2000, storage: 100, baseRent: 100, breakRoom: false },
	{ id: 'r2', type: 'Retail', size: 4000, storage: 200, baseRent: 200, breakRoom: true },
	{ id: 'r3', type: 'Retail', size: 8000, storage: 400, baseRent: 500, breakRoom: true },
	{ id: 'r4', type: 'Retail', size: 12000, storage: 650, baseRent: 500, breakRoom: true },
	{ id: 'r5', type: 'Retail', size: 20000, storage: 800, baseRent: 1000, breakRoom: true },
	{ id: 'r6', type: 'Retail', size: 30000, storage: 1000, baseRent: 1500, breakRoom: true },
	{ id: 'ss1', type: 'Superstore', size: 100000, storage: 10000, baseRent: 5000, breakRoom: true },
	{ id: 'ss2', type: 'Superstore', size: 150000, storage: 15000, baseRent: 10000, breakRoom: true },
	{ id: 'ss3', type: 'Superstore', size: 250000, storage: 30000, baseRent: 15000, breakRoom: true }
];

export function getBuildingType(buildingTypeId: string) {
	return buildingTypes.find((b) => b.id === buildingTypeId);
}

export function getStreet(streetId: number) {
	return streetList.find((s) => s.id === streetId);
}
export function generateBuildings(numberRows = 5) {
	const buildings = [];

	while (buildings.length < numberRows) {
		const street = streetList[Math.floor(Math.random() * streetList.length)];
		const type = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
		const rent = parseFloat((type.baseRent * street.traffic * (street.quality / 2)).toFixed(0));
		buildings.push({
			streetId: street.id,
			streetNumber: getStreetAddress(street.number),
			street: street,
			buildingType: type,
			buildingTypeId: type.id,
			rent
		});
	}

	return buildings.sort((a, b) => {
		if (a.street.streetName < b.street.streetName) {
			return -1;
		}
		if (a.street.streetName > b.street.streetName) {
			return 1;
		}

		return a.streetNumber - b.streetNumber;
	});
}

function getStreetAddress(max = 9999, min = 100) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
