<!-- script -->
<script >
	import { onMount } from 'svelte';
	import observe from '../helper/intersectionObserver'
	export let intersect = '140pt';

	onMount(() => {
		observe("#intersector", (entry)=>{
			if (entry.isIntersecting) {
				console.log(entry.isIntersecting);
				document.getElementById("navigation").classList.remove("navigation-small");
				document.getElementById("navigation_background").classList.add("navigation-background");
				document.getElementById("logo_small").classList.add("logo-big");
				document.getElementById("logo_small").classList.remove("logo-small");
				let elements = document.getElementsByClassName("icon");
				for (const element of elements) {
					element.classList.remove("hide");
				}
			} else {
				console.log(entry.isIntersecting);
				document.getElementById("navigation_background").classList.remove("navigation-background");
				document.getElementById("navigation").classList.add("navigation-small");
				document.getElementById("logo_small").classList.remove("logo-big");
				document.getElementById("logo_small").classList.add("logo-small");
				let elements = document.getElementsByClassName("icon");
				for (const element of elements) {
					element.classList.add("hide");
				}
			}		
		});
	});
	export let segment;
	
</script>
<!-- script -->

<!-- html -->
<div id="intersector" style = "height:1px; width:100%; top:{intersect}; position:absolute; "></div>
<div id="navigation_background" class="navigation-background"></div>
<nav id="navigation" class="navigation-big navigation-small">
	<ul class="pages">
		<li>
			<span class="icon hide">☕</span>
			<a data-active="{segment === undefined ? 'page' : undefined}" href=".">
				<p>Home</p>
			</a>
		</li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<span class="icon hide">💭</span>	
			<a rel=prefetch data-active="{segment === 'blog' ? 'page' : undefined}" href="blog">
				<p>Blog</p>
			</a>
		</li>
		<div id="logo_small" class="logo logo-big logo-small">
			<span>LOGO</span>
		</div>
		<li>
			<span class="icon hide">📚</span>
			<a rel=prefetch data-active="{segment === 'tutorial' ? 'page' : undefined}" href="tutorial">
				<p>Tutorials</p>
			</a>
		</li>
		<li>
			<!--🧻-->
			<span class="icon hide">📑</span> 
			<a rel=prefetch data-active="{segment === 'snippets' ? 'page' : undefined}" href="snippets">
				<p>Snippets</p>
			</a>
		</li>
	</ul>
</nav>
<!-- html -->

<!-- style -->
<style>
	nav {
		font-size: 16px;
	}
	p {
		/* font-size: 16px; */
		/* margin: 0px;
		padding: 0px; */
	}
	a {
		font-size: inherit;
		
	}
	.navigation-background, .navigation-big, .navigation-small {
		background-color:var(--navigation-button-background-active);
		font-weight: 500;
		width:100%;
		position: fixed;
		z-index:10;
		clip-path: polygon(
			0 0,
			100% 0,
			100% calc(100% - 2.4vw),
			0 100%
		);
		transition: ease .5s clip-path;
	}
	.navigation-big {
		background-image: url("/images/Liquid-Cheese.svg");
		background-attachment: fixed;
		background-size: cover; 
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #EB6464;
		height: 300px;
	}
	.navigation-background{
		height: 303px;
	}
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
	}
	.navigation-big ul {
		position: absolute;
		bottom: 40px;
	}
	ul .icon{
		font-size: 1.5em;
		margin: 0;
		padding: 0;
		line-height: unset;
	}
	.navigation-big li {
		display: flex;
		flex-direction: column;
		margin: 0 .5em;
		text-align: center;
	}
	.navigation-big [data-active] {
		color: var(--navigation-button-color-active);
		background-color: var(--navigation-button-background-active);
		transition: ease-out .3s all;
	} 
	.navigation-small {
		height: 90px;
		clip-path: polygon(
			0 0,
			100% 0,
			100% 100%,
			0 100%
		);
		background-color: var(--main-background-color2);
		border-bottom: 3px solid var(--navigation-button-background-active);
		transition: ease .3s all;
	}
	.navigation-small ul {
		bottom: 2.5px;
		transition: ease .3s all;
		align-items: center;
	}
	.navigation-small li {
		margin: 0 .5em;
		font-size: .9em;
	}
	a {
		text-decoration: none;
		display: block;
		padding: .5em 1.2em;
		width: 100%;
		border-radius: 15px;
		color:var(--navigation-button-color);
		transition: ease .5s all;
	}
	a:hover {
		background-color: var(--navigation-button-background-active);
		color: var(--navigation-button-color-hover);
		transition: ease .5s all;
	}
	.logo {	
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		word-wrap: normal;
		text-align: center;
		background: var(--navigation-button-background-active);
		color: var(--navigation-button-background);
		transition: ease .3s all;
	}
	.logo-big{
		top:-130px;
		position: absolute;
		width: 100px;
		height: 100px;
		font-weight: 600;
		border:3px solid var(--navigation-button-background-active);
		transition: ease .3s all;

	}
	.logo-small{
		min-width: 60px;
		width: 60px;
		height: 60px;
		margin: 9px .2em;
		border:2px solid var(--navigation-button-background-active);
		transition: ease .3s all;

	}
	.logo span{
		width: 100%;
		margin: 0;
		padding: 5px;
		font-size: bold;
		word-wrap: break-word;
		letter-spacing: 0;
	}
	.logo-big span{
		font-size: 1em;
	}
	.logo-small span{
		
		font-size: .8em;
	}
	.hide {
		display: none;
	}

	/* [aria-current]::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background-color: #9733f51f;
		display: block;
		bottom: -1px;
	}*/
	
	/* a::after{
		content: "✍️";
		font-size: 2em;
	} */
	@media (max-width: 500px) {
		.navigation-background{
			display: none;
		}
		.navigation-big{
			height: 90px;
			clip-path: polygon(
				0 0,
				100% 0,
				100% 100%,
				0 100%
			);
			background-color: var(--main-background-color2);
			border-bottom: 3px solid var(--navigation-button-background-active);
			transition: ease .3s all;
		}
		.icon {
			display: none;
		}
		.navigation-big ul {
			bottom: 2.5px;
			transition: ease .3s all;
			align-items: center;
		}
		.navigation-big li {
			margin: 0 .2em;
			font-size: .8em;
		}
		
		.logo-big {
			border-radius: 50%;
			display: flex !important;
			justify-content: center;
			top: 0;
			position: relative;
			align-items: center;
			word-wrap: normal;
			text-align: center;
			background: var(--navigation-button-background-active);
			color: var(--navigation-button-background);
			transition: ease .3s all;
			min-width: 60px;
			width: 60px;
			height: 60px;
			margin: 9px .2em;
			border:2px solid var(--navigation-button-background-active);
			transition: ease .3s all;
			
		}
		.logo-big span{
			font-size: .8em;
		}
	}
</style>
<!-- style -->