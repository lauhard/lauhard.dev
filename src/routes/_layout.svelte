<script>
	import Nav from '../components/Nav.svelte';
import Navigation from '../components/Navigation.svelte';
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
		padding: 150px 0 0 0 ;
		margin: -60px auto;
		clip-path: polygon(
            0  3vw,
            100% 0,
            100% 100%,
            0 100%
        );
		background-color: rgb(168, 117, 21);
  
	}
</style>
<!-- <img src="{sk}" alt=""> -->
<Navigation {segment}/>
<div>

</div>
<main>
	<slot></slot>
</main>
<div>
	
</div>