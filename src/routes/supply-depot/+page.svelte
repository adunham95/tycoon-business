<script lang="ts">
	import ProductItem from '$components/inputs/ProductItem.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import { appliances } from '$data/appliances';
	import { purchase } from '$lib/utils/purchase';
	import { addAppliances } from '$lib/database/myAppliances';
	import { convertToDollars } from '$lib/utils/convertToDollars';

	let quantities: { [key: string]: number };
	$: quantities = {};

	$: recept = Object.entries(quantities).map(([productID, quantity]) => {
		let appliance = appliances.find((appliance) => appliance.id === productID);
		return { name: appliance?.name, count: quantity, price: appliance?.price || 1 };
	});

	$: total = recept.reduce((acc, item) => acc + item.price * item.count, 0);

	const handleQuantityChange = (id: string, delta: number) => {
		quantities[id] = Math.max((quantities[id] || 0) + delta, 0);
	};

	async function purchaseCart() {
		console.log(quantities);

		let purchasedItems: { applianceID: string; buildingID: string }[] = [];

		Object.entries(quantities).forEach(([applianceID, quantity]) => {
			for (let index = 0; index < quantity; index++) {
				purchasedItems.push({
					applianceID,
					buildingID: 'warehouse'
				});
			}
		});

		try {
			await purchase(
				total,
				'Supply Depot',
				recept.map((item) => item.name || '')
			);
			await addAppliances(purchasedItems);
			quantities = {};
		} catch (error) {
			console.log(error);
		}
	}
</script>

<PageHeader title="Supply Depot" />

<section class="w-full pb-8">
	<div class="container grid gap-6 px-4 md:gap-8 md:px-6">
		<div class="grid gap-8">
			{#each appliances as item}
				<ProductItem {...item} {quantities} {handleQuantityChange} />
			{/each}
		</div>
	</div>
</section>

<div class="px-4">
	<p>Total: {convertToDollars(total)}</p>
</div>

<div class="px-4 pb-8">
	<button class="w-full rounded border py-3" on:click={purchaseCart}>Purchase</button>
</div>
