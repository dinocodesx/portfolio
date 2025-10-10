<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

<svelte:head>
	<title>Talks - Dino Codes</title>
	<meta
		name="description"
		content="Technical talks and presentations by Dino Codes on machine learning, backend engineering, and modern technologies."
	/>
</svelte:head>

<div class="mt-8 space-y-8 lg:mt-12">
	{@render children()}
</div>
