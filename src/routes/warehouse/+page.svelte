<script>
	import { products } from '../../data/products';
</script>

<section class="w-full py-12">
	<div class="container grid gap-6 px-4 md:gap-8 md:px-6">
		<div class="grid gap-8">
			{#each products as product}
				<div class="grid gap-4 overflow-hidden rounded-lg border">
					<div class="bg-background p-4">
						<div class="flex items-center justify-between">
							<h3 class="text-xl font-bold">{product.name}</h3>
							<div class="flex items-center gap-2">
								<button>
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
								<span>0</span>
								<button>
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
						<p class="text-muted-foreground text-sm">${product.price}</p>
					</div>
				</div>
				<!-- <div class="grid grid-cols-[1fr_auto] items-center gap-4">
					<div class="grid gap-1">
						<h3 class="font-semibold">{product.name}</h3>
						<div class="flex items-center gap-2">
							<button>
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
							<span>0</span>
							<button>
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
						<div class="text-primary font-semibold">${product.price}</div>
					</div>
				</div> -->
			{/each}
		</div>
	</div>
</section>
