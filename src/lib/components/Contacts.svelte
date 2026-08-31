<script lang="ts">
	let { contacts }: { contacts?: Record<string, string>[] } = $props();
</script>

<ul>
	{#if contacts}
		{#each contacts as { name, href } (name)}
			<li class="flex flex-col lowercase">
				<a {href} rel="external" target="_blank">{name}</a>
			</li>
		{/each}
	{:else}
		<p>No contacts found</p>
	{/if}
</ul>
