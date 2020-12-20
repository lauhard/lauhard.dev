<script context="module">
	import { flip } from 'svelte/animate';
	import { quintIn, quintOut, quintInOut } from 'svelte/easing';
	import Posts from '../../store/posts';
	import FilteredPosts from '../../store/filteredPosts';
	import FilterButton from "../../components/filterButton.svelte";
    import utils from '../../helper/utils';

	export async function preload(page) {
        let posts = await this.fetch(`blog.json`).then(r => r.json());
        return { posts };
	}
</script>

<script>
	export let posts = [];
	export let tags = [];
	export let filterInfo = " ";
	$Posts = posts;

	function getTag(event) {
        let filteredPosts= utils.filterPostsByTag($Posts, event.detail.text);
        filteredPosts.filter = event.detail.text;
        filteredPosts.by = "tag";
		$FilteredPosts = filteredPosts;
		posts = $FilteredPosts
		filterInfo = `Post filtered by ${posts.by}: "${posts.filter}"`;
	}

	if ($FilteredPosts.length > 0) {
		posts = $FilteredPosts
		filterInfo = `Post filtered by ${posts.by}: "${posts.filter}"`;
	}

	tags = utils.getTags(posts);
	
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Posts</h1>
<p>{filterInfo}</p>

{#each tags as tag}
<FilterButton  tag = "{tag}" on:tag={getTag}>
   <a class="btn" href="/blog"> {tag} </a> 
</FilterButton>
{/each}

<div class="container">
    {#each posts as post (post.slug)}
        <div animate:flip="{{delay: 10, duration: 450, easing: quintInOut}}">
            {#if post.publish == true }
                <a rel="prefetch" href='/blog/{post.slug}' class="blogpost-card">
                    <div>{post.title}</div>
                    <div>{post.author}</div>
                    <div>{post.creationDate}</div>
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
