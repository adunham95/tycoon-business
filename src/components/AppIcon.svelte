<script lang="ts">
	import PlaceholderIcon from './placeholderIcon.svelte';
	import { twMerge } from 'tailwind-merge';
	export let name = 'Warehouse';
	export let link = '';
</script>

{#if link !== ''}
	<a href={link} class="flex flex-col items-center gap-1">
		<div class={twMerge('bg-primary aspect-square w-full rounded-lg p-3', $$props.class)}>
			<PlaceholderIcon className="text-muted-foreground w-full h-full" />
		</div>
		<span class="text-muted-foreground text-sm font-bold">{name}</span>
	</a>
{:else}
	<button class="flex flex-col items-center gap-1">
		<div class={twMerge('bg-primary aspect-square w-full rounded-lg p-3', $$props.class)}>
			<PlaceholderIcon className="text-muted-foreground w-full h-full" />
		</div>
		<span class="text-muted-foreground text-sm font-bold">{name}</span>
	</button>
{/if}
