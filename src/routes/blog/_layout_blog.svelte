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
    import observe from '../../helper/intersectionObserver';

    export let tags = [];
    export let post = {};
    export let imageName;
    export let heroOverlayProps;
    export let intersect = '140pt';
    export let imageProps={
        width:"100%",
        height: "auto",
        objectFit: "contain",
        borderRadius: "20px 20px 0 0",
        position: "left",
        figureWith: "100%",
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

        observe("#intersector", (entry)=>{
			if (entry.isIntersecting) {
				let elements = document.getElementsByTagName("aside");
				for (const element of elements) {
                    element.classList.remove("aside-slide-up")
				}
			} else {
				let elements = document.getElementsByTagName("aside");
				for (const element of elements) {
                    element.classList.add("aside-slide-up")
				}
			}
		});
    }) 
</script>
<!-- script -->

<!-- html -->
<div class="background-svg"></div>
<div id="intersector" style = "height:1px; width:100%; top:{intersect}; position:absolute; "></div>
<div class="wrapper">
    <header>
        <Image imageName="{imageName}" alt="as" desc="" {imageProps}>
              <HeroOverlay {post} {heroOverlayProps}>
                {#each tags as tag}
                    <FilterButton  tag = "{tag}" on:tag>
                        <a  href='blog'>{tag}</a>
                    </FilterButton>
                {/each}
            </HeroOverlay>
        </Image>
    </header>
    <div class="content">
        <!-- blogpost -->
        <slot></slot>
        <!-- blogpost -->
    </div>
    <!-- <aside class="left aside-slide-up">
        <h1>test</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
    </aside>  -->
    <aside class="aside-right aside-slide-up">
        <!-- <div class="aside-right--box" id="about-me">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam ac</p>
        </div> -->
        <div class="aside-right--box" id="categories">
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
        </div>
        <div class="aside-right--box" id="subscribe">
            <h2>Subscribe</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
        </div>
        <div class="aside-right--box" id="follow">
            <h2>Follow</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste debitis expedita rerum ducimus veniam itaque, perferendis explicabo totam, ipsam accusantium mollitia modi dicta doloribus, delectus culpa similique. Soluta, odit.</p>
        </div>
    </aside> 
</div>
<!-- html -->

<!-- style -->
<style>
    .wrapper {
        width: 100%;
        margin-top: 70px;
        background: #e7e7ee;
    }
    header, .content{
        width: calc(50% - 2em);
        margin: 0px auto; 
        position: relative;
        transition: all ease .3s;
    }
    .content{
        padding: 2em; 
        background:rgb(248, 248, 248); 
        overflow-x: auto;
        scroll-behavior: smooth;
        word-wrap: break-word;
        margin-bottom: 80px;
        width: calc(50% - 2em);
        border: .5px solid hsla(0, 2%, 20%, 0.199);
        border-radius: 0 0 20px 20px;
        /** loose header
        * transform: translate(calc(50% + 2em), 0);
        */
        /* box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.25); */
    }
    .aside-right {
        width: 22%;
        height: auto;
        top: 320px;
        position: fixed;
        transition: top ease-in-out .3s;
        padding: 0 0em;
        margin: 0 2% 0 2%;
        right: 0px;
        
    }
    .aside-slide-up {
        top: 130px;
    }
    .aside-right--box {
        width: 100%;
        padding: 1.5em;
        margin-bottom: .3em;
        border: 0.5px solid rgba(170, 170, 170, 0.7);
    }
 
    .background-svg{
        /* background-image: url("/images/svg-pattern.svg"); */
		background-attachment: fixed;
        background-size: 400px 400px;
        position: fixed;
        width: 100%;
        top:50px;
        height: 100%; 
    }
    /* .left {
        left:10px;
    }
    .left {
        background-color: aquamarine;
    } */
     /* h1, p {
        margin:0;
        padding:0;
    } */
    h2{
        margin: 0 0 .5em 0;
    }
    @media (max-width: 1300px) {
        .content, header, .aside-right{
            width:70%; 
            margin-bottom: 0px; 
            transition: all ease .3s;
        }
        .left, .aside-right, .aside-slide-up{
            left:0px;
            right: 0px;
            top:0px;
        }
        .aside-right {
            position: relative;
            margin: .3em auto;
        }
    }
    @media (max-width: 700px) {   
        .wrapper {
            margin-top: 30px;
        }
        .content, header, .aside-right{
            width:90%; 
            margin: 0 auto;
        } 
        .aside-right {
            margin: .3em auto;
        }
    }
    @media (max-width: 500px) {
        .wrapper {
            margin-top: 70px;
        }
        .content, header, .aside-right{
            width:98%; 
        }
	}
   
</style>
<!-- style -->
