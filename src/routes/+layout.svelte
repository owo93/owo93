<script lang="ts">
	import '@fontsource/commit-mono';
	import './layout.css';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/icon.ico';
	import commitMonoWoff2 from '@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2';
	import { Shader, Dither, FractalNoise } from 'shaders/svelte';

	let { children } = $props();

	let ditherColor = $state('oklch(0.4 0.2 290)');

	onMount(() => {
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const syncColor = () => {
			ditherColor = getComputedStyle(document.documentElement)
				.getPropertyValue('--color-foreground')
				.trim();
		};

		syncColor();
		media.addEventListener('change', syncColor);
		return () => media.removeEventListener('change', syncColor);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Chayathorn's Portfolio</title>
	<link rel="preload" href={commitMonoWoff2} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>
{@render children()}

<!-- Background -->
<div class="pointer-events-none fixed inset-0 -z-10">
	<Shader class="h-full w-full">
		<Dither pattern="bayer8" opacity={0.1} colorB={ditherColor}>
			<FractalNoise />
		</Dither>
	</Shader>
</div>
