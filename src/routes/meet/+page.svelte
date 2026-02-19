<script lang="ts">
	import { browser } from '$app/environment';

	// Immediate redirect - multiple methods for maximum speed
	const redirectUrl = 'https://meet.google.com/fah-jykb-hzo';

	if (browser) {
		// Method 1: Immediate location change
		window.location.replace(redirectUrl);

		// Method 2: Backup with href (in case replace fails)
		window.location.href = redirectUrl;
	}
</script>

<svelte:head>
	<title>Meet - Debarshee Chakraborty</title>
	<meta name="description" content="Redirecting to Google Meet call with Debarshee Chakraborty" />
	<!-- Meta refresh for instant redirect fallback -->
	<meta http-equiv="refresh" content="0; url=https://meet.google.com/fah-jykb-hzo" />
</svelte:head>

<div class="bg-background text-foreground flex min-h-screen items-center justify-center">
	<div class="text-center">
		<h1 class="text-2xl font-black tracking-[-0.02em] uppercase">Redirecting...</h1>
		<a
			data-sveltekit-preload-data="hover"
			href="https://meet.google.com/fah-jykb-hzo"
			class="text-muted-foreground hover:text-foreground mt-4 block text-sm underline"
		>
			Click here if not redirected
		</a>
	</div>
</div>
