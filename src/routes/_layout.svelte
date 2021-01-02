<script>
	import Navigation from "../components/Navigation.svelte";
	export let segment;
</script>

<style>
	/* :global(body){
          background-color: lightseagreen;
		background-image: url("/images/test.svg");
          background-size: 100%;
    } */
	main {
		position: relative;
		background: rgb(231, 231, 238);

		/* clip-path: polygon(
            0  100,
            100% 0,
            100% 100%,
            0 100%
          ); */
		/* background-color: rgb(168, 117, 21); */
	}
</style>

<!-- <img src="{sk}" alt=""> -->

<main>
	<Navigation {segment} />

	<slot />
</main>

