<script lang="ts">
	import volunteerData from '../data/volunteer.json';
	import { onMount } from 'svelte';

	let volunteer: any[] = volunteerData;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section id="volunteering" class="relative">
	<!-- Section Number -->
	<div
		class={`absolute -top-2.5 -left-16 sm:-left-24 lg:-left-34 ${mounted ? 'opacity-100' : 'opacity-0'}`}
		style="animation-delay: 1.2s;"
	>
		<div class="text-muted-foreground/20 text-4xl font-black select-none sm:text-6xl lg:text-8xl">
			04
		</div>
	</div>

	<div class="space-y-8 sm:space-y-12">
		<!-- Header -->
		<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 1.3s;">
			<div
				class="mb-8 flex flex-col space-y-4 sm:mb-12 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
			>
				<h2 class="text-2xl font-black tracking-wider uppercase sm:text-3xl lg:text-4xl">
					Volunteer
				</h2>
				<div class="bg-foreground h-px flex-1"></div>
			</div>
		</div>

		<!-- Volunteer Timeline -->
		<div class="space-y-12 sm:space-y-16">
			{#each volunteer as vol, id}
				<div
					class={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 ${mounted ? 'opacity-100' : 'opacity-0'}`}
					style="animation-delay: {1.4 + id * 0.1}s;"
				>
					<!-- Timeline -->
					<div class="lg:col-span-3">
						<div class="space-y-2">
							<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
								{vol.duration}
							</div>
							{#if vol.location}
								<div class="text-muted-foreground text-sm">{vol.location}</div>
							{/if}
							{#if vol.status}
								<div class="flex items-center space-x-2">
									<div
										class={`h-2 w-2 rounded-full ${vol.status === 'ongoing' ? 'bg-green-500' : 'bg-muted-foreground'}`}
									></div>
									<span class="text-muted-foreground text-xs tracking-wider uppercase">
										{vol.status}
									</span>
								</div>
							{/if}
						</div>
					</div>

					<!-- Content -->
					<div class="lg:col-span-9">
						<div class="border-foreground space-y-4 border-l-4 pl-4 sm:pl-6 lg:pl-8">
							<div>
								<h3 class="mb-1 text-xl font-bold sm:text-2xl">{vol.organization}</h3>
								<div class="text-muted-foreground text-base font-light sm:text-lg">{vol.title}</div>
							</div>

							{#if vol.description}
								<p class="text-muted-foreground leading-relaxed font-light">
									{vol.description}
								</p>
							{/if}

							{#if vol.impact}
								<div class="space-y-2">
									<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
										Impact
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed font-light">
										{vol.impact}
									</p>
								</div>
							{/if}

							<!-- Skills/Technologies -->
							{#if vol.skills && vol.skills.length > 0}
								<div class="space-y-2">
									<div class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
										Skills Used
									</div>
									<div class="flex flex-wrap gap-2">
										{#each vol.skills as skill}
											<span class="bg-muted px-2 py-1 text-xs font-medium tracking-wider uppercase">
												{skill}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
