<script>
    import { stores } from '@sapper/app';
    import { onMount } from 'svelte';
    const { page, preloading } = stores();
    import Header from '../../components/Header.svelte';

    let path = $page.path;
    export let attributes = {};
    export let tags = [];
    onMount (async () => {
        attributes = await fetch(`${path}.json`).then(r => r.json());
        tags = attributes.tags;
    }) 
    $: attributes  = attributes;
    $: tags  = tags;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: rgba(56, 107, 216, 0.85);
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main>
    {#each tags as tag}
        {tag}
    {/each}
    <Header {attributes} ></Header>
    <!-- blogpost layout -->
	<slot></slot>
</main>