<script context="module">
	export async function preload() {
        let posts = await this.fetch(`blog.json`).then(r => r.json());
        return { posts };
	}
</script>

<script>
    import Posts from '../../store/posts';
    import FilteredPosts from '../../store/filteredPosts';
	export let posts =[];
	$Posts = posts;
	if ($FilteredPosts.length > 0) {
		posts = $FilteredPosts
	}
    
	
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}{post.creationTime}</a></li>
	{/each}
</ul>
