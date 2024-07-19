<script lang="ts">
	import PageHeader from '$components/PageHeader.svelte';

	export let data: any;
	console.log({ data });
</script>

<PageHeader title={data.business.name} />
