<script>
	import State from '../store/state.js';
	State.x(true, "Navigation");
</script>
<style>
	.content {
		/* margin-top: 60px; */
	}
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	/* h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 300;
		margin: 0 0 0.5em 0;
	} */
	
	@media (min-width: 480px) {
		/* h1 {
			font-size: 4em;
		} */
	}
</style>

<svelte:head>
	<title>Lauhard.dev</title>
</svelte:head>

<div class="content">
	<h1>Welcome to lauhard.dev</h1>
	<!-- <img src="{sk}" alt=""> -->
	<p> find tutorials, cheatsheets and more...</p>
</div>



