<script lang="ts">
	import ProductItem from '$components/inputs/ProductItem.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import { appliances } from '$data/appliances';

	let quantities: { [key: string]: number };
	$: quantities = {};

	const handleQuantityChange = (id: string, delta: number) => {
		quantities[id] = Math.max((quantities[id] || 0) + delta, 0);
	};
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

<div class="px-4 pb-8">
	<button class="w-full rounded border py-3">Purchase</button>
</div>
