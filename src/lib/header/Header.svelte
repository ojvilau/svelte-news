<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<div class="left">
		<a href="/">
			<span class="logo">
				<span class="logo-n">N</span>
			</span>
			<span class="site-title">Hacker Next</span>
		</a>
		<div class="nav">
			<Nav />
		</div>
	</div>
	<div class="right">
		<a href="/login" class="login">login</a>
	</div>
</header>

<style>
	header {
		background: #ffa52a;
		display: flex;
		font-size: 14px;
	}
	.logo {
		margin: 4px 5px 2px 4px;
		display: inline-block;
	}
	.logo-n {
		border: 1px solid #fff;
		display: inline-block;
		color: #fff;
		font-weight: bold;
		font-size: 11px;
		padding: 5px 8px;
	}
	.left {
		flex: 9;
	}
	.right {
		flex: 1;
		text-align: right;
	}
	.site-title {
		font-weight: bold;
		display: inline-block;
		font-size: 14px;
		text-decoration: none;
		padding: 8px 10px 8px 4px;
		color: #000;
		vertical-align: top;
	}
	a.login {
		padding: 10px;
		display: inline-block;
		font-size: 11px;
		text-transform: uppercase;
		text-decoration: none;
		color: #000;
	}
	.login:hover {
		color: #fff;
	}
	.nav {
		display: inline-block;
		vertical-align: top;
	}
	@media (max-width: 750px) {
		.site-title {
			font-size: 16px;
			padding-bottom: 0;
		}
		a.login {
			padding: 24px 10px 23px;
		}
		.nav {
			display: block;
		}
	}
</style>
