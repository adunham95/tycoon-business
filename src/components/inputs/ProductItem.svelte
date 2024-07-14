<script lang="ts">
	import { convertToDollars } from '$lib/utils/convertToDollars';

	export let name: string;
	export let description: string | undefined = undefined;
	export let price: number;
	export let id: string;
	export let quantities: { [key: string]: number } = {};
	export let handleQuantityChange: (id: string, delta: number) => void;
</script>

<div class="grid gap-4 overflow-hidden rounded-lg border">
	<div class="bg-background p-4">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="text-xl font-bold">{name}</h3>
				<p class="text-muted-foreground text-sm">{convertToDollars(price)}</p>
				{#if description}
					<p class="text-muted-foreground text-sm">{description}</p>
				{/if}
			</div>
			<div class="flex items-center gap-2">
				<button class="rounded border p-2" on:click={() => handleQuantityChange(id, -1)}>
					<svg
						class="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
					</svg>
				</button>
				<span class="px-3 text-xl">{quantities[id] || 0}</span>
				<button class="rounded border p-2" on:click={() => handleQuantityChange(id, 1)}>
					<svg
						class="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5v14" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
