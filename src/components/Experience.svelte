<script lang="ts">
	import experienceData from '../data/experience.json';
	import { onMount } from 'svelte';

	let experiences: any[] = experienceData;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section id="experience" class="relative">
	<!-- Section Number -->
	<div
		class={`absolute -top-2.5 -left-16 sm:-left-24 lg:-left-34 ${mounted ? 'opacity-100' : 'opacity-0'}`}
		style="animation-delay: 0.4s;"
	>
		<div class="text-muted-foreground/20 text-4xl font-black select-none sm:text-6xl lg:text-8xl">
			02
		</div>
	</div>

	<div class="space-y-8 sm:space-y-12">
		<!-- Header -->
		<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 0.5s;">
			<div
				class="mb-8 flex flex-col space-y-4 sm:mb-12 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
			>
				<h2 class="text-2xl font-black tracking-wider uppercase sm:text-3xl lg:text-4xl">
					Experience
				</h2>
				<div class="bg-foreground h-px flex-1"></div>
			</div>
		</div>

		<!-- Experience Timeline -->
		<div class="space-y-12 sm:space-y-16">
			{#each experiences as work, id}
				<div
					class={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 ${mounted ? 'opacity-100' : 'opacity-0'}`}
					style="animation-delay: {0.6 + id * 0.1}s;"
				>
					<!-- Timeline -->
					<div class="lg:col-span-3">
						<div class="space-y-2">
							<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
								{work.duration}
							</div>
							<div class="text-muted-foreground text-sm">{work.location}</div>
						</div>
					</div>

					<!-- Content -->
					<div class="lg:col-span-9">
						<div class="border-foreground space-y-4 border-l-4 pl-4 sm:pl-6 lg:pl-8">
							<div>
								<h3 class="mb-1 text-xl font-bold sm:text-2xl">{work.company}</h3>
								<div class="text-muted-foreground text-base font-light sm:text-lg">
									{work.title}
								</div>
							</div>

							{#if work.description}
								<p class="text-muted-foreground leading-relaxed font-light">
									{work.description}
								</p>
							{/if}

							<!-- Achievements -->
							<div class="space-y-2">
								<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
									Achievements
								</div>
								<ul class="list-disc space-y-1 pl-5">
									{#each Object.entries(work.achievements) as [key, value]}
										<li class="text-muted-foreground text-sm">{value}</li>
									{/each}
								</ul>
							</div>

							<!-- Technologies -->
							<div class="space-y-2">
								<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
									Tech Stack
								</div>
								<div class="flex flex-wrap gap-2">
									{#each work.technologies as tech}
										<span class="bg-muted px-2 py-1 text-xs font-medium tracking-wider uppercase">
											{tech}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
