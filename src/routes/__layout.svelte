<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '../lib/footer/Footer.svelte';
	import '../app.css';
</script>

<div class="main">
	<Header />
	<div class="page">
		<slot />
		<Footer />
	</div>
</div>

<style>
	.main {
		width: 85%;
		margin: auto;
		padding: 10px 0 0 0;
	}
	.page {
		color: #828282;
		background: #fff;
		padding: 3px 10px;
	}
	@media (max-width: 750px) {
		.main {
			padding: 0;
			width: auto;
		}
	}
</style>
