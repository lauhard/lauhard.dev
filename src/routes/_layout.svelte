<script>
	import Nav from '../components/Nav.svelte';
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
		padding: 60px 0 0 0 ;
		margin: 0 auto;
		/* background-color: firebrick; */
  
	}
</style>
<!-- <img src="{sk}" alt=""> -->
<Nav {segment}/>
<div>

</div>
<main>
	<slot></slot>
</main>
<div>
	
</div>