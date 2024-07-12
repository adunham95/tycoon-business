<script>
	import '../app.css';
	import PlaceholderIcon from '../components/placeholderIcon.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 w-full">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2 text-xl">Tycoon Game</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a>Navbar Item 1</a></li>
					<li><a>Navbar Item 2</a></li>
				</ul>
			</div>
		</div>
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
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
