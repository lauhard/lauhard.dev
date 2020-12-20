<!-- script -->
<script>
    import FilterButton from './FilterButton.svelte';
    export let post = {};
    export let tags = [];
    console.log(post);
    $: post = post;
    $: tags = tags;
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
    {#each tags as tag}
        <FilterButton  tag = "{tag}" on:tag>
            <a  href='blog'>{tag}</a>
        </FilterButton>
    {/each}
    
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