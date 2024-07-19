<script lang="ts">
	import AppIcon from '$components/AppIcon.svelte';
	import AppWidget from '$components/AppWidget.svelte';
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { goToNextDay } from '$lib/utils/goToNextDay';

	export let data: any;

	let businesses: Business[] = [...data.business];
	let currentDay = data.currentDay;

	async function handleNextDay() {
		const { nextDay } = await goToNextDay();
		currentDay = nextDay;
	}

	$: console.log(data);
</script>

<main
	class="grid flex-1 gap-4 overflow-auto px-4 py-6"
	style=" grid-template-columns: repeat(auto-fit, minmax(min(75px, 200px), 1fr)); grid-auto-rows: 1fr;"
>
	<AppWidget width={4} height={1} name="Bank">
		<div class="flex h-full items-center justify-between">
			<h1 class=" text-2xl text-white">{convertToDollars(data.money)}</h1>
			<a href="/bank" class="btn btn-ghost text-white">Visit Bank</a>
		</div>
	</AppWidget>
	<AppWidget width={3} height={2} name="Details">
		<button on:click={handleNextDay}>Go To Next day</button>
	</AppWidget>

	<AppWidget
		width={1}
		height={1}
		name="Day"
		class="color-white flex items-center justify-center bg-orange-400"
	>
		<h1 class=" text-5xl text-white">{currentDay}</h1>
	</AppWidget>
	<AppIcon name="Help" class="bg-error" />
	<AppIcon link="/warehouse" name="Warehouse" />
	<AppIcon link="/new-business" name="Create" />
	<AppIcon link="/supply-depot" name="Supply Depot" />
	<AppIcon link="/real-estate" name="Real Estate" />
	{#each businesses as business}
		<AppIcon
			color={business.color}
			link={`/business/${business.id}`}
			name={business.businessName}
		/>
	{/each}
</main>
