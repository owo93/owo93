<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const commitHash = process.env.COMMIT_HASH || 'unknown';
</script>

<div class="flex h-svh flex-col p-4 sm:p-6">
	<div class="flex flex-1 items-center justify-center">
		<div class="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-2">
			<Card span="2">
				<h1 class="font-mono text-xl">Chayathorn<br /> Charoenratwutikal</h1>
				<ul>
					<li>High-school student</li>
					<li>Backend developer</li>
				</ul>
			</Card>
			<Card>
				<Contacts contacts={data.contacts} />
			</Card>
			<Card>
				<a href="mailto:{data.email}">email</a>
				<a href={resolve('/resume')} download="resume.pdf">my resume</a>
			</Card>
			<Card span="2">
				<ul>
					<li>&gt; high-schooler at Suankularb Wittayalai School, bkk.</li>
					<li>&gt; mostly works on the backend w/ Rust</li>
					<li>&gt; trying to "fix" everything w/ nix.</li>
				</ul>
			</Card>
		</div>
	</div>
	<div class="flex flex-col items-center gap-2">
		<!-- webrirng -->
		<div class="flex flex-row items-center gap-2">
			<a href="https://nixwebr.ing/prev/owo93">&LeftArrow;</a>
			<a href="https://nixwebr.ing">
				<img
					src="https://nixwebr.ing/nix-webring.svg"
					class="w-4 opacity-70"
					alt="nix webring icon"
				/>
			</a>
			<a href="https://nixwebr.ing/next/owo93">&RightArrow;</a>
		</div>
		<p class="text-xs opacity-60">
			<span class="font-mono hover:underline">{commitHash}</span> owofolio &copy; {new Date().getFullYear()}
			Chayathorn Charoenratwutikal
		</p>
	</div>
</div>
