<!-- script -->
<script>

</script>
<!-- script -->

<!-- html -->
<svelte:head>
	<title>Lauhard.dev</title>
</svelte:head>

<div class="content">
	<div class="greeter">
		<h1>Hello, I`am Andy </h1><span class="wave">👋</span>
	</div>
	<br>
	<!-- <img src="{sk}" alt=""> -->
	<p class="crazy1">I am a developer from Austria with a passion for web development</p>
	<p class="crazy2">I created this site to collect and share my tips, tricks and thoughts about my interests</p>
	<p class="crazy3">Thanks, for checking out </p>
	<p class="crazy4">Have a great day </p>
</div>
<!-- html -->

<!-- style -->
<style>
	.content {
		display: flex;
		padding: 5em 1em 1em 1em;
		align-items: center;
		flex-direction: column;
		background: rgb(231, 231, 238);
		transition: all ease-out .1s;
		margin: 0 auto;
	}
	.greeter {
		width: 100%;
		text-align: center;
	}
	.greeter h1 {
		display: inline;
	}
	.wave {
		display: inline-block;
		font-size: 28pt;
	}
	p{
		padding: 1em 3em;
		background-color: rgba(255, 99, 71, 0.65);
	}
	p:hover{
		transform: rotate(0deg);
		background-color:tomato;
		transition: all ease-out .2s;
		color: white;
	}
	.crazy1 {
		transform: rotate(3deg)
	}
	.crazy2 {
		transform: rotate(-3deg)
	}
	.crazy3 {
		transform: rotate(10deg)
	}
	.crazy4 {
		transform: rotate(-3deg)
	}
	/* h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 300;
		margin: 0 0 0.5em 0;
	} */
</style>
<!-- style -->


