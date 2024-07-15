import { openDB } from 'idb';

const settingsDB = { name: 'settings', tables: { users: { name: 'user' } } };
const gamePlayDB = {
	name: 'gameplay',
	tables: {
		player: { name: 'player' },
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
	openDB(gamePlayDB.name, 2, {
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
					upgradeFromV1toV2();
					break;
				default:
					console.error('unknown db version');
			}

			function upgradeFromV1toV2() {
				db.createObjectStore(gamePlayDB.tables.player.name);
				transaction.objectStore(gamePlayDB.tables.player.name).put(0, 'bankAccount');
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
