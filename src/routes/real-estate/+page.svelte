<script>
	import PageHeader from '$components/PageHeader.svelte';
	import { clearBuildings, saveRentableBuildings } from '$lib/database/realEstate';
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { numberWithCommas } from '$lib/utils/numbersWithCommas';

	export let data;

	function regenerateBuildings() {
		console.log('Regenerating Buildings');
		clearBuildings();
		saveRentableBuildings(10);
		window.location.reload();
	}
</script>

<PageHeader title="Real Estate" />

<button on:click={regenerateBuildings}>Regenerate Buildings</button>

<ul class="divide-y-2 divide-gray-200 px-4">
	{#each data.buildings as building}
		<li class=" gap-x-6 py-5">
			<a href="/real-estate/rent/{building.id}" class="flex items-center justify-between gap-x-4">
				<div class="min-w-0">
					<div class="flex items-start gap-x-3">
						<p class="text-lg font-semibold leading-6">
							{building.streetNumber}
							{building?.street?.streetName || 0}
						</p>
					</div>
					<div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
						<p class="whitespace-nowrap">
							Traffic: {building?.street?.traffic || 0}
						</p>
						<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
							<circle cx="1" cy="1" r="1" />
						</svg>
						<p class="truncate">Size: {numberWithCommas(building?.buildingType?.size || 0)}</p>
					</div>
				</div>
				<div class="flex flex-none items-center gap-x-4">
					<p class="rounded-md px-2.5 py-1.5 text-sm font-semibold">
						{convertToDollars(building.rent)}/day
					</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
