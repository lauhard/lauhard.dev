<!-- script -->
<script>
	import Navigation from "../components/Navigation.svelte";
	export let segment;
</script>
<!-- script -->

<!-- html -->
<Navigation {segment} />
<main>
	<slot />
</main>
<!-- html -->

<!-- style -->
<style>
	main {
		position: absolute;
		top: calc(300px - 3vw);
		display: flex;
		/* min-width: 380px; */
		width: 100%;
		height: calc(100vh - calc(300px - 3vw));
		
	}
	@media (max-width: 500px) {
		main {
			top: 50px;
			display: flex;
			width: 100%;
			/* height: auto; */
			transition: all ease-out .3s;
		}
	}
</style>
<!-- style -->

