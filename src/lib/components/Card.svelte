<script lang="ts">
	import type { Snippet } from 'svelte';

	let { span = '1', children }: { span?: string; children: Snippet } = $props();

	const spanClass: Record<string, string> = {
		'1': 'sm:col-span-1',
		'2': 'sm:col-span-2'
	};
</script>

<div
	class={`card ${spanClass[span]} flex min-h-40 flex-col justify-between overflow-hidden rounded-xs border p-4`}
>
	{@render children()}
</div>
