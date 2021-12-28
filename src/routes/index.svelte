<script context="module">
	import Story from '$lib/story/Story.svelte';

	// export const prerender = true;

	let id = 1;
	let title = 'some news';
	let date = new Date();
	let url = 'https://thehackernews.com/2021/12/garrett-walk-through-metal-detectors.html';
	let user = 'ojvilau';
	let score = 20;
	let commentsCount = 200;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>hello</h1>
	<Story {id} {title} {date} {url} {user} {score} {commentsCount} />
</section>
