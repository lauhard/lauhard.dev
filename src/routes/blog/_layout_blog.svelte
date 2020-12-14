<script>
    import { stores } from '@sapper/app';
    import { onMount } from 'svelte';
    const { page, preloading } = stores();
    import Header from '../../components/Header.svelte';

    let path = $page.path;
    export let tags = [];
    export let post = {};
    export let title;

    onMount (async () => {
        console.log(path);
        // attributes = await fetch(`${path}.json`).then(r => r.json());
        let posts = await fetch(`blog.json`).then(r => r.json());
        post = posts.find(p => `/blog/${p.slug}`=== path )
        console.log(post);
    }) 

    $: tags  = tags;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: rgba(56, 107, 216, 0.85);
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main>
    {title}
    <!-- {#await attributes}
    {:then attributes}
        {attributes.creationDate}
        <Header {attributes} ></Header>
    {:catch error}
    {/await} -->
    {#each tags as tag}
        {tag}
    {/each} <br>
   
    {post.creationDate}
   
    <!-- blogpost layout -->
	<slot></slot>
</main>