<script lang="ts">
	import { onMount } from 'svelte';
	import linksData from '../../data/links.json';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Links - Debarshee Chakraborty</title>
	<meta
		name="description"
		content="Find all my important links in one place - GitHub, LinkedIn, Twitter, and more."
	/>
</svelte:head>

<main class="flex flex-col pt-12">
	<!-- Header -->
	<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 0.1s;">
		<div class="mb-12 text-center">
			<!-- Profile picture -->
			<div
				class="bg-muted mx-auto mb-6 flex size-24 items-center justify-center overflow-hidden rounded-full border"
			>
				<img
					src="https://github.com/dinocodesx.png"
					alt="Debarshee Chakraborty"
					class="h-full w-full object-cover"
				/>
			</div>

			<h3 class="mb-2 text-2xl font-bold">Debarshee Chakraborty</h3>
			<p class="text-muted-foreground">Machine Learning Engineer</p>
		</div>
	</div>

	<!-- Links -->
	<div class="mx-auto w-full max-w-md space-y-4">
		{#each linksData as link, id}
			<div
				class={`${mounted ? 'opacity-100' : 'opacity-0'}`}
				style="animation-delay: {0.2 + id * 0.1}s;"
			>
				<a
					data-sveltekit-preload-data="hover"
					href={link.url}
					{...link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
					class="block w-full"
				>
					<div class="card group p-4 transition-all hover:scale-[1.02] hover:shadow-md">
						<div class="flex items-center space-x-4">
							<!-- Icon -->
							<div class="flex-shrink-0">
								<div class="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
									<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
										<path d={link.icon} />
									</svg>
								</div>
							</div>

							<!-- Content -->
							<div class="min-w-0 flex-1">
								<h4 class="group-hover:text-muted-foreground font-semibold transition-colors">
									{link.name}
								</h4>
								<p class="text-muted-foreground truncate text-sm">
									{link.description}
								</p>
							</div>

							<!-- Arrow -->
							<div class="flex-shrink-0">
								<svg
									class="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</main>
