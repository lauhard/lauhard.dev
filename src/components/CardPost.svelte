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
        background-color: var(--main-background-color3);
        width: 250px;
        height: 250px;
        margin: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    a {
        text-decoration: none;
    }
</style>
<!-- style -->

