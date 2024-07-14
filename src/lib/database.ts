import { openDB } from 'idb';

const settingsDB = { name: 'settings', tables: { users: { name: 'user' } } };
const gamePlayDB = {
	name: 'gameplay',
	tables: {
		products: { name: 'products', settings: { autoIncrement: true } },
		business: { name: 'business', settings: { keyPath: 'id', autoIncrement: true } }
	}
};

export function initializeDatabase() {
	openDB(settingsDB.name, 1, {
		upgrade(db) {
			db.createObjectStore(settingsDB.tables.users.name);
		}
	});
	openDB(gamePlayDB.name, 1, {
		upgrade(db) {
			db.createObjectStore(gamePlayDB.tables.business.name, gamePlayDB.tables.business.settings);
			db.createObjectStore(gamePlayDB.tables.products.name, gamePlayDB.tables.products.settings);
		}
	});
}

export async function createBusiness(business: unknown) {
	const db1 = await openDB(gamePlayDB.name, 1);
	db1.add(gamePlayDB.tables.business.name, business);
}
