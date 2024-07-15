<script>
	import PageHeader from '$components/PageHeader.svelte';
	import PlaceholderIcon from '$components/placeholderIcon.svelte';
	import { convertToDollars } from '$lib/utils/convertToDollars';

	export let data;
</script>

<PageHeader title="Bank" />
<div class="px-4">
	<div class="card mb-2 bg-white shadow-xl">
		<div class="card-body flex flex-row items-center justify-between">
			<p class="font-bold">x6780</p>
			<span>{convertToDollars(data.money)}</span>
		</div>
	</div>
	<div class="grid grid-cols-4 gap-4 py-2">
		<button
			class="flex aspect-square flex-col items-center justify-center rounded-md bg-green-400 p-3 text-white shadow-xl"
		>
			<PlaceholderIcon />
			Loan
		</button>
	</div>

	<div class="card mt-2 bg-white">
		<div class="card-body">
			<h2 class="card-title">Transactions</h2>
			<ul class="divide-y divide-gray-200">
				<li class="flex items-center justify-between py-2">
					<div>
						<p class="text-lg font-bold">Deposit</p>
						<p class="text-xs">Day 1</p>
					</div>
					<span class="inline-block text-xl font-bold">+{convertToDollars(10000)}</span>
				</li>
				<li class="flex items-center justify-between py-2">
					<div>
						<p class="text-lg font-bold">Salary</p>
						<p class="text-xs">Day 1</p>
					</div>
					<span class="inline-block text-xl font-bold">+{convertToDollars(1000)}</span>
				</li>
			</ul>
		</div>
	</div>
</div>
