<script>
	import AppIcon from '../components/AppIcon.svelte';
	import AppWidget from '../components/AppWidget.svelte';
</script>

<main
	class="grid flex-1 gap-4 overflow-auto px-4 py-6"
	style=" grid-template-columns: repeat(auto-fit, minmax(min(75px, 200px), 1fr)); grid-auto-rows: 1fr;"
>
	<AppWidget width={3} height={2} name="Details" />
	<AppWidget
		width={1}
		height={1}
		name="Day"
		class="color-white flex items-center justify-center bg-orange-400"
	>
		<h1 class=" text-5xl text-white">100</h1>
	</AppWidget>
	<AppIcon name="Help" class="bg-error" />
	<AppIcon link="/warehouse" name="Warehouse" class="bg-secondary" />
	<AppIcon link="/new-business" name="Create" class="bg-accent" />
	<AppIcon link="/supply-depot" name="Supply Depot" class="bg-accent" />
</main>
