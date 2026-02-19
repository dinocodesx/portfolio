<script lang="ts">
	import { onMount } from 'svelte';
	import talksData from '../../data/talks.json';

	let talks = talksData;
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

	function getTypeColor(type: string) {
		switch (type.toLowerCase()) {
			case 'conference':
				return 'bg-blue-100 text-blue-800';
			case 'meetup':
				return 'bg-green-100 text-green-800';
			case 'workshop':
				return 'bg-purple-100 text-purple-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}
</script>

<svelte:head>
	<title>Talks - Dino Codes</title>
</svelte:head>

<main class="min-h-screen py-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h1 class="text-foreground mb-4 text-4xl font-bold">Talks & Presentations</h1>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				A collection of my technical talks, presentations, and workshops on various topics including
				machine learning, backend development, and modern technologies.
			</p>
		</div>

		{#if mounted}
			<!-- Talks Grid -->
			<div class="space-y-8">
				{#each talks as talk}
					<article
						class="bg-card border-border rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
					>
						<div class="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
							<div class="flex-1">
								<h2 class="text-foreground mb-2 text-xl font-semibold">{talk.title}</h2>
								<div class="my-5 flex flex-wrap items-center gap-2">
									<span
										class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {getTypeColor(
											talk.type
										)}"
									>
										{talk.type}
									</span>
									<span class="text-muted-foreground text-sm">•</span>
									<span class="text-muted-foreground text-sm">{formatDate(talk.date)}</span>
									<span class="text-muted-foreground text-sm">•</span>
									<span class="text-muted-foreground text-sm">{talk.venue}</span>
								</div>
							</div>
						</div>

						<p class="text-muted-foreground mb-4 leading-relaxed">{talk.description}</p>

						<!-- Tags -->
						<div class="mb-4 flex flex-wrap gap-2">
							{#each talk.tags as tag}
								<span
									class="bg-secondary text-secondary-foreground inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium"
								>
									{tag}
								</span>
							{/each}
						</div>

						<!-- Links -->
						<div class="flex flex-wrap gap-3">
							{#if talk.slides !== '#'}
								<a
									href={talk.slides}
									class="text-primary hover:text-primary/80 inline-flex items-center px-3 py-1.5 text-sm font-medium transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg class="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									View Slides
								</a>
							{/if}
							{#if talk.video !== '#'}
								<a
									href={talk.video}
									class="text-primary hover:text-primary/80 inline-flex items-center px-3 py-1.5 text-sm font-medium transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg class="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2z"
										/>
									</svg>
									Watch Video
								</a>
							{/if}
						</div>
					</article>
				{/each}
			</div>

			<!-- Call to Action -->
			<div class="bg-secondary/50 mt-12 rounded-lg p-8 text-center">
				<h3 class="text-foreground mb-2 text-xl font-semibold">Interested in having me speak?</h3>
				<p class="text-muted-foreground mb-4">
					I'm always excited to share knowledge and connect with fellow developers and tech
					enthusiasts.
				</p>
				<a
					href="mailto:debarshee.chakraborty.work@gmail.com"
					class="border-foreground bg-background hover:bg-foreground hover:text-background mt-5 inline-block border-2 px-6 py-3 font-mono text-xs tracking-[0.1em] uppercase transition-all duration-200 sm:px-8 sm:py-4 sm:text-sm"
				>
					Get in Touch
				</a>
			</div>
		{:else}
			<!-- Loading State -->
			<div class="space-y-8">
				{#each Array(3) as _}
					<div class="bg-card border-border animate-pulse rounded-lg border p-6">
						<div class="bg-muted mb-3 h-6 w-3/4 rounded"></div>
						<div class="bg-muted mb-4 h-4 w-1/2 rounded"></div>
						<div class="bg-muted mb-2 h-4 w-full rounded"></div>
						<div class="bg-muted mb-4 h-4 w-5/6 rounded"></div>
						<div class="flex gap-2">
							<div class="bg-muted h-6 w-16 rounded"></div>
							<div class="bg-muted h-6 w-20 rounded"></div>
							<div class="bg-muted h-6 w-24 rounded"></div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>
