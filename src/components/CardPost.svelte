<!-- script -->
<script>
    export let post
</script>
<!-- script -->

<!-- html -->
<svelte:head>

</svelte:head>
{#if post.publish == true }
    <a rel="prefetch" href='/blog/{post.slug}' class="blogpost-card">
        <div>{post.title}</div> 
        <div>{post.author}</div>
        <div>{post.creationDate}</div>
    </a>
{/if}
<!-- html -->

<!-- style -->
<style>
    .blogpost-card {
        background-color: var(--card-background-hover);
        border-radius: 15px;
        width: 250px;
        height: 250px;
        margin: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		transition: all ease .3s;

    }
    .blogpost-card:hover {
        background-color: var(--card-background);
        color: white;
		transition: all ease .3s;
    }
    a {
        text-decoration: none;
    }
</style>
<!-- style -->

