<!-- script -->
<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>
<!-- script -->

<!-- html -->
<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="error">
	<h1>{status}</h1>

	<p>{error.message}</p>
	
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
<!-- html -->

<!-- style -->
<style>
	.error {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	/* p {
		margin: 1em auto;
	} */

	@media (min-width: 480px) {
		/* h1 {
			font-size: 4em;
		} */
	}
</style>
<!-- style -->

