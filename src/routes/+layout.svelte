<script lang="ts">
	import '@fontsource/commit-mono';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import commitMonoWoff2 from '@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={commitMonoWoff2} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>
{@render children()}

<style>
	:global(body) {
		color: oklch(0.4 0.2 290);
	}
</style>
