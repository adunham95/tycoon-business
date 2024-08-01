<script lang="ts">
	import ColorInput from '$components/inputs/ColorInput.svelte';
	import TextInput from '$components/inputs/TextInput.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import type { BusinessDB } from '$lib/db';
	import { businessCategories } from '$data/bussiness';
	import { startBusiness } from '$lib/utils/purchase';

	let name = '';
	let color = '';
	let categoryID = '';

	async function saveBusiness(e: any) {
		const formObject = { name, color, type: categoryID };
		await startBusiness(formObject as BusinessDB);
	}
</script>

<PageHeader title="New Business" />

<form class="px-4" on:submit|preventDefault={saveBusiness}>
	<TextInput
		bind:value={name}
		primaryLabel="Name"
		placeholder="My Business Name"
		name="name"
		required
	/>
	<div class="h-2"></div>
	<ColorInput bind:value={color} />
	<div class="h-2"></div>
	<select name="type" class="select w-full max-w-xs" bind:value={categoryID}>
		<option disabled selected value="">Category</option>
		{#each businessCategories as business}
			<option value={business.id}>{business.name}</option>
		{/each}
	</select>
	<div class="h-2"></div>
	<div class="flex justify-end">
		<button class="btn btn-primary">Create</button>
	</div>
</form>
