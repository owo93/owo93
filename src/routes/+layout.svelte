<script lang="ts">
	import '@fontsource/commit-mono';
	import './layout.css';
	import commitMonoWoff2 from '@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2';
	import { Shader, Dither, FractalNoise } from 'shaders/svelte';

	let { children } = $props();

	let isDark = $state(false);
	let isTabFocused = $state(true);
	let faviconHref = $derived(isTabFocused ? '/favicon.ico' : '/favicon-unfocused.ico');

	$effect(() => {
		const syncFocus = () => {
			isTabFocused = document.visibilityState === 'visible';
		};

		syncFocus();
		document.addEventListener('visibilitychange', syncFocus);
		return () => document.removeEventListener('visibilitychange', syncFocus);
	});

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
	<link rel="icon" href={faviconHref} type="image/png" />
	<title>Chayathorn's Portfolio</title>
	<link rel="preload" href={commitMonoWoff2} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>
{@render children()}

<!-- Background -->
<div class="pointer-events-none fixed inset-0 -z-10">
	<Shader class="h-full w-full">
		<Dither pattern="bayer8" opacity={0.12} colorB={ditherColor}>
			<FractalNoise />
		</Dither>
	</Shader>
</div>
