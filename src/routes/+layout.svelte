<script lang="ts">
	import '../app.css';
	import LoadingScreen from '../components/LoadingScreen.svelte';

	let { children } = $props();
</script>

<!-- <LoadingScreen /> -->

<div
	class="bg-background text-foreground mx-auto min-h-screen max-w-6xl px-4 pb-8 font-sans antialiased sm:px-6 md:px-8 lg:px-16 lg:pb-16"
>
	{@render children()}
</div>
