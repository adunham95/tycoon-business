<script lang="ts">
	export let colors = [
		'#FF0000',
		'#0000FF',
		'#008000',
		'#FFFF00',
		'#FFA500',
		'#800080',
		'#FFC0CB',
		'#A52A2A',
		'#000000',
		'#FFFFFF',
		'#808080',
		'#00FFFF',
		'#FF00FF',
		'#40E0D0',
		'#F5F5DC',
		'#E6E6FA',
		'#800000',
		'#000080',
		'#808000',
		'#008080'
	];
	export let name: string | undefined = 'color';
	export let label: string | undefined = 'Color';
	export let value: string | undefined = colors[0];
</script>

{#if label}
	<div class="label">
		<span class="label-text">{label}</span>
	</div>
{/if}

<div class="flex overflow-auto">
	{#each colors as color, i}
		<label
			for={color}
			class="btn btn-circle btn-ghost mb-2 mr-1 border-4 border-transparent has-[:checked]:border-white"
			style="background-color: {color};"
		>
			<input
				id={color}
				value={color}
				{name}
				checked={value === color}
				on:change={() => (value = color)}
				type="radio"
				class="hidden rounded"
			/>
		</label>
	{/each}
</div>
