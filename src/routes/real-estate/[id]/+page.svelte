<script lang="ts">
	import { numberWithCommas } from '$lib/utils/numbersWithCommas';

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
</div>
