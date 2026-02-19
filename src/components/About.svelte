<script lang="ts">
	let mounted = false;

	import { onMount } from 'svelte';

	onMount(() => {
		mounted = true;
	});
</script>

<section id="about" class="relative">
	<!-- Section Number -->
	<div
		class={`absolute -top-2.5 -left-16 sm:-left-24 lg:-left-34 ${mounted ? 'opacity-100' : 'opacity-0'}`}
		style="animation-delay: 0.2s;"
	>
		<div class="text-muted-foreground/20 text-4xl font-black select-none sm:text-6xl lg:text-8xl">
			01
		</div>
	</div>

	<!-- Content Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
		<!-- Section Header -->
		<div class="lg:col-span-12">
			<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 0.3s;">
				<div
					class="mb-8 flex flex-col space-y-4 sm:mb-12 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
				>
					<h2 class="text-2xl font-black tracking-wider uppercase sm:text-3xl lg:text-4xl">
						About
					</h2>
					<div class="bg-foreground h-px flex-1"></div>
				</div>
			</div>
		</div>

		<!-- Main Content -->
		<div class="lg:col-span-8">
			<div
				class={`space-y-6 sm:space-y-8 ${mounted ? 'opacity-100' : 'opacity-0'}`}
				style="animation-delay: 0.4s;"
			>
				<p class="text-lg leading-relaxed font-light sm:text-xl">
					I'm a backend developer and machine learning enthusiast with experience in designing
					scalable, efficient, and reliable systems. My work focuses on building high-performance
					backend architectures, integrating AI-powered solutions, and ensuring seamless deployment
					with modern DevOps practices.
				</p>

				<p class="text-muted-foreground text-base leading-relaxed font-light sm:text-lg">
					When I'm not coding, I'm exploring new frameworks, contributing to open-source, or
					mentoring peers in backend and ML concepts. I believe in creating technology that empowers
					people and brings innovation into real-world solutions.
				</p>

				<!-- Checkout my Blogs Button -->
				<div class="mt-8 sm:mt-12">
					<a
						data-sveltekit-preload-data="hover"
						href="/resume"
						target="_blank"
						class="border-foreground bg-background hover:bg-foreground hover:text-background inline-block border-2 px-6 py-3 font-mono text-xs tracking-[0.1em] uppercase transition-all duration-200 sm:px-8 sm:py-4 sm:text-sm"
					>
						Checkout My Resume
					</a>
				</div>
			</div>
		</div>

		<!-- Info Panel -->
		<div class="lg:col-span-4">
			<div
				class={`space-y-6 sm:space-y-8 ${mounted ? 'opacity-100' : 'opacity-0'}`}
				style="animation-delay: 0.5s;"
			>
				<div class="border-foreground border-l-4 pl-4 sm:pl-6">
					<h3 class="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
						Expertise
					</h3>
					<ul class="space-y-1 text-sm sm:space-y-2">
						<li>Backend Development</li>
						<li>Frontend Development</li>
						<li>Machine Learning</li>
						<li>Deep Learning</li>
						<li>API Design</li>
						<li>System Architecture</li>
						<li>Data Engineering & DevOps</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
