<!-- script -->
<script>
    export let attributes = {};
    $: attributes = attributes;
</script>
<!-- html -->
<svelte:head>
    <!-- head content -->
</svelte:head>
<header>
    <h1>{attributes.title}</h1>
    <p>by: {attributes.author}</p>
    <span>Creation date: {attributes.creationDate} </span>
    
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