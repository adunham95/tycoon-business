<script lang="ts">
	import ColorInput from '$components/inputs/ColorInput.svelte';
	import TextInput from '$components/inputs/TextInput.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import type { BusinessDB } from '$lib/db';
	import { createBusiness } from '$lib/database/businesses';

	async function saveBusiness(e: any) {
		if (!e) return;
		console.log(e);
		let formData = new FormData(e.target);
		let formObject: { [key: string]: any } = {};

		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		let jsonObject = JSON.stringify(formObject);

		console.log(jsonObject);
		await createBusiness(formObject as BusinessDB);
	}
</script>

<PageHeader title="New Business" />

<form class="px-4" on:submit|preventDefault={saveBusiness}>
	<TextInput primaryLabel="Name" placeholder="My Business Name" name="name" required />
	<div class="h-2"></div>
	<ColorInput />
	<div class="h-2"></div>
	<select name="type" class="select w-full max-w-xs">
		<option disabled selected>Category</option>
		<option>Bar</option>
		<option>Electronics</option>
		<option>Coffee Shop</option>
		<option>Food</option>
		<option>Clothing</option>
	</select>
	<div class="h-2"></div>
	<div class="flex justify-end">
		<button class="btn btn-primary">Create</button>
	</div>
</form>
