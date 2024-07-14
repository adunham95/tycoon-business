<script>
	import '../app.css';

	// const links = [{ path: '/', name: 'Home' }];
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 w-full">
			<a href="/" class="mx-2 flex-1 px-2 text-xl">Tycoon Game</a>
			<div class="hidden flex-none lg:block"></div>
		</div>
		<!-- Page content here -->
		<slot />
	</div>
</div>

<!-- <footer class="bg-background fixed bottom-0 z-10 flex w-full justify-around border-t px-4 py-2">
	<a href="#" class="flex flex-col items-center gap-1">
		<PlaceholderIcon className="text-muted-foreground h-6 w-6" />
		<span class="text-muted-foreground text-xs">Camera</span>
	</a>
	<a href="#" class="flex flex-col items-center gap-1">
		<PlaceholderIcon className="text-muted-foreground h-6 w-6" />
		<span class="text-muted-foreground text-xs">Messages</span>
	</a>
	<a href="#" class="flex flex-col items-center gap-1">
		<PlaceholderIcon className="text-muted-foreground h-6 w-6" />
		<span class="text-muted-foreground text-xs">Settings</span>
	</a>
</footer> -->
