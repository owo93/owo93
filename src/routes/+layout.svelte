<script lang="ts">
	import '@fontsource/commit-mono';
	import './layout.css';
	import favicon from '$lib/assets/icon.ico';
	import commitMonoWoff2 from '@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>owofolio</title>
	<link rel="preload" href={commitMonoWoff2} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>
{@render children()}

<style>
	:global(body) {
		color: oklch(0.4 0.2 290);
		background-color: oklch(0.95 0.05 290);

		@media (prefers-color-scheme: dark) {
			color: oklch(0.88 0.2 290);
			background-color: oklch(0.12 0.01 290);
		}
	}
</style>
