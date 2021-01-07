<!-- script -->
<script>

</script>
<!-- script -->

<!-- html -->
<svelte:head>
	<title>Home ☕</title>
</svelte:head>

<div class="content">
	<div class="greeter">
		<h1>Hello, I`am Andy </h1><span class="wave">👋</span>
	</div>
	<br>
	<!-- <img src="{sk}" alt=""> -->
	<p class="crazy1"></p>
	<p class="crazy2"></p>
	<p class="crazy3">The site is still under construction</p>
	<p class="crazy4">Thanks, for checking out</p>
	<p class="crazy5"></p>
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
		width: 100%;
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
		font-size: 2.5em;
	}
	p{
		padding: 1em;
		margin: 1.1em;
		background-color: rgba(255, 99, 71, 0.65);
		text-align: center;
	}
	p:hover{
		transform: rotate(0deg);
		background-color:tomato;
		transition: all ease-out .2s;
		color: white;
		text-align: center;
	}
	.crazy1 {
		transform: rotate(4deg)
	}
	.crazy1::after {
		content: "I am a developer from austria with a passion for web development";
	}
	.crazy1:hover::after {
		content: "I am a developer from austria with a 💜 for web development";
	}

	.crazy2 {
		transform: rotate(-3deg)
	}
	.crazy2::after {
		content: "I created this site to collect and share my tips, tricks and thoughts about my interests"
	}
	.crazy2:hover::after {
		content: "I created this site to collect and share my 💩, 💩 and 💩 about my interests"
	}

	.crazy3 {
		transform: rotate(8deg)
	}
	.crazy3:hover::before{
		content: "⚒️ ";
	}
	.crazy3:hover::after{
		content: " ⚒️";
	}

	.crazy4 {
		transform: rotate(-3deg)
	}
	.crazy4:hover::before{
		content: "🙏 "
	}
	.crazy4:hover::after{
		content: " 🙏"
	}
	
	.crazy5 {
		transform: rotate(7deg)
	}
	.crazy5::after {
		content: "Have a great day"
	}
	.crazy5:hover::after {
		content: "Have a 💣 day"
	}
	/* h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 300;
		margin: 0 0 0.5em 0;
	} */
</style>
<!-- style -->


