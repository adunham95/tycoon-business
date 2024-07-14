<script lang="ts">
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { products } from '../../data/products';

	let quantities: { [key: string]: number };
	$: quantities = {};

	const handleQuantityChange = (id: string, delta: number) => {
		quantities[id] = Math.max((quantities[id] || 0) + delta, 0);
	};
</script>

<h1 class="py-12 text-center text-3xl">Warehouse</h1>

<section class="w-full pb-8">
	<div class="container grid gap-6 px-4 md:gap-8 md:px-6">
		<div class="grid gap-8">
			{#each products as product}
				<div class="grid gap-4 overflow-hidden rounded-lg border">
					<div class="bg-background p-4">
						<div class="flex items-center justify-between">
							<div>
								<h3 class="text-xl font-bold">{product.name}</h3>
								<p class="text-muted-foreground text-sm">{convertToDollars(product.price)}</p>
							</div>
							<div class="flex items-center gap-2">
								<button
									class="rounded border p-2"
									on:click={() => handleQuantityChange(product.id, -1)}
								>
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
								<span class="px-3 text-xl">{quantities[product.id] || 0}</span>
								<button
									class="rounded border p-2"
									on:click={() => handleQuantityChange(product.id, 1)}
								>
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
			{/each}
		</div>
	</div>
</section>

<div class="px-4 pb-8">
	<button class="w-full rounded border py-3">Purchase</button>
</div>
