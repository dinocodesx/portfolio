<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

<svelte:head>
	<title>Blogs - Dino Codes</title>
	<meta
		name="description"
		content="Technical blogs and articles by Dino Codes on machine learning, backend development, and modern technologies."
	/>
</svelte:head>

<div class="mt-8 space-y-8 lg:mt-12">
	{@render children()}
</div>
