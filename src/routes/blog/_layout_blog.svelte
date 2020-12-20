<script>
    import { stores } from '@sapper/app';
    import { onMount } from 'svelte';
    const { page, preloading } = stores();
    import Header from '../../components/Header.svelte';
    import Posts from '../../store/posts';
    import FilteredPosts from '../../store/filteredPosts';
    import utils from '../../helper/utils';

    export let tags = [];
    export let post = {};
    export let title;
    let posts = [];
    $: posts = posts;

    function getTag(event) {
        console.log(event.detail.text);
        console.log($Posts);
        let filteredPosts = utils.filterPostsByTag($Posts, event.detail.text);
        console.log(filteredPosts);
        filteredPosts.filter = event.detail.text;
        filteredPosts.by = "tag";
        $FilteredPosts = filteredPosts;
	}
    onMount (async () => {
        let fixedPath = $page.path
        // console.log(fixedPath);
        if (fixedPath.charAt(fixedPath.length -1) === '/') {
            fixedPath = fixedPath.slice(0, -1);
        }
        if ($Posts.length == 0) {
            console.log("try fetch posts again...") 
            posts = await fetch(`/blog.json`).then(r => r.json());
            $Posts = posts;
            post = posts.find(p => `/blog/${p.slug}`=== fixedPath )
            // console.log("current post", post);
        } else {
            console.log("get posts from the store...")
            post = $Posts.find(p => `/blog/${p.slug}`=== fixedPath )
            // console.log("current post", post);
        }
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
        <Header {attributes} ></Header>
    {:catch error}
    {/await} -->
    {#each tags as tag}
        {tag}
    {/each} <br>

    <Header {post} {tags} on:tag={getTag} />

    {post.creationDate} <br>
    {post.creationTime}
  
    
   
    <!-- blogpost layout -->
	<slot></slot>
</main>