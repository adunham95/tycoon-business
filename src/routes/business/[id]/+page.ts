import { error } from '@sveltejs/kit';
import type Page from './+page.svelte';
import { getSingleBusiness } from '$lib/database/businesses';

export async function load({ params }: Page) {
	console.log(params);
	const business = await getSingleBusiness(parseInt(params.id));
	console.log({ business });
	if (business) return { business };

	error(404, 'Not found');
}
