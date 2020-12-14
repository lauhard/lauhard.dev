
<script>
    import { onMount } from 'svelte';
    import { stores } from '@sapper/app';
    import Header from '../../components/Header.svelte';
    const { page, preloading } = stores();

    let path = $page.path;
    export let tags = [];
    export let post = {};
    export let attributes = {};
    export let title;
   
    onMount (async () => {
       
        attributes = await fetch(`${path}.json`).then(r => r.json());
        let posts = await fetch(`blog.json`).then(r => r.json());
        post = posts.find(p => `/blog/${p.slug}`=== path )
        console.log(post);
        console.log(attributes);
    }) 

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
    {attributes.creationDate}
   
    <!-- blogpost layout -->
	<slot></slot>
</main>