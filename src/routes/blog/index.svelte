<script context="module">
	import { flip } from 'svelte/animate';
	import { quintIn, quintOut, quintInOut } from 'svelte/easing';

	import Posts from '../../store/posts';
	import FilteredPosts from '../../store/filteredPosts';
	
	export async function preload(page) {
		let data = {};
		let host = page.host;
		console.log(host)
        let isLocal = host.split(':')[0].toString() === 'localhost';
        let posts = await this.fetch(`blog.json`).then(r => r.json());
		data.isLocal = isLocal;
		data.host = host;
		data.page = page;
        data.posts = posts;
        return { data };
	}
</script>

<script>
	export let data;
	export let isLocal;
	export let host;
	export let page;
	export let posts =[];

	isLocal = data.isLocal; 
	host = data.host; 
	page = data.page; 
	console.log(isLocal)
	console.log(host)
	console.log(page)
	posts = data.posts;
	isLocal = data.isLocal;
	$Posts = posts;

	if ($FilteredPosts.length > 0) {
		posts = $FilteredPosts
	}
    
	
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<div class="container">
    {#each posts as post (post.slug)}
        <div animate:flip="{{delay: 10, duration: 450, easing: quintInOut}}">
            {#if isLocal == true && post.draft == true || post.draft == false }
                <a rel="prefetch" href='/blog/{post.slug}' class="blogpost-card">
                    <div>{post.title}</div>
                    <div>{post.author}</div>
                    <div>{post.creationDate}</div>
                    {#if post.draft == true }
                        <span style="background:tomato"> DRAFT </span>
                    {/if} 
                </a>
            {/if}
        </div>
	{/each}
</div>

<style>
    .container {
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .blogpost-card {
        background-color: greenyellow;
        width: 250px;
        height: 250px;
        margin: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
