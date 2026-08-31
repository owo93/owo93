<script lang="ts">
	let { contacts }: { contacts: { name: string; href: string }[] } = $props();
</script>

<ul>
	{#each contacts as { name, href } (name)}
		<li class="flex flex-col lowercase">
			<a {href} rel="external" target="_blank">{name}</a>
		</li>
	{/each}
</ul>
