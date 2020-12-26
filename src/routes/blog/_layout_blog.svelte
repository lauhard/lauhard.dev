<!-- script -->
<script>
    import { stores } from '@sapper/app';
    import { onMount, setContext } from 'svelte';
    const { page, preloading } = stores();
    import Header from '../../components/Header.svelte';
    import Posts from '../../store/posts';
    import Slug from '../../store/slug';
    import FilteredPosts from '../../store/filteredPosts';
    import utils from '../../helper/utils';

    export let tags = [];
    export let post = {};
    export let imageName;
    console.log(imageName)
    if (typeof(imageName) == 'undefined')
        imageName = "";
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
        $Slug = post.slug;
    }) 
</script>
<!-- script -->

<!-- html -->
<div class="background-svg" />
<main>
    <Header {post} {tags} {imageName} on:tag={getTag} />  
    <div class="content">
        <!-- blogpost -->
        <slot></slot>
    </div>
</main>
<!-- html -->

<!-- style -->
<style>
    .background-svg{
        background-image: url("/images/svg-pattern.svg");
        background-size: 400px 400px;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    
    .content{
		padding: 2em;
    }

	main {
        box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.25);
        max-width: 56em;
        margin: 0 auto;
		position: relative;
        background-color: #ffffff59;
        box-sizing: border-box;
        border: 1px solid #a5a1a15b;
    }
   
</style>
<!-- style -->
