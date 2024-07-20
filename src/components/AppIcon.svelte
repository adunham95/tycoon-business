<script lang="ts">
	import PlaceholderIcon from './placeholderIcon.svelte';
	import { twMerge } from 'tailwind-merge';
	export let name = 'Warehouse';
	export let link = '';
	export let color: string | undefined = undefined;
</script>

{#if link !== ''}
	<a href={link} class="flex flex-col items-center gap-1">
		<div
			style={`${color !== undefined && `background-color: ${color}`}`}
			class={twMerge('aspect-square w-full rounded-lg bg-primary p-3', $$props.class)}
		>
			<PlaceholderIcon className="text-muted-foreground w-full h-full" />
		</div>
		<span class="text-muted-foreground text-ellipsis text-center text-xs font-bold">{name}</span>
	</a>
{:else}
	<button class="flex flex-col items-center gap-1">
		<div
			style={`${color !== undefined && `background-color: ${color}`}`}
			class={twMerge('aspect-square w-full rounded-lg bg-primary p-3', $$props.class)}
		>
			<PlaceholderIcon className="text-muted-foreground w-full h-full" />
		</div>
		<span class="text-muted-foreground text-ellipsis text-center text-xs font-bold">{name}</span>
	</button>
{/if}
