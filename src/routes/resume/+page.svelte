<svelte:head>
	<title>Resume - Dino Codes</title>
	<meta
		name="description"
		content="View and download the resume of Dino Codes - Machine Learning and Backend Engineer."
	/>
</svelte:head>

<div class="space-y-6">
	<div class="text-center">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Resume</h1>
		<p class="text-muted-foreground mt-4 text-lg">
			View my professional resume below or download it for offline viewing.
		</p>
	</div>

	<div class="flex justify-center space-x-4">
		<a
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
		>
			<svg
				class="mr-2 h-4 w-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			Download PDF
		</a>
		<a
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-primary inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
		>
			<svg
				class="mr-2 h-4 w-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
				/>
			</svg>
			Open in New Tab
		</a>
	</div>

	<div class="w-full">
		<div class="mx-auto max-w-4xl">
			<div class="border-border overflow-hidden rounded-lg border shadow-lg">
				<iframe
					src="/resume.pdf"
					title="Resume"
					class="h-[600px] w-full border-0 md:h-[700px] lg:h-[800px]"
					loading="lazy"
				>
					<p class="text-muted-foreground p-4 text-center">
						Your browser does not support PDFs.
						<a href="/resume.pdf" class="text-primary hover:underline">Download the PDF</a> instead.
					</p>
				</iframe>
			</div>
		</div>
	</div>

	<div class="text-muted-foreground text-center text-sm">
		<p>
			Having trouble viewing the resume? Try
			<a href="/resume.pdf" target="_blank" class="text-primary hover:underline"
				>opening it in a new tab</a
			>
			or downloading it directly.
		</p>
	</div>
</div>
