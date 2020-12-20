<!-- script -->
<script>
    export let post = {};
    $: post = post;
</script>
<!-- html -->
<svelte:head>
    <!-- head content -->
</svelte:head>
<header>
    {#await post}
        <!-- attibutes is pending -->
    {:then post}
        <h1>{post.title}</h1>
        <p>by: {post.author}</p>
        <span>Creation date: {post.creationDate} </span>
    {:catch error}
        <!-- attibutes was rejected -->
    {/await}
    
    
</header>
<!-- css -->
<style>
    header{
        background-color: blueviolet;
        padding: 1em;
    }
    p {
        margin: 0;
        padding: 0;
    }
</style>