<!-- script -->
<script>
    import { stores } from '@sapper/app';
    import { onMount, setContext } from 'svelte';
    const { page, preloading } = stores();
    import Image from '../../components/Image.svelte';
    import HeroOverlay from '../../components/HeroOverlay.svelte';
    import FilterButton from '../../components/FilterButton.svelte';
    import Posts from '../../store/posts';
    import Slug from '../../store/slug';
    import FilteredPosts from '../../store/filteredPosts';
    import utils from '../../helper/utils';

    export let tags = [];
    export let post = {};
    export let imageName;
    export let heroOverlayProps;
    console.log(heroOverlayProps)
    export let imageProps={
        width:"100%",
        height: "400px",
        objectFit: "cover",
        borderRadius: "20px"
    }
   

    let posts = [];
    $: posts = posts;
  
    if (typeof(heroOverlayProps) == 'undefined')
        heroOverlayProps = {};

    if (typeof(imageName) == 'undefined')
        imageName = ""; //TODO: set default image

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
<div class="background-svg" ></div>

<main>
   
    
    
    <div class="content">
        <header>
            <Image imageName="{imageName}" alt="as" desc="" {imageProps}></Image>
            <HeroOverlay {post} {heroOverlayProps}>
                {#each tags as tag}
                    <FilterButton  tag = "{tag}" on:tag>
                        <a  href='blog'>{tag}</a>
                    </FilterButton>
                {/each}
            </HeroOverlay>
        </header>
        <br>
        <!-- blogpost -->
        <slot></slot>
        <!-- blogpost -->
    </div>
    <aside class="left">
        <h1>test</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
    </aside> 
    <aside class="right">
        <h1>test</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
    </aside> 
</main>


<!-- html -->

<!-- style -->
<style>
    main {
        background-image: url("/images/svg-pattern.svg");
        background-size: 400px 400px;
        box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.25);
        /* max-width: 86em; */
        width:100%;
        margin: -200px auto;
		position: relative;
        background-color: hsla(0, 0%, 100%, 0.733);
        box-sizing: border-box;
        /* border: 1px solid hsla(0, 2%, 64%, 0.35); */
    }
    h1, p {
        margin:0;
        padding:0;
    }
    header{
        width: 100%;
        height: 400px;
        position: relative;
        margin: 0px auto;
    }
    aside {
        width: 25%;
        height: auto;
        top: 300px;
        position: fixed;
        padding: 2em;
        transition: top ease-in-out .8s;
    }
    .right {
        background: #000;
        right:10px;
    }
    .left {
        left:10px;
        background-color: aquamarine;
    }
    .background-svg{
        position: fixed;
        width: 100%;
        height: 100%; 
    }
    .content{
        padding: 120px 2em 0 2em; 
        background:gray; 
        overflow-x: auto;
        scroll-behavior: smooth;
        word-wrap: break-word;
        word-break: break-all;
        width: calc(50% - 40px);
        /* min-width: 400px; */
        margin: 0 auto;
        transition: all ease-in-out .2s;
    }
    @media (max-width: 1000px) {
		aside {
            position: relative;
            width:80%;
            margin: 10px auto;
            top:0;
           
            transition: all ease-in-out .8s;
            
            height: 200px;
        }
        .left{
            left:0px;
        }
        .right{
            right: 0px;
        }
        .content{
            width:80%; 
            transition: all ease-in-out .2s;
        }
	}
   
</style>
<!-- style -->
