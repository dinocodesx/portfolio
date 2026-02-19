<script lang="ts">
	import projectsData from '../../data/projects.json';
	import { onMount } from 'svelte';

	let projects: any[] = projectsData;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Projects - Dino Codes</title>
</svelte:head>

<main class="min-h-screen py-8">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
		<!-- Page Header -->
		<div class="mb-12 text-center">
			<h1 class="text-foreground mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Projects</h1>
			<p class="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed font-light">
				Selected work showcasing expertise in machine learning, full-stack development, and
				innovative solutions across various domains.
			</p>
		</div>

		{#if mounted}
			<!-- Projects Grid -->
			<div class="space-y-16 sm:space-y-20">
				{#each projects as project, id}
					<article
						class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-26 {mounted
							? 'opacity-100'
							: 'opacity-0'}"
						style="animation-delay: {0.1 + id * 0.1}s;"
					>
						<!-- Project Number & Info -->
						<div class="lg:col-span-4">
							<div class="space-y-4 sm:space-y-6">
								<!-- Project Number -->
								<div class="text-muted-foreground/30 text-4xl font-black sm:text-5xl lg:text-6xl">
									{String(id + 1).padStart(2, '0')}
								</div>

								<!-- Project Meta -->
								<div class="space-y-3 sm:space-y-4">
									<div>
										<h2 class="mb-2 text-xl font-bold sm:text-2xl">{project.title}</h2>
										{#if project.featured}
											<div
												class="bg-foreground text-background inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase"
											>
												Featured
											</div>
										{/if}
									</div>

									<p class="text-muted-foreground leading-relaxed font-light">
										{project.description}
									</p>
								</div>
							</div>
						</div>

						<!-- Project Details -->
						<div class="lg:col-span-8">
							<div class="space-y-6 sm:space-y-8">
								<!-- Project Visual -->
								<div
									class="bg-muted border-foreground relative aspect-video overflow-hidden border-2"
								>
									<div
										class="from-muted-foreground/10 to-muted-foreground/30 absolute inset-0 bg-gradient-to-br"
									></div>
									<div class="absolute inset-0 flex items-center justify-center">
										<div
											class="text-muted-foreground/50 text-2xl font-black sm:text-3xl lg:text-4xl"
										>
											{project.title.charAt(0)}
										</div>
									</div>
								</div>

								<!-- Technologies & Links -->
								<div class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
									<!-- Technologies -->
									<div class="space-y-3 sm:space-y-4">
										<h3 class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
											Technologies
										</h3>
										<div class="space-y-2">
											{#each project.technologies as tech}
												<div class="border-foreground border-l-2 pl-3 text-sm font-medium sm:pl-4">
													{tech}
												</div>
											{/each}
										</div>
									</div>

									<!-- Links -->
									<div class="space-y-3 sm:space-y-4">
										<h3 class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
											Links
										</h3>
										<div class="space-y-3">
											{#if project.github}
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													class="hover:text-muted-foreground group flex items-center text-sm font-medium transition-colors"
												>
													<div
														class="bg-foreground mr-2 h-px w-0 transition-all group-hover:w-4"
													></div>
													<span>View on GitHub</span>
												</a>
											{/if}
											{#if project.live}
												<a
													href={project.live}
													target="_blank"
													rel="noopener noreferrer"
													class="hover:text-muted-foreground group flex items-center text-sm font-medium transition-colors"
												>
													<div
														class="bg-foreground mr-2 h-px w-0 transition-all group-hover:w-4"
													></div>
													<span>Live Demo</span>
												</a>
											{/if}
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>

			<!-- Call to Action -->
			<div class="mt-16 text-center sm:mt-20">
				<a
					target="_blank"
					href="https://github.com/dinocodesx"
					class="border-foreground bg-background hover:bg-foreground hover:text-background inline-block border-2 px-6 py-3 font-mono text-xs tracking-[0.1em] uppercase transition-all duration-200 sm:px-8 sm:py-4 sm:text-sm"
				>
					Checkout more Projects
				</a>
			</div>
		{:else}
			<!-- Loading State -->
			<div class="space-y-16">
				{#each Array(3) as _}
					<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
						<div class="lg:col-span-4">
							<div class="space-y-4">
								<div class="bg-muted h-16 w-16 animate-pulse rounded"></div>
								<div class="space-y-2">
									<div class="bg-muted h-6 w-3/4 animate-pulse rounded"></div>
									<div class="bg-muted h-4 w-1/2 animate-pulse rounded"></div>
									<div class="bg-muted h-20 w-full animate-pulse rounded"></div>
								</div>
							</div>
						</div>
						<div class="lg:col-span-8">
							<div class="space-y-6">
								<div class="bg-muted aspect-video animate-pulse rounded"></div>
								<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
									<div class="space-y-2">
										<div class="bg-muted h-4 w-1/3 animate-pulse rounded"></div>
										<div class="bg-muted h-4 w-2/3 animate-pulse rounded"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>
