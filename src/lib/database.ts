import { openDB } from 'idb';

const settingsDB = { name: 'settings', tables: { users: { name: 'user' } } };
const gamePlayDB = {
	name: 'gameplay',
	tables: {
		player: { name: 'player' },
		products: { name: 'products', settings: { autoIncrement: true } },
		business: { name: 'business', settings: { keyPath: 'id', autoIncrement: true } },
		subscriptions: { name: 'subscriptions', settings: { keyPath: 'id', autoIncrement: true } },
		transactions: { name: 'transactions', settings: { keyPath: 'id', autoIncrement: true } }
	}
};

export function initializeDatabase() {
	openDB(settingsDB.name, 1, {
		upgrade(db) {
			db.createObjectStore(settingsDB.tables.users.name);
		}
	});
	openDB(gamePlayDB.name, 4, {
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
					break;
				default:
					console.error('unknown db version');
			}
		}
	});
}

export async function createBusiness(business: Business) {
	const db1 = await openDB(gamePlayDB.name);
	db1.add(gamePlayDB.tables.business.name, business);
}

export async function getBusiness() {
	const db1 = await openDB(gamePlayDB.name);
	return db1.getAll(gamePlayDB.tables.business.name);
}

export async function getSingleBusiness(id: number) {
	const db1 = await openDB(gamePlayDB.name);
	return db1.get(gamePlayDB.tables.business.name, id);
}

export async function updateMoney(delta: number) {
	const db1 = await openDB(gamePlayDB.name);
	db1.put(gamePlayDB.tables.player.name, delta, 'bankAccount');
	return db1.get(gamePlayDB.tables.player.name, 'bankAccount');
}

export async function getMoney() {
	const db1 = await openDB(gamePlayDB.name);
	return db1.get(gamePlayDB.tables.player.name, 'bankAccount');
}

export async function getCurrentDay() {
	const db1 = await openDB(gamePlayDB.name);
	return db1.get(gamePlayDB.tables.player.name, 'currentDay');
}

export async function setNextDay() {
	const db1 = await openDB(gamePlayDB.name);
	const currentDay = await db1.get(gamePlayDB.tables.player.name, 'currentDay');
	db1.put(gamePlayDB.tables.player.name, currentDay + 1, 'currentDay');
	return currentDay + 1;
}
