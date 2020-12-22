<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #ffffff;
		padding: 2em;
		margin: 0 auto;
		padding-top: 80px;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>