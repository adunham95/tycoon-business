<script>
	import ButtonModal from '$components/ButtonModal.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import { updateMoney } from '$lib/database';
	import { convertToDollars } from '$lib/utils/convertToDollars';

	export let data;

	let loanAmount = 0;
	let balance = data.money;

	async function updateBalance() {
		const newValue = await updateMoney(balance);
		console.log({ newValue });
	}
</script>

<PageHeader title="Bank" />
<div class="px-4">
	<div class="card mb-2 bg-white shadow-xl">
		<div class="card-body flex flex-row items-center justify-between">
			<p class="font-bold">x6780</p>
			<span>{convertToDollars(balance)}</span>
		</div>
	</div>
	<div class="grid grid-cols-4 gap-4 py-2">
		<ButtonModal buttonText="Loan">
			<h3 class="text-lg font-bold">New Loan</h3>
			<p class="py-4">Take out a new load</p>
			<input bind:value={loanAmount} type="range" min="100" max="100000000" class="range" />
			<p class="text-lg font-bold">{convertToDollars(loanAmount)}</p>
		</ButtonModal>
		<ButtonModal buttonText="Balance" onSave={updateBalance}>
			<h3 class="text-lg font-bold">Balance</h3>
			<p class="py-4">Set bank balance</p>
			<input bind:value={balance} type="range" min="100" max="100000000" class="range" />
			<p class="text-lg font-bold">{convertToDollars(balance)}</p>
		</ButtonModal>
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
