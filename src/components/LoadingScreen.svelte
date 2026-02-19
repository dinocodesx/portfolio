<script lang="ts">
	import { onMount } from 'svelte';

	let progress = 0;
	let isLoading = true;
	let fadeOut = false;

	onMount(() => {
		const interval = setInterval(() => {
			progress += Math.random() * 2.5 + 0.5; // Random increment between 0.5-3

			if (progress >= 100) {
				progress = 100;
				clearInterval(interval);
				// Start fade out animation
				setTimeout(() => {
					fadeOut = true;
				}, 300);
				// Hide completely after fade
				setTimeout(() => {
					isLoading = false;
				}, 800);
			}
		}, 60); // Update every 60ms for smooth animation

		return () => clearInterval(interval);
	});
</script>

{#if isLoading}
	<div
		class="fixed inset-0 z-50 flex items-end justify-end bg-black transition-opacity duration-500"
		class:opacity-0={fadeOut}
		class:opacity-100={!fadeOut}
	>
		<!-- Loading counter in bottom-right -->
		<div class="p-6 sm:p-8 md:p-12">
			<div
				class="font-mono text-4xl font-light tracking-wider text-white select-none sm:text-5xl md:text-6xl lg:text-7xl"
			>
				{Math.floor(progress).toString().padStart(2, '0')}%
			</div>
			<!-- Optional loading bar -->
			<div class="mt-3 h-0.5 w-20 overflow-hidden rounded-full bg-gray-800 sm:mt-4 sm:w-24 md:w-32">
				<div
					class="h-full rounded-full bg-white transition-all duration-100 ease-out"
					style="width: {progress}%"
				></div>
			</div>
		</div>
	</div>
{/if}
