<script lang="ts">
	import PageHeader from '$components/PageHeader.svelte';

	export let data: any;
	console.log({ data });
</script>

<PageHeader title={data.business.name} />

<div class="px-4">
	<p>Buildings</p>
	<ul>
		{#each data.business.buildings as item}
			<li class="border border-gray-400 p-2">
				<a href="/real-estate/{item.id}">{item.streetNumber} {item.street.streetName}</a>
			</li>
		{/each}
	</ul>
</div>
