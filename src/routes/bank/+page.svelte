<script>
	import { invalidateAll } from '$app/navigation';
	import ButtonModal from '$components/ButtonModal.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import { updateMoney } from '$lib/database/bank';
	import { getCurrentDay } from '$lib/database/currentDay';
	import { createTransaction } from '$lib/database/transactions';
	import { convertToDollars } from '$lib/utils/convertToDollars';
	import { createLoan } from '$lib/utils/purchase';

	export let data;

	const interestRate = 0.07;
	let loanAmountDollars = 0;
	$: loanAmountCents = loanAmountDollars * 100 || 0;
	$: loanInterest = (loanAmountCents * interestRate) / loanLength || 0;
	$: loanPayment = loanAmountCents / loanLength + loanInterest || 0;
	let loanLength = 1;
	let balance = data.money;

	async function updateBalance() {
		const newValue = await updateMoney(balance);
		console.log({ newValue });
	}

	async function newLoan() {
		await createLoan(loanAmountCents, loanLength, loanPayment);

		loanLength = 1;
		loanAmountDollars = 0;
		await invalidateAll();
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
		<ButtonModal buttonText="Loan" onSave={newLoan}>
			<h3 class="text-lg font-bold">New Loan</h3>
			<p class="py-4">Take out a new load</p>
			<div>
				<label for="loanAmount">Loan Amount(in cents)</label>
				<input
					bind:value={loanAmountDollars}
					type="number"
					min="100"
					max="100000000"
					class="range"
				/>
			</div>
			<div>
				<label for="loanLength">Length</label>
				<input bind:value={loanLength} type="range" min="1" max="100" class="range" />
			</div>
			<div>
				<p class="text-lg font-bold">Amount Borrowed: {convertToDollars(loanAmountCents)}</p>
				<p class="text-lg font-bold">Loan Length: {loanLength} days</p>
				<p class="text-lg font-bold">Interest: {convertToDollars(loanInterest)}</p>
				<p class="text-lg font-bold">Daily Payment: {convertToDollars(loanPayment)}</p>
			</div>
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
				{#each data.transactions as transaction}
					<li class="flex items-center justify-between py-2">
						<div>
							<p class="text-lg font-bold">{transaction.title}</p>
							<p class="text-xs">Day {transaction.day}</p>
						</div>
						<span class="inline-block text-xl font-bold"
							>{convertToDollars(transaction.amount * -1)}</span
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
