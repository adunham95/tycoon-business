<script lang="ts">
	import PlaceholderIcon from './placeholderIcon.svelte';

	export let buttonText = 'Button';
	export let onSave = () => console.log('clicked');

	let showModal = false;

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	function handleSave() {
		onSave();
		dialog.close();
	}
</script>

<button
	on:click={() => (showModal = true)}
	class="flex aspect-square flex-col items-center justify-center rounded-md bg-green-400 p-3 text-white shadow-xl"
>
	<PlaceholderIcon />
	{buttonText}
</button>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	class="modal"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="modal-box">
		<div>
			<slot />
		</div>
		<div class="modal-action">
			<form method="dialog" on:submit|preventDefault={handleSave}>
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => dialog.close()}>Close</button>
				<button class="btn btn-secondary">Save</button>
			</form>
		</div>
	</div>
</dialog>
