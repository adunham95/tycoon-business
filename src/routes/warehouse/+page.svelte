<script lang="ts">
	import ProductItem from '$components/inputs/ProductItem.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import { products } from '$data/products';
	import { addSupply } from '$lib/database/myProducts';
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { purchase } from '$lib/utils/purchase';

	let quantities: { [key: string]: number };
	$: quantities = {};
	$: recept = Object.entries(quantities).map(([productID, quantity]) => {
		let product = products.find((product) => product.id === productID);
		return { name: product?.name, count: quantity, price: product?.price || 1 };
	});

	$: total = recept.reduce((acc, item) => acc + item.price * item.count, 0);

	const handleQuantityChange = (id: string, delta: number) => {
		quantities[id] = Math.max((quantities[id] || 0) + delta, 0);
	};

	async function purchaseCart() {
		let purchasedItems = Object.entries(quantities).map(([productID, quantity]) => ({
			productID,
			id: `warehouse-${productID}`,
			count: quantity,
			buildingID: 'warehouse'
		}));

		await addSupply(purchasedItems);
		await purchase(
			total,
			'Warehouse',
			recept.map((item) => item.name || '')
		);

		quantities = {};
	}
</script>

<PageHeader title="Warehouse" />

<section class="w-full pb-8">
	<div class="container grid gap-6 px-4 md:gap-8 md:px-6">
		<div class="grid gap-8">
			{#each products as product}
				<ProductItem {...product} {quantities} {handleQuantityChange} />
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
