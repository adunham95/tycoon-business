import { getBuilding } from '$lib/database/realEstate';
import type Page from './+page.svelte';

export async function load({ params }: Page) {
	const buildingData = await getBuilding(params.id);
	return buildingData;
}
