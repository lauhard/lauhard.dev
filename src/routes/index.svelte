<script>
	import State from '../store/state.js';
	State.x(true, "Navigation");
</script>
<style>
	.content {
		position: absolute;
		top: calc(300px - 3vw);
		display: flex;
		width: 100%;
		height: calc(100vh - calc(300px - 3vw));
		padding: 5em 1em 1em 1em;
		align-items: center;
		flex-direction: column;
		background: rgb(231, 231, 238);
		transition: all ease-out .1s;

		/* justify-content: center; */
	}
	p{
		padding: 1em 3em;
		background-color: rgba(255, 99, 71, 0.65);
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
	.crazy1 {
		transform: rotate(3deg)
	}
	p:hover{
		transform: rotate(0deg);
		background-color:tomato;
		transition: all ease-out .2s;
		color: white;
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
	@media (max-width: 500px) {
		.content {
			top: 50px;
			display: flex;
			width: 100%;
			height: calc(100vh - 50px);
			transition: all ease-out .3s;
		}
	}
</style>

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



