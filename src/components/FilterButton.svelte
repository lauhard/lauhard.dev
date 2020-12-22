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
        background-color:#fefeff;
        transition: ease-out  0.3s all;
        color: #9733f5;
        font-size: 8pt;
        letter-spacing: .8pt;
        font-weight: normal;
        border: .5px solid #9733f5;

    }
    button:hover {
        /* background-color: crimson; */
        /* background-color: #9733f5; */
        background-color: #bc75ff;
       
        color: white;
        transition: ease-in 0.3s all;
    }
  
    
   
</style>