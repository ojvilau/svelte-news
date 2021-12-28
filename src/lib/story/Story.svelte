<script>
	import { timeAgo } from '$lib/time-ago';

	export let id, title, date, url, user, score, commentsCount;

	let voted = false;
	// $: host = url ? new URL(url) : { host: '#' };

	const handleVote = () => (voted = !voted);

	const plural = (n, s) => s + (n === 0 || n > 1 ? 's' : '');
</script>

<div class="container">
	<div class="title">
		<span class={`vote-indicator ${voted ? 'voted' : ''}`} on:click={handleVote}> &#9650; </span>
		<a href={url}>{title}</a>
		{#if url}
			<span class="source">
				<!-- <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a> -->
				<a href={url}>{url.replace(/^www\./, '')}</a>
			</span>
		{/if}
	</div>
	<div class="meta">
		{score}
		{plural(score, 'point')} by{' '}
		<a href={`/user?id=${user}`}>
			{user}
		</a>{' '}
		<a href={`/item?id=${id}`}>
			{timeAgo(new Date(date))} ago
		</a>{' '}
		|{' '}
		<a href={`/item?id=${id}`}>
			{commentsCount}
			{plural(commentsCount, 'comment')}
		</a>
	</div>
</div>

<style>
	.container {
		margin: 5px 0;
	}
	.vote-indicator {
		cursor: pointer;
		font-family: sans-serif;
		margin-right: 5;
		color: #ccc;
	}
	.voted {
		color: #ffa52a;
	}
	.title {
		font-size: 15px;
		margin-bottom: 3px;
	}
	.title > a {
		color: #000;
		text-decoration: none;
	}
	.title > a:visited {
		color: #828282;
	}
	.meta {
		font-size: 12px;
	}
	.source {
		font-size: 12px;
		display: inline-block;
		margin-left: 5px;
	}
	.source a,
	.meta a {
		color: #828282;
		text-decoration: none;
	}
	.source a:hover,
	.meta a:hover {
		text-decoration: underline;
	}
</style>
