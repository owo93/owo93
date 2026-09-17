<script lang="ts">
	import '@fontsource/commit-mono';
	import './layout.css';
	import favicon from '$lib/assets/icon.ico';
	import commitMonoWoff2 from '@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2';
	import { Shader, Dither, FractalNoise } from 'shaders/svelte';

	let { children } = $props();

	let isDark = $state(false);
	$effect(() => {
		const media = window.matchMedia('(prefers-color-scheme: dark)');

		const syncTheme = () => {
			isDark = media.matches;
		};

		syncTheme();
		media.addEventListener('change', syncTheme);
		return () => media.removeEventListener('change', syncTheme);
	});

	let ditherColor = $derived(
		isDark
			? getComputedStyle(document.documentElement).getPropertyValue('--color-foreground').trim()
			: 'oklch(0.5 0.2 75)'
	);
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
