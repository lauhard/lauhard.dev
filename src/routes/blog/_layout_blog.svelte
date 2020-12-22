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
    let posts = [];
    $: posts = posts;

    function getTag(event) {
        let filteredPosts = utils.filterPostsByTag($Posts, event.detail.text);
        filteredPosts.filter = event.detail.text;
        $FilteredPosts = filteredPosts;
	}
    onMount (async () => {
        let fixedPath = $page.path
        if (fixedPath.charAt(fixedPath.length -1) === '/') {
            fixedPath = fixedPath.slice(0, -1);
        }
        if ($Posts.length == 0) {
            console.log("try fetch posts again...") 
            posts = await fetch(`/blog.json`).then(r => r.json());
            $Posts = posts;
            post = posts.find(p => `/blog/${p.slug}`=== fixedPath )
        } else {
            console.log("get posts from the store...")
            post = $Posts.find(p => `/blog/${p.slug}`=== fixedPath )
        }
    }) 

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		/* background-color: rgba(56, 107, 216, 0.85); */
		padding: 1em 0;
        margin: 0 auto;
        box-sizing: border-box;
	}
</style>


<main>
    <Header {post} {tags} on:tag={getTag} />  
    <!-- blogpost layout -->
	<slot></slot>
</main>