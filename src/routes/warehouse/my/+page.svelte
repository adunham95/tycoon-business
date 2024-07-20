<script>
	import PageHeader from '$components/PageHeader.svelte';
	export let data;
	console.log(data);
</script>

<PageHeader title="My Warehouse" />

<ul>
	{#each data.myProducts as item}
		<li>{item?.product?.name || 'Product'} : {item.count}</li>
	{/each}
</ul>
