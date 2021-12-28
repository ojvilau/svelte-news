<script context="module">
	import Story from '$lib/story/Story.svelte';

	export async function load({ fetch }) {
		const resp = await fetch('/stories.json');
		const stories = await resp.json();

		return {
			props: { stories }
		};
	}

	// export const prerender = true;
</script>

<script>
	export let stories;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each stories as story}
		<Story {...story} />
	{/each}
</section>
