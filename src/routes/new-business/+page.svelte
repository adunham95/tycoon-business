<script lang="ts">
	import { createBusiness, initializeDatabase } from '$lib/database';
	import ColorInput from '../../components/inputs/ColorInput.svelte';
	import TextInput from '../../components/inputs/TextInput.svelte';

	async function saveBusiness(e: any) {
		initializeDatabase();
		if (!e) return;
		console.log(e);
		let formData = new FormData(e.target);
		let formObject: { [key: string]: any } = {};

		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		let jsonObject = JSON.stringify(formObject);

		console.log(jsonObject);
		await createBusiness(jsonObject);
	}
</script>

<h1 class="py-12 text-center text-3xl">Create Business</h1>

<form class="px-4" on:submit|preventDefault={saveBusiness}>
	<TextInput primaryLabel="Name" placeholder="My Business Name" name="businessName" required />
	<div class="h-2"></div>
	<ColorInput />
	<div class="h-2"></div>
	<div class="flex justify-end">
		<button class="btn btn-primary">Create</button>
	</div>
</form>
