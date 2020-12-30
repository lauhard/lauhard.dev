<script>
	export let segment;
</script>

<style>
	.nav-bg {
		background:var(--navigation-button-background-active);
		width:100%;
		position: absolute;
		top: 0;
		left: 0;
		height: 304px;
		z-index:1 ;
        clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 3vw),
            0 100%
        );
	}
	nav {
		border-bottom: 1px solid #b76aff62;
		width:100%;
		background-image: url("/images/Liquid-Cheese.svg");
		background-attachment: fixed;
		background-size: cover;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* position: fixed; */
		z-index: 1;
		font-weight: 500;
		background-color: #EB6464;
        height: 300px;
        clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 3vw),
            0 100%
        );
	}
	nav .logo{
		width: 100px;
		height: 100px;
		margin-top:30px;
		border-radius: 50%;
		background: rgb(133, 133, 133);
		display: flex;
		justify-content: center;
		align-items: center;
		word-wrap: normal;
		text-align: center;
		border:3px solid var(--navigation-button-background-active);
	}
	.logo span{
		width: 100%;
		margin: 0;
		padding: 0;
		font-size: bold;
		color: aliceblue;
	}
    
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		bottom: 40px;
		position: absolute;
	}
	ul .icon{
		font-size: 2em;
		margin: 0;
		padding: 0;
		line-height: unset;
	}
	li {
		display: block;
		float: left;
		margin: 0 .5px;
		text-align: center;
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
	[data-active] {
		color: var(--navigation-button-color-active);
		background-color: var(--navigation-button-background-active);
		transition: ease-out .3s all;
	} 
	a {
		text-decoration: none;
		display: block;
		padding: .3em 1em;
		color:var(--navigation-button-color);
		border-radius: 20%;
		
	}
	a p {
		margin:0;
		padding:0;
	}
	a:hover {
		color: var(--navigation-button-color-hover);
		background: var(--navigation-button-background-hover);
		transition: ease-out .5s all;
		/* font-size: 1.1em; */
		border-radius: 20%;
		/* color: white; */
	}
	/* a::after{
		content: "✍️";
		font-size: 2em;
	} */
	/* li:hover {
		font-size: 1.2em;
		color: white;
		background: var(--navigation-button-background-hover);
		transition: ease-out .1s all;
	} */
</style>
<div class="nav-bg"></div>
<nav>
	<div class="logo">
		<span>LAUHARD .DEV</span>
	</div>
	<ul class="pages">
		<li>
			<a data-active="{segment === undefined ? 'page' : undefined}" href=".">
				<span class="icon">☕</span>
				<p>Home</p>
			</a>
		</li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a rel=prefetch data-active="{segment === 'blog' ? 'page' : undefined}" href="blog">
				<span class="icon">💭</span>	
				<p>Blog</p>
			</a>
		</li>
		<li>
			<a rel=prefetch data-active="{segment === 'tutorial' ? 'page' : undefined}" href="tutorial">
				<span class="icon">🦮</span>
				<p>Guids</p>
			</a>
		</li>
		<li>
			<a rel=prefetch data-active="{segment === 'snippets' ? 'page' : undefined}" href="snippets">
				<span class="icon">🧻</span>
				<p>Snippets</p>
			
			</a>
		</li>
	</ul>
</nav>
