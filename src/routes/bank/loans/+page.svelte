<script lang="ts">
	import { convertToDollars } from '$lib/utils/convertToDollars';

	export let data;

	console.log(data);
</script>

<ul class="divide-y divide-gray-200">
	{#each data.myLoans as loan}
		<li class="px-4 py-2">
			<p>Loan {loan.id}</p>
			<p>Paid: {loan.paid === 1 ? 'Yes' : 'No'}</p>
			<div>
				{convertToDollars(loan.amount)}
			</div>
		</li>
	{/each}
</ul>
