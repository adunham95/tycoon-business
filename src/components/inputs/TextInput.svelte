<script lang="ts">
	export let placeholder: string | undefined = undefined;
	export let primaryLabel: string | undefined = undefined;
	export let name = 'text';
	export let required = false;
	export let value = '';
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text">{primaryLabel}</span>
	</div>
	<input
		bind:value
		placeholder={placeholder || 'Type here'}
		{name}
		{required}
		class="input input-bordered w-full"
	/>
</label>
