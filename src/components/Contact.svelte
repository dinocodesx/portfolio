<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section id="contact" class="relative">
	<!-- Section Number -->
	<div
		class={`absolute -top-2.5 -left-16 sm:-left-24 lg:-left-34 ${mounted ? 'opacity-100' : 'opacity-0'}`}
		style="animation-delay: 1.5s;"
	>
		<div class="text-muted-foreground/20 text-4xl font-black select-none sm:text-6xl lg:text-8xl">
			05
		</div>
	</div>

	<div class="space-y-12 sm:space-y-16">
		<!-- Header -->
		<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 1.6s;">
			<div
				class="mb-8 flex flex-col space-y-4 sm:mb-12 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
			>
				<h2 class="text-2xl font-black tracking-wider uppercase sm:text-3xl lg:text-4xl">
					Contact
				</h2>
				<div class="bg-foreground h-px flex-1"></div>
			</div>
			<p
				class="text-muted-foreground max-w-2xl text-base leading-relaxed font-light sm:text-lg lg:text-xl"
			>
				Ready to collaborate? Let's discuss how we can work together to build something amazing.
			</p>
		</div>

		<!-- Contact Content -->
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Contact Info & CTA Buttons -->
			<div class="space-y-8 sm:space-y-12">
				<!-- Primary CTA Buttons -->
				<div
					class={`space-y-4 sm:space-y-6 ${mounted ? 'opacity-100' : 'opacity-0'}`}
					style="animation-delay: 1.7s;"
				>
					<h3
						class="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase sm:mb-6"
					>
						Get In Touch
					</h3>

					<div class="space-y-3 sm:space-y-4">
						<!-- Email CTA -->
						<a
							href="mailto:debarshee.chakraborty.work2004@gmail.com"
							class="group border-foreground bg-background hover:bg-foreground hover:text-background flex w-full items-center justify-between border-2 p-4 font-mono text-xs tracking-wider uppercase transition-colors duration-200 sm:p-6 sm:text-sm"
						>
							<div class="flex items-center space-x-3 sm:space-x-4">
								<div
									class="bg-foreground group-hover:bg-background flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8"
								>
									<span class="text-background group-hover:text-foreground text-xs font-black"
										>@</span
									>
								</div>
								<span>Send Email</span>
							</div>
							<div class="text-muted-foreground group-hover:text-background/70 text-xs">→</div>
						</a>

						<!-- Twitter CTA -->
						<a
							href="https://x.com/dinocodes69"
							target="_blank"
							rel="noopener noreferrer"
							class="group border-foreground bg-background hover:bg-foreground hover:text-background flex w-full items-center justify-between border-2 p-4 font-mono text-xs tracking-wider uppercase transition-colors duration-200 sm:p-6 sm:text-sm"
						>
							<div class="flex items-center space-x-3 sm:space-x-4">
								<div
									class="bg-foreground group-hover:bg-background flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8"
								>
									<span class="text-background group-hover:text-foreground text-xs font-black"
										>X</span
									>
								</div>
								<span>Follow on Twitter</span>
							</div>
							<div class="text-muted-foreground group-hover:text-background/70 text-xs">↗</div>
						</a>
					</div>
				</div>

				<!-- Contact Details -->
				<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 1.8s;">
					<div class="border-foreground border-l-4 pl-4 sm:pl-6">
						<h3
							class="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase sm:mb-4"
						>
							Direct Contact
						</h3>
						<div class="space-y-2 sm:space-y-3">
							<div class="text-sm">
								<span class="text-muted-foreground">Email:</span>
								<br />
								<span class="font-mono text-xs sm:text-sm"
									>debarshee.chakraborty.work@gmail.com</span
								>
							</div>
							<div class="text-sm">
								<span class="text-muted-foreground">Response Time:</span>
								<br />
								<span>Usually within 24 hours</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Additional Info & Status -->
			<div class="space-y-8 sm:space-y-12">
				<!-- Social Links -->
				<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 1.9s;">
					<div class="border-foreground border-l-4 pl-4 sm:pl-6">
						<h3
							class="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase sm:mb-4"
						>
							Connect Elsewhere
						</h3>
						<div class="space-y-2 sm:space-y-3">
							<a
								href="https://linkedin.com/in/dinocodesx"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-muted-foreground group flex items-center space-x-3 text-sm font-medium transition-colors"
							>
								<div class="bg-foreground h-px transition-all group-hover:w-2"></div>
								<span>LinkedIn</span>
							</a>
							<a
								data-sveltekit-preload-data="hover"
								href="https://github.com/dinocodesx"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-muted-foreground group flex items-center space-x-3 text-sm font-medium transition-colors"
							>
								<div class="bg-foreground h-px transition-all group-hover:w-2"></div>
								<span>GitHub</span>
							</a>
							<a
								data-sveltekit-preload-data="hover"
								href="/links"
								class="hover:text-muted-foreground group flex items-center space-x-3 text-sm font-medium transition-colors"
							>
								<div class="bg-foreground h-px transition-all group-hover:w-2"></div>
								<span>All Links</span>
							</a>
						</div>
					</div>
				</div>

				<!-- Status & Availability -->
				<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 2.0s;">
					<div class="border-foreground border-l-4 pl-4 sm:pl-6">
						<h3
							class="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase sm:mb-4"
						>
							Current Status
						</h3>
						<div class="space-y-2 sm:space-y-3">
							<div class="flex items-center space-x-3">
								<div class="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
								<span class="text-sm font-medium">Available for opportunities</span>
							</div>
							<div class="text-muted-foreground text-sm">Open to full-time roles</div>
							<div class="text-muted-foreground text-sm">Remote or hybrid preferred</div>
						</div>
					</div>
				</div>

				<!-- What I'm Looking For -->
				<div class={`${mounted ? 'opacity-100' : 'opacity-0'}`} style="animation-delay: 2.1s;">
					<div class="border-foreground border-l-4 pl-4 sm:pl-6">
						<h3
							class="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase sm:mb-4"
						>
							What I'm Looking For
						</h3>
						<div class="space-y-1 text-sm sm:space-y-2">
							<div>• Backend Development roles</div>
							<div>• Machine Learning Engineering roles</div>
							<div>• Open source collaborations</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
