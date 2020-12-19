<script context="module">
	export async function preload() {
        let posts = await this.fetch(`blog.json`).then(r => r.json());
        return { posts };
	}
</script>

<script>
    import Posts from '../../store/posts';
    export let posts =[];
    $: posts = posts;
    
	$Posts = posts;
	console.log("store posts...")
	console.log($Posts);
    
    
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
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
