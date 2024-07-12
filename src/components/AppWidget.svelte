<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let height: 1 | 2 | 3 | 4 = 2;
	export let width: 1 | 2 | 3 | 4 = 2;
	export let name = '';

	function getHeight() {
		switch (height) {
			case 2:
				return 'row-span-2';
			case 3:
				return 'row-span-3';
			case 4:
				return 'row-span-4';
			default:
				return 'row-span-1';
		}
	}

	function getWidth() {
		switch (width) {
			case 2:
				return 'col-span-2';
			case 3:
				return 'col-span-3';
			case 4:
				return 'col-span-4';
			default:
				return 'col-span-1';
		}
	}
</script>

<div class={twMerge(getHeight(), getWidth(), 'flex flex-col items-center gap-1')}>
	<div class={twMerge('bg-primary h-full w-full rounded-lg p-3', $$props.class)}>
		<slot />
	</div>
	<div class="text-muted-foreground min-h-[2em] text-sm font-bold">{name}</div>
</div>
