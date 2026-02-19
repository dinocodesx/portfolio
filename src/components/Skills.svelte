<script lang="ts">
	import skillsData from '../data/skills.json';
	import { onMount } from 'svelte';

	let skills: any[] = skillsData;
	let mounted = false;

	// Flatten skills from categories
	let allSkills: string[] = [];
	skills.forEach((category) => {
		category.skills.forEach((skill: any) => {
			allSkills.push(skill.name);
		});
	});

	onMount(() => {
		mounted = true;
	});
</script>

<section id="skills" class="relative">
	<!-- Section Number -->
	<div
		class={`absolute -top-2.5 -left-16 sm:-left-24 lg:-left-34 ${mounted ? 'opacity-100' : 'opacity-0'}`}
		style="animation-delay: 0.8s;"
	>
		<div class="text-muted-foreground/20 text-4xl font-black select-none sm:text-6xl lg:text-8xl">
			03
		</div>
	</div>

	<div class="space-y-12 sm:space-y-16">
		<!-- Header -->
		<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 0.9s;">
			<div
				class="mb-8 flex flex-col space-y-4 sm:mb-12 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
			>
				<h2 class="text-2xl font-black tracking-wider uppercase sm:text-3xl lg:text-4xl">Skills</h2>
				<div class="bg-foreground h-px flex-1"></div>
			</div>
		</div>

		<!-- Skills Content -->
		<div class="space-y-8 sm:space-y-12">
			<!-- Summary -->
			<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 1.0s;">
				<p class="text-muted-foreground max-w-lg text-base leading-relaxed font-light sm:text-lg">
					A diverse technical toolkit spanning machine learning, backend development, and modern web
					technologies.
				</p>
			</div>

			<!-- Skills Categories -->
			<div class="space-y-6 sm:space-y-8">
				{#each skills as category, categoryIndex}
					<div
						class={`${mounted ? 'opacity-100' : 'opacity-0'}`}
						style="animation-delay: {1.1 + categoryIndex * 0.2}s;"
					>
						<div class="border-foreground border-l-4 pl-4 sm:pl-6">
							<h3
								class="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase sm:mb-6"
							>
								{category.category}
							</h3>

							<!-- Skills Grid -->
							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{#each category.skills as skill, skillIndex}
									<div
										class={`group border-border bg-background hover:bg-muted flex items-center justify-between border p-3 transition-colors duration-200 sm:p-4 ${mounted ? 'opacity-100' : 'opacity-0'}`}
										style="animation-delay: {1.2 + categoryIndex * 0.2 + skillIndex * 0.1}s;"
									>
										<div class="space-y-1">
											<div class="text-sm font-medium">{skill.name}</div>
											{#if skill.level}
												<div class="text-muted-foreground text-xs font-light">
													{skill.level}
												</div>
											{/if}
										</div>

										<!-- Skill Level Indicator -->
										{#if skill.proficiency}
											<div class="flex space-x-1">
												{#each Array(5) as _, i}
													<div
														class={`h-2 w-2 ${i < skill.proficiency ? 'bg-foreground' : 'bg-border'}`}
													></div>
												{/each}
											</div>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
