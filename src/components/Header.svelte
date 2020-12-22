<!-- script -->
<script>
    import FilterButton from './FilterButton.svelte';
    export let post = {};
    export let tags = [];
    $: post = post;
    $: tags = tags;
    
</script>
<!-- html -->
<svelte:head>
    <!-- head content -->
</svelte:head>
<header>
    <!-- {#await post} -->
        <!-- attibutes is pending -->
    <!-- {:then post} -->
    <h1>{post.title}</h1>
    <p>by <strong>{post.author}</strong></p><br>
    <p>📅 {post.creationDate}</p>
    {#if typeof(post.modificationDate) != 'undefined' && post.modificationDate != ''}
        <p>✏️ {post.modificationDate}</p>
    {/if}
    <p>🕝 ~ {post.readingTime} min. </p>
    <!-- {:catch error} -->
        <!-- attibutes was rejected -->
    <!-- {/await} -->
    {#each tags as tag}
        <FilterButton  tag = "{tag}" on:tag>
            <a  href='blog'>{tag}</a>
        </FilterButton>
    {/each}
    
</header>
<!-- css -->
<style>
    header{
        background-color: #adff2f;
        padding: 1em;
        margin-bottom: 20px;
    }
    p, h1 {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }

</style>