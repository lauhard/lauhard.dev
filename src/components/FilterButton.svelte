<script>
    // import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    // import Posts from '../store/posts'

    export let tag;

    const dispatch = createEventDispatcher();
    function returnTag() {
        dispatch('tag', {
            text: tag
        });
    }

</script>

<svelte:head>
    <!-- head content -->
</svelte:head>

<!-- html -->
<button class="close" on:click={ returnTag }>
	<slot></slot>
</button>

<!-- styl -->
<style>
    button{
        font-style: none;
        border-style: none;
        min-width: 60px;
        height: 23px;
        border-radius: 5em;
        text-decoration: none; 
        background-color:var(--filter-button-background);
        transition: ease-out  0.2s all;
        color:var(--filter-button-color);
        font-size: 9pt;
        letter-spacing: .8pt;
        font-weight: 500;
        border: .5px solid var(--filter-button-border);

    }
    button:hover {
        /* background-color: crimson; */
        /* background-color: #9733f5; */
        background-color: var(--filter-button-background-hover);
       
        color: var(--filter-button-color-hover);
        transition: ease-in 0.2s all;
    }
  
    
   
</style>