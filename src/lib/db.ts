import Dexie, { type EntityTable } from 'dexie';

interface Friend {
	id: number;
	name: string;
	age: number;
}

interface RealEstate {
	id: string;
	rent: number;
	buildingTypeId: string;
	streetId: number;
	streetNumber: number;
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
		RealEstate,
		'id' // primary key "id" (for the typings only)
	>;
};

// Schema declaration:
db.version(1).stores({
	friends: '++id, name, age' // primary key "id" (for the runtime!)
});

gamePlayDB.version(1).stores({
	realEstate: 'id, type, streetId, buildingTypeId, rent, streetNumber'
});

export type { Friend };
export { db, gamePlayDB };
