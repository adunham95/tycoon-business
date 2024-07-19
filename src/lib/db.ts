import Dexie, { type EntityTable } from 'dexie';

interface Friend {
	id: number;
	name: string;
	age: number;
}

export interface RealEstateDB {
	id: string;
	rent: number;
	buildingTypeId: string;
	streetId: number;
	streetNumber: number;
	type: string;
}

export interface BusinessDB {
	uuid: number;
	name: string;
	color: string;
	type: string;
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
};

// Schema declaration:
db.version(1).stores({
	friends: '++id, name, age' // primary key "id" (for the runtime!)
});

gamePlayDB.version(2).stores({
	realEstate: 'id, type, streetId, buildingTypeId, rent, streetNumber',
	business: '++uuid, name, color, type'
});

export type { Friend };
export { db, gamePlayDB };
