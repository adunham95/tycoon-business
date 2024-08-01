<script>
	import PageHeader from '$components/PageHeader.svelte';
	export let data;
	console.log(data);
</script>

<PageHeader title="My Warehouse" />

<h2 class="px-4 text-xl font-bold">Products</h2>

<ul class="grid grid-cols-2 gap-6 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each data.myProducts as item}
		<li class="bg-background overflow-hidden rounded-lg border shadow-sm">
			<div class="p-2">
				<h3 class="mb-2 text-lg font-semibold">{item?.product?.name || ''}</h3>
				<p class="text-muted-foreground mb-4">
					{item.product?.description || ''}
				</p>
				<p class="text-muted-foreground mb-4">
					{item.count} in stock
				</p>
			</div>
		</li>
	{/each}
</ul>

<h2 class="px-4 text-xl font-bold">Supplies</h2>

<ul class="grid grid-cols-1 gap-6">
	{#each data.myAppliances as item}
		<li class="bg-background overflow-hidden rounded-lg shadow-sm">
			<div class="p-4">
				<h3 class="mb-2 text-lg font-semibold">{item?.appliance?.name}</h3>
				<p class="text-muted-foreground mb-4">
					{item.appliance?.description}
				</p>
			</div>
		</li>
	{/each}
</ul>
