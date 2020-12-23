<!-- script -->
<script>
    import FilterButton from './FilterButton.svelte';
    import Image from './Image.svelte';
    export let post = {};
    export let tags = [];
    export let imageProps={
        width:"100%",
        height: "400px",
        objectFit: "cover"
    }
    $: post = post;
    $: tags = tags;
    
</script>
<!-- html -->
<svelte:head>
    <!-- head content -->
</svelte:head>
<header >
    <Image imageName="gitub.min.jpg" alt="as" desc="" {imageProps}></Image>
    <div class="info-box">
       
        <h1>{post.title}</h1>
        <p><strong>by {post.author}</strong></p><br>
        <span>📅 <strong>{post.creationDate}</strong></span><br>
        {#if typeof(post.modificationDate) != 'undefined' && post.modificationDate != ''}
            <span>✏️ {post.modificationDate}</span><br>
        {/if}
        <span>🕝 <strong>~{post.readingTime} min.</strong></span>
        <div style="margin-top:5px;">
            {#each tags as tag}
                <FilterButton  tag = "{tag}" on:tag>
                    <a  href='blog'>{tag}</a>
                </FilterButton>
            {/each}
        </div>
    </div>
</header>

<!-- css -->
<style>
    header{
        width: 100%;
        height: 400px;
        position: relative;
    }
    .info-box {
        position: absolute;
        background-color: #ffffff5e;
        padding: 1em;
        margin-bottom: 20px;
        border-radius: 5px;
        width: 70%;
        bottom: 0px;
        margin: 0;
        height: auto;
    }
    p, h1 {
        margin: 0;
        padding: 0;
        font-weight: normal;
        color:#2e2e2edc;
    }
    h1 {
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }

    @media (max-width: 530px) {
		.info-box {
            
            width: 100%;
           
        }
	}
</style>