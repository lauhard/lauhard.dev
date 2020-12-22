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
	[aria-blog], [aria-home] {
		color: #f7eeff;
		background:#bc75ff;
		transition: ease-out .5s all;
	} 
	a {
		text-decoration: none;
		display: block;
		min-width: 70px;
		padding: 1em 0 1em 0;
		color: #bc75ff;
		
	}
	a:hover {
		color: #f7eeff;
		background:#bc75ff;
		transition: ease-out .5s all;
	}
	
</style>

<nav>
	<ul>
		<li><a aria-home="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-blog="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
	</ul>
</nav>
