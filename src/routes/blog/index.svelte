<script context="module">
	import { flip } from 'svelte/animate';
	import { quintIn, quintOut, quintInOut } from 'svelte/easing';
	import Posts from '../../store/posts';
	import FilteredPosts from '../../store/filteredPosts';
	import FilterButton from "../../components/FilterButton.svelte";
	import Capital from "../../components/Capital.svelte";
	import CardPost from "../../components/CardPost.svelte";
	import Underscore from "../../components/Underscore.svelte";
    import utils from '../../helper/utils';

	export async function preload(page) {
        let posts = await this.fetch(`blog.json`).then(r => r.json());
        return { posts };
	}
</script>
<script>
	export let posts = [];
	export let tags = [];
	export let filterInfo = "";
	$Posts = posts;
    tags = utils.getTags(posts);
    export let capitalProps = {
        size: "2.5em",
        color: "#a248f7e3" //main color
    }
 
	function getTag(event) {
        let filteredPosts= utils.filterPostsByTag($Posts, event.detail.text);
        filteredPosts.filter = event.detail.text;
		$FilteredPosts = filteredPosts;
		posts = $FilteredPosts
		filterInfo = posts.filter;
	}
	if ($FilteredPosts.length > 0) {
		posts = $FilteredPosts
		filterInfo = posts.filter;
	}
	
	function showAllPosts () {
        posts = $Posts
        $FilteredPosts = [];
        filterInfo = "";
    }
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>
    <div class="wrapper">
        <div class="posts-filter-info">
            <h1 on:click = {showAllPosts}>
                <Underscore content="Posts" />
            </h1>
            {#if filterInfo != ""}
                <div class="capital">
                    <Capital char = "#" content = "{filterInfo}" {capitalProps} />
                </div> 
            {/if}
        </div>

        <div class="tag-bar">
            {#each tags as tag}
                <div class="button-wrapper">
                    <FilterButton  tag = "{tag}" on:tag={getTag}>
                        <a class="btn" href = "/blog"> {tag} </a> 
                    </FilterButton>
                </div>
            {/each}
        </div>
        
        <div class="container">
            {#each posts as post (post.slug)}
                <div animate:flip="{{delay: 10, duration: 450, easing: quintInOut}}">
                    <CardPost {post}></CardPost>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    main{
        /* background-image: url("");
        background-size: 100%; */
    }
    .wrapper {
		position: relative;
		max-width: 56em;
		/* background-color: rgba(56, 107, 216, 0.85); */
		padding: 0em 1em 0em 1em;
        margin: 0 auto;
        box-sizing: border-box;
    }
   
    
    .posts-filter-info{
        display:flex;
        flex-direction:row;
        padding: 0 30px;
    }
    .posts-filter-info h1 {
        padding-left: 20px;
    }
    .posts-filter-info .capital {
        padding: 0;
        margin: 5px 0px 0 105px;
        position: absolute;
    }
    .tag-bar {
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
    }
    .button-wrapper {
        margin:5px;
    }
    .container {
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
</style>
