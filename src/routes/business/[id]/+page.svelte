<script lang="ts">
	import PageHeader from '$components/PageHeader.svelte';

	export let data: any;
</script>

<PageHeader title={data.business.businessName} />
