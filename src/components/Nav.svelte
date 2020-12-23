<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid #b76aff62;
		width:100%;
		position: fixed;
		z-index: 1;
		background-color: white;
	}
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
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
	[data-blog], [data-home] {
		color: var(--navigation-button-color-active);
		background-color: var(--navigation-button-background-active);
		transition: ease-out .3s all;
	} 
	a {
		text-decoration: none;
		display: block;
		min-width: 70px;
		padding: 1em 0 1em 0;
		color:var(--navigation-button-color);
		
	}
	a:hover {
		color: var(--navigation-button-color-hover);
		background: var(--navigation-button-background-hover);
		transition: ease-out .3s all;
	}
	
</style>

<nav>
	<ul>
		<li><a data-home="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch data-blog="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
	</ul>
</nav>
