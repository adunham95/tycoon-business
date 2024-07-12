import { openDB } from 'idb';

// demo1: Getting started
export function demo1() {
	openDB('db1', 1, {
		upgrade(db) {
			db.createObjectStore('store1');
			db.createObjectStore('store2');
		}
	});
	openDB('db2', 1, {
		upgrade(db) {
			db.createObjectStore('store3', { keyPath: 'id' });
			db.createObjectStore('store4', { autoIncrement: true });
		}
	});
}

export async function demo11() {
	const db3 = await openDB('db3', 3, {
		upgrade: async (db, oldVersion, newVersion, transaction) => {
			switch (oldVersion) {
				case 0:
					upgradeDB3fromV0toV1();
				// falls through
				case 1:
					upgradeDB3fromV1toV2();
				// falls through
				case 2:
					await upgradeDB3fromV2toV3();
					break;
				default:
					console.error('unknown db version');
			}

			function upgradeDB3fromV0toV1() {
				db.createObjectStore('moreCats', { keyPath: 'id' });
				generate100cats().forEach((cat) => {
					transaction.objectStore('moreCats').add(cat);
				});
			}
			function upgradeDB3fromV1toV2() {
				db.createObjectStore('userPreference');
				transaction.objectStore('userPreference').add(false, 'useDarkMode');
				transaction.objectStore('userPreference').add(25, 'resultsPerPage');
			}
			async function upgradeDB3fromV2toV3() {
				const store = transaction.objectStore('userPreference');
				store.put('English', 'language');
				store.delete('resultsPerPage');
				let colorTheme = 'automatic';
				const useDarkMode = await store.get('useDarkMode');
				if (oldVersion === 2 && useDarkMode === false) colorTheme = 'light';
				if (oldVersion === 2 && useDarkMode === true) colorTheme = 'dark';
				store.put(colorTheme, 'colorTheme');
				store.delete('useDarkMode');
			}
		}
	});
	db3.close();
}

function generate100cats() {
	return new Array(100).fill().map((item, index) => {
		const id = 'cat' + index.toString().padStart(3, '0');
		const strength = Math.round(Math.random() * 10);
		const speed = Math.round(Math.random() * 10);
		return { id, strength, speed };
	});
}

export async function demo2() {
	const db1 = await openDB('db1', 1);
	db1.add('store1', 'hello world', 'message');
	db1.add('store1', true, 'delivered');
	db1.close();
}

export async function demo3() {
	const db1 = await openDB('db1', 1);
	db1
		.add('store1', 'hello again!!', 'new message')
		.then((result) => {
			console.log('success!', result);
		})
		.catch((err) => {
			console.error('error: ', err);
		});
	db1.close();
}

export async function demo4() {
	const db2 = await openDB('db2', 1);
	db2.add('store3', { id: 'cat001', strength: 10, speed: 10 });
	db2.add('store3', { id: 'cat002', strength: 11, speed: 9 });
	db2.add('store4', { id: 'cat003', strength: 8, speed: 12 });
	db2.add('store4', { id: 'cat004', strength: 12, speed: 13 });
	db2.close();
}

export async function demo5() {
	const db2 = await openDB('db2', 1);
	// retrieve by key:
	db2.get('store3', 'cat001').then(console.log);
	// retrieve all:
	db2.getAll('store3').then(console.log);
	// count the total number of items in a store:
	db2.count('store3').then(console.log);
	// get all keys:
	db2.getAllKeys('store3').then(console.log);
	db2.close();
}

export async function demo6() {
	// set db1/store1/delivered to be false:
	const db1 = await openDB('db1', 1);
	db1.put('store1', false, 'delivered');
	db1.close();
	// replace cat001 with a supercat:
	const db2 = await openDB('db2', 1);
	db2.put('store3', { id: 'cat001', strength: 99, speed: 99 });
	db2.close();
}
