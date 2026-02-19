<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

<svelte:head>
	<title>Resume - Dino Codes</title>
	<meta
		name="description"
		content="Professional resume of Dino Codes - Machine Learning and Backend Engineer specializing in Python, Java, Go and Typescript."
	/>
</svelte:head>

<div class="mt-8 space-y-8 lg:mt-12">
	{@render children()}
</div>
