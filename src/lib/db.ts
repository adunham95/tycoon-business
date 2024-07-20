import Dexie, { type EntityTable } from 'dexie';

interface Friend {
	id: number;
	name: string;
	age: number;
}

export interface RealEstateDB {
	id: string;
	rent: number;
	deposit: number;
	buildingTypeId: string;
	streetId: number;
	streetNumber: number;
	status: string;
}

export interface BusinessDB {
	uuid: number;
	name: string;
	color: string;
	type: string;
}

export interface BankTransitionsDB {
	id: number;
	day: number;
	title: string;
	amount: number;
	items?: string[];
}

export interface SubscriptionsDB {
	id: number;
	title: string;
	amount: number;
}

export interface MyProductsDB {
	id: string;
	buildingID: string;
	productID: string;
	count: number;
}

const db = new Dexie('FriendsDatabase') as Dexie & {
	friends: EntityTable<
		Friend,
		'id' // primary key "id" (for the typings only)
	>;
};

const gamePlayDB = new Dexie('GamePlayDatabase') as Dexie & {
	realEstate: EntityTable<
		RealEstateDB,
		'id' // primary key "id" (for the typings only)
	>;

	business: EntityTable<BusinessDB, 'uuid'>;
	bankTransactions: EntityTable<BankTransitionsDB, 'id'>;
	subscriptions: EntityTable<SubscriptionsDB, 'id'>;
	myProducts: EntityTable<MyProductsDB, 'id'>;
};

// Schema declaration:
db.version(1).stores({
	friends: '++id, name, age' // primary key "id" (for the runtime!)
});

gamePlayDB.version(3).stores({
	realEstate: 'id, status, streetId, buildingTypeId, rent, streetNumber',
	business: '++uuid, name, color, type',
	bankTransactions: '++id, day, title, amount',
	subscriptions: '++id, title, amount',
	myProducts: 'id, buildingID, productID, [buildingID+productID]'
});

export type { Friend };
export { db, gamePlayDB };
