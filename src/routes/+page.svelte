<script>
	import AppIcon from '../components/AppIcon.svelte';
	import PlaceholderIcon from '../components/placeholderIcon.svelte';
</script>

<main
	class="grid flex-1 gap-4 overflow-auto px-4 py-6"
	style=" grid-template-columns: repeat(auto-fit, minmax(min(75px, 200px), 1fr)); grid-auto-rows: 1fr;"
>
	<div class="col-span-3 row-span-2 flex flex-col items-center gap-1">
		<div class="bg-primary h-full w-full rounded-lg p-3"></div>
	</div>
	<AppIcon link="/warehouse" name="Warehouse" class="bg-secondary" />
	<AppIcon name="Business" class="bg-accent" />
	<AppIcon name="Help" class="bg-error" />
</main>
