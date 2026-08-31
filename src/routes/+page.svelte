<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import { resolve } from '$app/paths';

	let contacts: { name: string; href: string }[] = [
		{ name: 'GitHub', href: 'https://example.com' },
		{ name: 'Instagram', href: 'https://example.com' },
		{ name: 'LinkedIn', href: 'https://example.com' }
	];

	let email: string = 'mailto://hi@chythrn.cc';
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
				<Contacts {contacts} />
			</Card>
			<Card>
				<a href={email}>email</a>
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
			<a href="https://nixwebr.ing/prev/owo93" target="_blank">&LeftArrow;</a>
			<a href="https://nixwebr.ing" target="_blank">
				<img
					src="https://nixwebr.ing/nix-webring.svg"
					class="w-4 opacity-70"
					alt="nix webring icon"
				/>
			</a>
			<a href="https://nixwebr.ing/next/owo93" target="_blank">&RightArrow;</a>
		</div>
		<p class="text-xs opacity-60">© {new Date().getFullYear()} Chayathorn Charoenratwutikal</p>
	</div>
</div>
