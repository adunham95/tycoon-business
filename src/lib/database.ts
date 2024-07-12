import { openDB } from 'idb';

export function initializeDatabase() {
	openDB('settings', 1, {
		upgrade(db) {
			db.createObjectStore('user');
		}
	});
	openDB('gameplay', 1, {
		upgrade(db) {
			db.createObjectStore('business', { keyPath: 'id' });
			db.createObjectStore('products', { autoIncrement: true });
		}
	});
}
