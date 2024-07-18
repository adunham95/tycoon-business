import { openDB } from 'idb';

export const settingsDB = { name: 'settings', tables: { users: { name: 'user' } } };
export const gamePlayDB = {
	name: 'gameplay',
	tables: {
		player: { name: 'player' },
		products: { name: 'products', settings: { autoIncrement: true } },
		business: { name: 'business', settings: { keyPath: 'id', autoIncrement: true } },
		subscriptions: { name: 'subscriptions', settings: { keyPath: 'id', autoIncrement: true } },
		transactions: { name: 'transactions', settings: { keyPath: 'id', autoIncrement: true } },
		realEstate: { name: 'real-estate', settings: { keyPath: 'id' } }
	}
};

export function initializeDatabase() {
	openDB(settingsDB.name, 1, {
		upgrade(db) {
			db.createObjectStore(settingsDB.tables.users.name);
		}
	});
	openDB(gamePlayDB.name, 5, {
		upgrade(db, oldVersion, newVersion, transaction) {
			switch (oldVersion) {
				case 0:
					db.createObjectStore(
						gamePlayDB.tables.business.name,
						gamePlayDB.tables.business.settings
					);
					db.createObjectStore(
						gamePlayDB.tables.products.name,
						gamePlayDB.tables.products.settings
					);
				// eslint-disable-next-line no-fallthrough
				case 1:
					db.createObjectStore(gamePlayDB.tables.player.name);
					transaction.objectStore(gamePlayDB.tables.player.name).put(0, 'bankAccount');
				// eslint-disable-next-line no-fallthrough
				case 2:
					db.createObjectStore(
						gamePlayDB.tables.transactions.name,
						gamePlayDB.tables.transactions.settings
					);
					db.createObjectStore(
						gamePlayDB.tables.subscriptions.name,
						gamePlayDB.tables.subscriptions.settings
					);
				// eslint-disable-next-line no-fallthrough
				case 3:
					transaction.objectStore(gamePlayDB.tables.player.name).put(1, 'currentDay');
				// eslint-disable-next-line no-fallthrough
				case 4:
					db.createObjectStore(
						gamePlayDB.tables.realEstate.name,
						gamePlayDB.tables.realEstate.settings
					);
					break;

				default:
					console.error('unknown db version');
			}
		}
	});
}

export async function openGameDB() {
	await initializeDatabase();
	return await openDB(gamePlayDB.name);
}

export async function createBusiness(business: Business) {
	const db1 = await openGameDB();
	db1.add(gamePlayDB.tables.business.name, business);
}

export async function getBusiness() {
	const db1 = await openGameDB();
	return db1.getAll(gamePlayDB.tables.business.name);
}

export async function getSingleBusiness(id: number) {
	const db1 = await openGameDB();
	return db1.get(gamePlayDB.tables.business.name, id);
}
