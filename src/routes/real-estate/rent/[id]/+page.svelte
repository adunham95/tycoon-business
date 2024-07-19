<script lang="ts">
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { numberWithCommas } from '$lib/utils/numbersWithCommas';
	import { rentBuilding } from '$lib/utils/purchase';
	export let data: any;
	console.log(data);
</script>

<div class="flex-1 overflow-auto">
	<div class="relative">
		<img
			src="/city-img.jpg"
			alt="Street"
			width={800}
			height={500}
			class="aspect-[16/9] w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
		<div class="absolute bottom-0 left-0 right-0 p-4 text-white">
			<h1 class="text-2xl font-bold">
				{data.streetNumber}
				{data.street.streetName || 'First Street'}
			</h1>
			<div class="flex items-center gap-2 text-sm">
				<span>{data.street.traffic} Traffic Score</span>
				<span>{data.buildingType.type}</span>
				<span>{numberWithCommas(data.buildingType.size)} sq ft</span>
			</div>
		</div>
	</div>
	<div class="space-y-4 p-4">
		<div>
			<div class="text-lg font-medium">{convertToDollars(data.rent * 30)}/month</div>
			<!-- <div class="text-muted-foreground text-sm">Includes utilities and internet</div> -->
		</div>

		<div class="pt-4">
			<h2 class="text-lg font-medium">Costs</h2>
			<div class="grid grid-cols-2 gap-2">
				<div class="flex items-center gap-2">
					<span>Rent:</span>
					<span>{convertToDollars(data.rent)}/day</span>
				</div>
				<div class="flex items-center gap-2">
					<span>Security Deposit:</span>
					<span>{convertToDollars(data.deposit)}</span>
				</div>
			</div>
		</div>
		<button class="btn btn-primary w-full" on:click={() => rentBuilding(data.id)}>Rent</button>
	</div>
</div>
