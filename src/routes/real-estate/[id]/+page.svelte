<script lang="ts">
	import { gamePlayDB } from '$lib/db';
	import { numberWithCommas } from '$lib/utils/numbersWithCommas';

	export let data: any;
	let companyID = 0;
	console.log(data);

	async function updateBuilding() {
		console.log(data.buildingData.id);
		await gamePlayDB.realEstate.update(data.buildingData.id, {
			companyID
		});
	}
</script>

<div class="flex-1 overflow-auto">
	<div class="relative">
		<img
			src="/city-img.jpg"
			alt="Street"
			width={800}
			height={500}
			class="aspect-[16/9] w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
		<div class="absolute bottom-0 left-0 right-0 p-4 text-white">
			<h1 class="text-2xl font-bold">
				{data.buildingData.streetNumber}
				{data.buildingData.street.streetName || 'First Street'}
			</h1>
			<div class="flex items-center gap-2 text-sm">
				<span>{data.buildingData.street.traffic} Traffic Score</span>
				<span>{data.buildingData.buildingType.type}</span>
				<span>{numberWithCommas(data.buildingData.buildingType.size)} sq ft</span>
			</div>
		</div>
	</div>
	{#if !data.buildingData.companyID}
		<div class="p-4">
			<div>
				<label>Assigned Business</label>
				<select name="type" class="select w-full max-w-xs" bind:value={companyID}>
					<option disabled value="">Select Business</option>
					{#each data.business as business}
						<option value={business.uuid}>{business.name}</option>
					{/each}
				</select>
			</div>
			<div class="flex justify-end">
				<button class="btn btn-primary" on:click={updateBuilding}>Save</button>
			</div>
		</div>
	{/if}
</div>
