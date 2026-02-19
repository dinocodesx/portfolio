<script lang="ts">
	import { page } from '$app/stores';

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Blogs', href: '/blogs' },
		{ name: 'Talks', href: '/talks' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Resume', href: '/resume' }
	];

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function isActive(href: string): boolean {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		if (href.startsWith('#')) {
			return $page.url.pathname === '/' && $page.url.hash === href;
		}
		return $page.url.pathname.startsWith(href);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border sticky top-0 z-50 border-b backdrop-blur"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
		<div class="flex h-16 items-center justify-end">
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="flex items-baseline space-x-4">
					{#each navItems as item}
						<a
							href={item.href}
							class="relative rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(
								item.href
							)
								? 'text-foreground'
								: 'text-muted-foreground hover:text-foreground hover:bg-accent'}"
							on:click={closeMobileMenu}
						>
							{item.name}
							{#if isActive(item.href)}
								<div class="absolute right-0 bottom-0 left-0 h-0.5 bg-white"></div>
							{/if}
						</a>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					type="button"
					class="text-muted-foreground hover:text-foreground hover:bg-accent focus:ring-primary inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
					aria-controls="mobile-menu"
					aria-expanded={mobileMenuOpen}
					on:click={toggleMobileMenu}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Hamburger icon -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						{#if !mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Mobile menu overlay -->
{#if mobileMenuOpen}
	<div class="fixed inset-0 z-40 md:hidden">
		<!-- Background overlay -->
		<div
			class="bg-opacity-50 fixed inset-0 bg-black"
			role="button"
			tabindex="0"
			on:click={closeMobileMenu}
			on:keydown={handleKeydown}
			aria-label="Close menu"
		></div>

		<!-- Menu content -->
		<div class="bg-background fixed inset-0 top-16">
			<div class="flex h-full flex-col items-center justify-center space-y-8 px-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="block text-2xl font-medium transition-colors {isActive(item.href)
							? 'text-foreground'
							: 'text-muted-foreground hover:text-foreground'}"
						on:click={closeMobileMenu}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}
