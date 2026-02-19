<script lang="ts">
	import blogsData from '../../data/blogs.json';
	import { onMount } from 'svelte';

	let blogs: any[] = blogsData;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function formatDateMobile(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blogs - Debarshee Chakraborty</title>
	<meta
		name="description"
		content="Read my latest blog posts about machine learning, web development, and technology."
	/>
</svelte:head>

<main class="flex min-h-[100dvh] flex-col px-4 sm:px-6 lg:px-8">
	<div class="mx-auto w-full max-w-4xl">
		<section class="py-8 sm:py-12">
			<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`}>
				<div class="mb-8 space-y-3 text-center sm:mb-12 sm:space-y-4">
					<h1 class="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">Latest Posts</h1>
					<p
						class="text-muted-foreground mx-auto max-w-2xl px-4 text-base leading-relaxed sm:px-0 sm:text-lg lg:text-xl"
					>
						Thoughts on machine learning, web development, and the latest in technology.
					</p>
				</div>
			</div>

			<div class="space-y-2 sm:space-y-4">
				{#each blogs as blog, id}
					<div
						class={`${mounted ? 'opacity-100' : 'opacity-0'}`}
						style="animation-delay: {0.1 + id * 0.05}s;"
					>
						<!-- Desktop/Tablet Layout -->
						<div class="hidden sm:block">
							<div
								class="hover:bg-muted/50 group flex items-center rounded px-3 py-3 transition-colors"
							>
								<div class="min-w-0 shrink-0">
									<a
										data-sveltekit-preload-data="hover"
										href={blog.url}
										class="text-foreground hover:text-muted-foreground text-base font-medium transition-colors lg:text-lg"
									>
										{blog.title}
									</a>
								</div>
								<div
									class="border-muted-foreground/30 mx-4 min-w-[20px] flex-1 border-b border-dotted"
								></div>
								<div class="text-muted-foreground shrink-0 text-sm whitespace-nowrap">
									{formatDate(blog.date)}
								</div>
							</div>
						</div>

						<!-- Mobile Layout -->
						<div class="sm:hidden">
							<div class="hover:bg-muted/50 rounded-lg p-4 transition-colors">
								<a data-sveltekit-preload-data="hover" href={blog.url} class="block space-y-2">
									<h3 class="text-foreground text-base leading-snug font-medium">
										{blog.title}
									</h3>
									<div class="text-muted-foreground text-sm">
										{formatDateMobile(blog.date)}
									</div>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Back to home link -->
			<div class="mt-8 text-center sm:mt-12">
				<a
					data-sveltekit-preload-data="hover"
					href="/"
					class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back to Home
				</a>
			</div>
		</section>
	</div>
</main>
